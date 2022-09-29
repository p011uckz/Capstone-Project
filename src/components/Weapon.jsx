import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const WeaponContainer = styled.div`

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

const Weapon = ({ weapon, updateWeaponState }) => {

  const deleteWeapon = (id) => {
    axios.delete(`http://https://ccp-backend.vercel.app/weapon/${id}`)
    .then(res => {
      console.log(res)
      updateWeaponState(id)
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // console.log(formData)
  //   axios.delete('http://localhost:3001/weapon', formData )
  //   .then(res => {
  //     // setFormData(initialState)
  //     // addWeapon({...res.data})
  //     // navigate('/Weapons')
  //   })
  // }

  return (
    <div>
      { weapon.map( weapon => {
        return (
          <WeaponContainer key={weapon._id}>
            <div className='card'>
            
                  <h1> {weapon.name} </h1>
                  <Link to={`/Weapons/${weapon._id}`}>
                <Button>
                  <h6>click for more details</h6>
                </Button>
              </Link>
              <p> {weapon.source} </p>
              <p> {weapon.description} </p>
              <h4>Cost:</h4>
              <p> {weapon.cost} </p>
              {/* <h4>Types:</h4>
              <p> Simple: &emsp; {weapon.simple} </p>
              <p> Martial: &emsp; {weapon.martial} </p>
              <p> Exotic: &emsp; {weapon.exotic} </p>
              <p> Unarmed: &emsp; {weapon.unarmed} </p>
              <p> Light Melee: &emsp; {weapon.lightMelee} </p>
              <p> One-Handed Melee: &emsp; {weapon.oneHandedMelee} </p>
              <p> Two-Handed Melee: &emsp; {weapon.twoHandedMelee} </p>
              <p> Ranged: &emsp; {weapon.ranged} </p>
              <p> Ammunition: &emsp; {weapon.ammunition} </p> */}
              {/* <h4>Range:</h4> */}
              {/* <p> {weapon.range} </p> */}
              {/* <h4>Weight:</h4> */}
              {/* <p> {weapon.weight} </p> */}
              <h4>Damage Dice:</h4>
              <p> {weapon.damage} </p>
              <h4>Critical Range And Modifier:</h4>
              <p> {weapon.critical} </p>
              <h4>Damage Types:</h4>
              <p> Bludgeoning: &emsp; {weapon.bludgeon} </p>
              <p> Slashing: &emsp; {weapon.slashing} </p>
              <p> Piercing: &emsp; {weapon.piercing} </p>
              <h4>Special:</h4>
              <p> {weapon.special} </p>
              <h4>Notes:</h4>
              <p> {weapon.notes} </p>
            </div>
            <img src={weapon.image} alt={weapon.name} />
              <span className='weaponDate'><h4>Created:</h4> {format(weapon.createdAt)}</span>
            <Button onClick={() => deleteWeapon(weapon._id)} >Delete me?</Button>
          </WeaponContainer>
        )
      })}
    </div>
  )
}

export default Weapon