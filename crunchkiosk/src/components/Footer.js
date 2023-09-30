import React from 'react'
import '../css/Footer.css'

import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='foot-branding'>
            <span>Code & Design by </span>
            <img src={require('../assets/logo.png')}/>
            <span>Crunch Kiosk</span>
            <a target="_blank" href="https://www.instagram.com/bmmlatam/">
                <FaInstagram className='foot-social'/>
            </a>
            
        </div>

        <p>crunchkiosk@gmail.com</p>

    </div>
  )
}

export default Footer