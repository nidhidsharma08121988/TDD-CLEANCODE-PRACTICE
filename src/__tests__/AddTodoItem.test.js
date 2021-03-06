import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyMiddleware, createStore } from 'redux';
import App from '../App';
import rootReducer from '../redux-store/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as apiCalls from '../network/todo_api_calls';

const todoList = [
  {
    id: 1,
    userId: 1,
    title: 'good',
    completed: false,
  },
];

describe('Add new todo Item:', () => {
  beforeEach(() => {
    const mockGetTodoList = jest.spyOn(apiCalls, 'getTodoListApi');
    mockGetTodoList.mockResolvedValueOnce(todoList);

    const initState = {};
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

  test('Must display: Textarea to enter new todo item', () => {
    expect(screen.queryByTestId('input-new-todo')).toBeVisible();
  });

  test('Must display: Button to submit the new todo', () => {
    expect(screen.queryByTestId('submit-new-todo')).toBeVisible();
  });

  test('On Submit: Must clear textarea', async () => {
    const textarea = screen.queryByTestId('input-new-todo');
    userEvent.type(textarea, 'Hello');
    const submitBtn = screen.queryByTestId('submit-new-todo');
    submitBtn.click();

    await waitFor(() => {
      expect(textarea.value).toBe('');
    });
  });

  test('On Submit: Must add the to do item to the list', async () => {
    const textarea = screen.queryByTestId('input-new-todo');
    userEvent.type(textarea, 'Bye');
    const submitBtn = screen.queryByTestId('submit-new-todo');
    submitBtn.click();

    await waitFor(() => {
      expect(screen.queryByText('Bye')).toBeTruthy();
    });
  });
});
