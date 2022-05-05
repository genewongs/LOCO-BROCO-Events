import React from 'react';
import EventsItem from './EventsItem'
import styled from 'styled-components';

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;

  .eventImg {
    height: 200px;
    width: 320px;
  }

  .seeMore {
    padding: 50px 0px;
    &:hover {
      cursor: pointer;
      transform: scale(1.10);
    }
`;

const EventsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
  border-top: 1px solid gray;
`;


export default function Events({ events, hasEvents, limit, setLimit }){
  const maxLimit = events.length;
  return(
    <EventsContainer>
      <EventsInner>
        {hasEvents ?
          events.map((event, index) => {
            return index < limit ? (<EventsItem event={event} />) : null
          })
          :
          <div>
            <h2> Your Search Has No Results, Please Try Another! </h2>
          </div>
        }
      </EventsInner>
      {limit >= maxLimit ? null :
      <div className="seeMore" onClick={() => setLimit((prevLimit) => prevLimit+20)}> Load More... </div>
      }
    </EventsContainer>
  )
}