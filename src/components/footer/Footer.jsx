import React from 'react'
import "./Footer.css"

import google from '../../assets/logos/google.png'
import linkedin from '../../assets/logos/linkedin.png'
import { VscGithubInverted } from 'react-icons/vsc'
import gpt from '../../assets/logos/gpt.png'
import youtube from '../../assets/logos/youtube.png'
import techcrunch from '../../assets/logos/techcrunch.png'
import spotify from '../../assets/logos/spotify.png'
import holiday from '../../assets/logos/holiday.png'
import plex from '../../assets/logos/plex.png'
import money from '../../assets/logos/money.png'
import whatsapp from '../../assets/logos/whatsapp.png'

const year = new Date().getFullYear();


const Footer = () => {
  return (
    
    <footer>

      <a href="#" className='footer__logo'>TOM3R</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects2">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#music">Music</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.google.com" target='blank'><img src={google} alt=''/></a>
        <a href="https://www.linkedin.com" target='blank'><img src={linkedin} alt=''/></a>
        <a href="https://www.github.com" target='blank'><VscGithubInverted size="40px" className='git_img' /></a>
        <a href="https://chat.openai.com/chat" target='blank'><img src={gpt} alt=''/></a>
        <a href="https://www.youtube.com/" target='blank'><img src={youtube} alt=''/></a>
        <a href="https://techcrunch.com/" target='blank'><img src={techcrunch} alt=''/></a>
        <a href="https://open.spotify.com/" target='blank'><img src={spotify} alt=''/></a>
        <a href="https://www.timeanddate.com/holidays" target='blank'><img src={holiday} alt=''/></a>
        <a href="https://app.plex.tv/" target='blank'><img src={plex} alt=''/></a>
        <a href="https://www.boi.org.il/roles/markets/exchangerates/" target='blank'><img src={money} alt=''/></a>
        <a href="https://web.whatsapp.com/" target='blank'><img src={whatsapp} alt=''/></a>
      </div>

      <div className="footer__copyright">
        <small>All rights reserved &copy; TOM3R {year}.</small>
      </div>

    </footer>
  )
}

export default Footer
