import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Home from '../pages/Home'
// import ArmorPage from '../pages/ArmorPage';
// import CoreClassPage from '../pages/CoreClassPage';
// import FeatsPage from '../pages/FeatsPage';
// import ItemPage from '../pages/ItemPage';
// import PrestigeClassPage from '../pages/PrestigeClassPage';
// import RacePage from '../pages/RacePage';
// import ShieldPage from '../pages/ShieldPage';
// import SpellPage from '../pages/SpellPage';
// import WeaponPage from '../pages/WeaponPage';

const NavBarContainer = styled.nav`
    /* background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp); */
    
    
    /* background-image: url(data:image/jpeg;base64,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);
    background-attachment: center;
    background-position: 48% 50%;
    background-size: 140vw; */
    
    
    
    background-repeat: no-repeat;
    border-radius: 10px;
    padding: 1px;
    ul {
        display: flex;
        justify-content: space-evenly;
    }

    li {
        list-style: none;
    }
    /* link {
        background-image: url(https://webdesigndev.com/wp-content/uploads/2020/11/Cover-Image-1.jpg.webp);
    } */

`

const Button = styled.button`
    /* background-image: url(https://thumbs.dreamstime.com/b/rolagem-de-papel-curvo-antigo-isolada-em-branco-deslocamento-longo-e-do-horizontal-isolado-164522335.jpg); */
    /* opacity: 0.5; */
    /* border-image: url(); */
    background-color: transparent;
    border-radius: 10px;
    font-weight: 900;
    color: #0f3153;
`

const navbar = () => {
    return (
        <NavBarContainer>
            <ul>
                <li>
                    <Link to='/'>
                    <Button>Home</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/Races'>
                    <Button>Races</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/CoreClasses'>
                    <Button>Core Classes</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/PrestigeClasses'>
                    <Button>Prestige Classes</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/Armor'>
                    <Button>Armor</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/Shields'>
                    <Button>Shields</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/Weapons'>
                    <Button>Weapons</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/Items'>
                    <Button>Items</Button>
                    </Link>
                </li>
                <li>
                    <Link to= '/Feats'>
                    <Button>Feats</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/Spells'>
                    <Button>Spells</Button>
                    </Link>
                </li>

            </ul>
        </NavBarContainer>
  )
}

export default navbar