import request from 'superagent';

import { handleError, handleSuccess } from '_utils/api';

export const postSite = info =>
  request.post('/api/sites')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const getSites = () =>
  request.get('/api/sites')
    .then(handleSuccess)
    .catch(handleError);

export const putSite = info =>
  request.put('/api/sites')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const deleteSite = info =>
  request.delete('/api/sites')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);
