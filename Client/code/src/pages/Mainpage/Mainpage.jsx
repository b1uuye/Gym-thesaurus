import React, {useEffect, useState} from 'react'
import './Mainpage.css'
import Navbar from '../../components/Navbar/Navbar';
import SearchExe from '../../components/SearchExe/SearchExe';
import {workouts} from '../../data/workoutsData';
import logo from '../../assets/logo.png';
import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Mainpage acts like Homepage, where components are compounded together, however has its own little additions too.
const Mainpage = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [userinfo,setUserinfo]=useState([])
  
  const liked = () =>{ toast.success("Added to liked exercises 💪", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true, //Using Toast and Toastity to create styling popups that occur when you like/dislike a workout
    draggable: true,
    progress: undefined,
    theme: "colored",
  })}


  return (
    <div className='Mainpage'>
        <Navbar/>
        <SearchExe setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

        <div className="workout-categories"> 
        {workouts.map((workout, i) =>(//Using Map to map all the data from the workoutsData file, and display them all, how the API(Exercisedb) would show them.
            <div className="workout-category" key={i}>
                <img src={workout.image} alt="" /> 
                <span>{workout.workoutname}</span>
                <span>{workout.details}</span>
                <button className='liked-btn' onClick={liked}>add to liked</button>
                </div>
        
             ))}
             <ToastContainer
                position="top-center"
                autoClose={1500}
                limit={1}
                hideProgressBar={false}
                newestOnTop
                closeOnClick //this toast container allows for notification to be brought out to the front telling a user it has been added to their liked list
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
                
        </div>
        <div className='logo-m'>
          <ScrollToTop smooth>
        <img src={logo} />
        </ScrollToTop>
        </div>
    </div>
  )
}

export default Mainpage 
