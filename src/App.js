// React Imports
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


// Component Imports
import DisplayScoresJumbotron from './Components/DisplayScoresJumbotron';
import AppNavigationBar from './Components/AppNavigationBar';
import Rankings from './Components/Rankings';


// DEV Components (these are experimental and will be removed later)

// Main App Parent component that will eventually load up children components
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="NavigationPane">
            <AppNavigationBar></AppNavigationBar>
          </div>
        </div>

          <Switch>
            <Route exact path='/' component={DisplayScoresJumbotron} />
            <Route path='/scores' component={DisplayScoresJumbotron} />
            <Route path='/rankings' component={Rankings} />
          </Switch>
          
      </Router>
    );
  }
}

export default App;
