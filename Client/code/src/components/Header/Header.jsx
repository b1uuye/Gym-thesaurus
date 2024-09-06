import React, {useState} from 'react'
import './Header.css'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png' //for hamburger menu for drop down in mobile view

const Header = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false) /*drop down menu, that will be false, so its not in drop down mode yet(Using states to allow smooth repsonsive transition*/
  return (
    <div className="header">
        <img src={logo} alt="" className='logo'/>
          {(menuOpened === false && mobile === true)? ( /*inline styling for the dropdown bar*/
            <div
            style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}

            onClick={() => setMenuOpened(true)} /*when the dropdown bar is click, it opens the dropdown bar*/
            >
              <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
            </div>)
          :<ul className='header-menu'> {/*onClick makes sure when one option is clicked, the dropdown bar closes*/}
          <li>
            <LinkScroll
            onClick={() => setMenuOpened(false)}
            to='hero'
            /*activeClass='active' active means that this is our main home page of the webpage*/
            span={1} /*the link tag allows us to move through the webpage to each section, while smoothly scrolling through*/
            smooth={true}>Home</LinkScroll>
          </li>
          <li>
            <LinkScroll
            onClick={() => setMenuOpened(false)}
            to='programs'
            span={1}
            smooth={true}>Programs</LinkScroll>
          </li>
          <li> {/*All Linkscroll work with react-scroll to allow a smooth transition to each part of the page*/}
            <LinkScroll
            onClick={() => setMenuOpened(false)}
            to='reasons'
            span={1}
            smooth={true}>Why us?</LinkScroll>
          </li>
          <li>
            <LinkScroll
            onClick={() => setMenuOpened(false)}
            to='pricing'
            span={1}
            smooth={true}>Plans</LinkScroll>
          </li>
          <li><LinkScroll
            onClick={() => setMenuOpened(false)}
            to='recommends'
            span={1}
            smooth={true}
          >Reviews</LinkScroll></li>
          <li><LinkRouter
            /*onClick={() => setMenuOpened(false)}*/
            to='/Register'
            style={{color: 'White', textDecoration: 'none'}} /*inline styling so it directly targets the Register text itself*/
          >Register</LinkRouter></li>
          </ul>
      }
        
    </div>
  )
}

export default Header
