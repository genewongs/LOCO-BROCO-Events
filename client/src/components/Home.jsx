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

export default function Home({ eventsData, loaded, searchEvents, hasEvents, limit, setLimit, permissions, notification }) {
  const [page, setPage] = useState('events');

  return(
    <div>
      <Splash />
      <SearchBar searchEvents={searchEvents} />
      {loaded ?
        <Events events={eventsData} hasEvents={hasEvents} limit={limit} setLimit={setLimit} notification={notification} />
        :
        <Loader>
        {permissions ?
          <div>
            <img className="loader" src="./assets/loading.gif"></img>
            <div> Loading events near you... </div>
          </div> :
          <div> Please allow geolcation services to find events near you or start searching now! </div>
        }
        </Loader>
      }
    </div>
  )
}