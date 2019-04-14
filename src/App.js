import React, { Component } from 'react';
import Home from './components/Home'
import Maps from './components/Map';
import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsFeed from './components/NewsFeed.js';
import Ideas from './components/IdeaPage.js';
import NewIdea from './components/NewIdea'
import Updates from './components/Updates';
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
            <Route path="/idea" component={Ideas} />
            <Route path="/newidea" component={NewIdea} />
            <Route path="/update" component={Updates} />
            <Route path="/newupdate" component={NewUpdate} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;