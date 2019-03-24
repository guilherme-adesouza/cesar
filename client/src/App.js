import './App.css';

import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import {PrivateRoute} from './router/Route';

export default function App(){
  return (
    <Router>
      <div className="App Dark">
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </div>
    </Router>
  );
}
