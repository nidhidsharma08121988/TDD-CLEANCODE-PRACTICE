import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

//applyMiddleware doesn't take array it just takes multiple arguments
// const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
