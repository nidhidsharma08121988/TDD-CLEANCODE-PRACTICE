import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux-store/reducers';
import App from '../App';
import * as apiCalls from '../network/todo_api_calls';

describe('when: To Do list is empty', () => {
  beforeEach(() => {
    const mockgetTodoListApi = jest.spyOn(apiCalls, 'getTodoListApi');

    mockgetTodoListApi.mockImplementationOnce(() => Promise.resolve([]));

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

  test('Display: No items to display', async () => {
    await waitFor(() => {
      expect(screen.queryByTestId('noList')).toBeVisible();
    });
  });
});
