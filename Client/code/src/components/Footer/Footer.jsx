import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import { Link as LinkScroll } from 'react-scroll'

const Footer = () => {
  return (
   <div className="Footer-container">
    <hr />
    <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" /> {/* This area homes all the images at the bottom of the screen that could be used for links to individual sites*/}
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
        </div>
    <div className="logo-f">
        <LinkScroll
        to='hero'
        span={1}  
        smooth={true}
        style = {{cursor: 'pointer'}}
        ><img src={Logo} alt="" />
        </LinkScroll>{/* This here is used to scroll back to the top pge using react-scroll*/}
    </div>
    </div>
    <div className="blur footer-blur-1"></div> {/*These 2 blurs are used to have little highlighted blobs behind the footer information*/}
    <div className="blur footer-blur-2"></div>
   </div>
  )
}

export default Footer
