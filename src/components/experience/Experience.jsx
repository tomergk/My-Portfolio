import React from 'react'
import "./Experience.css"
import { FiCheck } from 'react-icons/fi'


const Experience = () => {
  return (
    <section id='experience'>
      <h3>Experience</h3>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h4>Frontend Dev</h4>
          <div className="experience__content">

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>HTML</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>CSS</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>Bootstrap</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>JavaScript</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>jQuery</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>React</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>EJS</h5>
              </div>
            </article>

          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h4>Backend Dev</h4>
          <div className="experience__content">

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>Node.js</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>SQL</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>PostgreSQL</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>Express</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>MySQL</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>MongoDB</h5>
              </div>
            </article>

          </div>
        </div>
        {/* END OF BACKEND */}

        <div className="experience__backend">
          <h4>Programming Languages</h4>
          <div className="experience__content">

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>Java</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>Python</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>C</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>C#</h5>
              </div>
            </article>

            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h5>VBA</h5>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
