import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Mainpage from './pages/Mainpage/Mainpage';
import Payment from './pages/Payment/Payment';
import Liked from './pages/Liked/Liked';
import Settings from './pages/Settings/Settings';
import Deletion from './pages/Deletion/Deletion';
import Paymentprocess from './pages/Payment/Paymentprocess';
import Payments from './pages/Payment/Payments';
import Email_change from './pages/Email_change/Email_change';




function App() {//All Routes below are essential for the connections for other parts of the webpage*/
  return (

    <div className="App">
      
    <BrowserRouter>
      {/*<Header/>*/} {/*Originally used to test out linking of pages, but commented out as I have it initialised somewhere else inside Homepage*/}
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path= '/Mainpage' element={<Mainpage/>}/>
      <Route path= '/Payment' element={<Payment/>}/>
      <Route path= '/Liked' element={<Liked/>}/>
      <Route path= '/Settings' element={<Settings/>}/>
      <Route path= '/Deletion' element={<Deletion/>}/>
      <Route path= '/Email_change' element={<Email_change/>}/>
      <Route path= '/Paymentprocess' element={<Paymentprocess/>}/>
      <Route path= '/Payments' element={<Payments/>}/>
     </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
