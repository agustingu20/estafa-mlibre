import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

describe('Teste de home page', () => {
  render(<Home/>, { wrapper: MemoryRouter });
  test('Se espera que renderice componente', () => {
    const element = screen.getByText('Las mas populares son');
    expect(element).toBeInTheDocument();
  });

  test('Se espera que no renderice la card', () => {
    const element = screen.queryByText('Ver producto');
    expect(element).not.toBeInTheDocument();
  });
  // test('Se espera que SI renderice', () => {
  //   render(<Home/>, { wrapper: MemoryRouter });
  //   const element = screen.findAllByText('Apple Earpods Con Conector De 3.5 Mm - Blanco');
  //   expect(element).toBeInTheDocument();
  // });
});
