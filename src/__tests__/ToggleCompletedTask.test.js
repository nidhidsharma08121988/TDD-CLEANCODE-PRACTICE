import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as apiCalls from '../network/todo_api_calls';
import rootReducer from '../redux-store/reducers';
import App from '../App';
import userEvent from '@testing-library/user-event';

const todoList = [
  {
    id: 1,
    userId: 1,
    title: 'good',
    completed: false,
  },
];

describe('Todo item', () => {
  beforeEach(() => {
    const mockGetTodoApi = jest.spyOn(apiCalls, 'getTodoListApi');
    mockGetTodoApi.mockImplementation(() => Promise.resolve(todoList));

    const initState = {
      todo_reducer: { todos: [], newTodo: {}, showListError: false },
    };

    const store = createStore(rootReducer, initState, applyMiddleware(thunk));

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('Must: Toggle state of completed on click', async () => {
    const taskText = screen.queryByTestId('todo-text');
    userEvent.click(taskText);

    await waitFor(() => {
      expect(screen.queryByText(taskText.innerText).className).toBe(
        'completed'
      );
    });
  });
});
