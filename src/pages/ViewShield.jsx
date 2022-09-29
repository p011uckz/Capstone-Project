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


const ViewShield = ({updateShieldState, shield }) => {

    const { id } = useParams()
    
    const [ shields, setShield ] = useState()

    useEffect(()=> {
        fetch(`http://https://ccp-backend.vercel.app/shield/${id}`)
        .then(res => res.json())
        .then(data => setShield(data))
    }, [])

    const deleteShield = (id) => {
        axios.delete(`http://https://ccp-backend.vercel.app/shield/${id}`)
        .then(res => {
          console.log(res)
          updateShieldState(id)
        })
      }

  return (
    <TitleContainer>
        <Navbar/>
        <ShieldContainer key={shields?._id}>
            <div className='card'>
            
                  <h1> {shields?.name} </h1>
                  
              <p> {shields?.description} </p>
              <h4> Cost: </h4>
              <p> {shields?.cost} </p>
              <h4> Armor Bonus: </h4>
              <p> {shields?.shieldBonus} </p>
              <h4> Armor Check Penalty: </h4>
              <p> {shields?.armorCheckPenalty} </p>
              <h4> Arcane Spell Failure Chance: </h4>
              <p> {shields?.arcaneSpellFailure}% </p>
              <h4> Weight: </h4>
              <p> {shields?.weight} </p>
              <h4> Material: </h4>
              <p> {shields?.material} </p>
              <h4> Source: </h4>
              <p> {shields?.source} </p>
              <h4> Notes: </h4>
              <p> {shields?.notes} </p>
            </div>
            <img src={shields?.image} alt={shields?.name} />
              <span className='shieldDate'><h4>Created:</h4> {format(shields?.createdAt)}</span>
            <Button onClick={() => deleteShield(shields?._id)}>Delete me?</Button>
            <Link to={`/shield/edit/${shields?._id}`}><Button>Edit Shield</Button></Link>
          </ShieldContainer>
    </TitleContainer>
  )
}

export default ViewShield