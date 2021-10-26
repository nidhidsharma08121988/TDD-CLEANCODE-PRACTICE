import { render, screen, waitFor } from '@testing-library/react';
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
    mockGetTodoApi.mockResolvedValueOnce(todoList);

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

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Must: Toggle state of completed on click', async () => {
    await waitFor(() => {
      const arrayTaskText = screen.queryAllByTestId('todo-text');

      arrayTaskText.forEach(taskText => {
        const text = taskText.find('[data-testid="title"]');
        expect(text.classList.contains('completed')).toBeTruthy();
      });
    });
  });
});
