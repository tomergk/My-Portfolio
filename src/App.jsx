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

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  
  setTimeout(() => {
    formShower();
  }, 2000);

  function formShower() {

    const contact_form = document.querySelector('.contact__form');
    const mailImage = document.querySelector('.mailImage');

    if (contact_form && mailImage) {
      mailImage.addEventListener('click', handleMailImgClick);
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
  }

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
