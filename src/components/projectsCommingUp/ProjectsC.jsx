import React from 'react'
import './ProjectsC.css'
import data_C from './dataC.jsx'

const Projects_C = () => {
    return (
        <section id='projectsC'>
            <div className='fire_title'>
                <h3 style={{display: "inline"}}>Projects Comming Up</h3> 
                <span role="img" aria-label="Fire" className="fire-emoji">🔥</span>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide container project__item" data-bs-ride="false">

                <div className="carousel-indicators">
                    {data_C.map((project, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                <div className="carousel-inner">
                    {data_C.map((project, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? "active" : ""} `}
                            key={project.id}>

                            <div className="inner-container">
                                <h4>{project.title}</h4>
                                <p className='project_content'>{project.content}</p>
                            </div>

                            <div className='project__item-cta inner-container'>
                                <a href={project.github} className='btn' target='blank'>GitHub</a>
                                <a href={project.link} className='btn btn-primary' target='blank'>Play It</a>
                            </div>

                            <div className='project__item-image inner-container'>
                                <img src={project.image} className="d-block w-100 project_img" alt={project.title} />

                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </section>
    );
}

export default Projects_C
