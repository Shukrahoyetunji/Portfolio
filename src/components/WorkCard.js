import "./WorkCard.css";
import React from 'react';
import ProjectOne from "../Images/Image 3.avif";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className ="work-container">
      <h1 className="Project-heading">PROJECTS</h1>
      <div className="projects-container">
        <div className="Project-card">
          <img Src={ProjectOne} alt="img"></img>
          <h2 className="ProjectTitle">Project Title</h2>
          <div className="Pro-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris metus, laoreet in ante pulvinar, congue blandit urna. Curabitur dictum eros quis eleifend ultrices. Phasellus commodo feugiat ligula sed auctor. Nullam at nisl vel leo vestibulum tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <div className="Pro-buttons">
              <NavLink to ="url.com" className="btn">View</NavLink>
              <NavLink to ="url.com" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className="Project-card">
          <img Src={ProjectOne} alt="img"></img>
          <h2 className="ProjectTitle">Project Title</h2>
          <div className="Pro-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris metus, laoreet in ante pulvinar, congue blandit urna. Curabitur dictum eros quis eleifend ultrices. Phasellus commodo feugiat ligula sed auctor. Nullam at nisl vel leo vestibulum tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <div className="Pro-buttons">
              <NavLink to ="url.com" className="btn">View</NavLink>
              <NavLink to ="url.com" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className="Project-card">
          <img Src={ProjectOne} alt="Img"></img>
          <h2 className="ProjectTitle">Project Title</h2>
          <div className="Pro-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris metus, laoreet in ante pulvinar, congue blandit urna. Curabitur dictum eros quis eleifend ultrices. Phasellus commodo feugiat ligula sed auctor. Nullam at nisl vel leo vestibulum tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <div className="Pro-buttons">
              <NavLink to ="url.com" className="btn">View</NavLink>
              <NavLink to ="url.com" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard