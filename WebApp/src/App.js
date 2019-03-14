import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Scorecard from './Components/Scorecard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
        {/* <header className="App-header">
        </header> */}
        <div className="Display-Board">
          <Scorecard></Scorecard>
        </div>
      </div>
    );
  }
}

export default App;
