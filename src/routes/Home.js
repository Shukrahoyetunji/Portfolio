import React from 'react'
import NavBar from '../components/NavBar'
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer"; 
import WorkCard from '../components/WorkCard';

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeroImage></HeroImage>
      <WorkCard/>
      <Footer></Footer>
    </div>
  )
}

export default Home