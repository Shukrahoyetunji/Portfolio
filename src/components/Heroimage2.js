import "./Heroimage2.css"
import React, { Component } from 'react'

class Heroimage2 extends Component {
  render(){
    return (
      <div className="Hero-image2"><img className="intro2" src ={this.props.src}></img>
          <div className="heading">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
          </div>
      </div>
    );
  }
 
};

export default Heroimage2