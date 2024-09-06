import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { Stack } from '@mui/material'
import { Link as LinkRouter} from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' 
    sx={{ gap:{ sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}}}> {/*MUI material allows us to do different inline css here and allows us to target responsiveness directly from the code*/}
        <LinkRouter to='/Mainpage'>
        <img src={logo} alt="logo"
        style={{
            width: '180px', height: '100px', margin: '10px 20px'
        }} /></LinkRouter>
        <Stack>
        <LinkRouter to='/Login'>
        <button type= 'submit' className='Mbutton'>Log Out</button>
        </LinkRouter>
        </Stack>
        <Stack //Below are each page that is used inside the home page
        direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
            <LinkRouter to='/Mainpage' sx={{}}style={{textDecoration:'none', color: 'white', borderBottom: '4px solid var(--orange)'}}>
            Exercises
            </LinkRouter>
            <LinkRouter to='/Liked' style={{textDecoration:'none', color: 'white', borderBottom: '4px solid #5DF15D'}}>
            Liked
            </LinkRouter>
            <LinkRouter to='/Settings' style={{textDecoration:'none', color: 'white', borderBottom: '4px solid #FF0833'}}>
            Settings
            </LinkRouter>
        </Stack>
    </Stack>
  )
}

export default Navbar
