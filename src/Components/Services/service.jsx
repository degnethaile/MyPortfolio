import React from 'react'
import './service.css'
import {BsCheck} from 'react-icons/bs'
const service = () => {
  return (
    <section id='services'>
      <h5>
        What I offer
      </h5>
      <h2>
        Services
      </h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>
              UI/UX Design
            </h3>
          </div>
          <ul className='service-list'>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>

          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>
              Web Development
            </h3>
          </div>
          <ul className='service-list'>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>

          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>
            Content Creation
            </h3>
          </div>
          <ul className='service-list'>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
            <li>
                <BsCheck className='service-list-icon'/>
                Lorem ipsum dolor sit amet consectetur adipis
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default service