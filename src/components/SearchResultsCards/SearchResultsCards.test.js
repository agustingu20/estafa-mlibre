import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
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
});
