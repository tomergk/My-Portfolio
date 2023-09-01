import React from 'react'
import "./Header.css"
import ME1 from '../../../src/assets/images/avatar23.png' /*little pic*/

const Header = () => {
  return (
    <header id='header'>

      <div className="container header__container">

        <h1 className='header_name' >Tomer Goren</h1>
        <h2 className='header_job' >Fu11stack Developer</h2>

        <div className='me_wraper'>
          <div className='me_content_wraper'>
            <p>
              I'm a passionate programmer who loves diving into the digital realm.
              Whether I'm coding, playing sports, hanging out with friends,
              exploring new things, or watching horror and comedy movies,
              I'm all about enjoying life's adventures.
              From lines of code to heart-pounding games,
              I find excitement in every challenge.
            </p>
          </div>

          <div className='me_pic_wraper'>
            <img className='pic' src={ME1} alt="me-img" />
          </div>

        </div>

      </div>

    </header>
  )
}

export default Header;
