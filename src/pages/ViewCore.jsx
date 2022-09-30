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


const ViewCore = ({updateBaseClassState, baseClass}) => {
    
    const { id } = useParams()
    
    const [ baseClasses, setBaseClass ] = useState()

    useEffect(()=> {
        fetch(`https://ccp-backend.vercel.app/api/baseClass/${id}`)
        .then(res => res.json())
        .then(data => setBaseClass(data))
    }, [])

    const deleteBaseClass = (id) => {
    axios.delete(`https://ccp-backend.vercel.app/api/baseClass/${id}`)
    .then(res => {
      console.log(res)
      updateBaseClassState(id)
    })
  }
  console.log(baseClass)
  return (
    <TitleContainer>
        <Navbar/>
        <BaseClassContainer key={baseClasses?._id}>
            <div className='card'>
            {/* <Link to={`/CoreClass/${baseClass?._id}`}> */}
                {/* <Button> */}
                  <h1> {baseClasses?.name} </h1>
                  {/* <h6>click for more details</h6> */}
                {/* </Button> */}
              {/* </Link> */}
              {/* <h1> {baseClass?.name} </h1> */}
                {/* <h4>Class Description:</h4>  */}
              <h4>  {baseClasses?.description} </h4>
              <h4> Base Hit Die: &emsp; {baseClasses?.hitDie} </h4>
              <h4> Alignment Requirments: &emsp;{baseClasses?.alignment} </h4>
              <h4> Starting Wealth: &emsp; {baseClasses?.startingWealth} </h4>
              <h4> Class Skills: &emsp; {baseClasses?.classSkills} </h4>
              <h4> Skill Ranks Per Level: &emsp; {baseClasses?.skillRanksPerLevel} </h4>
              <h4> Base Attack Bonus and Saves for Level 1: &emsp; &emsp; {baseClasses?.level1BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 2: &emsp; &emsp; {baseClasses?.level2BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 3: &emsp; &emsp; {baseClasses?.level3BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 4: &emsp; &emsp; {baseClasses?.level4BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 5: &emsp; &emsp; {baseClasses?.level5BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 6: &emsp; &emsp; {baseClasses?.level6BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 7: &emsp; &emsp; {baseClasses?.level7BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 8: &emsp; &emsp; {baseClasses?.level8BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 9: &emsp; &emsp; {baseClasses?.level9BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 10: &emsp; &emsp; {baseClasses?.level10BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 11: &emsp; &emsp; {baseClasses?.level11BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 12: &emsp; &emsp; {baseClasses?.level12BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 13: &emsp; &emsp; {baseClasses?.level13BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 14: &emsp; &emsp; {baseClasses?.level14BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 15: &emsp; &emsp; {baseClasses?.level15BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 16: &emsp; &emsp; {baseClasses?.level16BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 17: &emsp; &emsp; {baseClasses?.level17BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 18: &emsp; &emsp; {baseClasses?.level18BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 19: &emsp; &emsp; {baseClasses?.level19BABAndSaves} </h4>
              <h4> Base Attack Bonus and Saves for Level 20: &emsp; &emsp; {baseClasses?.level20BABAndSaves} </h4>
              <h4> Spells Per Level Per Day Level 1: &emsp; &emsp; {baseClasses?.spellsPerDayLevel1} </h4>
              <h4> Spells Per Level Per Day Level 2: &emsp; &emsp; {baseClasses?.spellsPerDayLevel2} </h4>
              <h4> Spells Per Level Per Day Level 3: &emsp; &emsp; {baseClasses?.spellsPerDayLevel3} </h4>
              <h4> Spells Per Level Per Day Level 4: &emsp; &emsp; {baseClasses?.spellsPerDayLevel4} </h4>
              <h4> Spells Per Level Per Day Level 5: &emsp; &emsp; {baseClasses?.spellsPerDayLevel5} </h4>
              <h4> Spells Per Level Per Day Level 6: &emsp; &emsp; {baseClasses?.spellsPerDayLevel6} </h4>
              <h4> Spells Per Level Per Day Level 7: &emsp; &emsp; {baseClasses?.spellsPerDayLevel7} </h4>
              <h4> Spells Per Level Per Day Level 8: &emsp; &emsp; {baseClasses?.spellsPerDayLevel8} </h4>
              <h4> Spells Per Level Per Day Level 9: &emsp; &emsp; {baseClasses?.spellsPerDayLevel9} </h4>
              <h4> Spells Per Level Per Day Level 10: &emsp; &emsp; {baseClasses?.spellsPerDayLevel10} </h4>
              <h4> Spells Per Level Per Day Level 11: &emsp; &emsp; {baseClasses?.spellsPerDayLevel11} </h4>
              <h4> Spells Per Level Per Day Level 12: &emsp; &emsp; {baseClasses?.spellsPerDayLevel12} </h4>
              <h4> Spells Per Level Per Day Level 13: &emsp; &emsp; {baseClasses?.spellsPerDayLevel13} </h4>
              <h4> Spells Per Level Per Day Level 14: &emsp; &emsp; {baseClasses?.spellsPerDayLevel14} </h4>
              <h4> Spells Per Level Per Day Level 15: &emsp; &emsp; {baseClasses?.spellsPerDayLevel15} </h4>
              <h4> Spells Per Level Per Day Level 16: &emsp; &emsp; {baseClasses?.spellsPerDayLevel16} </h4>
              <h4> Spells Per Level Per Day Level 17: &emsp; &emsp; {baseClasses?.spellsPerDayLevel17} </h4>
              <h4> Spells Per Level Per Day Level 18: &emsp; &emsp; {baseClasses?.spellsPerDayLevel18} </h4>
              <h4> Spells Per Level Per Day Level 19: &emsp; &emsp; {baseClasses?.spellsPerDayLevel19} </h4>
              <h4> Spells Per Level Per Day Level 20: &emsp; &emsp; {baseClasses?.spellsPerDayLevel20} </h4>
              <h4> Spells Known Per Level Per Day Level 1: &emsp; &emsp; {baseClasses?.spellsKnownLevel1} </h4>
              <h4> Spells Known Per Level Per Day Level 2: &emsp; &emsp; {baseClasses?.spellsKnownLevel2} </h4>
              <h4> Spells Known Per Level Per Day Level 3: &emsp; &emsp; {baseClasses?.spellsKnownLevel3} </h4>
              <h4> Spells Known Per Level Per Day Level 4: &emsp; &emsp; {baseClasses?.spellsKnownLevel4} </h4>
              <h4> Spells Known Per Level Per Day Level 5: &emsp; &emsp; {baseClasses?.spellsKnownLevel5} </h4>
              <h4> Spells Known Per Level Per Day Level 6: &emsp; &emsp; {baseClasses?.spellsKnownLevel6} </h4>
              <h4> Spells Known Per Level Per Day Level 7: &emsp; &emsp; {baseClasses?.spellsKnownLevel7} </h4>
              <h4> Spells Known Per Level Per Day Level 8: &emsp; &emsp; {baseClasses?.spellsKnownLevel8} </h4>
              <h4> Spells Known Per Level Per Day Level 9: &emsp; &emsp; {baseClasses?.spellsKnownLevel9} </h4>
              <h4> Spells Known Per Level Per Day Level 10: &emsp; &emsp; {baseClasses?.spellsKnownLevel10} </h4>
              <h4> Spells Known Per Level Per Day Level 11: &emsp; &emsp; {baseClasses?.spellsKnownLevel11} </h4>
              <h4> Spells Known Per Level Per Day Level 12: &emsp; &emsp; {baseClasses?.spellsKnownLevel12} </h4>
              <h4> Spells Known Per Level Per Day Level 13: &emsp; &emsp; {baseClasses?.spellsKnownLevel13} </h4>
              <h4> Spells Known Per Level Per Day Level 14: &emsp; &emsp; {baseClasses?.spellsKnownLevel14} </h4>
              <h4> Spells Known Per Level Per Day Level 15: &emsp; &emsp; {baseClasses?.spellsKnownLevel15} </h4>
              <h4> Spells Known Per Level Per Day Level 16: &emsp; &emsp; {baseClasses?.spellsKnownLevel16} </h4>
              <h4> Spells Known Per Level Per Day Level 17: &emsp; &emsp; {baseClasses?.spellsKnownLevel17} </h4>
              <h4> Spells Known Per Level Per Day Level 18: &emsp; &emsp; {baseClasses?.spellsKnownLevel18} </h4>
              <h4> Spells Known Per Level Per Day Level 19: &emsp; &emsp; {baseClasses?.spellsKnownLevel19} </h4>
              <h4> Spells Known Per Level Per Day Level 20: &emsp; &emsp; {baseClasses?.spellsKnownLevel20} </h4>
              <h4> {baseClasses?.armorProficiency} {baseClasses?.weaponProficiency} </h4>
              <h4> Class Abilities: </h4>
              <p> {baseClasses?.classAbility1} </p>
              <p> {baseClasses?.classAbility2} </p>
              <p> {baseClasses?.classAbility3} </p>
              <p> {baseClasses?.classAbility4} </p>
              <p> {baseClasses?.classAbility5} </p>
              <p> {baseClasses?.classAbility6} </p>
              <p> {baseClasses?.classAbility7} </p>
              <p> {baseClasses?.classAbility8} </p>
              <p> {baseClasses?.classAbility9} </p>
              <p> {baseClasses?.classAbility10} </p>
              <h4> What Are The Criteria For One to Be an Oathbreaker?: &emsp; &emsp; {baseClasses?.oathBreaking} </h4>
              <h4> Source: &emsp; &emsp; {baseClasses?.source} </h4>
              <h4> Notes: &emsp; &emsp; {baseClasses?.notes} </h4>
            </div>
            <img src={baseClasses?.image} alt={baseClasses?.name} />
              <span className='coreDate'><h4>Created:</h4> {format(baseClasses?.createdAt)}</span>
            <Button onClick={()=>deleteBaseClass(baseClasses?._id)}>Delete me?</Button>
            <Link to={`/CoreClass/edit/${baseClasses?._id}`}><Button>Edit Core Class</Button></Link>
          </BaseClassContainer>
    </TitleContainer>
  )
}

export default ViewCore