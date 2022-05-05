import React, { useState, useEffect } from 'react';
import Splash from './Splash.jsx';
import AttendingItem from './AttendingItem.jsx';
import styled from 'styled-components';
const axios = require('axios');

const AttendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .eventImg {
    height: 200px;
    width: 320px;
  }
`;

const AttendingInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
  border-top: 1px solid gray;
`;


export default function Attending({ title, notification }){
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  },[title])

  function getEvents() {
    axios.get('/events')
    .then(result => {
      let filtered;
      if(title === 'Attending') {
        filtered = result.data.filter(x => x.attending)
      } else {
        filtered = result.data.filter(x => x.interested)
      }
      setEvents(filtered);
    })
    .catch(err => console.log(err))
  }

  function removeEvent(event) {
    axios.delete('/events', {data: event})
      .then(result => {
        if(result.status === 200) {
          getEvents();
        }
        console.log('Successfully updated database', result)
    })
      .catch(err => console.log(err))
  }

  return(
    <AttendingContainer>
      <Splash />
      <h2>{title}</h2>
      <AttendingInner>
          {events.map((event) => {
            return <AttendingItem
              key={event.eventId}
              title={title}
              event={event}
              removeEvent={removeEvent}
              notification={notification} />
          })}
      </AttendingInner>
    </AttendingContainer>
  )
}