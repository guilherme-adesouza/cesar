import NotFound from './NotFound';
import Login from './Login';
import Loading from './Loading';
import Forbidden from './Forbidden';
import {Route} from "react-router-dom";

const routes = [
  // {
  //   path: null,
  //   component: NotFound,
  // },
  {
    path: '/403',
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
    path: '/404',
    component: Forbidden,
  }
];

export default {component: Route, routes};
