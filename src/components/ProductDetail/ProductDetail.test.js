import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import store from '../../app/store';
import ProductDetail from './ProductDetail';

const testId = 'product-detail';

describe('ProductDetail test', () => {
  test('esperamos que renderice el componente ProductDetail', () => {
    render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>,
    );

    const element = screen.getByTestId(testId);

    expect(element).toHaveClass('d-flex');
  });
  test('esperamos que rendericen las imagenes del producto', async () => {
    const routes = [
      {
        path: '/items/:itemId',
        element: <ProductDetail />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/items/MLA1138453784'],
      initialIndex: 1,
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );
    const element = await screen.findByAltText('mini_image_610435-MLA49587025826_042022');
    expect(element).toBeInTheDocument();
  });
});
