export const SET_SITES = 'SET_SITES';
export const ADD_SITE = 'ADD_SITE';
export const UPDATE_SITE = 'UPDATE_SITE';
export const REMOVE_SITE = 'REMOVE_SITE';
export const INCREMENT_SITE_ID = 'INCREMENT_SITE_ID';

export const setSites = sites => ({
  type: SET_SITES,
  payload: {
    sites,
  },
});

export const addSite = ({ id, text, createdAt }) => ({
  type: ADD_SITE,
  payload: {
    createdAt,
    id,
    text,
  },
});

export const updateSite = ({ id, text, updatedAt }) => ({
  type: UPDATE_SITE,
  payload: {
    updatedAt,
    id,
    text,
  },
});

export const removeSite = id => ({
  type: REMOVE_SITE,
  payload: {
    id,
  },
});
