import React, { Component } from 'react';
import Home from './components/home'
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
            <Route exact path="/" component={Home} this={this}/>
            <Route exact path="/map" component={Maps} />
            <Route exact path="/feed" component={NewsFeed} />
            <Route exact path="/idea" component={Ideas} />
            <Route exact path="/newidea" component={NewIdea} />
            <Route exact path="/update" component={Updates} />
            <Route exact path="/newupdate" component={NewUpdate} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;