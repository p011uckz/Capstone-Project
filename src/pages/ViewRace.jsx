import React, { useState, useEffect }from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'timeago.js'
import Navbar from '../components/Navbar'
import axios from 'axios'

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
const RaceContainer = styled.div`
  
  background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
  background-attachment: center;
  background-position: 50% 50%;
  background-size: 200vw;
  border-radius: 20px;
  img {
    width: 300px;
    border-radius: inherit;
    padding: 10px;
  }
  .card {
    padding: 10px;
    font-weight: 700;
  }
  p{
    margin-left: 30px;
  }
`


const ViewRace = ({ updateRaceState, race }) => {

    const { id } = useParams()
    
    const [ races, setRace ] = useState()

    useEffect(()=> {
        fetch(`http://https://ccp-backend.vercel.app/race/${id}`)
        .then(res => res.json())
        .then(data => setRace(data))
    }, [])

    const deleteRace = (id) => {
    axios.delete(`http://https://ccp-backend.vercel.app/race/${id}`)
    .then(res => {
      console.log(res)
      updateRaceState(id)
    })
  }

  return (
    <TitleContainer>
        <Navbar/>
        <RaceContainer key={races?._id}>
            <div className='card'>
            
                  <h1> {races?.name} </h1>
                  
              <h4> {races?.racialLore}</h4>
              <h4> Race Points: </h4>
              <p>{races?.racePoints} </p>
              <h4> Srength Score Modifier: </h4>
              <p>{races?.scoreModifierSTR} </p>
              <h4> Decterity Score Modifier:</h4>
              <p>{races?.scoreModifierDex} </p>
              <h4> Constitution Score Modifier:</h4>
              <p> {races?.scoreModifierCon} </p>
              <h4> Intelligence Score Modifier:</h4>
              <p> {races?.scoreModifierInt} </p>
              <h4> Wisdom Score Modifier:</h4>
              <p>{races?.scoreModifierWis} </p>
              <h4> Charisma Score Modifier:</h4>
              <p> {races?.scoreModifierCha} </p>
              <h4> Racial Types And/Or Subtypes: </h4>
              <p>{races?.type} </p>
              <h4> Size: </h4>
              <p> {races?.size} </p>
              <h4> Base Speeds: </h4>
              <p>{races?.baseSpeeds} </p>
              <h4> Languages: </h4>
              <p>{races?.languages} </p>
              <h4>Racial Immunities:</h4>
              <p>{races?.racialImmunities} </p>
              <h4>Spell-Like Abilities:</h4>
              <p>{races?.spellLikeAbilities} </p>
              <h4>Darkvision And Distance:</h4>
              <p>{races?.darkvision} </p>
              <p>{races?.darkvisionDistance} ft</p>
              <h4>LowLight Vision and Distance:</h4>
              <p>{races?.lowLightVision} </p>              
              <p>{races?.lowLightVisionDistance} </p>
              <h4>Other Racial Abilities:</h4>
              <p>{races?.otherRacialAbility1} </p>
              <p>{races?.otherRacialAbility2} </p>
              <p>{races?.otherRacialAbility3} </p>
              <p>{races?.otherRacialAbility4} </p>
              <p>{races?.otherRacialAbility5} </p>
              <h4>Defensive Traits:</h4>
              <p>{races?.defensiveTraits} </p>
              <h4>Offensive Traits:</h4>
              <p>{races?.offensiveTraits} </p>
              <h4>Feat and Skill Traits:</h4>
              <p>{races?.featAndSkillTraits} </p>
              <h4>Movement Traits:</h4>
              <p>{races?.movementTraits} </p>
              <h4>Sense Traits:</h4>
              <p>{races?.senseTraits} </p>
              <h4>Alternate Traits:</h4>
              <p>{races?.alternateTrait1} </p>
              <p>{races?.alternateTrait2} </p>
              <p>{races?.alternateTrait3} </p>
              <p>{races?.alternateTrait4} </p>
              <p>{races?.alternateTrait5} </p>
              <p>{races?.alternateTrait6} </p>
              <p>{races?.alternateTrait7} </p>
              <p>{races?.alternateTrait8} </p>
              <h4>Racial Feats:</h4>
              <p>{races?.racialFeats} </p>
              <h4>Racial Items:</h4>
              <p>{races?.racialItems} </p>
              <h4>Favored Class:</h4>
              <p>{races?.favoredClass} </p>
              <h4>Racial Class Archetypes And Bloodlines:</h4>
              <p>{races?.racialArchetypesandBloodlines} </p>
              <h4>Formula for Random Starting Ages:</h4>
              <p>Adulthood: {races?.randomStartingAgeAdulthood} </p>
              <p>Intuitive: {races?.randomStartingAgeIntuitive} </p>
              <p>Self Taught: {races?.randomStartingAgeSelfTaught} </p>
              <p>Trained:{races?.randomStartingAgeTrained} </p>
              <h4>Random Height and Weight Generation: Heights:</h4>              
              <p>Male:{races?.randomHeightMale} </p>
              <p>Female:{races?.randomHeightFemale} </p>
              <h4>Weights:</h4>
              <p>Male:{races?.randomWeightMale} </p>
              <p>Female:{races?.randomWeightFemale} </p>              
              <h4>Other Description Notes:</h4>
              <p>{races?.otherDescriptionNotes} </p>
              
              <p> Source: {races?.source} </p>
              <h4>Notes:</h4>
              <p>{races?.notes} </p>
            </div>
            <img src={races?.image} alt={races?.name} />
              <span className='raceDate'><h4>Created:</h4> {format(races?.createdAt)}</span>
            <Button onClick={() => deleteRace(races?._id)}>Delete me?</Button>
            <Link to={`/Race/edit/${races?._id}`}><Button>Edit Race</Button></Link>
          </RaceContainer>
    </TitleContainer>
  )
}

export default ViewRace