import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from '../App';
import rootReducer from '../redux-store/reducers';
import DisplayAreaToDos from '../todo/DisplayAreaToDos';
import { getTodoListApi } from '../network/todo_api_calls';

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test('Display: Title of the app', () => {
  render(<App />);
  expect(screen.queryByText('To Do App')).toBeVisible();
});

test('Display: No items to display, when: To Do list is empty', () => {
  const listItems = [];

  jest.mock('../network/todo_api_calls', () => ({
    getTodoListApi: jest.fn().mockResolvedValueOnce(listItems),
  }));

  render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
      <DisplayAreaToDos />
    </Provider>
  );

  expect(screen.queryByText('No items to display')).toBeVisible();
});

test('Display: All To do items, when: To do list is not empty', async () => {
  const listItems = [
    {
      userId: 1,
      id: 1,
      title: 'my god',
      completed: false,
    },
  ];

  jest.mock('../network/todo_api_calls', () => ({
    getTodoListApi: jest.fn().mockResolvedValueOnce(listItems),
  }));

  render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
      <DisplayAreaToDos />
    </Provider>
  );

  await waitFor(() => {
    expect(screen.queryAllByTestId('todoItem').length).toBe(1);
  });
});

test('Do not display:No items to display, when: to do list is not empty', () => {
  const listItems = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
  ];

  jest.mock('../network/todo_api_calls', () => ({
    getTodoListApi: jest.fn().mockResolvedValueOnce(listItems),
  }));

  render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
      <DisplayAreaToDos />
    </Provider>
  );

  expect(screen.queryByText('No items to display')).not.toBeVisible();
});
