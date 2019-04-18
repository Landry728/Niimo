import React, { Component } from 'react';
import Home from './components/Home'
import Maps from './components/Map';
import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsFeed from './components/NewsFeed.js';
import Updates from './components/Updates.js';
import NewIdea from './components/NewIdea'
import Ideas from './components/Ideas';
import NewUpdate from './components/NewUpdate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/map" component={Maps} />
            <Route path="/feed" component={NewsFeed} />
            <Route exact path="/idea/:id" component={Ideas} />
            <Route path="/newidea" component={NewIdea} />
            <Route exact path="/update/:id" component={Updates} />
            <Route path="/newupdate" component={NewUpdate} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;