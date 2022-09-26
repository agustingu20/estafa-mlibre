import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import NavBar from './NavBar';

describe('NavBar test', () => {
  test('esperamos que renderice el component navbar', () => {
    render(<Provider store={store}><NavBar /></Provider>);

    const element = screen.getByAltText('logo_estafa_mlibre');

    expect(element).toBeInTheDocument();
  });
});
