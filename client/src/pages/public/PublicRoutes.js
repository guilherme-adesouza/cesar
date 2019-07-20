import NotFound from './NotFound';
import Login from './Login';
import Loading from './Loading';
import Forbidden from './Forbidden';
import Error from './Error';
import Welcome from './Welcome';
import {Route} from "react-router-dom";

const routes = [
  {
    path: '/welcome',
    component: Welcome
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/loading',
    component: Loading,
  },
  {
    path: '/403',
    component: Forbidden,
  },
  {
    path: '/error',
    component: Error,
  },
  {
    component: NotFound,
  }
];

export default {component: Route, routes};
