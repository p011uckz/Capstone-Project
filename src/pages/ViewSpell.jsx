import React, { useState, useEffect }from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'timeago.js'
import Navbar from '../components/Navbar'
import axios from 'axios'

const TitleContainer = styled.div`
    
  background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
  
  background-attachment: center;
  background-position: 50% 35%;
  background-size: 100vw;
  h2 {
    text-align: center;

  }
`
const Button = styled.button`
  opacity: 0.8;
  background-color: #0f3153;

  border-radius: 10px;
  font-weight: 700;
  color: lightblue;
`
const SpellContainer = styled.div`
  
  background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
  background-attachment: center;
  background-position: 50% 50%;
  background-size: 200vw;
  border-radius: 20px;
  img {
    width: 300px;
    border-radius: inherit;
    padding: 10px;
  }
  .card {
    padding: 10px;
    font-weight: 700;
  }
  p{
    margin-left: 30px;
  }
`


const ViewSpell = ({ updateSpellState, Spell}) => {

    const { id } = useParams()
    
    const [ spells, setSpell ] = useState()

    useEffect(()=> {
        fetch(`https://ccp-backend.vercel.app/api/spell/${id}`)
        .then(res => res.json())
        .then(data => setSpell(data))
    }, [])

    const deleteSpell = (id) => {
    axios.delete(`https://ccp-backend.vercel.app/api/spell/${id}`)
    .then(res => {
      console.log(res)
      updateSpellState(id)
    })
  }

  return (
    <TitleContainer>
        <Navbar/>
        <SpellContainer key={spells?._id}>
            <div className='card'>
            
                  <h1> {spells?.name} </h1>
                  
              <p> {spells?.school} </p>
              <p> {spells?.descriptor} </p>
              <p> {spells?.source} </p>
              <h4>What Classes Can Cast And At What Spell Level:</h4>
              <p> {spells?.levelAndClass} </p>
              <h4>Material Components:</h4>
              <p> {spells?.materialComponents} </p>
              <h4>Somatic Components:</h4>
              <p> {spells?.somaticComponent} </p>
              <h4>Verbal Component:</h4>
              <p> {spells?.verbalComponent} </p>
              <h4>Focus:</h4>
              <p> {spells?.focuc} </p>
              <p> {spells?.ifFocucYes} </p>
              <h4>Casting Time:</h4>
              <p> {spells?.castingTime} </p>
              <h4> Range:</h4>
              <p> {spells?.range} </p>
              <h4>Target:</h4>
              <p> {spells?.target} </p>
              <h4>Duration:</h4>
              <p> {spells?.duration} </p>
              <h4>Is There a Saving Throw, Which To Use, And What Is The Effect:</h4>
              <p> {spells?.savingThrow} </p>
              <h4>Is This Spell Effected By Spell Resistance:</h4>
              <p> {spells?.spellResistance} </p>
              <h4>Special Abilities:</h4>
              <p> {spells?.specialAbilities} </p>
              <h4>Notes</h4>
              <p> {spells?.notes} </p>
            </div>
            <img src={spells?.image} alt={spells?.name} />
              <span className='spellDate'><h4>Created:</h4> {format(spells?.createdAt)}</span>
            <Button onClick={() => deleteSpell(spells?._id)} >Delete me?</Button>
            <Link to={`/spell/edit/${spells?._id}`}><Button>Edit Spell</Button></Link>
          </SpellContainer>
    </TitleContainer>
  )
}

export default ViewSpell