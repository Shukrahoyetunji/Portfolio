import React from 'react'
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import Heroimage2 from '../components/Heroimage2';
import ProjecImage from "../Images/Image 3.avif"
import PricingCost from '../components/PricingCost';
import WorkCard from '../components/WorkCard';

const Project = () => {
  return (
    <div>
      <NavBar/>
      <Heroimage2 src = {ProjecImage} heading ="PROJECTS."text = "Some of my works"/>
      <WorkCard/>
      <PricingCost/>
      <Footer/>
    </div>
  )
};

export default Project