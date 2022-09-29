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

const EditRace = ({ setRace }) => {

    let { id } = useParams()

    const navigate = useNavigate()

    const initialState = {
        name: '',
        racePoints: '',
        source: '',
        scoreModifierSTR: '',
        scoreModifierDex: '',
        scoreModifierCon: '',
        scoreModifierInt: '',
        scoreModifierWis: '',
        scoreModifierCha: '',
        type: '',
        size: '',
        baseSpeeds: '',
        languages: '',
        racialimmunities: '',
        spellLikeAbilities: '',
        darkvision: '',
        darkvisionDistance: '',
        lowLightVision: '',
        lowLightVisionDistance: '',
        otherRacialAbility1: '',
        otherRacialAbility2: '',
        otherRacialAbility3: '',
        otherRacialAbility4: '',
        otherRacialAbility5: '',
        defensiveTraits: '',
        offensiveTraits: '',
        featAndSkillTraits: '',
        movementTraits: '',
        senseTraits: '',
        alternateTrait1: '',
        alternateTrait2: '',
        alternateTrait3: '',
        alternateTrait4: '',
        alternateTrait5: '',
        alternateTrait6: '',
        alternateTrait7: '',
        alternateTrait8: '',
        racialFeats: '',
        racialItems: '',	
        favoredClassOptions: '',
        racialArchetypesAndBloodlines: '',
        randomStartingAgeAdulthood: '',
        randomStartingAgeIntuitive: '',
        randomStartingAgeSelfTaught: '',
        randomStartingAgeTrained: '',
        randomHeightMale: '',
        randomWeightMale: '',
        randomHeightFemale: '',
        randomWeightFemale: '',
        otherDescriptionNotes: '',
        racialLore: '',
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
        axios.put(`http://https://ccp-backend.vercel.app/api/race/${id}`, formData )
        .then(res => {

            setFormData(initialState)
            setRace(res.data)
            navigate('/Races')
          })
    }

    useEffect(()=>{
        axios.get(`http://https://ccp-backend.vercel.app/api/race/${id}`)
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

            <label htmlFor="racePoints">Race Points</label>
            <input id='racePoints' name='racePoints' type='number' value={formData?.racePoints} onChange={handleChange}/>

            <label htmlFor="source">Source</label>
            <input id='source' name='source' type='text' value={formData?.source} onChange={handleChange}/>

            <label htmlFor="scoreModifierSTR">Score Modifier STR</label>
            <input id='scoreModifierSTR' name='scoreModifierSTR' type='number' value={formData?.scoreModifierSTR} onChange={handleChange}/>

            <label htmlFor="scoreModifierDex">Score Modifier Dex</label>
            <input id='scoreModifierDex' name='scoreModifierDex' type='number' value={formData?.scoreModifierDex} onChange={handleChange}/>

            <label htmlFor="scoreModifierCon">Score Modifier Con</label>
            <input id='scoreModifierCon' name='scoreModifierCon' type='number' value={formData?.scoreModifierCon} onChange={handleChange}/>

            <label htmlFor="scoreModifierInt">Score Modifier Int</label>
            <input id='scoreModifierInt' name='scoreModifierInt' type='number' value={formData?.scoreModifierInt} onChange={handleChange}/>

            <label htmlFor="scoreModifierWis">Score Modifier Wis</label>
            <input id='scoreModifierWis' name='scoreModifierWis' type='number' value={formData?.scoreModifierWis} onChange={handleChange}/>

            <label htmlFor="scoreModifierCha">Score Modifier Cha</label>
            <input id='scoreModifierCha' name='scoreModifierCha' type='number' value={formData?.scoreModifierCha} onChange={handleChange}/>


            <label htmlFor="type">Type</label>
            <input id='type' name='type' type='text' value={formData?.type} onChange={handleChange}/>

            <label htmlFor="size">Size</label>
            <input id='size' name='size' type='text' value={formData?.size} onChange={handleChange}/>

            <label htmlFor="baseSpeeds">Base Speeds</label>
            <input id='baseSpeeds' name='baseSpeeds' type='text' value={formData?.baseSpeeds} onChange={handleChange}/>

            <label htmlFor="languages">Languages</label>
            <input id='languages' name='languages' type='text' value={formData?.languages} onChange={handleChange}/>
            
            <label htmlFor="racialImmunities">Racial Immunities</label>
            <input id='racialImmunities' name='racialImmunities' type='text' value={formData?.racialimmunities} onChange={handleChange}/>

            <label htmlFor="spellLikeAbilities">Spell Like Abilities</label>
            <input id='spellLikeAbilities' name='spellLikeAbilities' type='text' value={formData?.spellLikeAbilities} onChange={handleChange}/>

            <label htmlFor="darkvision">Darkvision</label>
            <input id='darkvision' name='darkvision' type='text' value={formData?.darkvision} onChange={handleChange}/>
            
            <label htmlFor="darkvisionDistance">Darkvision Distance</label>
            <input id='darkvisionDistance' name='darkvisionDistance' type='number' value={formData?.darkvisionDistance} onChange={handleChange}/>

            <label htmlFor="lowLightVision">Low Light Vision</label>
            <input id='lowLightVision' name='lowLightVision' type='text' value={formData?.lowLightVision} onChange={handleChange}/>

            <label htmlFor="lowLightVisionDistance">Low Light Vision Distance</label>
            <input id='lowLightVision' name='lowLightVision' type='text' value={formData?.lowLightVisionDistance} onChange={handleChange}/>
            
            <label htmlFor="otherRacialAbility1">Other Racial Ability 1</label>
            <input id='otherRacialAbility1' name='otherRacialAbility1' type='text' value={formData?.otherRacialAbility1} onChange={handleChange}/>

            <label htmlFor="otherRacialAbility2">Other Racial Ability 2</label>
            <input id='otherRacialAbility2' name='otherRacialAbility2' type='text' value={formData?.otherRacialAbility2} onChange={handleChange}/>

            <label htmlFor="otherRacialAbility3">Other Racial Ability 3</label>
            <input id='otherRacialAbility3' name='otherRacialAbility3' type='text' value={formData?.otherRacialAbility3} onChange={handleChange}/>

            <label htmlFor="otherRacialAbility4">Other Racial Ability 4</label>
            <input id='otherRacialAbility4' name='otherRacialAbility4' type='text' value={formData?.otherRacialAbility4} onChange={handleChange}/>

            <label htmlFor="otherRacialAbility5">Other Racial Ability 5</label>
            <input id='otherRacialAbility5' name='otherRacialAbility5' type='text' value={formData?.otherRacialAbility5} onChange={handleChange}/>

            <label htmlFor="defensiveTraits">Defensive Traits</label>
            <input id='defensiveTraits' name='defensiveTraits' type='text' value={formData?.defensiveTraits} onChange={handleChange}/>

            <label htmlFor="offensiveTraits">Offensive Traits</label>
            <input id='offensiveTraits' name='offensiveTraits' type='text' value={formData?.offensiveTraits} onChange={handleChange}/>

            <label htmlFor="featAndSkillTraits">Feat and Skill Traits</label>
            <input id='featAndSkillTraits' name='featAndSkillTraits' type='text' value={formData?.featAndSkillTraits} onChange={handleChange}/>

            <label htmlFor="movementTraits">Movement Traits</label>
            <input id='movementTraits' name='movementTraits' type='text' value={formData?.movementTraits} onChange={handleChange}/>

            <label htmlFor="senseTraits">Sense Traits</label>
            <input id='senseTraits' name='senseTraits' type='text' value={formData?.senseTraits} onChange={handleChange}/>

            <label htmlFor="alternateTrait1">Alternate Trait 1</label>
            <input id='alternateTrait1' name='alternateTrait1' type='text' value={formData?.alternateTrait1} onChange={handleChange}/>

            <label htmlFor="alternateTrait2">Alternate Trait 2</label>
            <input id='alternateTrait2' name='alternateTrait2' type='text' value={formData?.alternateTrait2} onChange={handleChange}/>

            <label htmlFor="alternateTrait3">Alternate Trait 3</label>
            <input id='alternateTrait3' name='alternateTrait3' type='text' value={formData?.alternateTrait3} onChange={handleChange}/>

            <label htmlFor="alternateTrait4">Alternate Trait 4</label>
            <input id='alternateTrait4' name='alternateTrait4' type='text' value={formData?.alternateTrait4} onChange={handleChange}/>

            <label htmlFor="alternateTrait5">Alternate Trait 5</label>
            <input id='alternateTrait5' name='alternateTrait5' type='text' value={formData?.alternateTrait5} onChange={handleChange}/>

            <label htmlFor="alternateTrait6">Alternate Trait 6</label>
            <input id='alternateTrait6' name='alternateTrait6' type='text' value={formData?.alternateTrait6} onChange={handleChange}/>

            <label htmlFor="alternateTrait7">Alternate Trait 7</label>
            <input id='alternateTrait7' name='alternateTrait7' type='text' value={formData?.alternateTrait7} onChange={handleChange}/>

            <label htmlFor="alternateTrait8">Alternate Trait 8</label>
            <input id='alternateTrait8' name='alternateTrait8' type='text' value={formData?.alternateTrait8} onChange={handleChange}/>

            <label htmlFor="racialFeats">Racial Feats</label>
            <input id='racialFeats' name='racialFeats' type='text' value={formData?.racialFeats} onChange={handleChange}/>

            <label htmlFor="racialItems">Racial Items</label>
            <input id='racialItems' name='racialItems' type='text' value={formData?.racialItems} onChange={handleChange}/>

            <label htmlFor="favoredClassOptions">Favored Class Options</label>
            <input id='favoredClassOptions' name='favoredClassOptions' type='text' value={formData?.favoredClassOptions} onChange={handleChange}/>

            <label htmlFor="racialArchetypesAndBloodlines">Racial Archetypes and Bloodlines</label>
            <input id='racialArchetypesAndBloodlines' name='racialArchetypesAndBloodlines' type='text' value={formData?.racialArchetypesAndBloodlines} onChange={handleChange}/>

            <label htmlFor="racialStartingAgeAdulthood">Racial Starting Age: Adulthood</label>
            <input id='racialStartingAgeAdulthood' name='racialStartingAgeAdulthood' type='text' value={formData?.randomStartingAgeAdulthood} onChange={handleChange}/>

            <label htmlFor="racialStartingAgeIntuitive">Racial Starting Age: Intuitive</label>
            <input id='racialStartingAgeIntuitive' name='racialStartingAgeIntuitive' type='text' value={formData?.randomStartingAgeIntuitive} onChange={handleChange}/>

            <label htmlFor="racialStartingAgeSelfTaught">Racial Starting Age: SelfTaught </label>
            <input id='racialStartingAgeSelfTaught' name='racialStartingAgeSelfTaught' type='text' value={formData?.randomStartingAgeSelfTaught} onChange={handleChange}/>

            <label htmlFor="racialStartingAgeTrained">Racial Starting Age: Trained </label>
            <input id='racialStartingAgeTrained' name='racialStartingAgeTrained' type='text' value={formData?.randomStartingAgeTrained} onChange={handleChange}/>

            <label htmlFor="randomHeightMale">Random Height: Male</label>
            <input id='randomHeightMale' name='randomHeightMale' type='text' value={formData?.randomHeightMale} onChange={handleChange}/>

            <label htmlFor="randomWeightMale">Random Weight: Male</label>
            <input id='randomWeightMale' name='randomWeightMale' type='text' value={formData?.randomWeightMale} onChange={handleChange}/>

            <label htmlFor="randomHeightFemale">Random Height: Female</label>
            <input id='randomHeightFemale' name='randomHeightFemale' type='text' value={formData?.randomHeightFemale} onChange={handleChange}/>

            <label htmlFor="randomWeightFemale">Random Weight: Female</label>
            <input id='randomWeightFemale' name='randomWeightFemale' type='text' value={formData?.randomWeightFemale} onChange={handleChange}/>

            <label htmlFor="otherDescriptionNotes">Other Description Notes</label>
            <input id='otherDescriptionNotes' name='otherDescriptionNotes' type='text' value={formData?.otherDescriptionNotes} onChange={handleChange}/>

            <label htmlFor="racialLore">Racial Lore</label>
            <input id='racialLore' name='racialLore' type='text' value={formData?.racialLore} onChange={handleChange}/>

            <label htmlFor="notes">Notes</label>
            <input id='notes' name='notes' type='text' value={formData?.notes} onChange={handleChange}/>
            
            <label htmlFor="image">Image</label>
            <input id='image' name='image' type='text' value={formData?.image} onChange={handleChange}/>
            
                <button type='submit' onClick={handleSubmit}>
                    Edit it
                </button>
        
        </FormContainer>
        </BigDiv>
    </div>
  )
}

export default EditRace