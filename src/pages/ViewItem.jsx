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
const ItemContainer = styled.div`
  
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

const ViewItem = ({updateItemState, item}) => {

    const { id } = useParams()
    
    const [ items, setBaseClass ] = useState()

    useEffect(()=> {
        fetch(`http://https://ccp-backend.vercel.app/item/${id}`)
        .then(res => res.json())
        .then(data => setBaseClass(data))
    }, [])

    const deleteItem = (id) => {
        axios.delete(`http://https://ccp-backend.vercel.app/item/${id}`)
        .then(res => {
          console.log(res)
          updateItemState(id)
        })
      }
  return (
    <TitleContainer>
        <Navbar/>
        <ItemContainer key={items?._id}>
    <div className='card'>
    
          <h1> {items?.name} </h1>
          
      <h4> {items?.description} </h4>
      <h4> Cost: &emsp; {items?.cost}gp</h4>
      <h4> Item Type: &emsp; {items?.itemType}</h4>
      <h4> Is it a Metamagic Item?: &emsp; {items?.metamagic}</h4>
      <h4> Slot: &emsp; {items?.slot}</h4>
      <h4> Aura: &emsp; {items?.aura}</h4>
      <h4>Item Level(s)</h4>
      <p> Caster Level: &emsp; {items?.casterLevel}</p>
      <p> Potion Level: &emsp; {items?.potionLevel}</p>
      <h4> Weight: &emsp; {items?.weight}</h4>
      <h4> Casting Time: &emsp; {items?.castingTime}</h4>
      <h4> Components: &emsp; {items?.components}</h4>
      <h4> Cultivation or Creation Requirments:</h4>
      <p>{items?.cultivationOrCreationRequirments}</p>
      <h4> Source: &emsp; {items?.source}</h4>
      <h4> Notes: &emsp; {items?.notes}</h4>
    </div>
    <img src={items?.image} alt={items?.name} />
    <span className='itemDate'><h4>Created:</h4> {format(items?.createdAt)}</span>
    <Button onClick={()=>deleteItem(items?._id)}>Delete me?</Button>
    <Link to={`/Item/edit/${items?._id}`}><Button>Edit Item</Button></Link>
  </ItemContainer></TitleContainer>
  )
}

export default ViewItem