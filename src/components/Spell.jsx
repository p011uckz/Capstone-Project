import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

const Button = styled.button`
  opacity: 0.8;
  background-color: #0f3153;

  border-radius: 10px;
  font-weight: 700;
  color: lightblue;
`
const Spell = ({ spell, updateSpellState }) => {

  const deleteSpell = (id) => {
    axios.delete(`http://https://ccp-backend.vercel.app/spell/${id}`)
    .then(res => {
      console.log(res)
      updateSpellState(id)
    })
  }

  return (
    <div>
      { spell.map( spell => {
        return (
          <SpellContainer key={spell._id}>
            <div className='card'>
            
                  <h1> {spell.name} </h1>
                  <Link to={`/Spells/${spell._id}`}>
                <Button>
                  <h6>click for more details</h6>
                </Button>
              </Link>
              <p> {spell.school} </p>
              <p> {spell.descriptor} </p>
              <p> {spell.source} </p>
              {/* <h4>What Classes Can Cast And At What Spell Level:</h4>
              <p> {spell.levelAndClass} </p> */}
              {/* <h4>Material Components:</h4> */}
              {/* <p> {spell.materialComponents} </p> */}
              {/* <h4>Somatic Components:</h4> */}
              {/* <p> {spell.somaticComponent} </p> */}
              {/* <h4>Verbal Component:</h4> */}
              {/* <p> {spell.verbalComponent} </p> */}
              {/* <h4>Focus:</h4> */}
              {/* <p> {spell.focuc} </p> */}
              {/* <p> {spell.ifFocucYes} </p> */}
              {/* <h4>Casting Time:</h4> */}
              {/* <p> {spell.castingTime} </p> */}
              {/* <h4> Range:</h4> */}
              {/* <p> {spell.range} </p> */}
              {/* <h4>Target:</h4> */}
              {/* <p> {spell.target} </p> */}
              {/* <h4>Duration:</h4> */}
              {/* <p> {spell.duration} </p> */}
              {/* <h4>Is There a Saving Throw, Which To Use, And What Is The Effect:</h4> */}
              {/* <p> {spell.savingThrow} </p> */}
              {/* <h4>Is This Spell Effected By Spell Resistance:</h4> */}
              {/* <p> {spell.spellResistance} </p> */}
              {/* <h4>Special Abilities:</h4> */}
              {/* <p> {spell.specialAbilities} </p> */}
              <h4>Notes</h4>
              <p> {spell.notes} </p>
            </div>
            <img src={spell.image} alt={spell.name} />
              <span className='spellDate'><h4>Created:</h4> {format(spell.createdAt)}</span>
            <Button onClick={() => deleteSpell(spell._id)} >Delete me?</Button>
          </SpellContainer>
        )
      })}
    </div>
  )
}

export default Spell