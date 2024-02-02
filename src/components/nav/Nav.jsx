import React from 'react'
import "./Nav.css"
import { AiOutlineHome } from 'react-icons/ai'
import { GiVitruvianMan } from 'react-icons/gi'
import { BsBagDash } from 'react-icons/bs'
import { useState } from 'react'
import { FiGift } from "react-icons/fi";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav('#header')}
        className={`${activeNav === '#header' ? 'active' : ''} nav_buttons`} ><AiOutlineHome />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={`${activeNav === '#experience' ? 'active' : ''} nav_buttons`}><GiVitruvianMan />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={`${activeNav === '#projects' ? 'active' : ''} nav_buttons`}><BsBagDash />
      </a>
      <a
        href="#projectsC"
        onClick={() => setActiveNav('#projectsC')}
        className={`${activeNav === '#projectsC' ? 'active' : ''} nav_buttons`}><FiGift />
      </a>

    </nav>
  )
}

export default Nav;


