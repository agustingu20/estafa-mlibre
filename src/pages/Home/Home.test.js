import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import store from '../../app/store';
import Home from './Home';

describe('Teste de home page', () => {
  render(<Home/>, { wrapper: MemoryRouter });
  test('Se espera que renderice componente', () => {
    const element = screen.getByText('Las mas populares son');
    expect(element).toBeInTheDocument();
  });

  test('Se espera que SI renderice el resultado del map', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    const element = await screen.findByText('Auriculares Akg K52 Matte Black');

    expect(element).toBeInTheDocument();
  });
});
