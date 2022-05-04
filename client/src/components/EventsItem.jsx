import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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
  transition: all ease-in-out 0.1s;

  .eventImg {
    margin-bottom: 20px;
    box-shadow: 1px 5px 8px #00000048;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  .event-info {
    margin: 5px 0px;
  }

  &:hover {
    border-radius: 10px;
    color: #e6e6e6;
    background-color: #3a415184;
    transition: all ease-in-out 0.1s;
  }

  h2 {
    margin: 0;
    padding: 0;
    text-shadow: 2px 2px #9e1874;
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
    width: 100px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export default function EventsItem({ event }) {

  function generateLocation(eventData) {
    let state, city, country;

    eventData.city ? city = eventData.city.name : '';
    eventData.state ?  state = eventData.state.name : '';
    eventData.country ? country = eventData.country.name : '';

    return(
      Boolean(eventData.state) ?
      <div> {city}, {state} <br></br> {country} </div> :
      <div> {city} - {country} </div>
      )
  }

  console.log('event info', event._embedded.venues)
  return(
    <EventItemStyled>
      <h2>{event.name}</h2> <br></br>

      <img className='eventImg' src={event.images[3].url}></img>

      {generateLocation(event._embedded.venues[0])}

      {Boolean(event.priceRanges) ?
        <div className="event-info"> Price: ${event.priceRanges[0].min} - ${event.priceRanges[0].max} {event.priceRanges[0].currency} </div> :
        <div className="event-info"> Price: No Price Available </div>}

      <div className="event-info">Sales Start: {moment(`${event.sales.public.startDateTime}`).format('dddd, MMMM Do YYYY -  h:mm a')}</div>

      <div className="event-info">Sales End: {moment(`${event.sales.public.endDateTime}`).format('dddd, MMMM Do YYYY - h:mm a')}</div>
      {Boolean(event.ageRestrictions) ? <div className="event-info"> Age Restriction: {event.ageRestrictions.legalAgeEnforced ? '18+' : 'None'} </div> : <div className="event-info">Age Restriction: None </div>}

      <ButtonContainer>
        <button>Going!</button>
        <button>Interested</button>
      </ButtonContainer>

    </EventItemStyled>
  );
}