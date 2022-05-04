import React from 'react';
import EventsItem from './EventsItem'
import styled from 'styled-components';

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .eventImg {
    height: 200px;
    width: 320px;
  }
`;

const EventsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
  border: 1px solid gray;
`;


export default function Events({ events, hasEvents }){
  console.log('deeez' , events)

  return(
    <EventsContainer>
      <EventsInner>
        {hasEvents ?
          events.map((event) => {
            return <EventsItem event={event} />
          })
          :
          <div>
            <h2> Your Search Has No Results, Please Try Another! </h2>
          </div>
        }
      </EventsInner>
    </EventsContainer>
  )
}