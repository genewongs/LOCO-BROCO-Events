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
    width: 70vh;
    height: 30px;
    border:none;
    margin-right: 10px;
  }

  .LocationInput {
    width: 35vh;
    height: 30px;
    margin-right: 10px;
    border:none;
  }

  .DateInput {
    width: 10%;
    height: 30px;
    border:none;
  }

  .react-date-picker__wrapper{
    background-color: white;
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
  const [location, setLocation] = useState('');

  function handleInput(e) {
    const target = e.target.name;
    if(target === 'searchQuery') {
      setQuery(e.target.value);
    }
    if(target === 'location') {
      setLocation(e.target.value);
    }

    console.log(query, location, dateValue)
  }

  return(
    <SearchBarStyled>
      <form onSubmit={(event) => {
        console.log(query, location, dateValue);
        searchEvents(event, query, location, dateValue);
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
          value={location}
          onChange={(e) => {handleInput(e)}}
          name='location'
          className='LocationInput'
          placeholder="Location"></input>

        <DatePicker className='datePicker' value={dateValue} onChange={(date) => {setDateValue(date)}} format='MM/dd/yyyy' />
        <button></button>
      </form>
    </SearchBarStyled>
  )
}