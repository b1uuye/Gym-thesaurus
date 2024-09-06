import React, {  useState } from 'react'
import './Register.css'
import FormInput from '../../components/FormInput/FormInput'
import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import leftArrow from '../../assets/leftArrow.png'
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {

    const key = "6Lc6fi0mAAAAAFQMockBRjEnzd891-ZqJxTXkSLq"
    //navigate path or linkto
    const [values,setValues] = useState({
        fullname: "",
        username: "",
        email: "", //Use state is used to house the variables that we are taking in
        password: "",
        confpassword: "" 
    })

    const inputs = [

    {
        id:1,
        name:"username",
        type:"text",
        placeholder:"Username",
        label:"Username",
        pattern: "^[A-Za-z0-9]{3,16}$", //Any letters capital or non capital, numbers from 0-9 but character length is 3-16
        required:true
    },
    {
        id:2,
        name:"email",
        type:"email",
        placeholder:"Email",//Each id refers to a part of the state above, and is used and taken to the back end for the server
        label:"Email",
        required:true
    },
    /*{
        id:3,
        name:"birthday",
        type:"date",
        placeholder:"Birthday",
        label:"Birthday"
    },*/
    {
        id:4,
        name:"password",
        type:"password",
        placeholder:"Password",
        label:"Password",
        pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$", //should include at least 1 number, letter and special character unless it will display error message
        required:true
    },
    {
        id:5,
        name:"confpassword",
        type:"password",
        placeholder:"Confirm Password",
        label:"Confirm Password",
        //pattern:  this prints error message until both passwords match
        required:true
    }
]
   

    const handleSubmit = async (e) =>{ //Handlesubmit function used to direct users details into the database
        
        e.preventDefault();
        try {
            // Send a POST request to the Express.js server with the form data
            const response = await axios.post('http://localhost:4000/Customers', values);
           
            console.log(response); //The response is used for testing 
            console.log('Form has been submitted')
            window.location="/Login" //Comment this out to show that the form has been submitted
        } catch (err) {
            console.error(err);
        }
        /*const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
        console.log(emailRef)Used to test if Username is being seen and sent through to console log. Re-rendering was nullified using Hooks.*/
    };

    const onChange = (e, value) =>{
        setValues({...values, [e.target.name]: e.target.value })
        console.log("Captcha value:", value);
    }

    const onChanges = (value) =>{
        console.log("Captcha value:", value);
        setCaptchaDone(true)//Is used to allow button to appear once Captcha has been completed
    }

    const [captchaisDone, setCaptchaDone] = useState(false);
    
    console.log(values)

  return (
    <div className='Register'>
        <LinkRouter to='/'>
        <img className= 'back-arrow-r' src={leftArrow} alt="" />
        </LinkRouter>
        <div className='Register-container'>
            <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}{/*How the data will be taken in the form. This way shortens the code and makes it more efficient*/}
        <LinkRouter to= '/Login'
        style={{color: 'White'}}>
            Already have an account?
        </LinkRouter>
        <ReCAPTCHA sitekey={key} onChange={onChanges}/>
        <LinkRouter to= '/Payment'> {/*Payment section which will be used to take a payment before transitioning to the Mainpage*/}
        
        </LinkRouter>
        {captchaisDone && <button type= 'submit' className='Rbutton'>Register</button>}
      </form>
      </div>
    </div>
  )
}

export default Register
