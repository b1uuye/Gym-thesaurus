import React, { useState } from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';
import './Paymentprocess.css'
import {Link as LinkRouter} from 'react-router-dom';
import rightArrow from '../../assets/rightArrow.png';

const Paymentprocess = () => {
    const [success,setSuccess] = useState(false);
    const stripe = useStripe() //state is called and variables are set for payment processing
    const elements = useElements()

    const CARD_OPTIONS = {
        iconStyle: "solid",
        style:{
            base:{
                iconColor:"c4f0ff", //This CARD_OPTIONs is the styling of the card input area and all thats inside it
                color:"white",
                fontWeight:500,
                fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing:"antialiased"
            },
            invalid:{
                iconColor:"ffc7ee",
                color:"ffc7ee"
            }
        }
    }



    const handleSubmit = async (e) =>{
        e.preventDefault()
        const{error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card", //Handle sumbit function that takes a payment method (card)
            card: elements.getElement(CardElement)
        })
   
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post('http://localhost:4000/payment', {
                amount: 2500, //if there are no errors from the back end inside server.js then the below "Success" is outputted
                id
            })

            if(response.data.success){
                console.log("Successful Payment")
                setSuccess(true)
            }
        } catch (error) {
            console.log("error", error)
        } //error message given when payment is unsuccessful (Inside server.js)
    }
    else{
        console.log(error.message)
    }
}



  return (
    <div className='Paymentp-home'>
      <>
      {!success ? //while success is not true, the payment area is provided for inputs and checks
        <form onSubmit={handleSubmit}>
            <span>Pay for your membership NOW</span> 
            <div>
                <span>Cost: </span>
                
            </div>
            <span>£25</span>
            <fieldset className='FormGroup'>
                
                <div className='FormRow'>
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className='payment-btn'>PAY NOW</button>
        </form>  
        : //After success has been turned to true then you are greeted with a new page
        <div><h2>You just bought a Gymit Membership!!</h2></div>
        

        
    }
      <LinkRouter  to='/Mainpage'>
        <img src={rightArrow} alt="" />
        </LinkRouter>
      </>
    </div>
  )
}

export default Paymentprocess
