import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';

const EventItemStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  text-align: center;
  line-height: 1.5em;
  padding: 15px 10px;
  margin: 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.15s;
  a:link {
    color: white;
  }

  a:visited {
    color: white;
  }

  a:hover {
    color: #98c5ff;
  }

  .eventImg {
    margin-bottom: 20px;
    box-shadow: 1px 5px 8px #00000048;
    border-radius: 10px;
    transition: all ease-in-out 0.1s;

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
      transition: all ease-in-out 0.1s;
    }
  }

  .event-info {
    margin: 5px 0px;
  }

  &:hover {
    border-radius: 10px;
    color: #e6e6e6;
    background-color: #3a415184;
    transition: all ease-in-out 0.15s;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1em;
    text-shadow: 2px 2px #42507b;
    transition: all ease-in-out 0.1s;
  }

  h2:hover {
    text-decoration: underline;
    cursor: pointer;
    transition: all ease-in-out 0.1s;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  height: 30px;
  justify-content: space-evenly;
  margin: 10px 0px;

  button {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 20px;
    transition: all ease-in-out 0.1s;
    &:hover {
      background-color: black;
      color: white;
      transition: all ease-in-out 0.1s;
    }
  }
`;

export default function EventsItem({ event }) {
  function generateLocation(eventData) {
    let state, city, country;

    eventData.city ? city = eventData?.city.name : '';
    eventData.state ?  state = eventData?.state.name : '';
    eventData.country ? country = eventData?.country.name : '';

    return(
      Boolean(eventData.state) ?
      <div> {city}, {state} <br></br> {country} </div> :
      <div> {city} - {country} </div>
      )
  }

  console.log(event)

  function attendEvent(event){
    axios.post('/events', {
      eventId: event.id,
      title: event.name,
      date: event.dates.start.localDate || '',
      eventTime: event.dates.start.localTime || '',
      img: event.images[3].url ||  event.images[1].url,
      price: event.priceRanges?.[0].min,
      address: event._embedded.venues?.[0].address.line1 || '',
      state: event._embedded.venues?.[0]?.state?.name || '',
      city: event._embedded.venues?.[0].city.name || '',
      country: event._embedded.venues?.[0].country.name || '',
      presaleStartDate: event.sales.public.startDateTime || '',
      presaleEndDate: event.sales.public.endDateTime || '',
      url: event.url || '',
      seatmap: event.seatmap?.staticUrl || '',
      longitude: event._embedded.venues?.[0].location.longitude || '',
      latitude: event._embedded.venues?.[0].location.latitude || '',
      attending: true
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  function handleInterest(event) {
    axios.post('/events', {
      eventId: event.id,
      title: event.name,
      date: event.dates.start.localDate || '',
      eventTime: event.dates.start.localTime || '',
      img: event.images[3].url ||  event.images[1].url,
      price: event.priceRanges?.[0].min,
      address: event._embedded.venues?.[0].address.line1 || '',
      state: event._embedded.venues?.[0]?.state?.name || '',
      city: event._embedded.venues?.[0].city.name || '',
      country: event._embedded.venues?.[0].country.name || '',
      presaleStartDate: event.sales.public.startDateTime || '',
      presaleEndDate: event.sales.public.endDateTime || '',
      url: event.url || '',
      seatmap: event.seatmap?.staticUrl || '',
      longitude: event._embedded.venues?.[0].location.longitude || '',
      latitude: event._embedded.venues?.[0].location.latitude || '',
      interested: true
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return(
    <EventItemStyled>
      <h2><a href={event.url} target='_blank'>{event.name}</a> </h2> <br></br>

      <a href={event.url} target='_blank'><img className='eventImg' src={event.images[3].url}></img></a>

      {event._embedded?.venues?.[0] ? generateLocation(event._embedded?.venues[0]) : null }

      {Boolean(event.priceRanges) ?
        <div className="event-info"> Price: ${event.priceRanges[0].min} - ${event.priceRanges[0].max} {event.priceRanges[0].currency} </div> :
        <div className="event-info"> Price: No Price Available </div>}

      <div className="event-info">Sales Start: {moment(`${event.sales.public.startDateTime}`).format('dddd, MMMM Do YYYY -  h:mm a')}</div>

      <div className="event-info">Sales End: {moment(`${event.sales.public.endDateTime}`).format('dddd, MMMM Do YYYY - h:mm a')}</div>
      {Boolean(event.ageRestrictions) ? <div className="event-info"> Age Restriction: {event.ageRestrictions.legalAgeEnforced ? '18+' : 'None'} </div> : <div className="event-info">Age Restriction: None </div>}

      <ButtonContainer>
        <button onClick={() => {attendEvent(event)}}>Going!</button>
        <button onClick={() => {handleInterest(event)}}>Interested</button>
      </ButtonContainer>

    </EventItemStyled>
  );
}