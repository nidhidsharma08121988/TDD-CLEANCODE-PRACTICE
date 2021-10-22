import { getTodoListApi } from '../../network/todo_api_calls';
import { ADD_TODO, GET_TODO_LIST } from './types';

export const getTodoListAction = () => async dispatch => {
  const todoList = await getTodoListApi();
  dispatch({
    type: GET_TODO_LIST,
    payload: todoList,
  });
};

export const addNewTodoAction = todo => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};
