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
    text-align: center;
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

const NewFeat = ({ addFeat }) => {

    const navigate = useNavigate()

    const initialState = {
        name: '',
        source: '',
        prerequisites: '',
        benefits: '',
        general: '',
        combat: '',
        critical: '',
        teamwork: '',
        betrayal: '',
        metamagic: '',
        itemCreation: '',
        racial: '',
        monster: '',
        achievement: '',
        style: '',
        story: '',
        stare: '',
        performance: '',
        mythic: '',
        itemMastery: '',
        grit: '',
        panache: '',
        damnation: '',
        animalCompanion: '',
        conduit: '',
        bloodHex: '',
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
        axios.post('http://localhost:3001/feat', formData )
        .then(res => {
            setFormData(initialState)
            addFeat({...res.data})
            navigate('/Feats')
          })
    }

  return (
    <BigDiv>
        <Navbar />

        <h1>New Feat</h1>

        <FormContainer>

    
        <label htmlFor="name">Name</label>
        <input id='name' name='name' type='text' onChange={handleChange}/>

        <label htmlFor="prerequisites">Prerequesites</label>
        <input id='prerequisites' name='prerequisites' type='text' onChange={handleChange}/>

        <label htmlFor="benefits">Benefits</label>
        <input id='benefits' name='benefits' type='text' onChange={handleChange}/>

        <label htmlFor="source">Source</label>
        <input id='source' name='source' type='text' onChange={handleChange}/>

        <label htmlFor="notes">Notes</label>
        <input id='notes' name='notes' type='text' onChange={handleChange}/>

        <label htmlFor="image">Image</label>
        <input id='image' name='image' type='text' onChange={handleChange}/>
        
        <label htmlFor="general">General</label>
        <input id='general' name='general' type='text' onChange={handleChange}/>

        <label htmlFor="combat">Combat</label>
        <input id='combat' name='combat' type='text' onChange={handleChange}/>

        <label htmlFor="critical">Critical</label>
        <input id='critical' name='critical' type='text' onChange={handleChange}/>

        <label htmlFor="teamwork">Teamwork</label>
        <input id='teamwork' name='teamwork' type='text' onChange={handleChange}/>
        
        <label htmlFor="betrayal">Betrayal</label>
        <input id='betrayal' name='betrayal' type='text' onChange={handleChange}/>

        <label htmlFor="metamagic">Metamagic</label>
        <input id='metamagic' name='metamagic' type='text' onChange={handleChange}/>

        <label htmlFor="itemCreation">Item Creation</label>
        <input id='itemCreation' name='itemCreation' type='text' onChange={handleChange}/>
        
        <label htmlFor="racial">Racial</label>
        <input id='racial' name='racial' type='text' onChange={handleChange}/>

        <label htmlFor="monster">Monster</label>
        <input id='monster' name='monster' type='text' onChange={handleChange}/>

        <label htmlFor="achievement">Achievement</label>
        <input id='achievement' name='achievement' type='text' onChange={handleChange}/>

        <label htmlFor="style">Style</label>
        <input id='style' name='style' type='text' onChange={handleChange}/>

        <label htmlFor="story">Story</label>
        <input id='story' name='story' type='text' onChange={handleChange}/>

        <label htmlFor="stare">Stare</label>
        <input id='stare' name='stare' type='text' onChange={handleChange}/>

        <label htmlFor="performance">Performance</label>
        <input id='performance' name='performance' type='text' onChange={handleChange}/>

        <label htmlFor="mythic">Mythic</label>
        <input id='mythic' name='mythic' type='text' onChange={handleChange}/>

        <label htmlFor="itemMastery">Item Mastery</label>
        <input id='itemMastery' name='itemMastery' type='text' onChange={handleChange}/>

        <label htmlFor="grit">Grit</label>
        <input id='grit' name='grit' type='text' onChange={handleChange}/>

        <label htmlFor="panache">Panache</label>
        <input id='panache' name='panache' type='text' onChange={handleChange}/>

        <label htmlFor="damnation">Damnation</label>
        <input id='damnation' name='damnation' type='text' onChange={handleChange}/>

        <label htmlFor="animalCompanion">Animal Companion</label>
        <input id='animalCompanion' name='animalCompanion' type='text' onChange={handleChange}/>

        <label htmlFor="conduit">Conduit</label>
        <input id='conduit' name='conduit' type='text' onChange={handleChange}/>

        <label htmlFor="bloodHex">Blood Hex</label>
        <input id='bloodHex' name='bloodHex' type='text' onChange={handleChange}/>



               
        <button type='submit' onClick={handleSubmit}>
            Create it
        </button>
    
    </FormContainer>
    

    </BigDiv>
  )
}

export default NewFeat