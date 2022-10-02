import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Test de footer', () => {
  test('Debe renderizar footer', () => {
    render(<BrowserRouter><Footer/></BrowserRouter>);
    const element = screen.getByText(/para obtener información útil/i);
    expect(element).toBeInTheDocument();
  });
});
