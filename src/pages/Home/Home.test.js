import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import store from '../../app/store';
import Home from './Home';

describe('Teste de home page', () => {
  render(<Home />, { wrapper: MemoryRouter });
  test('Se espera que renderice componente', () => {
    const element = screen.getByText('Las mas populares son');
    expect(element).toBeInTheDocument();
  });
  test('Se espera que renderice el componente card', async () => {
    render(<Home />, { wrapper: MemoryRouter });
    const element = await screen.findByText(
      'Apple Earpods Con Conector De 3.5 Mm - Blanco',
    );
    expect(element).toBeInTheDocument();
  });
});
