import React from 'react'
import '../Deletion/Deletion.css'
import leftArrow from '../../assets/leftArrow.png'
import { Link as LinkRouter} from 'react-router-dom'
import axios from 'axios'

const Email_change = () => {
    const updateEmail = async (e) => {
        e.preventDefault();
        try {
          const email = document.getElementById("update-email").value;
          const newEmail = document.getElementById("new-email").value;
          // Send a PUT request to the Express.js server with the email addresses
          const response = await axios.put(`http://localhost:4000/update-user-email`, { email, newEmail });
          console.log(response);
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
            <form id="update-form"onSubmit={updateEmail}>
                <input className="Update-input" placeholder="Current Email Address" id="update-email" type="text" name="email" />
                <input className="Update-input" placeholder="New Email Address" id="new-email" type="text" name="newEmail" />
                <input className="Update-btn" type="submit" value="Update Email" />
            </form>

            {/*<button >Delete Account</button>*/}
          </div>
          
        </div>
      )
}

export default Email_change
