import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, useSearchParams } from 'react-router-dom';
import store from '../../app/store';
import SearchResultsByCategory from './SearchResultsByCategory';

const testIdNav = 'nav-results';

describe('SearchResultsByCategory test', () => {
  test('esperamos que renderice el componente SearchFilter de los resultados de busqueda', () => {
    render(
      <Provider store={store}>
        <SearchResultsByCategory />
      </Provider>,
    );

    const element = screen.getByTestId(testIdNav);

    expect(element).toHaveClass('results-count');
  });
  test('esperamos que ante un click el componente reaccione', () => {
    render(
      <Provider store={store}>
        <SearchResultsByCategory />
      </Provider>,
    );

    const buttonSiguiente = screen.getByText('Siguiente');
    fireEvent.click(buttonSiguiente);

    const buttonAnterior = screen.getByText('Anterior');
    fireEvent.click(buttonAnterior);

    const element = screen.getByText('1');

    expect(element).toBeInTheDocument();
  });
  // test('esperamos que se renderice el componente ProductCard', () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <SearchResultsByCategory />
  //       </BrowserRouter>
  //     </Provider>,
  //   );
  //   const element = screen.findAllByTestId('product-card');

  //   expect(element).toBeInTheDocument();
  // });
});
