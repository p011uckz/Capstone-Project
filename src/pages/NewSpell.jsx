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


const NewSpell = ({ addSpell }) => {

    const navigate = useNavigate()

    const initialState = {
        name: '',
        source: '',
        school: '',
        descriptor: '',
        levelAndClass: '',
        materialComponents: '',
        somaticComponent: '',
        focus: '',
        ifFocusYes: '',
        verbalComponent: '',
        castingTime: '',
        range: '',
        target: '',
        duration: '',
        savingThrow: '',
        spellResistance: '',
        specialAbilities: '',
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
        axios.post('https://ccp-backend.vercel.app/api/spell', formData )
        .then(res => {
            setFormData(initialState)
            addSpell({...res.data})
            navigate('/Spells')
          })
    }

  return (
    <BigDiv>
        <Navbar />
            <h1>New Spell</h1>
            <FormContainer>
                <label htmlFor="name">Name</label>
                <input id='name' name='name' type='text' onChange={handleChange}/>

                <label htmlFor="source">Source</label>
                <input id='source' name='source' type='text' onChange={handleChange}/>

                <label htmlFor="school">School</label>
                <input id='school' name='school' type='text' onChange={handleChange}/>

                <label htmlFor="descriptor">Descriptor</label>
                <input id='descriptor' name='descriptor' type='text' onChange={handleChange}/>

                <label htmlFor="LevelAndClass">Level and Class</label>
                <input id='LevelAndClass' name='LevelAndClass' type='text' onChange={handleChange}/>

                <label htmlFor="materialComponents">Material Components</label>
                <input id='materialComponents' name='materialComponents' type='text' onChange={handleChange}/>

                <label htmlFor="somaticComponents">Somatic Components</label>
                <input id='somaticComponents' name='somaticComponents' type='text' onChange={handleChange}/>

                <label htmlFor="focus">Focus</label>
                <input id='focus' name='focus' type='text' onChange={handleChange}/>

                <label htmlFor="verbalComponent">Verbal Components</label>
                <input id='verbalComponent' name='verbalComponent' type='text' onChange={handleChange}/>

                <label htmlFor="castingTime">Casting Time</label>
                <input id='castingTime' name='castingTime' type='text' onChange={handleChange}/>

                <label htmlFor="range">Range</label>
                <input id='range' name='range' type='text' onChange={handleChange}/>

                <label htmlFor="target">Target</label>
                <input id='target' name='target' type='text' onChange={handleChange}/>

                <label htmlFor="duration">Duration</label>
                <input id='duration' name='duration' type='text' onChange={handleChange}/>

                <label htmlFor="savingThrow">Saving Throw</label>
                <input id='savingThrow' name='savingThrow' type='text' onChange={handleChange}/>

                <label htmlFor="spellResistance">Spell Resistance</label>
                <input id='spellResistance' name='spellResistance' type='text' onChange={handleChange}/>

                <label htmlFor="specialAbilities">Special Abilities</label>
                <input id='specialAbilities' name='specialAbilities' type='text' onChange={handleChange}/>

                <label htmlFor="image">Image</label>
                <input id='image' name='image' type='text' onChange={handleChange}/>

                <label htmlFor="notes">Notes</label>
                <input id='notes' name='notes' type='text' onChange={handleChange}/>
                
                {/* <input type='submit' value='Create It' /> */}
                <button type='submit' onClick={handleSubmit}>
                    Create it
                    </button>

            </FormContainer>

    </BigDiv>
  )
}

export default NewSpell