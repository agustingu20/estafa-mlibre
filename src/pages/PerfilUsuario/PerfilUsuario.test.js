import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PerfilUsuario from './PerfilUsuario';

describe('Test de sección usuarios', () => {
  test('esperamos renderiza perfil usuario', () => {
    const user = {
      nombre: 'Agustin',
      correo: 'agustin@gmail.com',
      avatar: 'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg?w=2000',
    };
    render(
      <BrowserRouter>
        <PerfilUsuario user={user}/>
      </BrowserRouter>,
    );

    const element = screen.getByText(/Saldo/i);

    expect(element).toBeInTheDocument();
  });
});
