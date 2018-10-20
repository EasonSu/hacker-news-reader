import { handleActions } from 'redux-actions';
import { NEWEST_ID } from './actions';

const defaultState = {
  item: {},
  newest: {
    isFetching: false,
    ids: [],
  },
};

export default handleActions({
  [NEWEST_ID]: (state, { payload }) => ({
    ...state,
    newest: {
      ...state.newest,
      ...payload,
    },
  }),
}, defaultState);
