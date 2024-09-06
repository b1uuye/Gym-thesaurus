import React from 'react'
import Hero from '../../components/Hero/Hero'
import Programs from '../../components/Programs/Programs'
import Reasons from '../../components/Reasons/Reasons'
import Pricing from '../../components/Pricing/Pricing'
import Recommends from '../../components/Recommends/Recommends'
import Join from '../../components/Join/Join'
import Footer from '../../components/Footer/Footer'
//Homepage is used to compound all the components together. This is what is seen when you first load the page
const Homepage = () => {
  return (
    <div className="Homepage">
      <Hero/>
      <Programs/> {/*Homepage.jsx was created so that I could allow linking to other parts of the website to occur*/}
      <Reasons/>
      <Pricing/>
      <Recommends/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default Homepage
