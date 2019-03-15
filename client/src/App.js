import './App.css';

import React, { Component } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {PrivateRoute} from './router/Route';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PrivateRoute exact path="/home" component={Home} />
          <Route path="/" component={Login} />
          <PrivateRoute path="/xixi" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
