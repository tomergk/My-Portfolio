import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from '../../../src/assets/images/avatar23.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tomer Goren</h1>
        <h3>Fu11stack Developer</h3>

        <CTA />

        <div className="me star">
          <img className='pic' src={ME} alt="me" />

          <p>
            I'm a passionate programmer who loves diving into the digital realm.
            Whether I'm coding, playing sports, hanging out with friends,
            exploring new things, or watching horror and comedy movies,
            I'm all about enjoying life's adventures.
            From lines of code to heart-pounding games,
            I find excitement in every challenge.
          </p>
        </div>

      </div>

    </header>
  )
}

export default Header;
