import React from 'react'
import './Pricing.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import {Link as LinkRouter} from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="pricing-container" id='pricing'>
      <div className="blur pricing-blur-1"></div>
      <div className="blur pricing-blur-2"></div>
      <div className='programs-header' style={{gap: '2rem'}}>
        <span className='stroke-text'>READY TO BEGIN</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>

      {/*Pricing for the plans*/}
      <div className="plans">
        {plansData.map((plan, i)=>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>£ {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature, i)=>(
                        <div className="feature" key={i}>
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div><span>See more benefits -></span>
                </div>
                <LinkRouter className='Linkin' to='/register'>
                <button className='btn'> Join Now</button>
                </LinkRouter>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
