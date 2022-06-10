import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5> The Skills I Have</h5>
      <h2>
        My Experience
      </h2>
      <div className="container experience-container">
      <div className="experience-frontend">
        <h3>
          Frontend Development
        </h3>
        <div className="experience-content">
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>
              Experienced
            </small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>
              Intermediate
            </small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>BootStrap</h4>
            <small className='text-light'>
              Experienced
            </small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>
              Experienced
            </small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>
              Intermediate
            </small>
            </div>
          </article>
        </div>
      </div>
      <div className="experiece-backend">
      <h3>
          Backend Development
        </h3>
        <div className="experience-content">
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
          <div>
          <h4>MySQL</h4>
            <small className='text-light'>
              Experienced
            </small>
          </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
           <div>
           <h4>nodejs</h4>
            <small className='text-light'>
              Intermediate
            </small>
           </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
           <div>
           <h4>GraphQL</h4>
            <small className='text-light'>
              Basics
            </small>
           </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
           <div>
           <h4>Flask</h4>
            <small className='text-light'>
              Basics
            </small>
           </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-details-icon'/>
           <div>
           <h4>PHP</h4>
            <small className='text-light'>
              Intermediate
            </small>
           </div>
          </article>
        </div>
      </div>
      </div>
    </section>
    
  )
}

export default experience