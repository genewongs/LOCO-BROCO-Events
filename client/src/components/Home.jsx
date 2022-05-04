import React, { useState, useEffect } from 'react';
import Splash from './Splash.jsx';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';
import sampleData from '../sampleData.js';
import styled from 'styled-components';

const { searchAPI } = require('../searchAPI.js');
const axios = require('axios');

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`

export default function Home({ eventsData, loaded, searchEvents, hasEvents }) {
  return(
    <div>
      <Splash />
      <SearchBar searchEvents={searchEvents} />
      {loaded ?
        <Events events={eventsData} hasEvents={hasEvents} />
        :
        <Loader>
          <img className="loader" src="./assets/loading.gif"></img> <br></br>
          Please allow geolocation services to find events near you..
        </Loader>
      }
      <button onClick={searchAPI}> Click </button>
    </div>
  )
}