import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../app/store';
import NavBar from './NavBar';

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
});
