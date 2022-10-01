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

  test('Se espera que no renderice', () => {
    const element = screen.queryByText('Ver producto');
    expect(element).not.toBeInTheDocument();
  });

  const product = [
    {
      thumbnail: 'img',
      title: 'pc',
      price: '2',
    }];

  test('Se espera que SI renderice', () => {
    render(<ProductCard product={product}/>);
    const element = screen.getByText('Ver producto');
    expect(element).toBeInTheDocument();
  });
});
