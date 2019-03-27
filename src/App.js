import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
// import Scorecard from './Components/Scorecard';
import DisplayScoresJumbotron from './Components/DisplayScoresJumbotron';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
        <div className="Display-Board">
          <DisplayScoresJumbotron></DisplayScoresJumbotron>
        </div>
      </div>
    );
  }
}

export default App;
