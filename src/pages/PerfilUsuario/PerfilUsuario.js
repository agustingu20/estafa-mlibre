import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './perfilUsuario.css';

const PerfilUsuario = ({ token, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <div className="wrapper-card-usuario backgroud-general">
      <div className="card-usuario">
        <div className="header-user">
          <figure className="foto-nombre">
            <img src={user.avatar} alt="foto usuario" className="profile-img" />
            <i className="fa-solid fa-pen-to-square"></i>
            <h3 className="nombre">{user.nombre}</h3>
            <p className="nivel">Nivel 1</p>
          </figure>
        </div>
        <div className="divisor"></div>
        <div className="datos-user">
          <div className="dato">
            <p className="key">E-mail:</p>
            <span className="value">{user.correo}</span>
          </div>
          <div className="dato">
            <p className="key">Domicilio: </p>
            <button className="agregar-dato">Agregar</button>
          </div>
          <div className="dato">
            <p className="key">Teléfono: </p>
            <button className="agregar-dato">Agregar</button>
          </div>
          <div className="dato dato-tarjetas">
            <p className="key">Tarjetas: </p>
            <div className="wrapper-tarjetas">
              <button className="agregar-dato">Agregar</button>
            </div>
          </div>
          <div className="dato">
            <p className="key">Saldo disponible: </p>
            <span className="value">$0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
