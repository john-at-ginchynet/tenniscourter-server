import update from 'immutability-helper';
import R from 'ramda';

import {
  ADD_MATCH, REMOVE_MATCH, SET_MATCHES, UPDATE_MATCH,
} from '_store/actions/matches';
import { LOGOUT_USER } from '_store/actions/user';

export function match(state = {
  completed: false,
}, action) {
  switch (action.type) {
    case ADD_MATCH:
      return update(state, {
        id: { $set: action.payload.id },
        text: { $set: action.payload.text },
        createdAt: { $set: action.payload.createdAt },
      });
    case UPDATE_MATCH:
      return update(state, {
        text: { $set: action.payload.text },
        updatedAt: { $set: action.payload.updatedAt },
      });
    default:
      return state;
  }
}

export default function matches(state = [], action) {
  const index = R.findIndex(R.propEq(action.payload?.id, 'id'), state);
  const updatedAtIndex = { $splice: [[index, 1, match(state[index], action)]] };

  switch (action.type) {
    case SET_MATCHES:
      return update(state, { $set: action.payload.matches });
    case ADD_MATCH:
      return update(state, { $push: [match(undefined, action)] });
    case UPDATE_MATCH:
      return update(state, updatedAtIndex);
    case REMOVE_MATCH:
      return update(state, { $splice: [[index, 1]] });
    case LOGOUT_USER:
      return [];
    default:
      return state;
  }
}
