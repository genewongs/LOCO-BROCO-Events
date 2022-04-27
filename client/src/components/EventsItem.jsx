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
  border: 1px solid rgba(0, 0, 0, 0);

  &:hover {
    border: 1px solid lightgray;
    border-radius: 10px;
  }
`

export default function EventsItem({ event }) {

  function generateLocation(eventData) {

    let state, city, country;

    eventData.city ? city = eventData.city.name : '';
    eventData.state ?  state = eventData.state.name : '';
    eventData.country ? country = eventData.country.name : '';

    return(
      Boolean(eventData.state) ?
      <div> {city}, {state} - {country} </div> :
      <div> {city} - {country} </div>
      )
  }

  console.log(event._embedded.venues[0])
  return(
    <EventItemStyled>
      <h2>{event.name}</h2> <br></br>

      <img className='eventImg' src={event.images[3].url}></img>

      {/* <div>{event._embedded.venues[0].city.name}, {event._embedded.venues[0].state.name}</div> */}

      {generateLocation(event._embedded.venues[0])}


      {Boolean(event.priceRanges) ?
        <div> Price: ${event.priceRanges[0].min} - ${event.priceRanges[0].max} {event.priceRanges[0].currency} </div> :
        <div> Price: No Price Available </div>}

      <div>Sales Start: {moment(`${event.sales.public.startDateTime}`).format('dddd, MMMM Do YYYY -  h:mm a')}</div>

      <div>Sales End: {moment(`${event.sales.public.endDateTime}`).format('dddd, MMMM Do YYYY - h:mm a')}</div>
      {Boolean(event.ageRestrictions) ? <div> Age Restriction: {event.ageRestrictions.legalAgeEnforced ? '18+' : 'None'} </div> : <div>Age Restriction: None </div>}

    </EventItemStyled>
  );
}