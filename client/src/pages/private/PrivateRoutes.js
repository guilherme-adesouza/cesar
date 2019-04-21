import {PrivateRoute} from '../../router/Route';

import Accounts from './Accounts';
import Achievements from './Achievements';
import Games from './Games';
import Home from './Home';
import Inventory from './Inventory';
import Logout from './Logout';
import Plataforms from './Plataforms';
import Races from './Races';

const routes = [
  {
    path: '/accounts',
    component: Accounts,
  },
  {
    path: '/achievements',
    component: Achievements,
  },
  {
    path: '/games',
    component: Games,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/dashboard',
    component: Home,
  },
  {
    path: '/inventory',
    component: Inventory,
  },
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/plataforms',
    component: Plataforms,
  },
  {
    path: '/races',
    component: Races,
  }
];

export default {component: PrivateRoute, routes};
