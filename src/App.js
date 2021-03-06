import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';
import axios from 'axios';
import chuckPic from './chuck_pic.png';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

// const isDev = process.env.NODE_ENV !== 'production';
const CHUCK_API = 'https://api.chucknorris.io/jokes/random';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      random: '',
      error: null
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleModalOpen() {
    axios.get(CHUCK_API)
      .then(response => {
        const { value } = response.data;
        this.setState({
          modalOpen: true,
          value: value,
          error: null,
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });

  }
  handleModalClose() {
    this.setState({ modalOpen: false });
  }
  render() {
    return (
      <div className="vh-100 bg-purple flex flex-column justify-center items-center">
        <header className="App-header">
          <button className="App-hit flex justify-center items-center f1 br-100 h5 w5 dim ph8 pv2 dib black bg-yellow mr4 mb2"
            onClick={this.handleModalOpen}>
            Hit Me!
          </button>
        </header>
        <img className="hvr-buzz-out" src={chuckPic} />
        <Modal className="fullscreen bg-black white" closeTimeoutMS={150} isOpen={this.state.modalOpen}>
          <div className="App-close flex justify-center">
            <button className="f1 ph3 pv2 mb2 dib black dim bg-white b--white mt4 mr4" onClick={this.handleModalClose}>Close</button>
          </div>
          <main className="flex-grow-1 flex flex-column justify-center items-center">
            <div className="flex justify-center items-center flex-column h-100">
              <h1 className="App-h1">Joke's on............Chuck</h1>
            </div>
            <p className="App-p ml4">{this.state.value}</p>
          </main>
        </Modal>
      </div>
    );
  }
}

export default App;
