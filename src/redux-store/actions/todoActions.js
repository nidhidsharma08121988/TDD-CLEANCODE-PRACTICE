import { getTodoListApi } from '../../network/todo_api_calls';
import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO_LIST,
  SHOW_ERROR,
  TOGGLE_COMPLETED,
} from './types';

export const deleteTodoAction = id => dispatch => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

export const toggleCompletedAction = id => dispatch => {
  dispatch({
    type: TOGGLE_COMPLETED,
    payload: id,
  });
};

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
