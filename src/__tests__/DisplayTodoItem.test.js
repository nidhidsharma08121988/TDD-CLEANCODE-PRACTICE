import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from '../App';
import rootReducer from '../redux-store/reducers';
import DisplayAreaToDos from '../todo/DisplayAreaToDos';

afterEach(cleanup);

test('Display: Title of the app', () => {
  render(<App />);
  expect(screen.queryByText('To Do App')).toBeVisible();
});

test('Display: No items to display, when: To Do list is empty', () => {
  const listItems = [];

  global.fetch = jest.fn().mockResolvedValue([]);

  render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
      <DisplayAreaToDos listItems={listItems} />
    </Provider>
  );

  expect(screen.queryByText('No items to display')).toBeVisible();
});

test('Display: All To do items, when: To do list is not empty', () => {
  const listItems = [
    {
      userId: 1,
      id: 1,
      title: 'Good',
      completed: false,
    },
  ];

  global.fetch = jest.fn().mockResolvedValue(listItems);

  render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
      <DisplayAreaToDos listItems={listItems} />
    </Provider>
  );
  expect(screen.queryByText(listItems[0].title)).toBeVisible();
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
  render(
    <Provider
      store={createStore(
        rootReducer,
        { todos: listItems },
        applyMiddleware(thunk)
      )}
    >
      <DisplayAreaToDos listItems={listItems} />
    </Provider>
  );

  expect(screen.queryByText('No items to display')).toBeFalsy();
});
