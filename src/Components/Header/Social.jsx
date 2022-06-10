import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"
const Social = () => {
  return (
    <div className='social'>
          <a href="linkdn" target='_blank '><BsLinkedin/></a>
          <a href="github" target="_blank"><FaGithub/></a>
          <a href="dribble" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default Social