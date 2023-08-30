import React, { useEffect } from 'react';
import TimeAndDate from "./components/timeAndDate/TimeAndDate";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Contact_Nav from "./components/contact/Contact_Nav";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

const App = () => {

  // I use the below functionality in order to make the mail image from the contact_nav 
  // to trigger the style of the form element from the contact component
  useEffect(() => {
    const contact_form = document.querySelector('.contact__form');
    const mail_img = document.querySelector('.mail_img');

    if (contact_form && mail_img) {
      mail_img.addEventListener('click', handleMailImgClick);
    }

    function handleMailImgClick() {
      if (contact_form) {
        if (contact_form.style.display === 'none' || contact_form.style.display === '') {
          contact_form.style.display = 'flex';
        } 
        else {
          contact_form.style.display = 'none';
        }
      }
    }

    return () => {
      if (mail_img) {
        mail_img.removeEventListener('click', handleMailImgClick);
      }
    };
  }, []);

  return (
    <div>
      <Nav />
      <Contact_Nav />
      <TimeAndDate />
      <Header />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
