import { deleteMatch, getMatches, postMatch, putMatch } from '_api/matches';

import { addMatch, removeMatch, setMatches, updateMatch } from '_store/actions/matches';

import { dispatchError } from '_utils/api';

export const attemptGetMatches = () => dispatch =>
  getMatches()
    .then(({ matches }) => {
      dispatch(setMatches(matches));
      return matches;
    })
    .catch(dispatchError(dispatch));

export const attemptAddMatch = newMatch => dispatch =>
  addMatch(newMatch)
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

      return dispatch(addMatch(newMatch));
    })
    .then(() => dispatch(push('/match')))
    .catch(dispatchError(dispatch));

export const attemptUpdateMatch = (id, text) => dispatch =>
  putMatch({ id, text })
    .then(data => {
      dispatch(updateMatch({ id, text, updatedAt: data.match.updatedAt }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteMatch = id => dispatch =>
  deleteMatch({ id })
    .then(data => {
      dispatch(removeMatch(id));
      return data;
    })
    .catch(dispatchError(dispatch));
