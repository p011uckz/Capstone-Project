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


const NewWeapon = ({ addWeapon }) => {

  const navigate = useNavigate()

    const initialState = {
      name: '',
      simple: '',
      martial: '',
      exotic: '',
      unarmed: '',
      lightMelee: '',
      oneHandedMelee: '',
      twoHandedMelee: '',
      ranged: '',
      ammunition: '',
      cost: '',
      damage: '',
      critical: '',
      range: '',
      weight: '',
      bludgeon: '',
      piercing: '',
      slashing: '',
      special: '',
      description: '',
      image: '',
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
      axios.post('http://https://ccp-backend.vercel.app/weapon', formData )
      .then(res => {
        setFormData(initialState)
        addWeapon({...res.data})
        navigate('/Weapons')
      })
    }

  return (
    <BigDiv>
      
      <Navbar />
      <h1>New Weapon</h1>
        <FormContainer>            
          <label htmlFor="name">Name</label>
          <input id='name' name='name' type='text' onChange={handleChange}/>

          <label htmlFor="simple">Simple</label>
          <input id='simple' name='simple' type='text' onChange={handleChange}/>

          <label htmlFor="martial">Martial</label>
          <input id='martial' name='martial' type='text' onChange={handleChange}/>

          <label htmlFor="exotic">Exotic</label>
          <input id='exotic' name='exotic' type='text' onChange={handleChange}/>

          <label htmlFor="unarmed">Unarmed</label>
          <input id='unarmed' name='unarmed' type='text' onChange={handleChange}/>

          <label htmlFor="lightMelee">Light Melee</label>
          <input id='lightMelee' name='lightMelee' type='text' onChange={handleChange}/>

          <label htmlFor="oneHandedMelee">One Handed Melee</label>
          <input id='oneHandedMelee' name='oneHandedMelee' type='text' onChange={handleChange}/>

          <label htmlFor="twoHandedMelee">Two Handed Melee</label>
          <input id='twoHandedMelee' name='twoHandedMelee' type='text' onChange={handleChange}/>

          <label htmlFor="ranged">Ranged</label>
          <input id='ranged' name='ranged' type='text' onChange={handleChange}/>

          <label htmlFor="ammunition">Ammunition</label>
          <input id='ammunition' name='ammunition' type='text' onChange={handleChange}/>

          <label htmlFor="cost">Cost</label>
          <input id='cost' name='cost' type='text' onChange={handleChange}/>

          <label htmlFor="damage">Damage</label>
          <input id='damage' name='damage' type='text' onChange={handleChange}/>

          <label htmlFor="critical">Critical</label>
          <input id='critical' name='critical' type='text' onChange={handleChange}/>

          <label htmlFor="range">Range</label>
          <input id='range' name='range' type='text' onChange={handleChange}/>

          <label htmlFor="weight">Weight</label>
          <input id='weight' name='weight' type='text' onChange={handleChange}/>

          <label htmlFor="bludgeon">Bludgeon</label>
          <input id='bludgeon' name='bludgeon' type='text' onChange={handleChange}/>

          <label htmlFor="piercing">Piercing</label>
          <input id='piercing' name='piercing' type='text' onChange={handleChange}/>

          <label htmlFor="slashing">Slashing</label>
          <input id='slashing' name='slashing' type='text' onChange={handleChange}/>

          <label htmlFor="special">Special</label>
          <input id='special' name='special' type='text' onChange={handleChange}/>

          <label htmlFor="description">Description</label>
          <input id='description' name='description' type='text' onChange={handleChange}/>

          <label htmlFor="source">Source</label>
          <input id='source' name='source' type='text' onChange={handleChange}/>

          <label htmlFor="notes">Notes</label>
          <input id='notes' name='notes' type='text' onChange={handleChange}/>

          <label htmlFor="image">Image</label>
          <input id='image' name='image' type='text' onChange={handleChange}/>

          <button type='submit' onClick={handleSubmit}>
            Forge it 
            </button>

        </FormContainer>
    </BigDiv>
  )
}

export default NewWeapon