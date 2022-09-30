import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BigDiv = styled.div`
    background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
  background-attachment: center;
  background-position: 50% 35%;
  background-size: 100vw;

  h1{
    text-align:center;
  }
`

const FormContainer = styled.form`
    background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
    /* background-repeat: no-repeat; */
    background-attachment: center;
    background-position: 50% 50%;
    background-size: 300vw;
    border-radius: 10px;
    padding: 100px;
    
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    
    label{
        margin: 5px 10px 5px 0;
    }
    
    input {
        font-weight: 800;
        vertical-align: middle;
        margin: 5px 10px 5px 0;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 10px;
    }
    button {
        padding: 15px 50px;
        background-color: #71797E;
        border: 2px solid #ddd;
        color: white;
        border-radius: 10px;
    }
    flex-direction: column;
    align-items: stretch;
    font-weight: 800;
`


const NewCoreClass = ({ addBaseClass }) => {

    const navigate = useNavigate()

    const initialState = {
        name: '',
        alignment: '',
        hitDie: '',
        startingWealth: '',
        classSkills: '',
        skillRanksPerLevel: '',
        level1BABAndSaves: '',
        level2BABAndSaves: '',
        level3BABAndSaves: '',
        level4BABAndSaves: '',
        level5BABAndSaves: '',
        level6BABAndSaves: '',
        level7BABAndSaves: '',
        level8BABAndSaves: '',
        level9BABAndSaves: '',
        level10BABAndSaves: '',
        level11BABAndSaves: '',
        level12BABAndSaves: '',
        level13BABAndSaves: '',
        level14BABAndSaves: '',
        level15BABAndSaves: '',
        level16BABAndSaves: '',
        level17BABAndSaves: '',
        level18BABAndSaves: '',
        level19BABAndSaves: '',
        level20BABAndSaves: '',
        spellsPerDayLevel1: '',
        spellsPerDayLevel2: '',
        spellsPerDayLevel3: '',
        spellsPerDayLevel4: '',
        spellsPerDayLevel5: '',
        spellsPerDayLevel6: '',
        spellsPerDayLevel7: '',
        spellsPerDayLevel8: '',
        spellsPerDayLevel9: '',
        spellsPerDayLevel10: '',
        spellsPerDayLevel11: '',
        spellsPerDayLevel12: '',
        spellsPerDayLevel13: '',
        spellsPerDayLevel14: '',
        spellsPerDayLevel15: '',
        spellsPerDayLevel16: '',
        spellsPerDayLevel17: '',
        spellsPerDayLevel18: '',
        spellsPerDayLevel19: '',
        spellsPerDayLevel20: '',
        spellsKnownLevel1: '',
        spellsKnownLevel2: '',
        spellsKnownLevel3: '',
        spellsKnownLevel4: '',
        spellsKnownLevel5: '',
        spellsKnownLevel6: '',
        spellsKnownLevel7: '',
        spellsKnownLevel8: '',
        spellsKnownLevel9: '',
        spellsKnownLevel10: '',
        spellsKnownLevel11: '',
        spellsKnownLevel12: '',
        spellsKnownLevel13: '',
        spellsKnownLevel14: '',
        spellsKnownLevel15: '',
        spellsKnownLevel16: '',
        spellsKnownLevel17: '',
        spellsKnownLevel18: '',
        spellsKnownLevel19: '',
        spellsKnownLevel20: '',
        weaponProficiency: '',
        armorProficiency: '',
        classAbility1: '',
        classAbility2: '',
        classAbility3: '',
        classAbility4: '',
        classAbility5: '',
        classAbility6: '',
        classAbility7: '',
        classAbility8: '',
        classAbility9: '',
        classAbility10: '',
        description: '',
        oathBreaking: '',
        Source: '',
        image: '',
        notes: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('https://ccp-backend.vercel.app/api/baseClass', formData )
        .then(res => {
            setFormData(initialState)
            addBaseClass({...res.data})
            navigate('/CoreClasses')
          })
    }

  return (
    <BigDiv>
        <Navbar />

        <h1>New Core Class</h1>
        
        <FormContainer>

    
        <label htmlFor="name">Name</label>
        <input id='name' name='name' type='text' onChange={handleChange}/>

        <label htmlFor="alignment">Alignment</label>
        <input id='alignment' name='alignment' type='text' onChange={handleChange}/>

        <label htmlFor="hitDie">Hit Die</label>
        <input id='hitDie' name='hitDie' type='text' onChange={handleChange}/>

        <label htmlFor="startingWealth">Starting Wealth</label>
        <input id='startingWealth' name='startingWealth' type='text' onChange={handleChange}/>

        <label htmlFor="skillRanksPerLevel">Skill Ranks Per Level</label>
        <input id='skillRanksPerLevel' name='skillRanksPerLevel' type='text' onChange={handleChange}/>

        <label htmlFor="classSkills">Class Skills List</label>
        <input id='classSkills' name='classSkills' type='text' onChange={handleChange}/>

        <label htmlFor="level1BABAndSaves">Level 1 Base Attack Bonus and Saves</label>
        <input id='level1BABAndSaves' name='level1BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level2BABAndSaves">Level 2 Base Attack Bonus and Saves</label>
        <input id='level2BABAndSaves' name='level2BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level3BABAndSaves">Level 3 Base Attack Bonus and Saves</label>
        <input id='level3BABAndSaves' name='level3BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level4BABAndSaves">Level 4 Base Attack Bonus and Saves</label>
        <input id='level4BABAndSaves' name='level4BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level5BABAndSaves">Level 5 Base Attack Bonus and Saves</label>
        <input id='level5BABAndSaves' name='level5BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level6BABAndSaves">Level 6 Base Attack Bonus and Saves</label>
        <input id='level6BABAndSaves' name='levelBAB6AndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level7BABAndSaves">Level 7 Base Attack Bonus and Saves</label>
        <input id='level7BABAndSaves' name='level7BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level8BABAndSaves">Level 8 Base Attack Bonus and Saves</label>
        <input id='level8BABAndSaves' name='level8BABAn8dSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level9BABAndSaves">Level 9 Base Attack Bonus and Saves</label>
        <input id='level9BABAndSaves' name='level9BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level10BABAndSaves">Level 10 Base Attack Bonus and Saves</label>
        <input id='level10BABAndSaves' name='level10BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level11BABAndSaves">Level 11 Base Attack Bonus and Saves</label>
        <input id='level11BABAndSaves' name='level11BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level12BABAndSaves">Level 12 Base Attack Bonus and Saves</label>
        <input id='level12BABAndSaves' name='level12BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level13BABAndSaves">Level 13 Base Attack Bonus and Saves</label>
        <input id='level13BABAndSaves' name='level13BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level14BABAndSaves">Level 14 Base Attack Bonus and Saves</label>
        <input id='level14BABAndSaves' name='level14BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level15BABAndSaves">Level 15 Base Attack Bonus and Saves</label>
        <input id='level15BABAndSaves' name='level15BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level16BABAndSaves">Level 16 Base Attack Bonus and Saves</label>
        <input id='level16BABAndSaves' name='level16BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level17BABAndSaves">Level 17 Base Attack Bonus and Saves</label>
        <input id='level17BABAndSaves' name='level17BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level18BABAndSaves">Level 18 Base Attack Bonus and Saves</label>
        <input id='level18BABAndSaves' name='level18BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level19BABAndSaves">Level 19 Base Attack Bonus and Saves</label>
        <input id='level19BABAndSaves' name='level19BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="level20BABAndSaves">Level 20 Base Attack Bonus and Saves</label>
        <input id='level20BABAndSaves' name='level20BABAndSaves' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel1">Spells Per Day Level 1</label>
        <input id='spellsPerDayLevel1' name='spellsPerDayLevel1' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel2">Spells Per Day Level 2</label>
        <input id='spellsPerDayLevel2' name='spellsPerDayLevel2' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel2">Spells Per Day Level 3</label>
        <input id='spellsPerDayLevel2' name='spellsPerDayLevel2' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel4">Spells Per Day Level 4</label>
        <input id='spellsPerDayLevel4' name='spellsPerDayLevel4' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel5">Spells Per Day Level 5</label>
        <input id='spellsPerDayLevel5' name='spellsPerDayLevel5' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel6">Spells Per Day Level 6</label>
        <input id='spellsPerDayLevel6' name='spellsPerDayLevel6' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel7">Spells Per Day Level 7</label>
        <input id='spellsPerDayLevel7' name='spellsPerDayLevel7' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel8">Spells Per Day Level 8</label>
        <input id='spellsPerDayLevel8' name='spellsPerDayLevel8' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel9">Spells Per Day Level 9</label>
        <input id='spellsPerDayLevel9' name='spellsPerDayLevel9' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel10">Spells Per Day Level 10</label>
        <input id='spellsPerDayLevel10' name='spellsPerDayLevel10' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel11">Spells Per Day Level 11</label>
        <input id='spellsPerDayLevel11' name='spellsPerDayLevel11' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel12">Spells Per Day Level 12</label>
        <input id='spellsPerDayLevel12' name='spellsPerDayLevel12' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel13">Spells Per Day Level 13</label>
        <input id='spellsPerDayLevel13' name='spellsPerDayLevel13' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel14">Spells Per Day Level 14</label>
        <input id='spellsPerDayLevel14' name='spellsPerDayLevel14' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel15">Spells Per Day Level 15</label>
        <input id='spellsPerDayLevel15' name='spellsPerDayLevel15' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel16">Spells Per Day Level 16</label>
        <input id='spellsPerDayLevel16' name='spellsPerDayLevel16' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel17">Spells Per Day Level 17</label>
        <input id='spellsPerDayLevel17' name='spellsPerDayLevel17' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel18">Spells Per Day Level 18</label>
        <input id='spellsPerDayLevel18' name='spellsPerDayLevel18' type='text' onChange={handleChange}/>

        <label htmlFor="spellsPerDayLevel19">Spells Per Day Level 19</label>
        <input id='spellsPerDayLevel19' name='spellsPerDayLevel19' type='text' onChange={handleChange}/>
        
        <label htmlFor="spellsPerDayLevel20">Spells Per Day Level 20</label>
        <input id='spellsPerDayLevel20' name='spellsPerDayLevel20' type='text' onChange={handleChange}/>
        
        <label htmlFor="spellsKnownLevel1">Spells Known Level 1</label>
        <input id='spellsKnownLevel1' name='spellsKnownLevel1' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel2">Spells known Level 2</label>
        <input id='spellsKnownLevel2' name='spellsKnownLevel2' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel3">Spells Known Level 3</label>
        <input id='spellsKnownLevel3' name='spellsKnownLevel3' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel4">Spells Known Level 4</label>
        <input id='spellsKnownLevel4' name='spellsKnownLevel4' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel5">Spells Known Level 5</label>
        <input id='spellsKnownLevel5' name='spellsKnownLevel5' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel6">Spells Known Level 6</label>
        <input id='spellsKnownLevel6' name='spellsKnownLevel6' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel7">Spells Known Level 7</label>
        <input id='spellsKnownLevel7' name='spellsKnownLevel7' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel8">Spells Known Level 8</label>
        <input id='spellsKnownLevel8' name='spellsKnownLevel8' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel9">Spells Known Level 9</label>
        <input id='spellsKnownLevel9' name='spellsKnownLevel9' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel10">Spells Known Level 10</label>
        <input id='spellsKnownLevel10' name='spellsKnownLevel10' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel11">Spells Known Level 11</label>
        <input id='spellsKnownLevel11' name='spellsKnownLevel11' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel12">Spells Known Level 12</label>
        <input id='spellsKnownLevel12' name='spellsKnownLevel12' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel13">Spells Known Level 13</label>
        <input id='spellsKnownLevel13' name='spellsKnownLevel13' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel14">Spells Known Level 14</label>
        <input id='spellsKnownLevel14' name='spellsKnownLevel14' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel15">Spells Known Level 15</label>
        <input id='spellsKnownLevel15' name='spellsKnownLevel15' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel16">Spells Known Level 16</label>
        <input id='spellsKnownLevel16' name='spellsKnownLevel16' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel17">Spells Known Level 17</label>
        <input id='spellsKnownLevel17' name='spellsKnownLevel17' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel18">Spells Known Level 18</label>
        <input id='spellsKnownLevel18' name='spellsKnownLevel18' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel19">Spells Known Level 19</label>
        <input id='spellsKnownLevel19' name='spellsKnownLevel19' type='text' onChange={handleChange}/>

        <label htmlFor="spellsKnownLevel20">Spells Known Level 20</label>
        <input id='spellsKnownLevel20' name='spellsKnownLevel20' type='text' onChange={handleChange}/>

        <label htmlFor="weaponProficiency">Weapon Proficiencies</label>
        <input id='weaponProficiency' name='weaponProficiency' type='text' onChange={handleChange}/>

        <label htmlFor="armorProficiency">Armor Proficiency</label>
        <input id='armorProficiency' name='armorProficiency' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility1">Class Ability 1</label>
        <input id='classAbility1' name='classAbility1' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility2">Class Ability 2</label>
        <input id='classAbility2' name='classAbility2' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility3">Class Ability 3</label>
        <input id='classAbility3' name='classAbility3' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility4">Class Ability 4</label>
        <input id='classAbility4' name='classAbility4' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility5">Class Ability 5</label>
        <input id='classAbility5' name='classAbility5' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility6">Class Ability 6</label>
        <input id='classAbility6' name='classAbility6' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility7">Class Ability 7</label>
        <input id='classAbility7' name='classAbility7' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility8">Class Ability 8</label>
        <input id='classAbility8' name='classAbility8' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility9">Class Ability 9</label>
        <input id='classAbility9' name='classAbility9' type='text' onChange={handleChange}/>

        <label htmlFor="classAbility10">Class Ability 10</label>
        <input id='classAbility10' name='classAbility10' type='text' onChange={handleChange}/>
        
        <label htmlFor="description">Description</label>
        <input id='description' name='description' type='text' onChange={handleChange}/>

        <label htmlFor="oathBreaking">Oath Breaking Requirments</label>
        <input id='oathBreaking' name='oathBreaking' type='text' onChange={handleChange}/>
        
        <label htmlFor="source">Source</label>
        <input id='source' name='source' type='text' onChange={handleChange}/>

        <label htmlFor="image">Image</label>
        <input id='image' name='image' type='text' onChange={handleChange}/>

        <label htmlFor="notes">Notes</label>
        <input id='notes' name='notes' type='text' onChange={handleChange}/>
        
        <button type='submit' onClick={handleSubmit}>
            Create it
            </button>
    
    </FormContainer>
    </BigDiv>
  )
}

export default NewCoreClass