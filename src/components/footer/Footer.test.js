import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Test de footer', () => {
  test('Debe renderizar footer', () => {
    render(<Footer/>);
    const element = screen.getByText(/para obtener información útil/i);
    expect(element).toBeInTheDocument();
  });
});
