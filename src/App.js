
import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ArmorPage from './pages/ArmorPage';
import CoreClassPage from './pages/CoreClassPage';
import FeatsPage from './pages/FeatsPage';
import ItemPage from './pages/ItemPage';
import PrestigeClassPage from './pages/PrestigeClassPage';
import RacePage from './pages/RacePage';
import ShieldPage from './pages/ShieldPage';
import SpellPage from './pages/SpellPage';
import WeaponPage from './pages/WeaponPage';
import NewArmor from './pages/NewArmor';
import NewCoreClass from './pages/NewCoreClass';
import NewFeat from './pages/NewFeat';
import NewItem from './pages/NewItem';
import NewPrestigeClass from './pages/NewPrestigeClass';
import NewRace from './pages/NewRace';
import NewShield from './pages/NewShield';
import NewSpell from './pages/NewSpell';
import NewWeapon from './pages/NewWeapon';
import ViewArmor from './pages/ViewArmor';
import ViewCore from './pages/ViewCore'
import ViewFeats from './pages/ViewFeats'
import ViewItem from './pages/ViewItem'
import ViewPrestige from './pages/ViewPrestige'
import ViewRace from './pages/ViewRace'
import ViewShield from './pages/ViewShield'
import ViewSpell from './pages/ViewSpell'
import ViewWeapon from './pages/ViewWeapon'
import EditArmor from './pages/EditArmor';
import EditCore from './pages/EditCore';
import EditFeat from './pages/EditFeat';
import EditItem from './pages/EditItem';
import EditPrestige from './pages/EditPrestige';
import EditRace from './pages/EditRace';
import EditShield from './pages/EditShield';
import EditSpell from './pages/EditSpell';
import EditWeapon from './pages/EditWeapon';

