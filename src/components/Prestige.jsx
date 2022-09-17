import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PrestigeClassContainer = styled.div`

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
    font-weight:700;
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

const Prestige = ({ prestige, updatePrestigeClassState }) => {
  const deletePrestige = (id) => {
    axios.delete(`http://localhost:3001/prestigeClass/${id}`)
    .then(res => {
      console.log(res)
      updatePrestigeClassState(id)
    })
  }
  return (
    <div>
      { prestige?.map( prestige => {
        return (
          <PrestigeClassContainer key={prestige._id}>
            <div className='card'>
              <h1> {prestige.name} </h1>
                <Link to={`/Prestige/${prestige._id}`}>
                  <Button>
                    <h6>click for more details</h6>
                  </Button>
                </Link>
              <h4>  {prestige.description} </h4>
              <h4>Requirements: </h4>
              <p>{prestige.requirements}</p>
              <h4>Class Hit Die: &emsp; {prestige.hitDie}</h4>
              {/* <h4>Class Skills: </h4> */}
              {/* <p>  {prestige.classSkills} </p> */}
              {/* <h4>Skill Ranks Per Level:</h4> */}
              {/* <p>{prestige.skillRanksPerLevel}</p> */}
              {/* <h4> Armor and Weapon Proficiencies Gained:  </h4> */}
              {/* <p>{prestige.armorProficiency} {prestige.weaponProficiency}</p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 1:  </h4> */}
              {/* <p> {prestige.level1BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 2:  </h4> */}
              {/* <p> {prestige.level2BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 3:  </h4> */}
              {/* <p> {prestige.level3BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 4:  </h4> */}
              {/* <p>{prestige.level4BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 5:  </h4> */}
              {/* <p>{prestige.level5BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 6:  </h4> */}
              {/* <p>{prestige.level6BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 7:  </h4> */}
              {/* <p>{prestige.level7BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 8:  </h4> */}
              {/* <p>{prestige.level8BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 9:  </h4> */}
              {/* <p> {prestige.level9BABAndSaves} </p> */}
              {/* <h4> Base Attack Bonus And Saves at Level 10: </h4> */}
              {/* <p> {prestige.level10BABAndSaves} </p> */}
              {/* <h4>Class Abilities: </h4> */}
              {/* <p> {prestige.classAbility1} </p> */}
              {/* <p> {prestige.classAbility2} </p> */}
              {/* <p> {prestige.classAbility3} </p> */}
              {/* <p> {prestige.classAbility4} </p> */}
              {/* <p> {prestige.classAbility5} </p> */}
              {/* <p> {prestige.classAbility6} </p> */}
              {/* <p> {prestige.classAbility7} </p> */}
              {/* <p> {prestige.classAbility8} </p> */}
              {/* <p> {prestige.classAbility9} </p> */}
              {/* <p> {prestige.classAbility10} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 1: </h4> */}
              {/* <p>{prestige.spellsPerDayLevel1} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 2: </h4> */}
              {/* <p> {prestige.spellsPerDayLevel2} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 3: </h4> */}
              {/* <p> {prestige.spellsPerDayLevel3} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 4: </h4> */}
              {/* <p>  {prestige.spellsPerDayLevel4} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 5: </h4> */}
              {/* <p>  {prestige.spellsPerDayLevel5} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 6: </h4> */}
              {/* <p>  {prestige.spellsPerDayLevel6} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 7: </h4> */}
              {/* <p>  {prestige.spellsPerDayLevel7} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 8: </h4> */}
              {/* <p>  {prestige.spellsPerDayLevel8} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 9: </h4> */}
              {/* <p>  {prestige.spellsPerDayLevel9} </p> */}
              {/* <h4> Spells Per Level Per Day At Level 10: </h4> */}
              {/* <p>  {prestige.spellsPerDayLevel10} </p> */}
              {/* <h4> Spells Known Per Level At Level 1: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel1} </p> */}
              {/* <h4> Spells Known Per Level At Level 2: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel2} </p> */}
              {/* <h4> Spells Known Per Level At Level 3: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel3} </p> */}
              {/* <h4> Spells Known Per Level At Level 4: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel4} </p> */}
              {/* <h4> Spells Known Per Level At Level 5: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel5} </p> */}
              {/* <h4> Spells Known Per Level At Level 6: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel6} </p> */}
              {/* <h4> Spells Known Per Level At Level 7: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel7} </p> */}
              {/* <h4> Spells Known Per Level At Level 8: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel8} </p> */}
              {/* <h4> Spells Known Per Level At Level 9: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel9} </p> */}
              {/* <h4> Spells Known Per Level At Level 10: </h4> */}
              {/* <p>  {prestige.spellsKnownLevel10} </p> */}
              <p> Source: {prestige.source} </p>
              <p> Notes: {prestige.notes} </p>
            </div>
            <img src={prestige.image} alt={prestige.name} />
              <span className='prestigeDate'><h4>Created:</h4> {format(prestige.createdAt)}</span>
            <Button onClick={()=>deletePrestige(prestige._id)}>Delete me?</Button>
          </PrestigeClassContainer>
        )
      })}
    </div>
  )
}

export default Prestige