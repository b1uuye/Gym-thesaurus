import React, {useEffect, useState} from 'react'
import '../Mainpage/Mainpage.css'
import Navbar from '../../components/Navbar/Navbar';
import SearchExe from '../../components/SearchExe/SearchExe';
import {likedworkouts} from '../../data/likedworkoutsData';
import logo from '../../assets/logo.png';
import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Liked = () => {

  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [userinfo,setUserinfo]=useState([])
  
  const disliked = () =>{ toast.error("exercise removed 🏃‍♂️", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true, //Used Toast and Toastify for the stylish pop ups that occur when you like and dislike an exercise
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  })}

  return (
    <div className='Mainpage'>
    <Navbar/>
    <SearchExe setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

    <div className="workout-categories">
    {likedworkouts.map((likedworkouts, i) =>(
        <div className="workout-category" key={i}>
            <img src={likedworkouts.image} alt="" />
            <span>{likedworkouts.workoutname}</span> {/*Used to map all of the liked workouts for the liked workouts page*/}
            <span>{likedworkouts.details}</span>
            <button className='remove-btn' onClick={disliked}>remove from liked</button>
            </div>
    
         ))}
        <ToastContainer
            position="top-center"
            autoClose={1500}
            limit={1}
            hideProgressBar={false}
            newestOnTop //Used Toast and Toastify for the stylish pop ups that occur when you like and dislike an exercise
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />

    </div>
    <div className='logo-m'>
    <ScrollToTop smooth>
        <img src={logo} />
        </ScrollToTop> {/*Used ScrollToTop for a button to appear that will allow users to transition back to the top smoothly*/}
    </div>
</div>
)
}

export default Liked
