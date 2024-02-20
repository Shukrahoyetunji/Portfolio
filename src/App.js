import React, { Component } from "react";
 import"./index.css";
 import Home from"./routes/Home"
 import About from"./routes/About"
 import Contact from"./routes/Contact"
 import Project from"./routes/Project"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
{/* route it in order to specify address for each page BY CALLING THEM ON AFTER THE OTHER  */}
{/* using "path" to add the address and calling those pages using "element" */}
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/about" element = {<About/>}/>
      <Route path ="/project" element = {<Project/>}/>
      <Route path ="/contact" element = {<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
