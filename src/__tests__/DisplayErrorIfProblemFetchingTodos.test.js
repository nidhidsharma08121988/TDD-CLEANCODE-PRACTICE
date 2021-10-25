import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as apiCalls from '../network/todo_api_calls';
import rootReducer from '../redux-store/reducers';
import App from '../App';

describe('When: Could not fetch Todos:', () => {
  beforeEach(() => {
    const mockGetTodoListApi = jest.spyOn(apiCalls, 'getTodoListApi');
    mockGetTodoListApi.mockImplementation(() => {
      throw new Error();
    });

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
  test('Then: Display error Something went Wrong', () => {
    expect(screen.queryByTestId('display-error')).toBeVisible();
  });
});
