import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BaseClassContainer = styled.div`
  
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

const Core = ({ baseClass, updateBaseClassState }) => {

  const deleteBaseClass = (id) => {
    axios.delete(`http://https://ccp-backend.vercel.app/baseClass/${id}`)
    .then(res => {
      console.log(res)
      updateBaseClassState(id)
    })
  }

  return (
    <div>
      { baseClass.map( baseClass => {
        return (
          <BaseClassContainer key={baseClass._id}>
            <div className='card'>
              <h1> {baseClass.name} </h1>
                <Link to={`/CoreClasses/${baseClass._id}`}>
                  <Button>
                    <h6>click for more details</h6>
                  </Button>
                </Link>
              {/* <h1> {baseClass.name} </h1> */}
                {/* <h4>Class Description:</h4>  */}
              <h4>  {baseClass.description} </h4>
              {/* <h4> Base Hit Die: &emsp; {baseClass.hitDie} </h4> */}
              <h4> Alignment Requirments: &emsp;{baseClass.alignment} </h4>
              {/* <h4> Starting Wealth: &emsp; {baseClass.startingWealth} </h4> */}
              {/* <h4> Class Skills: &emsp; {baseClass.classSkills} </h4> */}
              {/* <h4> Skill Ranks Per Level: &emsp; {baseClass.skillRanksPerLevel} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 1: &emsp; &emsp; {baseClass.level1BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 2: &emsp; &emsp; {baseClass.level2BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 3: &emsp; &emsp; {baseClass.level3BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 4: &emsp; &emsp; {baseClass.level4BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 5: &emsp; &emsp; {baseClass.level5BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 6: &emsp; &emsp; {baseClass.level6BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 7: &emsp; &emsp; {baseClass.level7BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 8: &emsp; &emsp; {baseClass.level8BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 9: &emsp; &emsp; {baseClass.level9BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 10: &emsp; &emsp; {baseClass.level10BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 11: &emsp; &emsp; {baseClass.level11BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 12: &emsp; &emsp; {baseClass.level12BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 13: &emsp; &emsp; {baseClass.level13BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 14: &emsp; &emsp; {baseClass.level14BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 15: &emsp; &emsp; {baseClass.level15BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 16: &emsp; &emsp; {baseClass.level16BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 17: &emsp; &emsp; {baseClass.level17BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 18: &emsp; &emsp; {baseClass.level18BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 19: &emsp; &emsp; {baseClass.level19BABAndSaves} </h4> */}
              {/* <h4> Base Attack Bonus and Saves for Level 20: &emsp; &emsp; {baseClass.level20BABAndSaves} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 1: &emsp; &emsp; {baseClass.spellsPerDayLevel1} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 2: &emsp; &emsp; {baseClass.spellsPerDayLevel2} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 3: &emsp; &emsp; {baseClass.spellsPerDayLevel3} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 4: &emsp; &emsp; {baseClass.spellsPerDayLevel4} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 5: &emsp; &emsp; {baseClass.spellsPerDayLevel5} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 6: &emsp; &emsp; {baseClass.spellsPerDayLevel6} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 7: &emsp; &emsp; {baseClass.spellsPerDayLevel7} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 8: &emsp; &emsp; {baseClass.spellsPerDayLevel8} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 9: &emsp; &emsp; {baseClass.spellsPerDayLevel9} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 10: &emsp; &emsp; {baseClass.spellsPerDayLevel10} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 11: &emsp; &emsp; {baseClass.spellsPerDayLevel11} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 12: &emsp; &emsp; {baseClass.spellsPerDayLevel12} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 13: &emsp; &emsp; {baseClass.spellsPerDayLevel13} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 14: &emsp; &emsp; {baseClass.spellsPerDayLevel14} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 15: &emsp; &emsp; {baseClass.spellsPerDayLevel15} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 16: &emsp; &emsp; {baseClass.spellsPerDayLevel16} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 17: &emsp; &emsp; {baseClass.spellsPerDayLevel17} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 18: &emsp; &emsp; {baseClass.spellsPerDayLevel18} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 19: &emsp; &emsp; {baseClass.spellsPerDayLevel19} </h4> */}
              {/* <h4> Spells Per Level Per Day Level 20: &emsp; &emsp; {baseClass.spellsPerDayLevel20} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 1: &emsp; &emsp; {baseClass.spellsKnownLevel1} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 2: &emsp; &emsp; {baseClass.spellsKnownLevel2} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 3: &emsp; &emsp; {baseClass.spellsKnownLevel3} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 4: &emsp; &emsp; {baseClass.spellsKnownLevel4} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 5: &emsp; &emsp; {baseClass.spellsKnownLevel5} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 6: &emsp; &emsp; {baseClass.spellsKnownLevel6} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 7: &emsp; &emsp; {baseClass.spellsKnownLevel7} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 8: &emsp; &emsp; {baseClass.spellsKnownLevel8} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 9: &emsp; &emsp; {baseClass.spellsKnownLevel9} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 10: &emsp; &emsp; {baseClass.spellsKnownLevel10} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 11: &emsp; &emsp; {baseClass.spellsKnownLevel11} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 12: &emsp; &emsp; {baseClass.spellsKnownLevel12} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 13: &emsp; &emsp; {baseClass.spellsKnownLevel13} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 14: &emsp; &emsp; {baseClass.spellsKnownLevel14} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 15: &emsp; &emsp; {baseClass.spellsKnownLevel15} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 16: &emsp; &emsp; {baseClass.spellsKnownLevel16} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 17: &emsp; &emsp; {baseClass.spellsKnownLevel17} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 18: &emsp; &emsp; {baseClass.spellsKnownLevel18} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 19: &emsp; &emsp; {baseClass.spellsKnownLevel19} </h4> */}
              {/* <h4> Spells Known Per Level Per Day Level 20: &emsp; &emsp; {baseClass.spellsKnownLevel20} </h4> */}
              {/* <h4> {baseClass.armorProficiency} {baseClass.weaponProficiency} </h4> */}
              {/* <h4> Class Abilities: </h4> */}
              {/* <p> {baseClass.classAbility1} </p> */}
              {/* <p> {baseClass.classAbility2} </p> */}
              {/* <p> {baseClass.classAbility3} </p> */}
              {/* <p> {baseClass.classAbility4} </p> */}
              {/* <p> {baseClass.classAbility5} </p> */}
              {/* <p> {baseClass.classAbility6} </p> */}
              {/* <p> {baseClass.classAbility7} </p> */}
              {/* <p> {baseClass.classAbility8} </p> */}
              {/* <p> {baseClass.classAbility9} </p> */}
              {/* <p> {baseClass.classAbility10} </p> */}
              {/* <h4> What Are The Criteria For One to Be an Oathbreaker?: &emsp; &emsp; {baseClass.oathBreaking} </h4> */}
              <h4> Source: &emsp; &emsp; {baseClass.source} </h4>
              <h4> Notes: &emsp; &emsp; {baseClass.notes} </h4>
            </div>
            <img src={baseClass.image} alt={baseClass.name} />
              <span className='coreDate'><h4>Created:</h4> {format(baseClass.createdAt)}</span>
            <Button onClick={()=>deleteBaseClass(baseClass._id)}>Delete me?</Button>
          </BaseClassContainer>
        )
      })}

    </div>
  )
}

export default Core