import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux-store/reducers';
import App from '../App';
import * as apiCalls from '../network/todo_api_calls';

const withSingleTodo = [
  {
    postId: 1,
    user: 1,
    title: 'good',
    completed: false,
  },
];

describe('when: To do list is not empty,', () => {
  beforeEach(() => {
    const mockgetTodoListApi = jest.spyOn(apiCalls, 'getTodoListApi');
    mockgetTodoListApi.mockImplementation(() =>
      Promise.resolve(withSingleTodo)
    );
    const initState = {
      todo_reducer: {
        todos: [],
        newTodo: {},
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

  test('Do not display: No items to display', async () => {
    await waitFor(() => {
      expect(screen.queryByTestId('noList')).toBeFalsy();
    });
  });

  test('Display: All To do items,', async () => {
    await waitFor(() => {
      expect(screen.queryAllByTestId('todoItem').length).toBe(
        withSingleTodo.length
      );
    });
  });

  test('Display: Todo Items title', async () => {
    await waitFor(() => {
      expect(screen.queryByText(withSingleTodo[0].title)).toBeVisible();
    });
  });
});
