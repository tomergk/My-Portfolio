import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {GiVitruvianMan} from 'react-icons/gi'
import {BsBagDash} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''} ><AiOutlineHome/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiVitruvianMan/></a>   
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsBagDash/></a>   
    </nav>
  )
}

export default Nav;


