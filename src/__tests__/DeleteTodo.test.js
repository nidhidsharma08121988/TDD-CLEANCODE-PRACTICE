import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../redux-store/reducers';
import * as apiCalls from '../network/todo_api_calls';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Todo item', () => {
  beforeEach(() => {
    const todoList = [
      {
        id: 1,
        userId: 1,
        title: 'good',
        completed: false,
      },
    ];
    const mockGetTodoList = jest.spyOn(apiCalls, 'getTodoListApi');
    mockGetTodoList.mockImplementation(() => Promise.resolve(todoList));

    const initState = {
      todo_reducer: {
        todos: [],
        newTodo: {},
        completed: false,
        showListError: false,
      },
    };

    const store = createStore(rootReducer, initState, applyMiddleware(thunk));

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  test('Could be deleted', async () => {
    await waitFor(() => {
      const deleteBtn = screen.getByTestId('delete-todo-btn');
      userEvent.click(deleteBtn);

      expect(screen.getByText('good')).toBeFalsy();
    });
  });
});
