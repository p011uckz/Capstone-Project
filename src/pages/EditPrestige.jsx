import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

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
    /* background-repeat: no-repeat; */
    background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
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

const EditPrestige = ({ setPrestigeClass }) => {

    let { id } = useParams()

    const navigate = useNavigate()

    const initialState = {
        name: '',
        hitDie: '',
        requirements: '',
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
        weaponProficiencies: '',
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
        description: '',
        source: '',
        image: '',
        notes: ''
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.put(`http://localhost:3001/prestigeClass/${id}`, formData )
        .then(res => {

            setFormData(initialState)
            setPrestigeClass(res.data)
            navigate('/PrestigeClasses')
          })
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/prestigeClass/${id}`)
        .then(res => {
            setFormData(res.data)
        })
    }, [])

  return (
    <div>
        <BigDiv>
            <Navbar/>
            <h1>Edit:</h1>
        <FormContainer>            
            
            <label htmlFor="name">Name</label>
            <input id='name' name='name' type='text' value={formData?.name} onChange={handleChange}/>

            <label htmlFor="hitDie">Hit Die</label>
            <input id='hitDie' name='hitDie' type='text' value={formData?.hitDie} onChange={handleChange}/>

            <label htmlFor="requirements">Requirements</label>
            <input id='requirements' name='requirements' type='text' value={formData?.requirements} onChange={handleChange}/>

            <label htmlFor="skillRanksPerLevel">Skill Ranks Per Level</label>
            <input id='skillRanksPerLevel' name='skillRanksPerLevel' type='text' value={formData?.skillRanksPerLevel} onChange={handleChange}/>

            <label htmlFor="classSkills">Class Skills List</label>
            <input id='classSkills' name='classSkills' type='text' value={formData?.classSkills} onChange={handleChange}/>

            <label htmlFor="weaponProficiency">Weapon Proficiencies</label>
            <input id='weaponProficiency' name='weaponProficiency' type='text' value={formData?.weaponProficiencies} onChange={handleChange}/>

            <label htmlFor="armorProficiency">Armor Proficiency</label>
            <input id='armorProficiency' name='armorProficiency' type='text' value={formData?.armorProficiency} onChange={handleChange}/>
            
            <label htmlFor="level1BABAndSaves">Level 1 Base Attack Bonus and Saves</label>
            <input id='level1BABAndSaves' name='level1BABAndSaves' type='text' value={formData?.level1BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level2BABAndSaves">Level 2 Base Attack Bonus and Saves</label>
            <input id='level2BABAndSaves' name='level2BABAndSaves' type='text' value={formData?.level2BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level3BABAndSaves">Level 3 Base Attack Bonus and Saves</label>
            <input id='level3BABAndSaves' name='level3BABAndSaves' type='text' value={formData?.level3BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level4BABAndSaves">Level 4 Base Attack Bonus and Saves</label>
            <input id='level4BABAndSaves' name='level4BABAndSaves' type='text' value={formData?.level4BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level5BABAndSaves">Level 5 Base Attack Bonus and Saves</label>
            <input id='level5BABAndSaves' name='level5BABAndSaves' type='text' value={formData?.level5BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level6BABAndSaves">Level 6 Base Attack Bonus and Saves</label>
            <input id='level6BABAndSaves' name='levelBAB6AndSaves' type='text' value={formData?.level6BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level7BABAndSaves">Level 7 Base Attack Bonus and Saves</label>
            <input id='level7BABAndSaves' name='level7BABAndSaves' type='text' value={formData?.level7BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level8BABAndSaves">Level 8 Base Attack Bonus and Saves</label>
            <input id='level8BABAndSaves' name='level8BABAn8dSaves' type='text' value={formData?.level8BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level9BABAndSaves">Level 9 Base Attack Bonus and Saves</label>
            <input id='level9BABAndSaves' name='level9BABAndSaves' type='text' value={formData?.level9BABAndSaves} onChange={handleChange}/>

            <label htmlFor="level10BABAndSaves">Level 10 Base Attack Bonus and Saves</label>
            <input id='level10BABAndSaves' name='level10BABAndSaves' type='text' value={formData?.level10BABAndSaves} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel1">Spells Per Day Level 1</label>
            <input id='spellsPerDayLevel1' name='spellsPerDayLevel1' type='text' value={formData?.spellsPerDayLevel1} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel2">Spells Per Day Level 2</label>
            <input id='spellsPerDayLevel2' name='spellsPerDayLevel2' type='text' value={formData?.spellsPerDayLevel2} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel2">Spells Per Day Level 3</label>
            <input id='spellsPerDayLevel2' name='spellsPerDayLevel2' type='text' value={formData?.spellsPerDayLevel3} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel4">Spells Per Day Level 4</label>
            <input id='spellsPerDayLevel4' name='spellsPerDayLevel4' type='text' value={formData?.spellsPerDayLevel4} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel5">Spells Per Day Level 5</label>
            <input id='spellsPerDayLevel5' name='spellsPerDayLevel5' type='text' value={formData?.spellsPerDayLevel5} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel6">Spells Per Day Level 6</label>
            <input id='spellsPerDayLevel6' name='spellsPerDayLevel6' type='text' value={formData?.spellsPerDayLevel6} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel7">Spells Per Day Level 7</label>
            <input id='spellsPerDayLevel7' name='spellsPerDayLevel7' type='text' value={formData?.spellsPerDayLevel7} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel8">Spells Per Day Level 8</label>
            <input id='spellsPerDayLevel8' name='spellsPerDayLevel8' type='text' value={formData?.spellsPerDayLevel8} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel9">Spells Per Day Level 9</label>
            <input id='spellsPerDayLevel9' name='spellsPerDayLevel9' type='text' value={formData?.spellsPerDayLevel9} onChange={handleChange}/>

            <label htmlFor="spellsPerDayLevel10">Spells Per Day Level 10</label>
            <input id='spellsPerDayLevel10' name='spellsPerDayLevel10' type='text' value={formData?.spellsPerDayLevel10} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel1">Spells Known Level 1</label>
            <input id='spellsKnownLevel1' name='spellsKnownLevel1' type='text' value={formData?.spellsKnownLevel1} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel2">Spells known Level 2</label>
            <input id='spellsKnownLevel2' name='spellsKnownLevel2' type='text' value={formData?.spellsKnownLevel2} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel3">Spells Known Level 3</label>
            <input id='spellsKnownLevel3' name='spellsKnownLevel3' type='text' value={formData?.spellsKnownLevel3} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel4">Spells Known Level 4</label>
            <input id='spellsKnownLevel4' name='spellsKnownLevel4' type='text' value={formData?.spellsKnownLevel4} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel5">Spells Known Level 5</label>
            <input id='spellsKnownLevel5' name='spellsKnownLevel5' type='text' value={formData?.spellsKnownLevel5} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel6">Spells Known Level 6</label>
            <input id='spellsKnownLevel6' name='spellsKnownLevel6' type='text' value={formData?.spellsKnownLevel6} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel7">Spells Known Level 7</label>
            <input id='spellsKnownLevel7' name='spellsKnownLevel7' type='text' value={formData?.spellsKnownLevel7} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel8">Spells Known Level 8</label>
            <input id='spellsKnownLevel8' name='spellsKnownLevel8' type='text' value={formData?.spellsKnownLevel8} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel9">Spells Known Level 9</label>
            <input id='spellsKnownLevel9' name='spellsKnownLevel9' type='text' value={formData?.spellsKnownLevel9} onChange={handleChange}/>

            <label htmlFor="spellsKnownLevel10">Spells Known Level 10</label>
            <input id='spellsKnownLevel10' name='spellsKnownLevel10' type='text' value={formData?.spellsKnownLevel10} onChange={handleChange}/>

            <label htmlFor="classAbility1">Class Ability 1</label>
            <input id='classAbility1' name='classAbility1' type='text' value={formData?.classAbility1} onChange={handleChange}/>

            <label htmlFor="classAbility2">Class Ability 2</label>
            <input id='classAbility2' name='classAbility2' type='text' value={formData?.classAbility2} onChange={handleChange}/>

            <label htmlFor="classAbility3">Class Ability 3</label>
            <input id='classAbility3' name='classAbility3' type='text' value={formData?.classAbility3} onChange={handleChange}/>

            <label htmlFor="classAbility4">Class Ability 4</label>
            <input id='classAbility4' name='classAbility4' type='text' value={formData?.classAbility4} onChange={handleChange}/>

            <label htmlFor="classAbility5">Class Ability 5</label>
            <input id='classAbility5' name='classAbility5' type='text' value={formData?.spellsKnownLevel5} onChange={handleChange}/>

            <label htmlFor="classAbility6">Class Ability 6</label>
            <input id='classAbility6' name='classAbility6' type='text' value={formData?.spellsKnownLevel6} onChange={handleChange}/>

            <label htmlFor="classAbility7">Class Ability 7</label>
            <input id='classAbility7' name='classAbility7' type='text' value={formData?.spellsKnownLevel7} onChange={handleChange}/>

            <label htmlFor="classAbility8">Class Ability 8</label>
            <input id='classAbility8' name='classAbility8' type='text' value={formData?.spellsKnownLevel8} onChange={handleChange}/>

            <label htmlFor="classAbility9">Class Ability 9</label>
            <input id='classAbility9' name='classAbility9' type='text' value={formData?.spellsKnownLevel9} onChange={handleChange}/>

            <label htmlFor="classAbility10">Class Ability 10</label>
            <input id='classAbility10' name='classAbility10' type='text' value={formData?.spellsKnownLevel10} onChange={handleChange}/>
            
            <label htmlFor="description">Description</label>
            <input id='description' name='description' type='text' value={formData?.description} onChange={handleChange}/>
            
            <label htmlFor="source">Source</label>
            <input id='source' name='source' type='text' value={formData?.source} onChange={handleChange}/>

            <label htmlFor="image">Image</label>
            <input id='image' name='image' type='text' value={formData?.image} onChange={handleChange}/>

            <label htmlFor="notes">Notes</label>
            <input id='notes' name='notes' type='text' value={formData?.notes} onChange={handleChange}/>
            
                <button type='submit' onClick={handleSubmit}>
                    Edit it 
                </button>
    
        </FormContainer>
        </BigDiv>
    </div>
  )
}

export default EditPrestige