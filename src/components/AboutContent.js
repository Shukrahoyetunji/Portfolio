import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from 'react'
import ContactImg1 from "../Images/Image 5.avif";
import ContactImg2 from "../Images/image4.avif";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I am a react developer</p>
            <Link to = "/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-content">
                <div className="img-stack top">
                    <img src={ContactImg1} className="Img"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={ContactImg2} className="Img"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent