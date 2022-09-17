import React from 'react'
import Race from '../components/Race'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TitleContainer = styled.div`
  background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
  
  background-attachment: center;
  background-position: 50% 35%;
  background-size: 100vw;
  h2 {
    text-align: center;

  }
`
const Button = styled.button`
  opacity: 0.8;
  background-color: #0f3153;

  border-radius: 10px;
  font-weight: 700;
  color: lightblue;
`
const RacePage = ({ race, updateRaceState }) => {
  return (
    // <div>
      <TitleContainer>
        <Navbar />
        <h2>RACES</h2>
        <Link to='/NewRaces'>
          <Button>Create New Race</Button>
        </Link>
      <Race race={race} updateRaceState={updateRaceState} />
      </TitleContainer>
      // </div>
  )
}

export default RacePage