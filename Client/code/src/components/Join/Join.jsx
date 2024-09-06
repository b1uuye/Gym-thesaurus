import React, {useRef} from 'react';
import './Join.css'
import emailjs from '@emailjs/browser'; //Using emailjs to handle email sending and errors

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5j4xipq', 'template_0tzztey', form.current, 'qClCJ0bki8xfUXqyB')
          .then((result) => {
              console.log(result.text); // send email grabbed from EmailJs (Inbuilt library)
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US</span>
        </div>
      </div>
      <div className="right-j"> {/*Simple form used to enter the email that the user wants to receive the email*/}
        <form ref={form} className='email-container' onSubmit={sendEmail}>
            <input type="email" name='user-email' placeholder='Subscribe with Email' />
            <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