function App() {
  const [ armors, setArmor ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/armor')
    .then( res => res.json())
    .then( data => setArmor(data))
  }, [])
  
  const addToArmor = (armor) => {
    setArmor([...armors, armor])
  }

  const updateArmorState = (id) => {
      
      setArmor(armors.filter(armor => armor._id !== id))
    
    }

  const [ baseClasses, setBaseClass ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/baseClass')
    .then( res => res.json())
    .then( data => setBaseClass(data))
  }, [])

  const addToBaseClass = (baseClass) => {
    setBaseClass([...baseClasses, baseClass])
  }

  const updateBaseClassState = (id) => {
    
    setBaseClass(baseClasses.filter(baseClass => baseClass._id !== id))
  
  }

  const [ feats, setFeat ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/feat')
    .then( res => res.json())
    .then( data => setFeat(data))
  }, [])

  const addToFeat = (feat) => {
    setFeat([...feats, feat])
  }
  
  const updateFeatState = (id) => {
    
    setFeat(feats.filter(feat => feat._id !== id))
  
  }
  
  const [ items, setItem ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/item')
    .then( res => res.json())
    .then( data => setItem(data))
  }, [])
  
  const addToItem = (item) => {
    setItem([...items, item])
  }

  const updateItemState = (id) => {
    
    setItem(items.filter(item => item._id !== id))
  
  }
  
  const [ prestigeClasses, setPrestigeClass ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/prestigeClass')
    .then( res => res.json())
    .then( data => setPrestigeClass(data))
  }, [])

  const addToPrestigeClass = (prestigeClass) => {
    setPrestigeClass([...prestigeClasses, prestigeClass])
  }
  
  const updatePrestigeClassState = (id) => {
    
    setPrestigeClass(prestigeClasses.filter(prestigeClass => prestigeClass._id !== id))
  
  }

  const [ races, setRace ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/race')
    .then( res => res.json())
    .then( data => setRace(data))
  }, [])
  
  const addToRace = (race) => {
    setRace([...races, race])
  }

  const updateRaceState = (id) => {
    
    setRace(races.filter(race => race._id !== id))
  
  }
  

  const [ shields, setShield ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/shield')
    .then( res => res.json())
    .then( data => setShield(data))
  }, [])

  const addToShield = (shield) => {
    setShield([...shields, shield])
  }
  
  const updateShieldState = (id) => {
    
    setShield(shields.filter(shield => shield._id !== id))
  
  }
  

  const [ spells, setSpell ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/spell')
    .then( res => res.json())
    .then( data => setSpell(data))
  }, [])
  
  const addToSpell = (spell) => {
    setSpell([...spells, spell])
  }

  const updateSpellState = (id) => {
    
    setSpell(spells.filter(spell => spell._id !== id))
  
  }
  

  const [ weapons, setWeapon ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/weapon')
    .then( res => res.json())
    .then( data => setWeapon(data))
  }, [])

  const addToWeapon = (weapon) => {
    setWeapon([...weapons, weapon])
  }

  const updateWeaponState = (id) => {
    
    setWeapon(weapons.filter(weapon => weapon._id !== id))
  
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home updateArmorState={updateArmorState} armor={armors} baseClass={baseClasses} feat={feats} item={items} prestige={prestigeClasses} race={races} shield={shields} spell={spells} weapon={weapons} /> } />
        <Route path='/Armor' element={ <ArmorPage updateArmorState={updateArmorState} armor={armors} /> } />
        <Route path='/NewArmor' element={<NewArmor addArmor={addToArmor}/>} />
        <Route path='/Armor/:id' element={<ViewArmor armors={armors} updateArmorState={updateArmorState}/> } /> 
        <Route path='/Armor/edit/:id' element={<EditArmor setArmor={setArmor} /> } />
        <Route path='/CoreClasses' element={ <CoreClassPage updateBaseClassState={updateBaseClassState} baseClass={baseClasses} /> } />
        <Route path='/NewCoreClasses' element={ <NewCoreClass addBaseClass={addToBaseClass} />} />
        <Route path='/CoreClasses/:id' element={<ViewCore baseClass={baseClasses} updateBaseClassState={updateBaseClassState} /> } />
        <Route path='/CoreClass/edit/:id' element={<EditCore setBaseClass={setBaseClass} /> } />
        <Route path='/Feats' element={ <FeatsPage updateFeatState={updateFeatState}feat={feats} /> } />
        <Route path='/NewFeats' element={ <NewFeat  addFeat={addToFeat} />} />
        <Route path='/Feats/:id' element={<ViewFeats updateFeatState={updateFeatState}feat={feats}/>}/>
        <Route path='/Feat/edit/:id' element={<EditFeat setFeat={setFeat} /> } />
        <Route path='/Items' element={ <ItemPage updateItemState={updateItemState} item={items} /> } />
        <Route path='/NewItems' element={ <NewItem addItem={addToItem} /> } />
        <Route path='/Items/:id' element={<ViewItem updateItemState={updateItemState} item={items} />}/>
        <Route path='/Item/edit:id' element={ <EditItem setItem={setItem} /> } />
        <Route path='/PrestigeClasses' element={ <PrestigeClassPage updatePrestigeClassState={updatePrestigeClassState} prestige={prestigeClasses} /> } />
        <Route path='/NewPrestigeClasses' element={ <NewPrestigeClass addPrestige={addToPrestigeClass} /> } />
        <Route path='/Prestige/:id' element={<ViewPrestige updatePrestigeClassState={updatePrestigeClassState} prestige={prestigeClasses} />}/>
        <Route path='/Prestige/edit/:id' element={ <EditPrestige setPrestigeClass={setPrestigeClass} /> } />
        <Route path='/Races' element={ <RacePage updateRaceState={updateRaceState} race={races} /> } />
        <Route path='/NewRaces' element={ <NewRace addRace={addToRace} /> } />
        <Route path='/Races/:id' element={<ViewRace updateRaceState={updateRaceState} race={races} />}/>
        <Route path='/Race/edit/:id' element={ <EditRace setRace={setRace} /> } />
        <Route path='/Shields' element={ <ShieldPage updateShieldState={updateShieldState} shield={shields} /> } />
        <Route path='/NewShields' element={ <NewShield addShield={addToShield} /> } />
        <Route path='/Shields/:id' element={<ViewShield updateShieldState={updateShieldState} shield={shields}/>}/>
        <Route path='/Shield/edit/:id' element={<EditShield setShield={setShield} /> } />
        <Route path='/Spells' element={ <SpellPage updateSpellState={updateSpellState} spell={spells} /> } />
        <Route path='/NewSpells' element={ <NewSpell addSpell={addToSpell}/> } />
        <Route path='/Spells/:id' element={<ViewSpell updateSpellState={updateSpellState} spell={spells}/>} />
        <Route path='/Spell/edit/:id' element={<EditSpell setSpell={setSpell} /> } />
        <Route path='/Weapons' element={ <WeaponPage updateWeaponState={updateWeaponState} weapon={weapons} /> } />
        <Route path='/NewWeapons' element={ <NewWeapon addWeapon={addToWeapon}/> } />
        <Route path='/Weapons/:id' element={<ViewWeapon updateWeaponState={updateWeaponState} weapon={weapons} /> }/>
        <Route path='/Weapon/edit/:id' element={<EditWeapon setWeapon={setWeapon} /> } />
      </Routes>



      
    </div>
  );
}

export default App;
