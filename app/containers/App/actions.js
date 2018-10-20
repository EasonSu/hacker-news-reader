import { createAction } from 'redux-actions';
import api from 'services/api';

export const NEWEST_ID = 'NEWEST_ID';

export const setNewestID = createAction(
  NEWEST_ID,
  ({ ids, isFetching = false }) => {
    const payload = { isFetching };
    if (ids) {
      payload.ids = ids;
    }
    return payload;
  }
);

export function fetchNewestList() {
  return (dispatch) => {
    dispatch(setNewestID({ isFetching: true }));
    api.getNewestIDs().then(ids => dispatch(setNewestID({ ids })));
  };
}
