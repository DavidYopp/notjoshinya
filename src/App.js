import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div id="mainpage">
        <div className="wrapper">
          <Sidebar></Sidebar>
        </div>
      </div>
    );
  }
}

export default App;
