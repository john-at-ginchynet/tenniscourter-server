import { combineReducers } from 'redux';

import matches from './matches';
import sites from './sites';
import user from './user';

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  user,
  matches,
  sites,
});

export default createRootReducer;
