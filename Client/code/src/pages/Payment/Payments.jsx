import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import Paymentp from './Paymentprocess';

const Payments = () => {

    const PUBLIC_KEY = "pk_test_51MzPlWLfp0rBpG6OEuKNtH34ftkLF9F3zhvcCCjZjU7pC69J98PrZX9k6eAOYqe2JBhio69NLbtxMXHE7TdEPv1s00H8paTf43"

    const stripeTestPromise = loadStripe("pk_test_51MzPlWLfp0rBpG6OEuKNtH34ftkLF9F3zhvcCCjZjU7pC69J98PrZX9k6eAOYqe2JBhio69NLbtxMXHE7TdEPv1s00H8paTf43")

//Acts as if it were Homepage or Mainpage for the Payment processing after it has been completed
  return (
    <Elements stripe = {stripeTestPromise}>
      <Paymentp/>
      </Elements>

  )
}

export default Payments
