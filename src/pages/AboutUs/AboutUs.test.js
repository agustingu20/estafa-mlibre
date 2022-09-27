import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('Test de AboutUs', () => {
  test('renderiza página aboutUs', () => {
    render(<AboutUs/>);

    const tituloPagina = screen.getByText('SOMOS ESTAFA MLIBRE');

    expect(tituloPagina).toBeInTheDocument();
  });
});
