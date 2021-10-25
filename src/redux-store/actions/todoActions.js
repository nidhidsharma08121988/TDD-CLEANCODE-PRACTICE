import { getTodoListApi } from '../../network/todo_api_calls';
import { ADD_TODO, GET_TODO_LIST, HIDE_ERROR, SHOW_ERROR } from './types';

export const addNewTodoAction = todo => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};

export const getTodoListAction = () => async dispatch => {
  try {
    await getList(dispatch);
  } catch (err) {
    showError(dispatch);
  }
};

function showError(dispatch) {
  dispatch({
    type: SHOW_ERROR,
  });
}

async function getList(dispatch) {
  const todoList = await getTodoListApi();
  dispatch({
    type: GET_TODO_LIST,
    payload: todoList,
  });
}
