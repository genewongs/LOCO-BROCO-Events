import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useNotification} from "./NotificationProvider.jsx";

import Home from './Home.jsx';
import Attending from './Attending.jsx';
import Navbar from './Navbar.jsx';
import Splash from './Splash.jsx';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';

import moment from 'moment';
const { searchAPI } = require('../searchAPI.js');
const axios = require('axios');

export default function App() {
  const [eventsData, setEventsData] = useState([]);
  const [limit, setLimit] = useState(20);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [hasEvents, setHasEvents] = useState(true);
  const [locationGranted, setLocationGranted] = useState(true);
  const dispatch = useNotification();

  const handleNewNotification = (type, msg) => {
    dispatch({
      type: type,
      message: msg,
      title: "Successful Request"
    })
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocation, () => {setTimeout(setLocationGranted(false), 5000)});
    }

    if(longitude && latitude) {
      const location = `${latitude},${longitude}`
      axios.get('/api/events', {
        params: {
          latlong: location,
          size: '200'
        }
      })
        .then(response => {
          if(response.status === 200) {
            setEventsData(response.data._embedded.events);
            setLoaded(true);
          }
        })
        .catch(err => console.log(err))
    }
  }, [latitude]);

  function setLocation(pos) {
    setLongitude(pos.coords.longitude);
    setLatitude(pos.coords.latitude);
    setLocationGranted(true);
  }

  function searchEvents(event, query = '', city = '', state = '', date = '') {
    event.preventDefault();
    const dateFormat = moment(date).toISOString();
    const inputDate = `${dateFormat.split('T')[0]}T00:00:00Z`;
    axios.get('/api/events', {
      params: {
        keyword: query,
        city: city,
        stateCode: state,
        latlong: '',
        size: '200',
        startDateTime: inputDate,
      }
    })
      .then(result => {
        if(result.status === 200) {
          console.log(result.data)
          if(result.data.page.totalPages < 1) {
            console.log("no results")
            setHasEvents(false);
          } else {
            setHasEvents(true);
            setEventsData(result.data._embedded.events)
          }
        }
      })
      .catch(err => console.log(err));
  }

  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={
            <Home
              eventsData={eventsData}
              loaded={loaded}
              searchEvents={searchEvents}
              hasEvents={hasEvents}
              limit={limit}
              setLimit={setLimit}
              permissions={locationGranted}
              notification={handleNewNotification}
          />}/>
          <Route path='/Attending' exact element={
            <Attending
              notification={handleNewNotification}
              title={'Attending'}
              limit={limit}
             setLimit={setLimit} />} />
          <Route path='/InterestedEvents' exact element={
            <Attending
              notification={handleNewNotification}
              title={'Interested'}
              limit={limit}
              setLimit={setLimit} />} />
       </Routes>
      </Router>
    </div>
  );
}