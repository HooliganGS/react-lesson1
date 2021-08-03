import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './App';

test('renders learn react link', () => {
  render(<App />);
  render(<Header />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
