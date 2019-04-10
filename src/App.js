import React, { Component } from 'react';
import Home from './components/Home'
import Maps from './components/Map';
import Nav from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsFeed from './components/NewsFeed.js';
import Ideas from './components/IdeaPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} this={this}/>
            <Route exact path="/map" component={Maps} />
            <Route exact path="/feed" component={NewsFeed} />
            <Route exact path="/idea" component={Ideas} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;