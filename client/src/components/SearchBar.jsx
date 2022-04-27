import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import "react-date-picker/dist/DatePicker.css";

const SearchBarStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;

  .searchInput {
    width: 45%;
    height: 30px;
    border:none;
    margin-right: 10px;
  }

  .LocationInput {
    width: 10%;
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

export default function SearchBar() {
  const [dateValue, setDateValue] = useState(new Date());

  console.log(dateValue)

  return(
    <SearchBarStyled>
      <input type="text" className='searchInput' placeholder="Search for an event..."></input>
      <input type="text" className='LocationInput' placeholder="Location"></input>
      <DatePicker className='datePicker' value={dateValue} onChange={(date) => {setDateValue(date)}} format='MM/dd/yyyy' />
    </SearchBarStyled>
  )
}