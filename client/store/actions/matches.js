export const SET_MATCHES = 'SET_MATCHES';
export const ADD_MATCH = 'ADD_MATCH';
export const UPDATE_MATCH = 'UPDATE_MATCH';
export const REMOVE_MATCH = 'REMOVE_MATCH';
export const INCREMENT_MATCH_ID = 'INCREMENT_MATCH_ID';

export const setMatches = matches => ({
  type: SET_MATCHES,
  payload: {
    matches,
  },
});

export const addMatch = ({ id, text, createdAt }) => ({
  type: ADD_MATCH,
  payload: {
    createdAt,
    id,
    text,
  },
});

export const updateMatch = ({ id, text, updatedAt }) => ({
  type: UPDATE_MATCH,
  payload: {
    updatedAt,
    id,
    text,
  },
});

export const removeMatch = id => ({
  type: REMOVE_MATCH,
  payload: {
    id,
  },
});
