import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
   <div className="Programs" id="programs">

    {/*headers for the programs/workouts part */}
    <div className="programs-header">
    <span className='stroke-text'>Explore Our</span>
    <span>Programs</span>
    <span className='stroke-text'>To Shape you</span>
    </div>

    <div className="program-categories">
        {programsData.map((program, i) =>(
            <div className="category" key={i}>
                {program.image} {/*This creates a mapping for all the programs to sit inside a grid on the mainpage*/}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Join Now</span> <img src={RightArrow} alt="" /></div>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Programs
