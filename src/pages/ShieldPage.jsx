import React from 'react'
import Navbar from '../components/Navbar'
import Shield from '../components/Shield'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
const Button = styled.button`
  /* border-radius: 10px; */
  /* opacity: 0.5; */
  /* background-color: transparent; */
  /* background-image: url(https://thumbs.dreamstime.com/b/rolagem-de-papel-curvo-antigo-isolada-em-branco-deslocamento-longo-e-do-horizontal-isolado-164522335.jpg) */
  /* background-image: url(https://thumbs.dreamstime.com/b/bandeira-de-papel-vazia-da-fita-rolo-132570110.jpg); */


  
    /* background-image: url(https://thumbs.dreamstime.com/b/rolagem-de-papel-curvo-antigo-isolada-em-branco-deslocamento-longo-e-do-horizontal-isolado-164522335.jpg); */
    /* opacity: 0.5; */
    /* border-image: url(); */
    /* color: #0f3153; */

    opacity: 0.8;
    background-color: #0f3153;
    
    /* background-color: transparent; */
    border-radius: 10px;
    font-weight: 700;
    color: lightblue;
`

const ShieldPage = ({ shield, updateShieldState }) => {
  return (
    // <div>
      <TitleContainer>
        <Navbar />
        <h2>SHIELDS</h2>
        <Link to='/NewShields'>
          <Button>Create New Shields</Button>
        </Link>
      <Shield shield={shield} updateShieldState={updateShieldState}/>
      </TitleContainer>
      // </div>
  )
}

export default ShieldPage