import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Splash from './Splash.jsx';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';
import sampleData from '../sampleData.js';
import moment from 'moment';

const { searchAPI } = require('../searchAPI.js');
const axios = require('axios');

export default function App() {
  const [eventsData, setEventsData] = useState([]);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [hasEvents, setHasEvents] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocation);
    }

    if(longitude && latitude) {
      const location = `${latitude},${longitude}`
      searchAPI('','','',location)
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
  }

  function searchEvents(event, query = '', city = '', date = '') {
    event.preventDefault();
    const dateFormat = moment(date).toISOString();
    const inputDate = `${dateFormat.split('T')[0]}T00:00:00Z`
    axios.get('/api/events', {
      params: {
        keyword: query,
        city: city,
        latlong: '',
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
          />}/>
       </Routes>
      </Router>
    </div>
  );
}