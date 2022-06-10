import React from 'react'
import "./about.css"
import seatMe from "../../assets/seatMe.jfif"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
function about() {
    return (
<section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="about about-container"></div>
    <div className="about-me">
        <div className="about-me-image">
            <img src={seatMe} alt="seatMe" />
        </div>
    </div>
    <div className="about-content">
        <div className="about-cards">
            <article className='about-card'>
                <FaAward className='about-icon'/>
                <h5>Experience</h5>
                <small>2+ years working </small>
            </article>
            <article className='about-card'>
                <FiUsers className='about-icon'/>
                <h5>Clients</h5>
                <small>20+ worldwide</small>
            </article>
            <article className='about-card'>
                <VscFolderLibrary className='about-icon'/>
                <h5>Projects</h5>
                <small>10+ completed projects</small>
            </article>
        </div>
        <p>
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere <br />
            praesentium illum vitae quis voluptas dignissimos corporis rerum nisi quo,<br />
             laboriosam ab dolorem itaque quos ipsum fuga, autem, dolores ad omnis.
        </p>
        <a href="#contact" className='btn '>Let's Talk</a>
    </div>
</section>
       )
}

export default about