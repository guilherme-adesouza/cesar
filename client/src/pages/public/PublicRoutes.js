import NotFound from './NotFound';
import Login from './Login';
import Loading from './Loading';
import Forbidden from './Forbidden';
import {Route} from "react-router-dom";

const routes = [
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
    component: NotFound,
  }
];

export default {component: Route, routes};
