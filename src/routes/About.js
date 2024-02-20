import React from 'react'
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import Heroimage2 from '../components/Heroimage2';
import AboutImage from "../Images/image 2.avif"
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar/>
      <Heroimage2  src = {AboutImage} heading ="ABOUT US."text = "Some of my works"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About