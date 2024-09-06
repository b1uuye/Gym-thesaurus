import React from 'react'
import './Deletion.css'
import leftArrow from '../../assets/leftArrow.png'
import { Link as LinkRouter} from 'react-router-dom'
import axios from 'axios'

const Deletion = () => {

  const deleteCustomer = async (e) => {
    e.preventDefault();
    try {
        const email = document.getElementById("delete-email").value;
        // Send a DELETE request to the Express.js server with the email address
        const response = await axios.delete(`http://localhost:4000/delete-user-by-email`, { data: { email } });
        console.log(response);
        window.location = '/'
        // Redirect to the homepage or display a success message
    } catch (err) {
        console.error(err);
        // Display an error message to the user
    }
};

  return (
    <div className='Deletion'>
        <LinkRouter to='/Settings'>
        <img className='Delete-arrow' src={leftArrow} alt="" />
        </LinkRouter>
      <div className='Deletion-container'>
        <h1>Settings</h1>
        <form id="delete-form" onSubmit={deleteCustomer}>{/*Form used for taking details before deletion of account*/}
          <input className='Delete-input' placeholder='Email Address' id="delete-email" type="text" name="email" />
          <input className='Delete-input' placeholder='Password' id="delete-password" type="text" name="password" />
          <input className='Delete-btn' type="submit" value="Delete Account" />
        </form>
        {/*<button >Delete Account</button>*/}
      </div>
      
    </div>
  )
}

export default Deletion
