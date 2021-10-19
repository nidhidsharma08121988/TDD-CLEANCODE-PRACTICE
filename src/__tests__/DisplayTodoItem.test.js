import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux-store/reducers';
import DisplayAreaToDos from '../todo/DisplayAreaToDos';

beforeEach(() => {
  jest.mock('../network/todo_api_calls', () => {
    console.log('I am mocking');
    const emptyList = [];
    const withSingleObject = [
      {
        userId: 1,
        id: 1,
        title: 'my god',
        completed: false,
      },
    ];
    return {
      getTodoListApi: jest
        .fn()
        .mockReturnValueOnce(emptyList)
        .mockReturnValueOnce(withSingleObject)
        .mockReturnValueOnce(withSingleObject),
    };
  });

  render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
      <DisplayAreaToDos />
    </Provider>
  );
});

afterAll(() => {
  jest.clearAllMocks();
});

test('Display: No items to display, when: To Do list is empty', async () => {
  await waitFor(() => {
    expect(screen.queryByTestId('noList')).toBeVisible();
  });
});

test('Display: All To do items, when: To do list is not empty', async () => {
  await waitFor(() => {
    expect(screen.queryAllByTestId('todoItem').length).toBe(1);
  });
});

test('Do not display:No items to display, when: to do list is not empty', async () => {
  await waitFor(() => {
    expect(screen.queryByTestId('noList')).toBeFalsy();
  });
});
