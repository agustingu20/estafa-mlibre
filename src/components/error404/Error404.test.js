import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../app/store';
import Error404 from './Error404';

describe('ProductDetail test', () => {
  test('esperamos que renderice el componente ProductDetail', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Error404 />
        </BrowserRouter>
      </Provider>,
    );

    const element = screen.getByText(
      'Estamos experimentando problemas técnicos y no logramos encontrar la pagina que buscas, inténtalo nuevamente mas tarde si tenes ganas.',
    );

    expect(element).toBeInTheDocument();
  });
});
