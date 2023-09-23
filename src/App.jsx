import React, { useState, useEffect } from 'react';
import Loading from './components/loading/Loading';
import TimeAndDate from "./components/timeAndDate/TimeAndDate";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import ContactMail from "./components/contact/ContactMail";
import ContactNav from "./components/contact/ContactNav";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";


const App = () => {

  // Functionality for the Loading page
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with your actual data loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);


  // Functionality for the mail image from the ContacNnav component 
  // to trigger the style of the form element from the contact component.
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
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Nav />
          <ContactNav />
          <TimeAndDate />
          <Header />
          <Experience />
          <Projects />
          <ContactMail />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
