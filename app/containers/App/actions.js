import { createActions } from 'redux-actions';
import api from 'services/api';
import { pageSize } from './constants';

export const SET_NEWEST = 'SET_NEWEST';
export const SET_ITEM = 'SET_ITEM';

export const { setNewest, setItem } = createActions({
  [SET_NEWEST]: (data) => {
    const { isFetching = false } = data;
    return { ...data, isFetching };
  },

  [SET_ITEM]: item => ({
    id: item.id,
    item,
  }),
});

export function fetchNewestList() {
  return (dispatch) => {
    dispatch(setNewest({ isFetching: true }));

    api.getNewestIDs()
      .then(ids => dispatch(setNewest({ ids })))
      .then(() => dispatch(fetchNextPage()));
  };
}

export function fetchNextPage() {
  return (dispatch, getState) => {
    const { ids, offset, isFetching } = getState().app.newest;

    if (isFetching) {
      return;
    }

    dispatch(setNewest({ isFetching: true }));

    const nextOffset = Math.min(offset + pageSize, ids.length);
    const nextIDs = ids.slice(offset, nextOffset);
    const tasks = nextIDs.map((id) => { // eslint-disable-line arrow-body-style
      return api.getItem(id)
        .then((item) => {
          dispatch(setItem(item));
          return item;
        });
    });

    Promise.all(tasks)
      .then(() => dispatch(setNewest({ offset: nextOffset })));
  };
}
