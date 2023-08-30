import React from 'react'
import "./Footer.css"
import logo from '../../assets/brand/brand.png'

const year = new Date().getFullYear();

const Footer = () => {
  return (

    <section className='footer'>

      <a href="#header" className='footer__logo'>
        <img className='logoIMG' src={logo} alt="logo-img" />
      </a>

      <div className="footer__copyright">
        <small>All rights reserved &copy; TOM3R {year}.</small>
      </div>

    </section>
  )
}

export default Footer
