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

const NewShield = ({ addShield }) => {

    const navigate = useNavigate()

    const initialState = {
        name: '',
        cost: '',
        shieldBonus: '',
        maximumDexBonus: '',
        armorCheckPenalty: '',
        arcaneSpellFailure: '',
        weight: '',
        material: '',
        image: '',
        description: '',
        source: '',
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
        axios.post('http://https://ccp-backend.vercel.app/api/shield', formData )
        .then(res => {
            setFormData(initialState)
            addShield({...res.data})
            navigate('/Shields')
          })
    }

  return (
    <BigDiv>
        <Navbar />
        <h1>New Shield</h1>
            <FormContainer>    
                <label htmlFor="name">Name</label>
                <input id='name' name='name' type='text' onChange={handleChange}/>

                <label htmlFor="cost">Cost</label>
                <input id='cost' name='cost' type='text' onChange={handleChange}/>

                <label htmlFor="shieldBonus">Shield Bonus</label>
                <input id='shieldBonus' name='shieldBonus' type='number' onChange={handleChange}/>

                <label htmlFor="maximumDexBonus">Maximum Dexterity Bonus</label>
                <input id='maximumDexBonus' name='maximumDexBonus' type='text' onChange={handleChange}/>

                <label htmlFor="armorCheckPenalty">Armor Check Penalty</label>
                <input id='armorCheckPenalty' name='armorCheckPenalty' type='number' onChange={handleChange}/>

                <label htmlFor="arcaneSpellFailure">Arcane Spell Failure Chance</label>
                <input id='arcaneSpellFailure' name='arcaneSpellFailure' type='text' onChange={handleChange}/>

                <label htmlFor="weight">Weight</label>
                <input id='weight' name='weight' type='text' onChange={handleChange}/>

                <label htmlFor="material">Material</label>
                <input id='material' name='material' type='text' onChange={handleChange}/>
                
                <label htmlFor="image">Image</label>
                <input id='image' name='image' type='text' onChange={handleChange}/>

                <label htmlFor="description">Description</label>
                <input id='description' name='description' type='text' onChange={handleChange}/>

                <label htmlFor="source">Source</label>
                <input id='source' name='source' type='text' onChange={handleChange}/>

                <label htmlFor="notes">Notes</label>
                <input id='notes' name='notes' type='text' onChange={handleChange}/>
                                
                <button type='submit' onClick={handleSubmit}>
                    Forge it 
                    </button>
            
            </FormContainer>
    </BigDiv>
  )
}

export default NewShield