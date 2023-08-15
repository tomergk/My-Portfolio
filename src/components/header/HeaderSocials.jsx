import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {CgGoogle} from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_black"><BsLinkedin /></a>
      <a href="https://github.com" target="_black"><BsGithub/></a>
      <a href="https://google.com" target="_black"><CgGoogle/></a>
    </div>
  )
}

export default HeaderSocials
