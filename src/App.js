import React, { Component } from 'react';
import './App.css';

// Component Imports
import DisplayScoresJumbotron from './Components/DisplayScoresJumbotron';
import AppNavigationBar from './Components/AppNavigationBar';

// DEV Components (these are experimental and will be removed later)
import Rankings from './Components/Rankings';

// Main App Parent component that will eventually load up children components
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="NavigationPane">
          <AppNavigationBar></AppNavigationBar>
        </div>
        {/* <div className="DisplayBoard">
          <DisplayScoresJumbotron></DisplayScoresJumbotron>
        </div> */}
        <div className="DisplayBoard">
          <Rankings></Rankings>
        </div>
      </div>
    );
  }
}

export default App;
