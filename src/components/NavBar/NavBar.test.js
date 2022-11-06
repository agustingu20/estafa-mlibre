import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../app/store';
import NavBar from './NavBar';

const testElemtButton = 'searchButton';
const testElemtInput = 'searchInput';
describe('NavBar test', () => {
  test('esperamos que renderice el component navbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );

    const element = screen.getByAltText('logo_estafa_mlibre');

    expect(element).toBeInTheDocument();
  });
  test('esperamos que  se active el dispatch con dato en searchValue', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );
    const element = screen.queryByTestId(testElemtButton);
    const elementInput = screen.queryByTestId(testElemtInput);
    fireEvent.keyDown(elementInput, { target: { value: 'c' } });
    fireEvent.click(element);
    const location = window.location.pathname;
    expect(location).toBe('/search');
  });
  test('esperamos que envie el dispatch con dato searchValue === "" ', () => {
    render(
      <Provider store={store}>
        <BrowserRouter >
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );
    const location = window.location.pathname;
    const element = screen.queryByTestId(testElemtButton);
    const elementInput = screen.queryByTestId(testElemtInput);
    fireEvent.click(element);
    expect(location).toBe('/search');
    expect(elementInput.value).toBe('');
  });
  test('esperamos que entre a la searchOnClick en handleChange', () => {
    render(
      <Provider store={store}>
        <BrowserRouter >
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );
    const element = screen.queryByTestId(testElemtInput);
    fireEvent.keyDown(element, { code: 'Enter' });
    const location = window.location.pathname;
    expect(location).toBe('/search');
  });
});
