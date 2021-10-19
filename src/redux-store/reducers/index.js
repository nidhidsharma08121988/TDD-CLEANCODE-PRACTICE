import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todo_reducer: todoReducer,
});

export default rootReducer;
