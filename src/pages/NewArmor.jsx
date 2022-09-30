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


const NewArmor = ({ addArmor }) => {
    
    const navigate = useNavigate()
    
    const initialState = {
        name: '',
        clothing: '',
        lightArmor: '',
        mediumArmor: '',
        heavyArmor: '',
        cost: '',
        armorOrShieldBonus: '',
        maximumDexBonus: '',
        armorCheckPenalty: '',
        arcaneSpellFailure: '',
        speedWith20ftBase: '',
        speedWith30ftBase: '',
        weight: '',
        material: '',
        image: '',
        description: '',
        source: '',
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
        axios.post('https://ccp-backend.vercel.app/api/armor', formData )
        .then(res => {
            setFormData(initialState)
            addArmor({...res.data})
            navigate('/Armor')
          })
    }

  return (
    <BigDiv>
        <Navbar />

        <h1>New Armor</h1>

        <FormContainer>
    
        <label htmlFor="name">Name</label>
        <input id='name' name='name' type='text' onChange={handleChange}/>

        <label htmlFor="cost">Cost</label>
        <input id='cost' name='cost' type='text' onChange={handleChange}/>

        <label htmlFor="armorOrShieldBonus">Armor Class Bonus</label>
        <input id='armorOrShieldBonus' name='armorOrShieldBonus' type='number' onChange={handleChange}/>

        <label htmlFor="maximumDexBonus">Maximum Dexterity Bonus</label>
        <input id='maximumDexBonus' name='maximumDexBonus' type='number' onChange={handleChange}/>

        <label htmlFor="armorCheckPenalty">Armor Check Penalty</label>
        <input id='armorCheckPenalty' name='armorCheckPenalty' type='number' onChange={handleChange}/>

        <label htmlFor="arcaneSpellFailure">Arcane Spell Failure Chance</label>
        <input id='arcaneSpellFailure' name='arcaneSpellFailure' type='number' onChange={handleChange}/>

        <label htmlFor="speedWith20ftBase">Speed With 20ft Base</label>
        <input id='speedWith20ftBase' name='speedWith20ftBase' type='text' onChange={handleChange}/>
        
        <label htmlFor="speedWith30ftBase">Speed With 30ft Base</label>
        <input id='speedWith30ftBase' name='speedWith30ftBase' type='text' onChange={handleChange}/>

        <label htmlFor="weight">Weight</label>
        <input id='weight' name='weight' type='text' onChange={handleChange}/>

        <label htmlFor="material">Material</label>
        <input id='material' name='material' type='text' onChange={handleChange}/>
        
        <label htmlFor="image">Image</label>
        <input id='image' name='image' type='text' onChange={handleChange}/>

        <label htmlFor="description">Description</label>
        <input id='description' name='description' type='text' onChange={handleChange}/>

        <label htmlFor="source">Source</label>
        <input id='source' name='source' type='text' onChange={handleChange} />

        <label htmlFor="notes">Notes</label>
        <input id='notes' name='notes' type='text' onChange={handleChange}/>

        <label htmlFor="clothing">Clothing</label>
        <input id='clothing' name='clothing' type='text' onChange={handleChange}/>

        <label htmlFor="lightArmor">Light Armor</label>
        <input id='lightArmor' name='lightArmor' type='text' onChange={handleChange}/>

        <label htmlFor="mediumArmor">Medium Armor</label>
        <input id='mediumArmor' name='mediumArmor' type='text' onChange={handleChange}/>

        <label htmlFor="heavyArmor">Heavy Armor</label>
        <input id='heavyArmor' name='heavyArmor' type='text' onChange={handleChange}/>
        
        <button type='submit' onClick={handleSubmit}>
            Forge it 
        </button>
    
    </FormContainer>
    </BigDiv>
  )
}

export default NewArmor