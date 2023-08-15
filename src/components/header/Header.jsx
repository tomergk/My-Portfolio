import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from '../../../src/assets/images/avatar23.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tomer Goren</h1>
        <h3>Fu11stack Developer</h3>
        
        <CTA />

        <HeaderSocials/>

        <div className="me">
          <img className='pic' src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>

    </header>
  )
}

export default Header;
