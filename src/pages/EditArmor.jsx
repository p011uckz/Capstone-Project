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

const EditArmor = ({ setArmor }) => {

    let { id } = useParams()

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
    // const [armor, setArmor ] = useState()
    
    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.put(`http://https://ccp-backend.vercel.app//armor/${id}`, formData )
        .then(res => {

            setFormData(initialState)
            setArmor(res.data)
            navigate('/Armor')
          })
    }

    useEffect(()=>{
        axios.get(`https://ccp-backend.vercel.app//armor/${id}`)
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
                
                <label htmlFor="cost">Cost</label>
                <input id='cost' name='cost' type='text' value={formData?.cost} onChange={handleChange}/>
                
                <label htmlFor="armorOrShieldBonus">Armor Class Bonus</label>
                <input id='armorOrShieldBonus' name='armorOrShieldBonus' type='number' value={formData?.armorOrShieldBonus} onChange={handleChange}/>
                
                <label htmlFor="maximumDexBonus">Maximum Dexterity Bonus</label>
                <input id='maximumDexBonus' name='maximumDexBonus' type='number' value={formData?.maximumDexBonus} onChange={handleChange}/>
                
                <label htmlFor="armorCheckPenalty">Armor Check Penalty</label>
                <input id='armorCheckPenalty' name='armorCheckPenalty' type='number' value={formData?.armorCheckPenalty} onChange={handleChange}/>
                
                <label htmlFor="arcaneSpellFailure">Arcane Spell Failure Chance</label>
                <input id='arcaneSpellFailure' name='arcaneSpellFailure' type='number' value={formData?.arcaneSpellFailure} onChange={handleChange}/>
                
                <label htmlFor="speedWith20ftBase">Speed With 20ft Base</label>
                <input id='speedWith20ftBase' name='speedWith20ftBase' type='text' value={formData?.speedWith20ftBase} onChange={handleChange}/>
            
                <label htmlFor="speedWith30ftBase">Speed With 30ft Base</label>
                <input id='speedWith30ftBase' name='speedWith30ftBase' type='text' value={formData?.speedWith30ftBase} onChange={handleChange}/>
                
                <label htmlFor="weight">Weight</label>
                <input id='weight' name='weight' type='text' value={formData?.weight} onChange={handleChange}/>
                
                <label htmlFor="material">Material</label>
                <input id='material' name='material' type='text' value={formData?.material} onChange={handleChange}/>
            
                <label htmlFor="image">Image</label>
                <input id='image' name='image' type='text' value={formData?.image} onChange={handleChange}/>
                
                <label htmlFor="description">Description</label>
                <input id='description' name='description' type='text' value={formData?.description} onChange={handleChange}/>
                
                <label htmlFor="source">Source</label>
                <input id='source' name='source' type='text' value={formData?.source} onChange={handleChange} />
                
                <label htmlFor="notes">Notes</label>
                <input id='notes' name='notes' type='text' value={formData?.notes} onChange={handleChange}/>
                
                <label htmlFor="clothing">Clothing</label>
                <input id='clothing' name='clothing' type='text' value={formData?.clothing} onChange={handleChange}/>
                
                <label htmlFor="lightArmor">Light Armor</label>
                <input id='lightArmor' name='lightArmor' type='text' value={formData?.lightArmor} onChange={handleChange}/>
                
                <label htmlFor="mediumArmor">Medium Armor</label>
                <input id='mediumArmor' name='mediumArmor' type='text' value={formData?.mediumArmor} onChange={handleChange}/>
                
                <label htmlFor="heavyArmor">Heavy Armor</label>
                <input id='heavyArmor' name='heavyArmor' type='text' value={formData?.heavyArmor} onChange={handleChange}/>
            
                <button type='submit' onClick={handleSubmit}>
                    Reforge it
                </button>
            </FormContainer>
        </BigDiv>
    </div>
  )
}

export default EditArmor