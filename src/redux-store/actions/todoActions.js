import { GET_TODO_LIST } from './types';

const getTodoListAction = () => dispatch => {
  const todoList = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];
  dispatch({
    type: GET_TODO_LIST,
    payload: todoList,
  });
};
