import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const data = {
  id: 3,
  thumbnail: 'imagen',
  title: 'Esto es un titulo',
  price: 23.4,
};

describe('Card Producto Test', () => {
  test('Renderizado de las card', () => {
    render(<ProductCard product={data} />);
    const element = screen.getByText(data.title);
    expect(element).toBeInTheDocument();
  });
  test('No renderiza las cards si no se pasa dato vacio', () => {
    render(<ProductCard product={{}} />);
    const element = screen.getByText(data.title);
    expect(element).toBeInTheDocument();
  });
});
