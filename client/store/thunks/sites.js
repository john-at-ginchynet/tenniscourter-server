import { deleteSite, getSites, postSite, putSite } from '_api/sites';

import { addSite, removeSite, setSites, updateSite } from '_store/actions/sites';

import { dispatchError } from '_utils/api';

export const attemptGetSites = () => dispatch =>
  getSites()
    .then(({ sites }) => {
      dispatch(setSites(sites));
      return sites;
    })
    .catch(dispatchError(dispatch));

export const attemptAddSite = newSite => dispatch =>
  addSite(newSite)
    .then(data => {
      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      return dispatch(addSite(newSite));
    })
    .then(() => dispatch(push('/sites')))
    .catch(dispatchError(dispatch));

export const attemptUpdateSite = (id, text) => dispatch =>
  putSite({ id, text })
    .then(data => {
      dispatch(updateSite({ id, text, updatedAt: data.site.updatedAt }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteSite = id => dispatch =>
  deleteSite({ id })
    .then(data => {
      dispatch(removeSite(id));
      return data;
    })
    .catch(dispatchError(dispatch));
