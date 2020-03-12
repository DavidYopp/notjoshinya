import React, { Component } from 'react';
import logo from '../images/josh.jpg'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-top" id="sidebar-top">
          <img id="image" src={logo} height="150px" width="150px" alt="Logo" />
          <br />
          <div style={{padding: "15px"}}><h5>NotJoshinYa</h5></div>
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
