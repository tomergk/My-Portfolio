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
              <small>200+ World Wide</small>
            </article>

          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius dolorem
            maiores nihil ducimus at rem ullam reprehenderit quidem quia deserunt, molestiae, eligendi
            amet repel lat molestias quos totam.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
