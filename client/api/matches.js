import request from 'superagent';

import { handleError, handleSuccess } from '_utils/api';

export const postMatch = info =>
  request.post('/api/matches')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getMatches = () =>
  request.get('/api/matches')
    .then(handleSuccess)
    .catch(handleError);

export const putMatch = info =>
  request.put('/api/matches')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const deleteMatch = info =>
  request.delete('/api/matches')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);
