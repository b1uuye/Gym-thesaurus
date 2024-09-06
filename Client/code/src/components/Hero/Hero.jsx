import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';



const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true: false; //This here allows for the slider to be inside the grey tube its in when responsive
  return (
    <div className="hero" id='hero'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header/>
          {/* advert slider bar*/}
          <div className="the-advert">
            <motion.div
              initial={{left: mobile? '165': '275'}}
              whileInView= {{left: '8px'}}
              transition={{...transition, type: 'tween'}} //causes orange slider on the advert text to slide across (ANIMATIONS WOO!!)
            ></motion.div>
            <span>The only fitness app you need to have</span>
          </div>

          {/*Main heading*/}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
              </div>
              <div><span>Ideal Body</span></div>
              <div><span>In here we will help you to shape and build your ideal body
                and live your life to the fullest</span></div>
          </div>

          {/*figures for page*/}
          <div className="figures">
            <div>
              <span> {/*Number counter allows for the animation of the numbers to add up to the specified number*/}
                <NumberCounter end={102} start={0} delay='4' preFix='+'/>
              </span>
              <span>expert trainers</span>
            </div>
            <div>
              <span><NumberCounter end={650} start={500} delay='11' preFix='+'/></span>
              <span>new members</span>
            </div>
            <div>
              <span><NumberCounter end={50} start={0} delay='2.5' preFix='+'/></span>
              <span>fitness programs</span>
            </div>
          </div>

          {/*buttons bellow figures*/}

          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/*right hand side of the page*/}

        <div className="right-h">
            {/*<LinkRouter to='/Login'><button className='btn'>Register</button></LinkRouter>
          was originally going to be used as a register button*/}


          <motion.div 
          transition={transition}
          initial= {{right: '-1rem'}}
          whileInView={{right: '4rem'}} //animation for the heart rate box near person
          className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>105 bpm</span>
          </motion.div>

          <img src={hero_image} alt="" className="hero-image" />
          <motion.img 
          transition={transition}
          initial= {{right: '11rem'}} //animation for the background semi circles behind the person
          whileInView={{right: '20rem'}}
          src={hero_image_back} alt="" className="hero-image-back" />

          <motion.div
          transition={transition}
          initial= {{right: '37rem'}}
          whileInView={{right: '28rem'}} //animation for the calories burned next to the person
          className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burnt</span>
              <span>325 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero
