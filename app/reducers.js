import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import appReducer from 'containers/App/reducer';

// Initial routing state
const routeInitialState = {
  location: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

export default function createReducer(initialState) {
  return combineReducers({
    ...initialState,
    route: routeReducer,
    app: appReducer,
  });
}
