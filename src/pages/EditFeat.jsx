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

const EditFeat = ({ setFeat }) => {

    let { id } = useParams()

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
        axios.put(`http://https://ccp-backend.vercel.app/api/feat/${id}`, formData )
        .then(res => {

            setFormData(initialState)
            setFeat(res.data)
            navigate('/Feats')
          })
    }
    
    useEffect(()=>{
        axios.get(`http://https://ccp-backend.vercel.app/api/feat/${id}`)
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

            <label htmlFor="prerequisites">Prerequesites</label>
            <input id='prerequisites' name='prerequisites' type='text' value={formData?.prerequisites} onChange={handleChange}/>

            <label htmlFor="benefits">Benefits</label>
            <input id='benefits' name='benefits' type='text' value={formData?.benefits} onChange={handleChange}/>

            <label htmlFor="source">Source</label>
            <input id='source' name='source' type='text' value={formData?.source} onChange={handleChange}/>

            <label htmlFor="notes">Notes</label>
            <input id='notes' name='notes' type='text' value={formData?.notes} onChange={handleChange}/>

            <label htmlFor="image">Image</label>
            <input id='image' name='image' type='text' value={formData?.image} onChange={handleChange}/>

            <label htmlFor="general">General</label>
            <input id='general' name='general' type='text' value={formData?.general} onChange={handleChange}/>

            <label htmlFor="combat">Combat</label>
            <input id='combat' name='combat' type='text' value={formData?.combat} onChange={handleChange}/>

            <label htmlFor="critical">Critical</label>
            <input id='critical' name='critical' type='text' value={formData?.critical} onChange={handleChange}/>

            <label htmlFor="teamwork">Teamwork</label>
            <input id='teamwork' name='teamwork' type='text' value={formData?.teamwork} onChange={handleChange}/>

            <label htmlFor="betrayal">Betrayal</label>
            <input id='betrayal' name='betrayal' type='text' value={formData?.betrayal} onChange={handleChange}/>

            <label htmlFor="metamagic">Metamagic</label>
            <input id='metamagic' name='metamagic' type='text' value={formData?.metamagic} onChange={handleChange}/>

            <label htmlFor="itemCreation">Item Creation</label>
            <input id='itemCreation' name='itemCreation' type='text' value={formData?.itemCreation} onChange={handleChange}/>

            <label htmlFor="racial">Racial</label>
            <input id='racial' name='racial' type='text' value={formData?.racial} onChange={handleChange}/>

            <label htmlFor="monster">Monster</label>
            <input id='monster' name='monster' type='text' value={formData?.monster} onChange={handleChange}/>

            <label htmlFor="achievement">Achievement</label>
            <input id='achievement' name='achievement' type='text' value={formData?.achievement} onChange={handleChange}/>

            <label htmlFor="style">Style</label>
            <input id='style' name='style' type='text' value={formData?.style} onChange={handleChange}/>

            <label htmlFor="story">Story</label>
            <input id='story' name='story' type='text' value={formData?.story} onChange={handleChange}/>

            <label htmlFor="stare">Stare</label>
            <input id='stare' name='stare' type='text' value={formData?.stare} onChange={handleChange}/>

            <label htmlFor="performance">Performance</label>
            <input id='performance' name='performance' type='text' value={formData?.performance} onChange={handleChange}/>

            <label htmlFor="mythic">Mythic</label>
            <input id='mythic' name='mythic' type='text' value={formData?.mythic} onChange={handleChange}/>

            <label htmlFor="itemMastery">Item Mastery</label>
            <input id='itemMastery' name='itemMastery' type='text' value={formData?.itemMastery} onChange={handleChange}/>

            <label htmlFor="grit">Grit</label>
            <input id='grit' name='grit' type='text' value={formData?.grit} onChange={handleChange}/>

            <label htmlFor="panache">Panache</label>
            <input id='panache' name='panache' type='text' value={formData?.panache} onChange={handleChange}/>

            <label htmlFor="damnation">Damnation</label>
            <input id='damnation' name='damnation' type='text' value={formData?.damnation} onChange={handleChange}/>

            <label htmlFor="animalCompanion">Animal Companion</label>
            <input id='animalCompanion' name='animalCompanion' type='text' value={formData?.animalCompanion} onChange={handleChange}/>

            <label htmlFor="conduit">Conduit</label>
            <input id='conduit' name='conduit' type='text' value={formData?.conduit} onChange={handleChange}/>

            <label htmlFor="bloodHex">Blood Hex</label>
            <input id='bloodHex' name='bloodHex' type='text' value={formData?.bloodHex} onChange={handleChange}/>
                
                <button type='submit' onClick={handleSubmit}>
                    Edit it
                </button>

        </FormContainer>
        </BigDiv>
    </div>
  )
}

export default EditFeat