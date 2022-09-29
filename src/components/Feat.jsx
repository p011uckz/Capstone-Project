import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FeatContainer = styled.div`

  /* background-color: dodgerblue; */
  /* background-image: opacity: .1; */
  /* color: red; */
  /* background-repeat: no-repeat; */
  /* background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
  background-attachment: center;
  background-position: 50% 50%;
  background-size: 200vw;
  border-radius: 10px;
.card {
  padding: 10px;
}
h4{
  font-weight: 700;
}  
  img {
    width: 300px;
  } */

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

const Feat = ({ feat, updateFeatState }) => {

  const deleteFeat = (id) => {
    axios.delete(`http://https://ccp-backend.vercel.app/feat/${id}`)
    .then(res => {
      console.log(res)
      updateFeatState(id)
    })
  }

  return (
    <div>
      { feat.map( feat => {
        return (
          <FeatContainer key={feat._id}>
            <div className='card'>
              <h1> {feat.name} </h1>
                <Link to={`/Feats/${feat._id}`}>
                  <Button>
                    <h6>click for more details</h6>
                  </Button>
                </Link>
              <h4>Feat Benefits: </h4>
              <p>{feat.benefits} </p>
              <h4>What Prerequisites Are There To Select This Feat?:</h4> 
              <p>{feat.prerequisites} </p>
              {/* <h3>Feat Categories: </h3>
              <h4>Is It a General feat?:</h4> 
              <p>{feat.general}</p>
              <h4>Is It a Combat Feat?: </h4>
              <p>{feat.combat}</p>              
              <h4>Is It a Critical Feat?: </h4>
              <p>{feat.critical}</p>
              <h4>Is It a Metamagic Feat? How Many Levels Does It Add To Your Spell: </h4>
              <p>{feat.metamagic}</p>
              <h4>Is It a Teamwork Feat?: </h4>
              <p>{feat.teamwork}</p>
              <h4>Is It a Betrayal Feat?:</h4> 
              <p>{feat.betrayal}</p>              
              <h4>Is It an Item Creation Feat?:</h4> 
              <p>{feat.itemCreation}</p>
              <h4>Is It a Racial Feat?:</h4> 
              <p> {feat.racial}</p>
              <h4>Is It a Monster Feat?: </h4>
              <p>{feat.monster}</p>
              <h4>Is It an Achievement Feat?:</h4> 
              <p>{feat.achievement}</p>
              <h4>Is It a Style Feat?: </h4>
              <p> {feat.style}</p>
              <h4>Is It a Story Feat?: </h4>
              <p>{feat.story}</p>
              <h4>Is It a Stare Feat?: </h4>
              <p> {feat.stare}</p>
              <h4>Is It a Performance Feat?:</h4> 
              <p>{feat.performance}</p>
              <h4>Is It a Mythic?: </h4>
              <p>{feat.mythic}</p>
              <h4>Is It an Item Mastery Feat?: </h4>
              <p>{feat.itemMastery}</p>
              <h4>Is It a Grit Feat?: </h4>
              <p>{feat.grit}</p>
              <h4>Is It a Panache Feat?: </h4>
              <p>{feat.panache}</p>
              <h4>Is It a Damnation Feat?:</h4> 
              <p>{feat.damnation}</p>
              <h4>Is It an Animal Companion Feat?:</h4> 
              <p>{feat.animalCompanion}</p>
              <h4>Is It a Conduit Feat?: </h4>
              <p>{feat.conduit}</p>
              <h4>Is It a Blood Hex Feat?: </h4> */}
              {/* <p>{feat.bloodHex}</p>               */}
              <h4>Source: </h4>
              <p>{feat.source}</p>
              <h4>Notes:</h4> 
              <p>{feat.notes} </p>
            </div>
            <img src={feat.image} alt={feat.name} />
            <span className='featDate'>Created: {format(feat.createdAt)}</span>
            <Button onClick={()=>deleteFeat(feat._id)}>Delete me?</Button>
          </FeatContainer>
        )
      })}
    </div>
  )
}

export default Feat