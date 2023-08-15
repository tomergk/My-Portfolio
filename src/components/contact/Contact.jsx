import React from 'react'
import "./Contact.css"
import { ImWhatsapp } from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com';
import phoneGif from "../../assets/gifs/phone.gif";


const Contact = () => {
  const email_form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2qa0j9l', 'template_5alcka7', email_form.current, '65WXlyNRJCgQDG5IF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://web.whatsapp.com/send?phone=+9720527325732&text=message&app_absent=0" target='_blank' rel='noreferrer'>Send a message</a>
            <img className='phone_pic' src={phoneGif} alt="phone_pic" />
          </article>
        </div>

        <form ref={email_form} onSubmit={sendEmail} className='contact__form'>
          <input type="text" name='subject' placeholder='Subject' required />
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send the Mail</button>
        </form>

      </div>

    </section>
  )
}

export default Contact
