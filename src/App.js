import React, { Component } from 'react';
import './App.css';

// Component Imports
import Navbar from './Components/Navbar';
import Scorecard from './Components/Scorecard';
import DisplayScoresJumbotron from './Components/DisplayScoresJumbotron';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="NavigationPane">
          <Navbar></Navbar>
        </div>
        <div className="DisplayBoard">
          <DisplayScoresJumbotron></DisplayScoresJumbotron>
        </div>
      </div>
    );
  }
}

export default App;
