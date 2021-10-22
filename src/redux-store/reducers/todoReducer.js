import { ADD_TODO, GET_TODO_LIST } from '../actions/types';

const intialState = {
  todos: [],
  newTodo: {},
};

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};

export default todoReducer;
