import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  const middlewares = [thunk, routerMiddleware(history)];
  const store = createStore(
    createReducer(initialState),
    applyMiddleware(...middlewares)
  );

  return store;
}
