import Players from './Players';
import {MasterRoute} from '../../router/Route';

const routes = [
  {
    path: '/players',
    component: Players,
  },
];

export default {component: MasterRoute, routes};
