import React, { useState } from 'react';
import Splash from './Splash.jsx';
import SearchBar from './SearchBar.jsx';
import Events from './Events.jsx';
import sampleData from '../sampleData.js';
import styled from 'styled-components';

const { searchAPI } = require('../searchAPI.js');
const axios = require('axios');

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  }
`

export default function Home({ eventsData, loaded, searchEvents, hasEvents, limit, setLimit }) {
  const [page, setPage] = useState('events');

  function renderPage(input = 'events') {
    if(input === 'events') {
      return <Events events={eventsData} hasEvents={hasEvents} limit={limit} setLimit={setLimit} />
    }
  }

  return(
    <div>
      <Splash />
      <SearchBar searchEvents={searchEvents} />
      {loaded ?
        renderPage()
        :
        <Loader>
          <img className="loader" src="./assets/loading.gif"></img>
          <div>
            Please allow geolocation services to find events near you!
          </div>
        </Loader>
      }
    </div>
  )
}