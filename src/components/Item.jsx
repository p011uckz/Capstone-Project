import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'


const ItemContainer = styled.div`
/* background-image: url(https://cdna.artstation.com/p/assets/images/images/016/734/222/large/dmitry-masaltsev-5.jpg?1553256791); */
/* background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhLrPq2zbkiCP51-cSUQrQZJZcMQ5G1h87w&usqp=CAU);   */
  background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);  
  background-attachment: center;
  background-repeat: no-repeat;
  background-position: 50% 35%;
  background-size: 200vw;
  /* color: #ffff13; */
  border-radius: 20px;
  padding-top: 40px;
  /* gap: 100px; */
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

const Item = ({ item, updateItemState }) => {

  const deleteItem = (id) => {
    axios.delete(`http://https://ccp-backend.vercel.app/item/${id}`)
    .then(res => {
      console.log(res)
      updateItemState(id)
    })
  }

  return (
    <div>
      { item.map( item => {
        return (
          <ItemContainer key={item._id}>
            <div className='card'>
              <h1> {item.name} </h1>
                <Link to={`/Items/${item._id}`}>
                  <Button>
                    <h6>click for more details</h6>
                  </Button>
                </Link>
              <h4> {item.description} </h4>
              <h4> Cost: &emsp; {item.cost}gp</h4>
              <h4> Item Type: &emsp; {item.itemType}</h4>
              <h4> Slot: &emsp; {item.slot}</h4>
              <h4> Aura: &emsp; {item.aura}</h4>
              {/* <h4>Item Level(s)</h4>
              <p> Caster Level: &emsp; {item.casterLevel}</p>
              <p> Potion Level: &emsp; {item.potionLevel}</p> */}
              {/* <h4> Is it a Metamagic Item?: &emsp; {item.metamagic}</h4> */}
              {/* <h4> Weight: &emsp; {item.weight}</h4> */}
              {/* <h4> Casting Time: &emsp; {item.castingTime}</h4> */}
              {/* <h4> Components: &emsp; {item.components}</h4> */}
              {/* <h4> Cultivation or Creation Requirments:</h4> */}
              {/* <p>{item.cultivationOrCreationRequirments}</p> */}
              <h4> Source: &emsp; {item.source}</h4>
              <h4> Notes: &emsp; {item.notes}</h4>
            </div>
            <img src={item.image} alt={item.name} />
            <span className='itemDate'><h4>Created:</h4> {format(item.createdAt)}</span>
            <Button onClick={()=>deleteItem(item._id)}>Delete me?</Button>
          </ItemContainer>
        )
      })}
    </div>
  )
}

export default Item