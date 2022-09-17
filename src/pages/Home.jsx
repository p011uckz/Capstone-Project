import React from 'react'
import styled from 'styled-components'
// import Armor from '../components/Armor'
// import Core from '../components/Core'
// import Feat from '../components/Feat'
// import Item from '../components/Item'
// import Prestige from '../components/Prestige'
// import Race from '../components/Race'
// import Shield from '../components/Shield'
// import Spell from '../components/Spell'
// import Weapon from '../components/Weapon'
// import ArmorPage from '../pages/ArmorPage'
// import CoreClassPage from '../pages/CoreClassPage'
// import FeatsPage from '../pages/FeatsPage'
// import ItemPage from '../pages/ItemPage'
// import PrestigeClassPage from '../pages/PrestigeClassPage'
// import RacePage from '../pages/RacePage'
// import ShieldPage from '../pages/ShieldPage'
// import SpellPage from '../pages/SpellPage'
// import WeaponPage from '../pages/WeaponPage'
// import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const HomeDiv = styled.div`
  /* background-image: url(https://as2.ftcdn.net/v2/jpg/01/65/91/29/1000_F_165912971_NsQhODSscK4zDRtTvQ0q5XZd1RxWZXhn.jpg); */
  /* background-size: 465vw;
  background-position: 50% 40%;
  background-repeat: no-repeat; */
  background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
  background-attachment: center;
    background-position: 50% 50%;
    background-size: 300vw;
    border-radius: 10px;
    padding: 100px;
  
  li{
    padding: 90px;
    padding-top: 50px;
    list-style: none;
    /* font-size: 30; */
  }
  p{
    font-size: 30px;
  }
  h1{
    margin-top: auto;
    padding-top: 100px;
    /* color: #00ffc3; */
    padding-left: 40px;
    padding-right: 40px;

  }
  .aboutme{
    align-items: right;
    padding-bottom: 30px;
  }
`

const Button = styled.button`
    /* background-image: url(https://thumbs.dreamstime.com/b/rolagem-de-papel-curvo-antigo-isolada-em-branco-deslocamento-longo-e-do-horizontal-isolado-164522335.jpg); */
    /* opacity: 0.5; */
    /* border-image: url(); */

    background-color: transparent;
    border-width: 5px;
    border-radius: 30px;
    font-weight: 900;
    /* color: #0f3153; */
    font-size: 30px;
`
const Home = ({ updateArmorState, armor, baseClass, feat, item, prestige, race, shield, spell, weapon}) => {
  return (
    <HomeDiv>
        {/* <Navbar /> */}
        
        {/* Go to Armor Page */}
        {/* <ArmorPage /> */}
        {/* Go to Core Classes Page */}
        {/* <CoreClassPage /> */}
        {/* Go to Feats Page */}
        {/* <FeatsPage /> */}
        {/* Go to Items Page */}
        {/* <ItemPage /> */}
        {/* Go to Prestige Classes Page */}
        {/* <PrestigeClassPage /> */}
        {/* Go to Races Page */}
        {/* <RacePage /> */}
        {/* Go to Shields Page */}
        {/* <ShieldPage /> */}
        {/* Go to Spells Page */}
        {/* <SpellPage /> */}
        {/* Go to Weapon Page */}
        {/* <WeaponPage /> */}
        {/* component test */}
        {/* <Armor armor={armor}/> */}
        {/* <Core baseClass={baseClass}/> */}
        {/* <Feat feat={feat} /> */}
        {/* <Item item={item} /> */}
        {/* <Prestige prestige={prestige} /> */}
        {/* <Race race={race} /> */}
        {/* <Shield shield={shield} /> */}
        {/* <Spell spell={spell} /> */}
        {/* <Weapon weapon={weapon} /> */}
        <h1>This is the CCP, or Character Creation Plus a database with a variety of tools for creating and storing custom races, classes, equipment, spells or feats for table top role playing games like the game Pathfinder.</h1>
        <ul>
                {/* <li>
                    <Link to='/'>
                    <Button>Home</Button>
                    </Link>
                </li> */}
                <li>
                    <Link to='/Races'>
                    <Button>Races</Button>
                    </Link><p>Go to this page, and you will be able to view stored, edit or delete existing, and create new races to choose from.</p>
                </li>
                    
                <li>
                    <Link to='/CoreClasses'>
                    <Button>Core Classes</Button>
                    </Link><p>Stored here are the basic classes or jobs your character(s) can choose from, and all of their custom change possibilites. </p>
                </li>
                    
                <li>
                    <Link to='/PrestigeClasses'>
                    <Button>Prestige Classes</Button>
                    </Link><p>Here are the more specialized jobs and classes. These usually have requirements gained from early levels in core classes to join.</p>
                </li>
                    

                <li>
                    <Link to='/Armor'>
                    <Button>Armor</Button>
                    </Link><p>Defensive wear ranging from a wizard cloak to the heaviest of plate-mail.</p>
                </li>
                    

                <li>
                    <Link to='/Shields'>
                    <Button>Shields</Button>
                    </Link><p>Defensive equipable items that are usually paired with one handed weapons to give armor class bonuses.</p>
                </li>
                    

                <li>
                    <Link to='/Weapons'>
                    <Button>Weapons</Button>
                    </Link><p>From walking-sticks to a plethora of bladed or spiked metal monstrosities, this is where we keep your weapons.</p>
                </li>
                    

                <li>
                    <Link to='/Items'>
                    <Button>Items</Button>
                    </Link><p>Any material posession that isnt a suit of armor, a shield, or a weapon is listed here. Like Staves, rings, or even magic plants.</p>
                </li>
                    

                <li>
                    <Link to= '/Feats'>
                    <Button>Feats</Button>
                    </Link><p>Many characters develop special abilities that are not directly tied to their class. These are feats.</p>
                </li>
                    

                <li>
                    <Link to='/Spells'>
                    <Button>Spells</Button>
                    </Link><p>Magic, from the pure power of arcane to the holy might of divine. These are your spells.</p>
                </li>
                    
            </ul>
        
          <p className='aboutme'>Hi there, I am Jeremy, a software engineer. I created this app as the capstone project for my course to learn programming and software development. I hope you find it useful for your RPG games. I worked very hard on it but if there is any way you think I can improve upon it, please reach out to me.</p>
        
    </HomeDiv>
  )
}

export default Home