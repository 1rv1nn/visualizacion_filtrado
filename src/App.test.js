import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Filtrado de Candidatos/i);
  expect(titleElement).toBeInTheDocument();
});
