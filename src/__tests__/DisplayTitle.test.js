import { render, screen } from '@testing-library/react';
import App from '../App';

test('Display: Title of the app', () => {
  render(<App />);
  expect(screen.queryByText('To Do App')).toBeVisible();
});
