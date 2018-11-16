import React, { Component } from 'react';
// import Modal from 'react-modal';
import './App.css';
// import axios from 'axios';
import chuckPic from './chuck_pic.png';

class App extends Component {
  render() {
    return (
      <div className="vh-100 bg-purple flex flex-column justify-center items-center">
        <button className="flex justify-center items-center f1  outline-black br-100 h5 w5 dim ph8 pv2 dib black bg-yellow ">Hit Me!</button>
        <img src={chuckPic} />
      </div>

    );
  }
}

export default App;
