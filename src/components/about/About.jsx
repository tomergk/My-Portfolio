import React from 'react'
import "./About.css"
import mattrix from '../../assets/gifs/matrix.gif'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About</h2>
      <div className='container about__container'>
        <div className="about__me__shadow">

          <div className="about__me-image">
            <img src={mattrix} alt="About_Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Hobbies</h5>
              <small>Enthusiastically Exploring Diverse Horizons.</small>
            </article>

          </div>

          <p>
          I'm a passionate programmer who loves diving into the digital realm. Whether I'm coding, playing sports, hanging out with friends, exploring new things, or watching horror and comedy movies, I'm all about enjoying life's adventures. From lines of code to heart-pounding games, I find excitement in every challenge.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
