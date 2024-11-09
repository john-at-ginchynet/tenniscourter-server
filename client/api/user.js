import request from 'superagent';

import { handleError, handleSuccess } from '_utils/api';

export const getUser = () =>
  request.get('/api/me')
    .then(handleSuccess)
    .catch(handleError);

export const putUser = info =>
  request.put('/api/me')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);

export const putUserPassword = passwordInfo =>
  request.put('/api/me/password')
    .send(passwordInfo)
    .then(handleSuccess)
    .catch(handleError);
