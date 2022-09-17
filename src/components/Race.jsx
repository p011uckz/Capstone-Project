import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

const Button = styled.button`
  opacity: 0.8;
  background-color: #0f3153;

  border-radius: 10px;
  font-weight: 700;
  color: lightblue;
`

const Race = ({ race, updateRaceState }) => {

  const deleteRace = (id) => {
    axios.delete(`http://localhost:3001/race/${id}`)
    .then(res => {
      console.log(res)
      updateRaceState(id)
    })
  }

  return (
    <div>
      { race.map( race => {
        return (
          <RaceContainer key={race._id}>
            <div className='card'>
              <h1> {race.name} </h1>
                <Link to={`/Races/${race._id}`}>
                  <Button>
                    <h6>click for more details</h6>
                  </Button>
                </Link>
              <h4> {race.racialLore}</h4>
              <h4> Race Points: </h4>
              <p>{race.racePoints} </p>
              {/* <h4> Srength Score Modifier: </h4> */}
              {/* <p>{race.scoreModifierSTR} </p> */}
              {/* <h4> Decterity Score Modifier:</h4> */}
              {/* <p>{race.scoreModifierDex} </p> */}
              {/* <h4> Constitution Score Modifier:</h4> */}
              {/* <p> {race.scoreModifierCon} </p> */}
              {/* <h4> Intelligence Score Modifier:</h4> */}
              {/* <p> {race.scoreModifierInt} </p> */}
              {/* <h4> Wisdom Score Modifier:</h4> */}
              {/* <p>{race.scoreModifierWis} </p> */}
              {/* <h4> Charisma Score Modifier:</h4> */}
              {/* <p> {race.scoreModifierCha} </p> */}
              <h4> Racial Types And/Or Subtypes: </h4>
              <p>{race.type} </p>
              {/* <h4> Size: </h4>
              <p> {race.size} </p> */}
              {/* <h4> Base Speeds: </h4> */}
              {/* <p>{race.baseSpeeds} </p> */}
              {/* <h4> Languages: </h4> */}
              {/* <p>{race.languages} </p> */}
              {/* <h4>Racial Immunities:</h4> */}
              {/* <p>{race.racialImmunities} </p> */}
              {/* <h4>Spell-Like Abilities:</h4> */}
              {/* <p>{race.spellLikeAbilities} </p> */}
              {/* <h4>Darkvision And Distance:</h4> */}
              {/* <p>{race.darkvision} </p> */}
              {/* <p>{race.darkvisionDistance} ft</p> */}
              {/* <h4>LowLight Vision and Distance:</h4> */}
              {/* <p>{race.lowLightVision} </p>               */}
              {/* <p>{race.lowLightVisionDistance} </p> */}
              {/* <h4>Other Racial Abilities:</h4> */}
              {/* <p>{race.otherRacialAbility1} </p> */}
              {/* <p>{race.otherRacialAbility2} </p> */}
              {/* <p>{race.otherRacialAbility3} </p> */}
              {/* <p>{race.otherRacialAbility4} </p> */}
              {/* <p>{race.otherRacialAbility5} </p> */}
              {/* <h4>Defensive Traits:</h4> */}
              {/* <p>{race.defensiveTraits} </p> */}
              {/* <h4>Offensive Traits:</h4> */}
              {/* <p>{race.offensiveTraits} </p> */}
              {/* <h4>Feat and Skill Traits:</h4> */}
              {/* <p>{race.featAndSkillTraits} </p> */}
              {/* <h4>Movement Traits:</h4> */}
              {/* <p>{race.movementTraits} </p> */}
              {/* <h4>Sense Traits:</h4> */}
              {/* <p>{race.senseTraits} </p> */}
              {/* <h4>Alternate Traits:</h4> */}
              {/* <p>{race.alternateTrait1} </p> */}
              {/* <p>{race.alternateTrait2} </p> */}
              {/* <p>{race.alternateTrait3} </p> */}
              {/* <p>{race.alternateTrait4} </p> */}
              {/* <p>{race.alternateTrait5} </p> */}
              {/* <p>{race.alternateTrait6} </p> */}
              {/* <p>{race.alternateTrait7} </p> */}
              {/* <p>{race.alternateTrait8} </p> */}
              {/* <h4>Racial Feats:</h4> */}
              {/* <p>{race.racialFeats} </p> */}
              {/* <h4>Racial Items:</h4> */}
              {/* <p>{race.racialItems} </p> */}
              {/* <h4>Favored Class:</h4> */}
              {/* <p>{race.favoredClass} </p> */}
              {/* <h4>Racial Class Archetypes And Bloodlines:</h4> */}
              {/* <p>{race.racialArchetypesandBloodlines} </p> */}
              {/* <h4>Formula for Random Starting Ages:</h4> */}
              {/* <p>Adulthood: {race.randomStartingAgeAdulthood} </p> */}
              {/* <p>Intuitive: {race.randomStartingAgeIntuitive} </p> */}
              {/* <p>Self Taught: {race.randomStartingAgeSelfTaught} </p> */}
              {/* <p>Trained:{race.randomStartingAgeTrained} </p> */}
              {/* <h4>Random Height and Weight Generation: Heights:</h4>               */}
              {/* <p>Male:{race.randomHeightMale} </p> */}
              {/* <p>Female:{race.randomHeightFemale} </p> */}
              {/* <h4>Weights:</h4> */}
              {/* <p>Male:{race.randomWeightMale} </p> */}
              {/* <p>Female:{race.randomWeightFemale} </p>               */}
              <h4>Other Description Notes:</h4>
              <p>{race.otherDescriptionNotes} </p>
              
              <h4> Source: &emsp; {race.source} </h4>
              <h4>Notes:</h4>
              <p>{race.notes} </p>
            </div>
            <img src={race.image} alt={race.name} />
              <span className='raceDate'><h4>Created:</h4> {format(race.createdAt)}</span>
            <Button onClick={() => deleteRace(race._id)}>Delete me?</Button>
          </RaceContainer>
        )
      })}
    </div>
  )
}

export default Race