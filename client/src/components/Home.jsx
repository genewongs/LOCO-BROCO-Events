import React, { useState, useEffect } from 'react';
import Splash from './Splash.jsx';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';
import sampleData from '../sampleData.js';

const { searchAPI } = require('../searchAPI.js');
const axios = require('axios');

export default function Home() {
  const [eventsData, setEventsData] = useState([]);

  // useEffect(() => {
  //   searchAPI()
  //     .then(response => {
  //       if(response.status === 200) {
  //         console.log('API DATA', response.data._embedded.events)
  //         setEventsData(response.data._embedded.events);
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }, []);

  return(
    <div>
      <Splash />
      <SearchBar />
      <Events events={sampleData} />
      <button onClick={searchAPI}> Click </button>
    </div>
  )
}