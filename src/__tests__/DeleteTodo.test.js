import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../redux-store/reducers';
import * as apiCalls from '../network/todo_api_calls';
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
    const mockGetTodoList = jest.spyOn(apiCalls, 'getTodoListApi');
    mockGetTodoList.mockResolvedValueOnce(todoList);

    const initState = {
      todo_reducer: {
        todos: [],
        newTodo: {},
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

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Is deleted on click of delete button', async () => {
    await waitFor(() => {
      const alltextItems = screen.queryAllByTestId('todo-text');
      alltextItems.forEach(item => {
        const btn = item.find('[data-testid="delete-todo-btn"]');
        userEvent.click(btn);
        expect(screen.queryByText('good')).toBeFalsy();
      });
    });
  });
});
