import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Footer from './Footer';

describe('Test de footer', () => {
  test('Debe renderizar footer', () => {
    render(
      <Router>
        <Footer/>
      </Router>,
    );
    const element = screen.getByText(/para obtener información útil/i);
    expect(element).toBeInTheDocument();
  });
});
