import "./NavBar.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import the icon"Bar" from react icon 
import {FaBars,FaTimes} from "react-icons/fa";


const NavBar = () => {
  //writing some javascript code to make the hamburger functional 
  // Using "UseState" so as to change the state of the icon
  // creating another function inside our "NavBar" function
  const [click,setClick] = useState(false);
  const handleClick = () =>setClick(!click); 
  // Changing the color of the navbar at a certain height
  const[color, setColor] = useState(false);
  const changeColor = ()=>{
    if (window.scrollY>=100){setColor(true);
    }else{
      setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  return (
    <div className={color?"header header-bg":"header"}>
{/* using "Link" to direct the logo to the home page using the "to" as the path */}
        <Link to = "/">
            <h1>Portfolio</h1>
        </Link>
        {/* Using if conditin to show the nave menu if you click on the bar and display it none to when click on the Times icon */}

        <ul className={click?"nav-menu active":"nav-menu"}>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/project">Project</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
        </ul>
        {/* Callling the icon and styling it */}
        <div className="hamburger" onClick={handleClick}>
          {/* writing "if" condition to show if the hamburger menu is clicked and display it none if the times icon is click  */}
          {click?(<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style = {{color:"white"}} />)}

        </div>
    </div>
  )
}

export default NavBar