import React from 'react'
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import Heroimage2 from '../components/Heroimage2';
import ContactImage from "../Images/contact us.avif";
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <NavBar/>

      <Heroimage2 src = {ContactImage} heading ="CONTACT US."text = "Let chats"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact