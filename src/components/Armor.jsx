import { format } from 'timeago.js'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ArmorContainer = styled.div`

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

const Armor = ({ updateArmorState, armor, armors }) => {

  const deleteArmor = (id) => {
    axios.delete(`http://localhost:3001/armor/${id}`)
    .then(res => {
      console.log(res)
      updateArmorState(id)
    })
  }

  return (
    <div> 
        {
        armor.length === 0 ? 'No Armor Available' : ( armor.map( armor => {
        return (
          <ArmorContainer key={armor._id}>
            <div className='card'>
              <h1> {armor.name} </h1>
                <Link to={`/armor/${armor._id}`}>
                  <Button>
                    <h6>click for more details</h6>
                  </Button>
                </Link>
              <h4> Cost: &emsp; {armor.cost} </h4>
              <h4>  {armor.description} </h4>
              {/* <h4>Type of Armor:</h4> */}
              {/* <p> clothing: &emsp;{armor.clothing} </p> */}
              {/* <p> light: &emsp;{armor.lightArmor} </p> */}
              {/* <p> medium: &emsp;{armor.mediumArmor} </p> */}
              {/* <p> heavy: &emsp;{armor.heavyArmor} </p> */}
              {/* <h4> Armor Bonus: &emsp; {armor.armorOrShieldBonus} </h4> */}
              {/* <h4> Maximum Dexterity Bonus: &emsp; {armor.maximumDexBonus} </h4> */}
              {/* <h4> Armor Check Penalty : &emsp; {armor.armorCheckPenalty} </h4> */}
              {/* <h4> Arcane Spell Failure Percentage: &emsp; {armor.arcaneSpellFailure}% </h4> */}
              {/* <h4> Movment Speed With 20ft Base: &emsp; {armor.speedWith20ftBase} </h4> */}
              {/* <h4> Movment Speed With 30ft Base: &emsp; {armor.speedWith30ftBase} </h4> */}
              {/* <h4> Weight: &emsp; {armor.weight} </h4> */}
              <h4> Material: &emsp; {armor.material} </h4>
              <h4> Source: &emsp; {armor.source} </h4>
              <h4> Notes: &emsp; {armor.notes} </h4>
            </div>
            <img src={armor.image} alt={armor.name} />
              <span className='armorDate'><h4>Created:</h4> {format(armor.createdAt)}</span>
            <Button onClick={()=>deleteArmor(armor._id)}>Delete me?</Button>
          </ArmorContainer>
        )
      }))
      }
    </div>
  )
}

export default Armor