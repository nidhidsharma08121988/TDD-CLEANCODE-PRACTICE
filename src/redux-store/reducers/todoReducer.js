import {
  ADD_TODO,
  SHOW_ERROR,
  GET_TODO_LIST,
  TOGGLE_COMPLETED,
} from '../actions/types';

const intialState = {
  todos: [],
  newTodo: {},
  showListError: false,
};

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        todos: action.payload,
        showListError: false,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case SHOW_ERROR:
      return {
        ...state,
        showListError: true,
      };
    default:
      return state;
  }
};

export default todoReducer;
