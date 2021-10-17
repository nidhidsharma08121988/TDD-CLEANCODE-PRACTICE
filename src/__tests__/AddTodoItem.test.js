import { screen, render } from '@testing-library/react';
import App from '../App';
test('Must Display: Textarea to enter new todo item', () => {
  render(<App />);

  expect(screen.queryByTestId('add-new-todo')).toBeVisible();
});
