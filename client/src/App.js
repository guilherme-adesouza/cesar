import './App.css';

import React, { Component } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
