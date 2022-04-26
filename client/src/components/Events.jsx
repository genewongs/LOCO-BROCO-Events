import React from 'react';
import EventsItem from './EventsItem'
import styled from 'styled-components';

const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  .eventImg {
    height: 200px;
    width: 320px;
  }
`


export default function Events({ events }){
  console.log('deeez' , events)

  return(
    <EventsContainer>
      {events.map((event) => {
        return <EventsItem event={event} />
      })}
    </EventsContainer>
  )
}