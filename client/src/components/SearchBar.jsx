import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import "react-date-picker/dist/DatePicker.css";
import { googleAPI } from '../googleAPI.js';

const SearchBarStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;

  .searchInput {
    width: 25vh;
    height: 30px;
    border:none;
    margin-right: 10px;
  }

  .LocationInput {
    width: 15vh;
    height: 30px;
    margin-right: 10px;
    border:none;
  }

  .stateInput {
    width: 15vh;
    height: 30px;
    margin-right: 10px;
    border:none;
  }

  .DateInput {
    width: 20vh
    height: 30px;
    border:none;
  }

  .react-date-picker__wrapper{
    position: relative;
    top: 1px;
    background-color: white;
    height: 31px;
    border:none;
    min-width: 20vh;
  }

  .react-date-picker__inputGroup__input{
    color:black;
  }

  .react-date-picker__inputGroup{
    color: black;
  }
`

export default function SearchBar({ searchEvents }) {
  const [dateValue, setDateValue] = useState(new Date());
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const stateMap = {
    alaska: "AK",
    alabama: "AL",
    arkansas: "AR",
    arizona: "AZ",
    california: "CA",
    colorado: "CO",
    connecticut: "CT",
    delaware: "DE",
    florida: "FL",
    georgia: "GA",
    guam: "GU",
    hawaii: "HI",
    iowa: "IA",
    idaho: "ID",
    illinois: "IL",
    indiana: "IN",
    kansas: "KS",
    kentucky: "KY",
    louisiana: "LA",
    massachusetts: "MA",
    maryland: "MD",
    maine: "ME",
    michigan: "MI",
    minnesota: "MN",
    missouri: "MO",
    mississippi: "MS",
    montana: "MT",
    'north carolina': "NC",
    'north dakota': "ND",
    nebraska: "NE",
    'new hampshire': "NH",
    'new jersey': "NJ",
    'new mexico': "NM",
    nevada: "NV",
    'new york': "NY",
    ohio: "OH",
    oklahoma: "OK",
    oregon: "OR",
    pennsylvania: "PA",
    'puerto rico': "PR",
    'rhode island': "RI",
    'south carolina': "SC",
    'south dakota': "SD",
    tennessee: "TN",
    texas: "TX",
    utah: "UT",
    virginia: "VA",
    'virgin islands': "VI",
    vermont: "VT",
    washington: "WA",
    wisconsin: "WI",
    'west virginia': "WV",
    wyoming: "WY"
  }

  function handleInput(e) {
    const target = e.target.name;
    if(target === 'searchQuery') {
      setQuery(e.target.value);
    }
    if(target === 'city') {
      setCity(e.target.value);
    }
    if(target === 'state') {
      setState(e.target.value.toLowerCase());
    }
  }

  return(
    <SearchBarStyled>
      <form onSubmit={(event) => {
        searchEvents(event, query, city, stateMap[state], dateValue);
        setQuery('');
        setState('');
        setCity('');
      }}>
        <input
          value={query}
          onChange={(e) => {handleInput(e)}}
          type="text"
          name='searchQuery'
          className='searchInput'
          placeholder="Search for an event..."></input>

        <input
          type="text"
          value={city}
          onChange={(e) => {handleInput(e)}}
          name='city'
          className='LocationInput'
          placeholder="Enter City..."></input>

        <input
          type="text"
          value={state}
          onChange={(e) => {handleInput(e)}}
          name='state'
          className='stateInput'
          placeholder="Enter State..."></input>

        <DatePicker className='datePicker' value={dateValue} onChange={(date) => {setDateValue(date)}} format='MM/dd/yyyy' />
        <button style={{display: 'none'}}></button>
      </form>
    </SearchBarStyled>
  )
}