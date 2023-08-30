import React from 'react'
import "./Contact_Nav.css"
import CV from "../../assets/CV/CV.docx"
import cv from "../../assets/logos/cv.png";
import whatsup_img from "../../assets/logos/whatsapp.png";
import mail_img from "../../assets/logos/mail.png";
import linkedin from '../../assets/logos/linkedin.png'
import github from '../../assets/logos/github.png'

const contact_nav = () => {

    return (
        <div className="cta">

            <div className='cube'>
                <a href={CV} download='Tomer_g-cv.docx'>
                    <img className='contact_image cv_img' src={cv} alt="cv-img" />
                </a>
            </div>

            <div className='cube'>
                <a href='https://www.linkedin.com/in/tomer-goren-623310192/' target='blank'>
                    <img className='contact_image' src={linkedin} alt="linkedin_pic" />
                </a>
            </div>

            <div className='cube'>
                <a href='https://github.com/tomergk' target='blank'>
                    <img className='contact_image github_img' src={github} alt="gitHub_pic" />
                </a>
            </div>

            <div className='cube'>
                <a target='_blank' rel='noreferrer' href="https://web.whatsapp.com/send?phone=+9720527325732&text=message&app_absent=0">
                    <img className='contact_image' src={whatsup_img} alt="whatup_pic" />
                </a>
            </div>

            <div className='cube'>
                <a href='#contact'>
                    <img className='contact_image mail_img' src={mail_img} alt="mail_pic" />
                </a>
            </div>

        </div>
    )
}

export default contact_nav


