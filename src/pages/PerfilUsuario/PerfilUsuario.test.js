import { render, screen } from '@testing-library/react';
import PerfilUsuario from './PerfilUsuario';

describe('Test de sección usuarios', () => {
  test('esperamos renderiza perfil usuario', () => {
    render(<PerfilUsuario/>);

    const element = screen.getByText(/Saldo/i);

    expect(element).toBeInTheDocument();
  });
});
