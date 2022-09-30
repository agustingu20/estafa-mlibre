import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Teste de home page', () => {
  render(<Home/>, { wrapper: MemoryRouter });
  test('Se espera que renderice componente', () => {
    const element = screen.getByText('Las mas populares son');
    expect(element).toBeInTheDocument();
  });

  test('Renderiza componente card', () => {
    // const element = screen.getByText(/Ver producto/i);
    // expect(element).toBeInTheDocument();
  });
});
