import { handleActions } from 'redux-actions';
import { SET_NEWEST, SET_ITEM } from './actions';

export function findAvailableIndex(prevIndex, ids, itemDict) {
  let nextIndex = prevIndex;
  let item;
  do {
    nextIndex += 1;
    item = itemDict[ids[nextIndex]];
  } while (item);
  return nextIndex - 1;
}

const defaultState = {
  itemDict: {},
  newest: {
    isFetching: false,
    ids: [],
    offset: 0,
    availableIndex: -1,
  },
};

export default handleActions({
  [SET_NEWEST]: (state, { payload }) => ({
    ...state,
    newest: {
      ...state.newest,
      ...payload,
    },
  }),

  [SET_ITEM]: (state, { payload: { item } }) => {
    const { ids, availableIndex: prevIndex } = state.newest;
    const itemDict = {
      ...state.itemDict,
      [item.id]: item,
    };

    const availableIndex = findAvailableIndex(prevIndex, ids, itemDict);

    return {
      ...state,
      newest: {
        ...state.newest,
        availableIndex,
      },
      itemDict,
    };
  },
}, defaultState);
