import React from 'react'
import Header from "./Components/Header/header"
import Nav from "./Components/Nav/Nav"
import About from "./Components/About/about"
import Experience from "./Components/Experience/experience"
import Services from "./Components/Services/service"
import Testimonies from "./Components/Testimonies/testimonies"
import Contact from "./Components/Contact/contact"
import Footer from "./Components/Footer/footer"
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Testimonies/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App