import React from 'react'
import './Projects.css'
import data from './data.jsx'

const Projects = () => {
    return (
        <section id='projects'>
            <h2>Projects</h2>

            <div className="container projects__container">
                {
                    data.map(({ id, image, title, github, demo, link }) => {
                        return (
                            <article className='project__item' key={id}>
                                <h3>{title}</h3>
                                <div className="project__item-image">
                                    <img className='project_img' src={image} alt={title} />
                                </div>
                                <div className='project__item-cta'>
                                    <a href={github} className='btn' target='blank'>Github</a>
                                    <a href={link} className='btn btn-primary' target='blank'>Play It</a>
                                </div>
                            </article>
                        );
                    }
                    )
                }
            </div>

        </section>
    )
}

export default Projects
