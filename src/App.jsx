import React from 'react'
import TimeAndDate from "./components/timeAndDate/TimeAndDate"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
// import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Projects from "./components/projects/Projects"
import AppPlayer from "./components/music/AppPlayer"

const App = () => {
  return (
    <div>
      <TimeAndDate />
      <Header />
      <Nav />
      {/* <About /> */}
      <Experience />
      <Projects/>
      <Contact />
      <AppPlayer/>
      <Footer />
    </div>
  )
}

export default App;
