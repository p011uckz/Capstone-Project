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
const FeatContainer = styled.div`
  
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

const ViewFeats = ({ updateFeatState, feat }) => {
    
    const { id } = useParams()
    
    const [ feats, setFeat ] = useState()

    useEffect(()=> {
        fetch(`https://ccp-backend.vercel.app/api/feat/${id}`)
        .then(res => res.json())
        .then(data => setFeat(data))
    }, [])

    const deleteFeat = (id) => {
        axios.delete(`https://ccp-backend.vercel.app/api/feat/${id}`)
        .then(res => {
          console.log(res)
          updateFeatState(id)
        })
      }

  return (
    <TitleContainer>
      <Navbar/>
          <FeatContainer key={feats?._id}>
            <div className='card'>
            
                  <h1> {feats?.name} </h1>
                  
              <h4>Feat Benefits: </h4>
              <p>{feats?.benefits} </p>
              <h4>What Prerequisites Are There To Select This Feat?:</h4> 
              <p>{feats?.prerequisites} </p>
              <h3>Feat Categories: </h3>
              <h4>Is It a General feat?:</h4> 
              <p>{feats?.general}</p>
              <h4>Is It a Combat Feat?: </h4>
              <p>{feats?.combat}</p>              
              <h4>Is It a Critical Feat?: </h4>
              <p>{feats?.critical}</p>
              <h4>Is It a Metamagic Feat? How Many Levels Does It Add To Your Spell: </h4>
              <p>{feats?.metamagic}</p>
              <h4>Is It a Teamwork Feat?: </h4>
              <p>{feats?.teamwork}</p>
              <h4>Is It a Betrayal Feat?:</h4> 
              <p>{feats?.betrayal}</p>              
              <h4>Is It an Item Creation Feat?:</h4> 
              <p>{feats?.itemCreation}</p>
              <h4>Is It a Racial Feat?:</h4> 
              <p> {feats?.racial}</p>
              <h4>Is It a Monster Feat?: </h4>
              <p>{feats?.monster}</p>
              <h4>Is It an Achievement Feat?:</h4> 
              <p>{feats?.achievement}</p>
              <h4>Is It a Style Feat?: </h4>
              <p> {feats?.style}</p>
              <h4>Is It a Story Feat?: </h4>
              <p>{feats?.story}</p>
              <h4>Is It a Stare Feat?: </h4>
              <p> {feats?.stare}</p>
              <h4>Is It a Performance Feat?:</h4> 
              <p>{feats?.performance}</p>
              <h4>Is It a Mythic?: </h4>
              <p>{feats?.mythic}</p>
              <h4>Is It an Item Mastery Feat?: </h4>
              <p>{feats?.itemMastery}</p>
              <h4>Is It a Grit Feat?: </h4>
              <p>{feats?.grit}</p>
              <h4>Is It a Panache Feat?: </h4>
              <p>{feats?.panache}</p>
              <h4>Is It a Damnation Feat?:</h4> 
              <p>{feats?.damnation}</p>
              <h4>Is It an Animal Companion Feat?:</h4> 
              <p>{feats?.animalCompanion}</p>
              <h4>Is It a Conduit Feat?: </h4>
              <p>{feats?.conduit}</p>
              <h4>Is It a Blood Hex Feat?: </h4>
              <p>{feats?.bloodHex}</p>              
              <h4>Source: </h4>
              <p>{feats?.source}</p>
              <h4>Notes:</h4> 
              <p>{feats?.notes} </p>
            </div>
            <img src={feats?.image} alt={feats?.name} />
            <span className='featDate'>Created: {format(feats?.createdAt)}</span>
            <Button onClick={()=>deleteFeat(feats?._id)}>Delete me?</Button>
            <Link to={`/Feat/edit/${feats?._id}`}><Button>Edit Feat</Button></Link>
          </FeatContainer>
       
    </TitleContainer>
  )
}

export default ViewFeats