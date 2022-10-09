import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Teste de home page', () => {
  render(<Home />, { wrapper: MemoryRouter });
  test('Se espera que renderice componente', () => {
    const element = screen.getByText('Las mas populares son');
    expect(element).toBeInTheDocument();
  });

  test('Se espera que no renderice la card', () => {
    const element = screen.queryByText('Ver producto');
    expect(element).not.toBeInTheDocument();
  });
  test('Se espera que renderice el componente card', async () => {
    render(<Home />, { wrapper: MemoryRouter });
    const element = await screen.findByText(
      'Apple Earpods Con Conector De 3.5 Mm - Blanco',
    );
    expect(element).toBeInTheDocument();
  });
});
