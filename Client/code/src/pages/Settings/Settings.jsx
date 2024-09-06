import React from 'react'
import './Settings.css'
import { Link as LinkRouter } from 'react-router-dom'
import leftArrow from '../../assets/leftArrow.png'

const Settings = () => {

  const deleteCustomer = () => { //Function that will be used when deleting a user from the database
    console.log("Deleting...")
  }

  const updateEmail = () =>{
    window.location = '/Email_change' //Sends user to the account email page so they can confirm details before changing their email
  }
  const nextPage = () =>{
    window.location = '/Deletion' //Sends user to the account deletion page so they can confirm details before deletion
  }

  return (
    <div className='Settings'>
      <LinkRouter to='/Mainpage'>
      <img className='back-arrow-s' src={leftArrow} alt="" />
      </LinkRouter>
      <div className='Settings-container'>
        <h1>Settings</h1>
        <button className='Set-btn' onClick={updateEmail}>Change Username</button> {/* Different options on the Settings page*/}
        <button className='Set-btn'>Change Email</button>
        <button className='Set-btn'>Change Password</button>
        <button className='Set-btn' onClick={nextPage}>Delete Account</button>
      </div>
      
    </div>
  )
}

export default Settings
