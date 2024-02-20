import "./HeroImage.css";
import React from 'react'
// To add any image to our file we need to import the image
import IntroImage from "../Images/Portfolio image.webp";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="Hero">
     <div className="mask">
        {/* Addinf image to our file and passing the image name to the src */}
        <img className="into-image" src={IntroImage} alt="IntroImage"></img>
        <div className="content">
            <p>I'M A PROGRAMMER</p>
            <h1> React Developer</h1>
            <div className=" botton">
                <Link to ="/project" className="btn">Projects</Link>
                <Link to ="/contact" className="btn btn-light">Contact</Link>

            </div>
        </div>
      </div>
    
    </div>
  )
}

export default HeroImage