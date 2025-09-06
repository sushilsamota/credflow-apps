import { render, screen } from '@testing-library/react';
import App from './App';

test('test yourmobile screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Your Mobile Number 9999999999/i);
  expect(linkElement).toBeInTheDocument();
});
