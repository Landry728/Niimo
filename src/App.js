import React, { Component } from 'react'
import Nav from './components/NavBar'
import Locations from './components/Locations'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Locations />
      </div>
    );
  }
}

export default App;
