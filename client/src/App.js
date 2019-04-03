import './App.css';

import React from 'react';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Player from './pages/Player';
import NotFound from './pages/NotFound';
import Forbidden from './pages/Forbidden';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import {PrivateRoute, MasterRoute} from './router/Route';

export default function App(){
  return (
    <Router>
      <div className="App Dark">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/loading" component={Loading} />
          <Route path="/404" component={NotFound} />
          <Route path="/403" component={Forbidden} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/inventory" component={Inventory} />
          <MasterRoute path="/player" component={Player} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
