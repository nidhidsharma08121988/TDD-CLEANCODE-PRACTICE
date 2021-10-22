import { screen, render } from '@testing-library/react';
import App from '../App';

describe('Add new todo Item:', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Must display: Textarea to enter new todo item', () => {
    expect(screen.queryByTestId('input-new-todo')).toBeVisible();
  });

  test('Must display: Button to submit the new todo', () => {
    expect(screen.queryByTestId('submit-new-todo')).toBeVisible();
  });
});
