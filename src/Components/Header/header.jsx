import React from 'react'
import "./header.css"
import CTA from './CTA'
import Social from './Social'
import standMe from '../../assets/standMe.png'
const header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>
          Hello I'm
        </h5>
        <h1>
          Deginet Haile
        </h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <Social/>
        <div className="me">
          <img src={standMe} alt="me" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
        
 
      </div>
      </header>
     )  
  
}

export default header