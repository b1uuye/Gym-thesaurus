import React, { useState } from 'react'
import './Login.css'
import FormInput from '../../components/FormInput/FormInput'
import { Link as LinkRouter} from 'react-router-dom'
import leftArrow from '../../assets/leftArrow.png'
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    const [values,setValues] = useState({
        email: "",
        password: "",
    })

    const inputs = [
    {
        id:1,
        name:"email",
        type:"email",
        placeholder:"Email", //Given as an array, but this and the other below are used to show what is going to be taken inside the log in form and how it should appear/inputted
        label:"Email",
        required:true
    },
   
    {
        id:2,
        name:"password",
        type:"password",
        placeholder:"Password",
        label:"Password",
        pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$", //should include at least 1 number, letter and special character unless it will display error message
        required:true //Used for testing
    },
    
]

    const handleSubmit = async (e) =>{ //Handle submit function calls the API from Server.js and runs the exact API called.
        e.preventDefault();
        /*const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
        console.log(emailRef)Used to test if Username is being seen and sent through to console log. Re-rendering was nullified using Hooks.*/

        try {
            // Send a POST request to the Express.js server with the form data
            const response = await axios.post('http://localhost:4000/login-user', values);
            
            console.log(response);//The response is used for testing 
            console.log('^User details above^')
            if(response.data.status !== 'error'){ //this If statement here checks the response. If the reponse is not an error, then it allows the user to pass to the next page
                window.location = '/Mainpage'
            }

          
        } catch (err) {
            console.error(err);
            
            
        }
    };

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value })
        
        
    }

    const onChanges = (value) =>{
        console.log("Captcha value:", value);
        setCaptchaDone(true) //Is used to allow button to appear once Captcha has been completed
    }
    
    const key = "6Lc6fi0mAAAAAFQMockBRjEnzd891-ZqJxTXkSLq"

    const [captchaisDone, setCaptchaDone] = useState(false);

    console.log(values)

  return (
    <div className='Login'>
        <LinkRouter to='/'>
        <img className= 'back-arrow-l' src={leftArrow} alt="" /> {/*used to link back to Homepage if they are not logging in*/}
        </LinkRouter>
        <div className='Login-container'>
            
            <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/> 
        ))}{/*How the data will be taken in the form. This way shortens the code and makes it more efficient*/}
        <LinkRouter to= '/Register'
        style={{color: 'White'}}>
            Don't have an account? 
        </LinkRouter>
        <ReCAPTCHA sitekey={key} onChange={onChanges}/>
        <LinkRouter to= '/Mainpage'>
        
        </LinkRouter> {captchaisDone && <button className='Lbutton'>Login</button>}
      </form>
      </div>
    </div>
  )
}

export default Login
