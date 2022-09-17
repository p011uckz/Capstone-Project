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
const EditWeapon = ({ setWeapon }) => {

    let { id } = useParams()

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
      axios.put(`http://localhost:3001/weapon/${id}`, formData )
      .then(res => {

        setFormData(initialState)
        setWeapon(res.data)
        navigate('/Weapons')
      })
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/weapon/${id}`)
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

          <label htmlFor="simple">Simple</label>
          <input id='simple' name='simple' type='text' value={formData?.simple} onChange={handleChange}/>

          <label htmlFor="martial">Martial</label>
          <input id='martial' name='martial' type='text' value={formData?.martial} onChange={handleChange}/>

          <label htmlFor="exotic">Exotic</label>
          <input id='exotic' name='exotic' type='text' value={formData?.exotic} onChange={handleChange}/>

          <label htmlFor="unarmed">Unarmed</label>
          <input id='unarmed' name='unarmed' type='text' value={formData?.unarmed} onChange={handleChange}/>

          <label htmlFor="lightMelee">Light Melee</label>
          <input id='lightMelee' name='lightMelee' type='text' value={formData?.lightMelee} onChange={handleChange}/>

          <label htmlFor="oneHandedMelee">One Handed Melee</label>
          <input id='oneHandedMelee' name='oneHandedMelee' type='text' value={formData?.oneHandedMelee} onChange={handleChange}/>

          <label htmlFor="twoHandedMelee">Two Handed Melee</label>
          <input id='twoHandedMelee' name='twoHandedMelee' type='text' value={formData?.twoHandedMelee} onChange={handleChange}/>

          <label htmlFor="ranged">Ranged</label>
          <input id='ranged' name='ranged' type='text' value={formData?.ranged} onChange={handleChange}/>

          <label htmlFor="ammunition">Ammunition</label>
          <input id='ammunition' name='ammunition' type='text' value={formData?.ammunition} onChange={handleChange}/>

          <label htmlFor="cost">Cost</label>
          <input id='cost' name='cost' type='text' value={formData?.cost} onChange={handleChange}/>

          <label htmlFor="damage">Damage</label>
          <input id='damage' name='damage' type='text' value={formData?.damage} onChange={handleChange}/>

          <label htmlFor="critical">Critical</label>
          <input id='critical' name='critical' type='text' value={formData?.critical} onChange={handleChange}/>

          <label htmlFor="range">Range</label>
          <input id='range' name='range' type='text' value={formData?.range} onChange={handleChange}/>

          <label htmlFor="weight">Weight</label>
          <input id='weight' name='weight' type='text' value={formData?.weight} onChange={handleChange}/>

          <label htmlFor="bludgeon">Bludgeon</label>
          <input id='bludgeon' name='bludgeon' type='text' value={formData?.bludgeon} onChange={handleChange}/>

          <label htmlFor="piercing">Piercing</label>
          <input id='piercing' name='piercing' type='text' value={formData?.piercing} onChange={handleChange}/>

          <label htmlFor="slashing">Slashing</label>
          <input id='slashing' name='slashing' type='text' value={formData?.slashing} onChange={handleChange}/>

          <label htmlFor="special">Special</label>
          <input id='special' name='special' type='text' value={formData?.special} onChange={handleChange}/>

          <label htmlFor="description">Description</label>
          <input id='description' name='description' type='text' value={formData?.description} onChange={handleChange}/>

          <label htmlFor="source">Source</label>
          <input id='source' name='source' type='text' value={formData?.source} onChange={handleChange}/>

          <label htmlFor="notes">Notes</label>
          <input id='notes' name='notes' type='text' value={formData?.notes} onChange={handleChange}/>

          <label htmlFor="image">Image</label>
          <input id='image' name='image' type='text' value={formData?.image} onChange={handleChange}/>

            <button type='submit' onClick={handleSubmit}>
                Reforge it 
            </button>
        </FormContainer>
        </BigDiv>
    </div>
  )
}

export default EditWeapon