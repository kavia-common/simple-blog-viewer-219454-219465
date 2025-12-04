import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header brand', () => {
  render(<App />);
  const brand = screen.getByRole('link', { name: /simple blog home/i });
  expect(brand).toBeInTheDocument();
});
