import React, { Component } from 'react';
import Home from './components/home'
import Maps from './components/Map';
import Nav from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={Maps} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
