import React, { Component } from 'react';
import Home from './components/Home'
import Maps from './components/Map';
import NavBar from './components/NavBar';
import Msger from './components/Messages'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsFeed from './components/NewsFeed.js';
import Updates from './components/Updates.js';
import NewIdea from './components/NewIdea'
import Ideas from './components/Ideas';
import NewUpdate from './components/NewUpdate';
import StylingColors from './Styling'
import FormPage from './components/FormPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} stylingColors={StylingColors} />} />
            <Route path="/map" render={(props) => <Maps {...props} stylingColors={StylingColors} />} />
            <Route path="/feed" render={(props) => <NewsFeed {...props} stylingColors={StylingColors} idea={true} />} />
            <Route path="/idea/:id" render={(props) => <Ideas {...props} stylingColors={StylingColors} />} />
            <Route path="/newidea" render={(props) => <NewIdea {...props} stylingColors={StylingColors} />} />
            <Route path="/update" render={(props) => <Updates {...props} stylingColors={StylingColors} />} />
            <Route path="/newupdate" render={(props) => <NewUpdate {...props} stylingColors={StylingColors} />} />
            <Route path="/messanger" render={(props) => <Msger {...props} stylingColors={StylingColors} />} />
            <Route path="/form" component={FormPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;