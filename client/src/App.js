import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Routes from './router/PageRouter';

export default function App(){
  return (
    <Router>
      <div className="App Dark">
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  );
}
