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
    font-weight: 700;
  }
  p{
    margin-left: 30px;
  }
`


const ViewPrestige = ({ updatePrestigeClassState, prestige}) => {

    const { id } = useParams()
    
    const [ prestigeClass, setBaseClass ] = useState()

    useEffect(()=> {
        fetch(`http://https://ccp-backend.vercel.app/api/prestigeClass/${id}`)
        .then(res => res.json())
        .then(data => setBaseClass(data))
    }, [])

    const deletePrestige = (id) => {
    axios.delete(`http://https://ccp-backend.vercel.app/api/prestigeClass/${id}`)
    .then(res => {
      console.log(res)
      updatePrestigeClassState(id)
    })
  }

  return (
    <TitleContainer>
        <Navbar/>
        <PrestigeClassContainer key={prestigeClass?._id}>
            <div className='card'>
            
                  <h1> {prestigeClass?.name} </h1>
                  
              <h4>  {prestigeClass?.description} </h4>
              <h4>Requirements: </h4>
              <p>{prestigeClass?.requirements}</p>
              <h4>Class Hit Die: &emsp; {prestigeClass?.hitDie}</h4>
              <h4>Class Skills: </h4>
              <p>  {prestigeClass?.classSkills} </p>
              <h4>Skill Ranks Per Level:</h4>
              <p>{prestigeClass?.skillRanksPerLevel}</p>
              <h4> Armor and Weapon Proficiencies Gained:  </h4>
              <p>{prestigeClass?.armorProficiency} {prestigeClass?.weaponProficiency}</p>
              <h4> Base Attack Bonus And Saves at Level 1:  </h4>
              <p> {prestigeClass?.level1BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 2:  </h4>
              <p> {prestigeClass?.level2BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 3:  </h4>
              <p> {prestigeClass?.level3BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 4:  </h4>
              <p>{prestigeClass?.level4BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 5:  </h4>
              <p>{prestigeClass?.level5BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 6:  </h4>
              <p>{prestigeClass?.level6BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 7:  </h4>
              <p>{prestigeClass?.level7BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 8:  </h4>
              <p>{prestigeClass?.level8BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 9:  </h4>
              <p> {prestigeClass?.level9BABAndSaves} </p>
              <h4> Base Attack Bonus And Saves at Level 10: </h4>
              <p> {prestigeClass?.level10BABAndSaves} </p>
              <h4>Class Abilities: </h4>
              <p> {prestigeClass?.classAbility1} </p>
              <p> {prestigeClass?.classAbility2} </p>
              <p> {prestigeClass?.classAbility3} </p>
              <p> {prestigeClass?.classAbility4} </p>
              <p> {prestigeClass?.classAbility5} </p>
              <p> {prestigeClass?.classAbility6} </p>
              <p> {prestigeClass?.classAbility7} </p>
              <p> {prestigeClass?.classAbility8} </p>
              <p> {prestigeClass?.classAbility9} </p>
              <p> {prestigeClass?.classAbility10} </p>
              <h4> Spells Per Level Per Day At Level 1: </h4>
              <p>{prestigeClass?.spellsPerDayLevel1} </p>
              <h4> Spells Per Level Per Day At Level 2: </h4>
              <p> {prestigeClass?.spellsPerDayLevel2} </p>
              <h4> Spells Per Level Per Day At Level 3: </h4>
              <p> {prestigeClass?.spellsPerDayLevel3} </p>
              <h4> Spells Per Level Per Day At Level 4: </h4>
              <p>  {prestigeClass?.spellsPerDayLevel4} </p>
              <h4> Spells Per Level Per Day At Level 5: </h4>
              <p>  {prestigeClass?.spellsPerDayLevel5} </p>
              <h4> Spells Per Level Per Day At Level 6: </h4>
              <p>  {prestigeClass?.spellsPerDayLevel6} </p>
              <h4> Spells Per Level Per Day At Level 7: </h4>
              <p>  {prestigeClass?.spellsPerDayLevel7} </p>
              <h4> Spells Per Level Per Day At Level 8: </h4>
              <p>  {prestigeClass?.spellsPerDayLevel8} </p>
              <h4> Spells Per Level Per Day At Level 9: </h4>
              <p>  {prestigeClass?.spellsPerDayLevel9} </p>
              <h4> Spells Per Level Per Day At Level 10: </h4>
              <p>  {prestigeClass?.spellsPerDayLevel10} </p>
              <h4> Spells Known Per Level At Level 1: </h4>
              <p>  {prestigeClass?.spellsKnownLevel1} </p>
              <h4> Spells Known Per Level At Level 2: </h4>
              <p>  {prestigeClass?.spellsKnownLevel2} </p>
              <h4> Spells Known Per Level At Level 3: </h4>
              <p>  {prestigeClass?.spellsKnownLevel3} </p>
              <h4> Spells Known Per Level At Level 4: </h4>
              <p>  {prestigeClass?.spellsKnownLevel4} </p>
              <h4> Spells Known Per Level At Level 5: </h4>
              <p>  {prestigeClass?.spellsKnownLevel5} </p>
              <h4> Spells Known Per Level At Level 6: </h4>
              <p>  {prestigeClass?.spellsKnownLevel6} </p>
              <h4> Spells Known Per Level At Level 7: </h4>
              <p>  {prestigeClass?.spellsKnownLevel7} </p>
              <h4> Spells Known Per Level At Level 8: </h4>
              <p>  {prestigeClass?.spellsKnownLevel8} </p>
              <h4> Spells Known Per Level At Level 9: </h4>
              <p>  {prestigeClass?.spellsKnownLevel9} </p>
              <h4> Spells Known Per Level At Level 10: </h4>
              <p>  {prestigeClass?.spellsKnownLevel10} </p>
              <p> Source: {prestigeClass?.source} </p>
              <p> Notes: {prestigeClass?.notes} </p>
            </div>
            <img src={prestigeClass?.image} alt={prestigeClass?.name} />
              <span className='prestigeDate'><h4>Created:</h4> {format(prestigeClass?.createdAt)}</span>
            <Button onClick={()=>deletePrestige(prestigeClass?._id)}>Delete me?</Button>
            <Link to={`/Prestige/edit/${prestigeClass?._id}`}><Button>Edit Prestige Class</Button></Link>
          </PrestigeClassContainer>
    </TitleContainer>
  )
}

export default ViewPrestige