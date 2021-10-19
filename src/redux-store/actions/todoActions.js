import { getTodoListApi } from '../../network/todo_api_calls';
import { GET_TODO_LIST } from './types';

export const getTodoListAction = () => async dispatch => {
  
  const todoList = await getTodoListApi();

  dispatch({
    type: GET_TODO_LIST,
    payload: todoList,
  });
};
