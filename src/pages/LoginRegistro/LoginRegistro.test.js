import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import LoginRegistro from './LoginRegistro';

describe('ProductDetail test', () => {
  test('esperamos que renderice el componente ProductDetail', () => {
    render(
      <Provider store={store}>
        <LoginRegistro />
      </Provider>,
    );

    const element = screen.getByTestId('loginRegistro');

    expect(element).toHaveClass('wrapper-login-registro');
  });
});
