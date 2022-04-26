import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const EventItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  padding: 0px 10px;
  margin: 10px 20px;
  border: 1px solid gray;
  border-radius:10px;
`

export default function EventsItem({ event }) {
  return(
    <EventItemStyled>
      <h2>{event.name}</h2> <br></br>
      <img className='eventImg' src={event.images[3].url}></img>
      {Boolean(event.priceRanges) ?
        <p> Price: ${event.priceRanges[0].min} - ${event.priceRanges[0].max} {event.priceRanges[0].currency} </p> :
        <p> Price: No Price Available </p>}
      <p>Sales Start: {moment(`${event.sales.public.startDateTime}`).format('dddd, MMMM Do YYYY -  h:mm a')}</p>
      <p>Sales End: {moment(`${event.sales.public.endDateTime}`).format('dddd, MMMM Do YYYY - h:mm a')}</p>
    </EventItemStyled>
  );
}