import React, { useState } from 'react' 
import './Recommends.css'
import { recommendsData } from '../../data/recommendsData';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Recommends = () => {
  const transition = {type: 'spring', duration: 3}
  const [selected, setSelected] = useState(0); {/*will allow us to cylce through reviews and images at same time*/}
  const tLength = recommendsData.length;
  return (
    <div className="Recommends" id='recommends'>
        <div className="left-rec">
            <span>Reviews</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <motion.span
              key={selected}
              initial={{opacity:0, x: -100}}
              animate={{opacity: 1, x: 0}} // this animate inside motion controls the animation of the text fading into the frame
              exit={{opacity: 0, x: -100}} 
              transition={transition}
            >
              {recommendsData[selected].review} {/*selects reviews inside recommendations data*/}
            </motion.span>
            <span>
              <span style={{color: 'var(--orange)'}}>
                {recommendsData[selected].name}
              </span> {" "}
              - {recommendsData[selected].status}
            </span>
        </div>
        <div className="right-rec">
          <motion.div
            initial={{opacity:0, x: -100}}
            transition={{...transition, duration: 2}} //controls the orange lined border behind image
            whileInView={{opacity: 1, x: 0}} 
          ></motion.div>

          <motion.div
          initial={{opacity:0, x: 100}}
          transition={{...transition, duration: 2}} //controls the block orange square behind the picture
          whileInView={{opacity: 1, x: 0}} >
          </motion.div>

          <motion.img
          key={selected}
          initial={{opacity:0, x: 100}}
          animate={{opacity: 1, x: 0}} // this animate inside motion controls the animation of the image fading into the frame
          exit={{opacity: 0, x: -100}} 
          transition={transition}
          src={recommendsData[selected].image} alt="" />

          <div className="arrows">
            <img 
              onClick={()=>{
                selected === 0
                ? setSelected(tLength -1) /*entire onclick function makes the images and words go back one to the left*/
                : setSelected((prev) => prev-1);
              }}
            src={leftArrow} alt="" />
            <img 
             onClick={()=>{
              selected === tLength - 1
              ? setSelected(0) /*entire onclick function makes the images and words go forward one to the right*/
              : setSelected((prev) => prev+1);
            }}
            src={rightArrow} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Recommends
