import React, { Component } from 'react';
import Home from './components/home'
import Maps from './components/Map';
import Nav from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color1: 'yellow',
      color2: 'blue'
    }
  }
  render() {
    return (
      <>
        <Router className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} this={this}/>
            <Route exact path="/map" component={Maps} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
