import React from 'react'
import { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {
    const [focused,setFocused] = useState(false);
    const {label, onChange, id, ...inputProps } = props;

    const handleFocus = (e) =>{
        setFocused(true)
    }

  return (
    <div className='FormInput RLforms'>
      <label>{label}</label>
      <input {...inputProps}
       onChange={onChange} /*original form that was going to be used to take in details at the register and log in area*/
       onBlur={handleFocus} 
       focused={focused.toString()}/>
    </div>
  )
}

export default FormInput
