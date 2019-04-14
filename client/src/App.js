import './App.css';

import React from 'react';

import Login from './pages/public/Login';

import Home from './pages/private/Home';
import Games from './pages/private/Games';
import Races from './pages/private/Races';
import Inventory from './pages/private/Inventory';
import Achievements from './pages/private/Achievements';
import Accounts from './pages/private/Accounts';
import Plataforms from './pages/private/Plataforms';

import Player from './pages/master/Player';

import Loading from './pages/helper/Loading';
import NotFound from './pages/helper/NotFound';
import Forbidden from './pages/helper/Forbidden';

import {
  BrowserRouter as Router,
  Route,
  Switch
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
          <PrivateRoute path="/games" component={Games} />
          <PrivateRoute path="/races" component={Races} />
          <PrivateRoute path="/achievements" component={Achievements} />
          <PrivateRoute path="/accounts" component={Accounts} />
          <PrivateRoute path="/plataforms" component={Plataforms} />
          <MasterRoute path="/player" component={Player} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
