import React from 'react'
import "./Experience.css"
import { FiCheck } from 'react-icons/fi'


const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Dev</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>jQuery</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>EJS</h4>
              </div>
            </article>

          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Dev</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>Express</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

          </div>
        </div>
        {/* END OF BACKEND */}

        <div className="experience__backend">
          <h3>programming languages</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>Java</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>C</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>VBA</h4>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
