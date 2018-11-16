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
        <button className="flex justify-center items-center f1  outline-black br-100 h5 w5 dim ph8 pv2 dib black bg-yellow mr4 mb2"
          onClick={this.handleModalOpen}>
          Hit Me!
        </button>
        <img className="hvr-buzz-out" src={chuckPic} />
        <Modal className="bg-black red" closeTimeoutMS={150} isOpen={this.state.modalOpen}>
          <header className="flex justify-end mr4 ">
            <button className="f1 ph3 pv2 mb2 dib yellow bg-green b--none mt4" onClick={this.handleModalClose}>X</button>
          </header>
          <main className="flex-grow-1 flex flex-column justify-center items-center">
            <div className="flex justify-center items-center flex-column h-100">
              <h1>Joke's on............Chuck</h1>
            </div>
            <p>{this.state.value}</p>
          </main>
        </Modal>
      </div>
    );
  }
}

export default App;
