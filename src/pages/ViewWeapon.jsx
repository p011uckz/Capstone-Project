import React, { useState, useEffect }from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'timeago.js'
import Navbar from '../components/Navbar'
import axios from 'axios'

const TitleContainer = styled.div`
  /* background-color: #fbf2c0; */
  /* background-color: #B8E1FF; */
  /* background-image: url(https://wallpaperaccess.com/full/2182.jpg); */
  /* background-image: url(https://visualparadox.com/images/no_linking_allowed_/640/armoury640.jpg); */
  
  
  /* background-image: url(https://cdna.artstation.com/p/assets/images/images/016/734/222/large/dmitry-masaltsev-5.jpg?1553256791); */
  background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
  background-attachment: center;
  background-position: 50% 35%;
  background-size: 100vw;
  h2 {
    text-align: center;

  }
`

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


const ViewWeapon = ({ updateWeaponState, weapon }) => {

    const { id } = useParams()
    
    const [ weapons, setWeapon ] = useState()

    useEffect(()=> {
        fetch(`http://https://ccp-backend.vercel.app/api/weapon/${id}`)
        .then(res => res.json())
        .then(data => setWeapon(data))
    }, [])

    const deleteWeapon = (id) => {
        axios.delete(`http://https://ccp-backend.vercel.app/api/weapon/${id}`)
        .then(res => {
          console.log(res)
          updateWeaponState(id)
        })
      }

  return (
    <TitleContainer>
        <Navbar/>
        <WeaponContainer key={weapons?._id}>
            <div className='card'>
            
                  <h1> {weapons?.name} </h1>
                  
              <p> {weapons?.source} </p>
              <p> {weapons?.description} </p>
              <h4>Cost:</h4>
              <p> {weapons?.cost} </p>
              <h4>Types:</h4>
              <p> Simple: &emsp; {weapons?.simple} </p>
              <p> Martial: &emsp; {weapons?.martial} </p>
              <p> Exotic: &emsp; {weapons?.exotic} </p>
              <p> Unarmed: &emsp; {weapons?.unarmed} </p>
              <p> Light Melee: &emsp; {weapons?.lightMelee} </p>
              <p> One-Handed Melee: &emsp; {weapons?.oneHandedMelee} </p>
              <p> Two-Handed Melee: &emsp; {weapons?.twoHandedMelee} </p>
              <p> Ranged: &emsp; {weapons?.ranged} </p>
              <p> Ammunition: &emsp; {weapons?.ammunition} </p>
              <h4>Range:</h4>
              <p> {weapons?.range} </p>
              <h4>Weight:</h4>
              <p> {weapons?.weight} </p>
              <h4>Damage Dice:</h4>
              <p> {weapons?.damage} </p>
              <h4>Critical Range And Modifier:</h4>
              <p> {weapons?.critical} </p>
              <h4>Damage Types:</h4>
              <p> Bludgeoning: &emsp; {weapons?.bludgeon} </p>
              <p> Slashing: &emsp; {weapons?.slashing} </p>
              <p> Piercing: &emsp; {weapons?.piercing} </p>
              <h4>Special:</h4>
              <p> {weapons?.special} </p>
              <h4>Notes:</h4>
              <p> {weapons?.notes} </p>
            </div>
            <img src={weapons?.image} alt={weapons?.name} />
              <span className='weaponDate'><h4>Created:</h4> {format(weapons?.createdAt)}</span>
            <Button onClick={() => deleteWeapon(weapons?._id)} >Delete me?</Button>
            <Link to={`/weapon/edit/${weapons?._id}`}><Button>Edit Weapon</Button></Link>
          </WeaponContainer>
        
    </TitleContainer>
  )
}

export default ViewWeapon