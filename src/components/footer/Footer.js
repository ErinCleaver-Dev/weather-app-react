import React from 'react'
import './Footer.css'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
        <a id="github-link" href="https://github.com/ErinCleaver-GRCC/weather-app-react"><AiFillGithub /> Weather Application Git Hub</a>, By Erin Cleaver 
    </footer>

  )
}

export default Footer