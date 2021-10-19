import { render, screen } from '@testing-library/react';
import App from '../App';
import DisplayAreaToDos from '../todo/DisplayAreaToDos';

test('Display: Title of the app', () => {
  render(<App />);
  expect(screen.queryByText('To Do App')).toBeVisible();
});

test('Display: No items to display, when: To Do list is empty', () => {
  render(<DisplayAreaToDos />);

  expect(screen.queryByText('No items to display')).toBeTruthy();
});

test('Display: All To do items, when: To do list is not empty', () => {
  const listItems = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
  ];
  render(<DisplayAreaToDos listItems={listItems} />);

  expect(screen.queryByText('delectus aut autem')).toBeVisible();
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
  render(<DisplayAreaToDos listItems={listItems} />);

  expect(screen.queryByText('No items to display')).toBeFalsy();
});
