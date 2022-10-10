import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../app/store';
import SearchResultsCards from './SearchResultsCards';

const testIdNav = 'nav-results';

describe('SearchResultsCard test', () => {
  test('esperamos que renderice el componente SearchFilter de los resultados de busqueda', () => {
    render(
      <Provider store={store}>
        <SearchResultsCards />
      </Provider>,
    );

    const element = screen.getByTestId(testIdNav);

    expect(element).toHaveClass('results-count');
  });
  test('esperamos que ante un click el componente reaccione', () => {
    render(
      <Provider store={store}>
        <SearchResultsCards />
      </Provider>,
    );

    const buttonSiguiente = screen.getByText('Siguiente');
    fireEvent.click(buttonSiguiente);

    const buttonAnterior = screen.getByText('Anterior');
    fireEvent.click(buttonAnterior);

    const element = screen.getByText('1');

    expect(element).toBeInTheDocument();
  });
  test('esperamos que renderice el map de products cards', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchResultsCards />
        </BrowserRouter>
      </Provider>,
    );

    const element = await screen.findByText('Amarok V6 Comfortline 3.0 258cv 4x4 At 0km');

    expect(element).toBeInTheDocument();
  });
});
