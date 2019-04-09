import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Map from './components/MapContainer';
import Nav from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Button
          tag="a"
          color="success"
          size="large"
          href="http://reactstrap.github.io"
          target="_blank"
        />
        <div className="Map">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
