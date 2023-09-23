import React, { useRef, useState } from 'react';
import "./ContactMail.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const email_form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // to prevent the default behavior of a form submission event.

    emailjs.sendForm('service_2qa0j9l', 'template_5alcka7', email_form.current, '65WXlyNRJCgQDG5IF')
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
    // e.target.reset();  to reset the form fields to their default or initial state.
  };

  return (
    <section id='contact'>
      <div className="container contact__container">
        {isFormSubmitted ? (
          <div className="success-message">
            <h2>Form submitted successfully!</h2>
          </div>
        ) : (
          <form ref={email_form} onSubmit={sendEmail} className='contact__form'>
            <input type="text" name='subject' placeholder='Subject' required />
            <input type="text" name='name' placeholder='Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Message' required></textarea>
            <button type='submit' className='btn btn-primary submit_form'>Send the Mail</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
