import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as apiCalls from '../network/todo_api_calls';
import rootReducer from '../redux-store/reducers';
import App from '../App';

describe('When: Error in fetching todos:', () => {
  beforeEach(() => {
    const mockGetTodoListApi = jest.spyOn(apiCalls, 'getTodoListApi');
    mockGetTodoListApi.mockImplementationOnce(() => {
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

  afterEach(() => {
    jest.resetAllMocks();
  });

  

  test('Then: Display error Something went Wrong', () => {
    expect(screen.queryByTestId('display-error')).toBeVisible();
  });
});
