import Player from './Player';
import {MasterRoute} from '../../router/Route';

const routes = [
  {
    path: '/player',
    component: Player,
  },
];

export default {component: MasterRoute, routes};
