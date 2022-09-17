import React from 'react'
import Item from '../components/Item'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    
    /* background-color: transparent; */
    border-radius: 10px;
    font-weight: 700;
    color: lightblue;

`
const ItemPage = ({ item, updateItemState}) => {
  return (
   
      <TitleContainer>
        <Navbar />
        <h2>ITEMS</h2>
        <Link to='/NewItems'>
          <Button>Create New Items</Button>
        </Link>
      <Item item={item} updateItemState={updateItemState} />
      </TitleContainer>
      
  )
}

export default ItemPage