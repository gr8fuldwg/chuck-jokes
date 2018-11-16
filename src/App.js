import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';
// import axios from 'axios';
import chuckPic from './chuck_pic.png';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

const CHUCK_API = isDev ? '/random' : 'https://api.chucknorris.io/jokes/random';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      random: '',
      error: null
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }
  handleModalOpen() {
    axios.get(CHUCK_API)
      .then(response => {
        const { random } = response.data;
        this.setState({
          modalOpen: true,
          random: random,
          error: null,
        });
      })
    }
  render() {
    return (
      <div className="vh-100 bg-purple flex flex-column justify-center items-center">
        <button className="flex justify-center items-center f1  outline-black br-100 h5 w5 dim ph8 pv2 dib black bg-yellow ">Hit Me!</button>
        <img src={chuckPic} />
        <Modal>
          <header>
            <div className="flex flex-column h-100">
              <h1>Chuck Norris Joke</h1>
            </div>
          </header>
        </Modal>
      </div>
    );
  }
}

export default App;
