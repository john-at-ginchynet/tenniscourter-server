import update from 'immutability-helper';
import R from 'ramda';

import {
  ADD_SITE, REMOVE_SITE, SET_SITES, UPDATE_SITE,
} from '_store/actions/sites';
import { LOGOUT_USER } from '_store/actions/user';

export function site(state = {
  completed: false,
}, action) {
  switch (action.type) {
    case ADD_SITE:
      return update(state, {
        id: { $set: action.payload.id },
        text: { $set: action.payload.text },
        createdAt: { $set: action.payload.createdAt },
      });
    case UPDATE_SITE:
      return update(state, {
        text: { $set: action.payload.text },
        updatedAt: { $set: action.payload.updatedAt },
      });
    default:
      return state;
  }
}

export default function sites(state = [], action) {
  const index = R.findIndex(R.propEq(action.payload?.id, 'id'), state);
  const updatedAtIndex = { $splice: [[index, 1, site(state[index], action)]] };

  switch (action.type) {
    case SET_SITES:
      return update(state, { $set: action.payload.sites });
    case ADD_SITE:
      return update(state, { $push: [site(undefined, action)] });
    case UPDATE_SITE:
      return update(state, updatedAtIndex);
    case REMOVE_SITE:
      return update(state, { $splice: [[index, 1]] });
    case LOGOUT_USER:
      return [];
    default:
      return state;
  }
}
