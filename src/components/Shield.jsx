import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShieldContainer = styled.div`

  background-image: url(https://cdna.artstation.com/p/assets/images/images/016/734/222/large/dmitry-masaltsev-5.jpg?1553256791);
  
  color: yellow;
  border-radius: 20px;
  gap: 10px;
  .card {
    padding: 10px;
    font-weight: 700;
  }

  img {
    width: 300px;
    border-radius: inherit;
    padding: 0px;
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


const Shield = ({ shield, updateShieldState }) => {

  const deleteShield = (id) => {
    axios.delete(`http://https://ccp-backend.vercel.app/shield/${id}`)
    .then(res => {
      console.log(res)
      updateShieldState(id)
    })
  }
  return (
    <div>
      { shield.map( shield => {
        return (
          <ShieldContainer key={shield._id}>
            <div className='card'>
              <h1> {shield.name} </h1>
                <Link to={`/Shields/${shield._id}`}>
                  <Button>
                    <h6>click for more details</h6>
                  </Button>
                </Link>
              <p> {shield.description} </p>
              <h4> Cost: </h4>
              <p> {shield.cost} </p>
              <h4> Armor Class Bonus: </h4>
              <p> {shield.shieldBonus} </p>
              {/* <h4> Armor Check Penalty: </h4> */}
              {/* <p> {shield.armorCheckPenalty} </p> */}
              {/* <h4> Arcane Spell Failure Chance: </h4> */}
              {/* <p> {shield.arcaneSpellFailure}% </p> */}
              {/* <h4> Weight: </h4> */}
              {/* <p> {shield.weight} </p> */}
              <h4> Material: </h4>
              <p> {shield.material} </p>
              <h4> Source: </h4>
              <p> {shield.source} </p>
              <h4> Notes: </h4>
              <p> {shield.notes} </p>
            </div>
            <img src={shield.image} alt={shield.name} />
              <span className='shieldDate'><h4>Created:</h4> {format(shield.createdAt)}</span>
            <Button onClick={() => deleteShield(shield._id)}>Delete me?</Button>
          </ShieldContainer>
        )
      })}
    </div>
  )
}

export default Shield