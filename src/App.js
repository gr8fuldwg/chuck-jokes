import React, { Component } from 'react';
// import Modal from 'react-modal';
import './App.css';
// import axios from 'axios';
import chuckPic from './chuck_pic.png';

class App extends Component {
  render() {
    return (
      <div className="vh-100 bg-purple flex flex-column justify-center items-center">
        <button ></button>
        <img src={chuckPic} />
      </div>

    );
  }
}

export default App;
