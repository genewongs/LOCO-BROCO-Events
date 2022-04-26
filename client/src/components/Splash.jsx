import React from 'react';
import styled from 'styled-components';
// import Navbar from './Navbar.jsx';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./assets/dbsplash.png');
  background-position: 30% 30%;
  background-size: cover;
  height: 400px;
  width: 100%;
  opacity: 1;
`;

const LogoStyled = styled.div`
  background-image: url('./assets/logo.png');
  background-repeat: no-repeat;
  height: 130px;
  width: 880px;
`

export default function Splash() {
  return(
    <StyledHeader>
      <LogoStyled />
    </StyledHeader>
  )
}