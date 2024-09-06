import React, { useState } from 'react'
import './Payment.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import {Link as LinkRouter} from 'react-router-dom'

const Payment = () => {

 
  return (
    <div className="pricing-container" id='pricing'>
      <div className="blur pricing-blur-1"></div> {/*Styling for front part of the payment page*/}
      <div className="blur pricing-blur-2"></div>
      <div className='programs-header' style={{gap: '2rem'}}> 
        <span className='stroke-text'>READY TO BEGIN</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>

      {/*Pricing for the plans*/}
      <div className="p-plans">
        {plansData.map((plan, i)=>(
            <div className="p-plan" key={i}>
                {plan.icon} {/*Simple mapping for the payment section that highlights what you will be getting when you purchase*/}
                <span>{plan.name}</span>
                <span>£ {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature, i)=>(
                        <div className="feature" key={i}> {/*Features part of the payment that tells you what will be getting*/}
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div><span>See more benefits -></span>
                </div>
                <LinkRouter to='/Payments'> {/*Links to the main payments Page*/}
                <button className='btn'> Join Now</button>
                </LinkRouter>
               
            </div>
        ))}
      </div>
    </div>
  )
}

export default Payment