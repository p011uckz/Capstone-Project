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

const EditItem = ({ setItem }) => {

    let { id } = useParams()

    const navigate = useNavigate()

    const initialState = {
        itemType: '',
        metamagic: '', 
        name: '', 
        slot: '', 
        aura: '', 
        casterLevel: '', 
        potionLevel: '', 
        cost: '', 
        weight: '', 
        description: '', 
        castingTime: '', 
        components: '', 
        cultivationOrCreationRequirments: '', 
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
        axios.put(`http://https://ccp-backend.vercel.app/item/${id}`, formData )
        .then(res => {

            setFormData(initialState)
            setItem(res.data)
            navigate('/Items')
          
          })
    }

    useEffect(()=>{
        axios.get(`http://https://ccp-backend.vercel.app/item/${id}`)
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

            <label htmlFor="itemType">Item Type</label>
            <input id='itemType' name='itemType' type='text' value={formData?.itemType} onChange={handleChange}/>

            <label htmlFor="cost">Cost</label>
            <input id='cost' name='cost' type='number' value={formData?.cost} onChange={handleChange}/>

            <label htmlFor="metamagic">Metamagic</label>
            <input id='metamagic' name='metamagic' type='text' value={formData?.metamagic} onChange={handleChange}/>

            <label htmlFor="slot">Slot</label>
            <input id='slot' name='slot' type='text' value={formData?.slot} onChange={handleChange}/>

            <label htmlFor="aura">Aura</label>
            <input id='aura' name='aura' type='text' value={formData?.aura} onChange={handleChange}/>

            <label htmlFor="casterLevel">Caster Level</label>
            <input id='casterLevel' name='casterLevel' type='number' value={formData?.casterLevel} onChange={handleChange}/>

            <label htmlFor="potionLevel">Potion Level</label>
            <input id='potionLevel' name='potionLevel' type='number' value={formData?.potionLevel} onChange={handleChange}/>

            <label htmlFor="weight">Weight</label>
            <input id='weight' name='weight' type='text' value={formData?.weight} onChange={handleChange}/>

            <label htmlFor="description">Description</label>
            <input id='description' name='description' type='text' value={formData?.description} onChange={handleChange}/>

            <label htmlFor="castingTime">Casting Time</label>
            <input id='castingTime' name='castingTime' type='text' value={formData?.castingTime} onChange={handleChange}/>

            <label htmlFor="components">Components</label>
            <input id='components' name='components' type='text' value={formData?.components} onChange={handleChange}/>

            <label htmlFor="cultivationOrCreationRequirments">Cultivation or Creation Requirments</label>
            <input id='cultivationOrCreationRequirments' name='cultivationOrCreationRequirments' type='text' value={formData?.cultivationOrCreationRequirments} onChange={handleChange}/>

            <label htmlFor="image">Image</label>
            <input id='image' name='image' type='text' value={formData?.image} onChange={handleChange}/>

            <label htmlFor="source">Source</label>
            <input id='source' name='source' type='text' value={formData?.source} onChange={handleChange}/>

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

export default EditItem