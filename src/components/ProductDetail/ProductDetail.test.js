import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import ProductDetail from './ProductDetail';

const testId = 'product-detail';

describe('ProductDetail test', () => {
  test('esperamos que renderice el componente ProductDeatail', () => {
    render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>,
    );

    const element = screen.getByTestId(testId);

    expect(element).toHaveClass('d-flex');
  });
});
