import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import helper from '../helper.js';

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

  a:visited {
    color: white;
  }

  a:link {
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
      transition: all ease-in-out 0.15s;
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
      cursor: pointer;
      background-color: black;
      color: white;
      transition: all ease-in-out 0.1s;
    }
  }
`;

export default function AttendingItem({ title, event, removeEvent, notification }) {
  return(
    <EventItemStyled>
      <h2><a href={event.url} target="_blank">{event.title} </a> </h2> <br></br>

      <a href={event.url} target="_blank"><img className='eventImg' src={event.img}></img></a>

      <div>{`${event.address}`} <br></br>
       {`${event.city}, ${event.state}`}</div>
      {Boolean(event.price) ?
        <div className="event-info"> From: ${event.price} </div> :
        <div className="event-info"> Price: No Price Available </div>}

      <div className="event-info">Start Date: {moment(`${event.date}`).format('dddd, MMMM Do YYYY -  h:mm a')}</div>
      <ButtonContainer>
        {title === 'Interested' ? <button onClick={() => {
          helper.attendSwitch(event);
          removeEvent(event);
          notification("SUCCESS", "You Are Now Going To This Event!");
          }}> Going! </button> : null}
        <button onClick={() => {
          removeEvent(event)
          notification("ERROR", "Event Removed")
          }}>Remove Event</button>
      </ButtonContainer>

    </EventItemStyled>
  );
}