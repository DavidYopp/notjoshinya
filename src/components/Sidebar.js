import React, { Component } from 'react';
import logo from '../badge.jpg'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-top" id="sidebar-top">
          <img id="image" src={logo} height="100px" alt="Logo" />
        </div>
        <a className="active" href="#home">Home</a>
        <a className="active" href="#News">News</a>
        <a className="active" href="#Contact">Contact</a>
        <a className="active" href="#About">About</a>
      </div>
    )
  }
}

export default Sidebar;
