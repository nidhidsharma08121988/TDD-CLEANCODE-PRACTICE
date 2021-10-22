import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('Must clear textarea on click of the submit button', async () => {
    const textarea = screen.queryByTestId('input-new-todo');
    userEvent.type(textarea, 'Hello');
    const submitBtn = screen.queryByTestId('submit-new-todo');
    submitBtn.click();

    await waitFor(() => {
      expect(textarea.value).toBe('');
    });
  });
});
