import './perfilUsuario.css';
import UserPerfil from '../../assets/userPerfil.png';

const PerfilUsuario = () => {
  return (
    <div className='wrapper-card-usuario backgroud-general'>
      <div className='card-usuario'>
        <div className='header-user'>
          <figure className='foto-nombre'>
            <img
              src={UserPerfil}
              alt='foto usuario'
            />
            <i className="fa-solid fa-pen-to-square"></i>
            <h3 className='nombre'>Cintia Jimena</h3>
            <p className='nivel'>Nivel 1</p>
          </figure>
        </div>
        <div className='divisor'></div>
        <div className='datos-user'>
          <div className='dato'>
            <p className='key'>E-mail:</p>
            <span className='value'>katukatu@gmail</span>
          </div>
          <div className='dato'>
            <p className='key'>Domicilio: </p>
            <button className='agregar-dato'>Agregar</button>
          </div>
          <div className='dato'>
            <p className='key'>Teléfono: </p>
            <button className='agregar-dato'>Agregar</button>
          </div>
          <div className='dato dato-tarjetas'>
            <p className='key'>Tarjetas: </p>
            <div className='wrapper-tarjetas'>
              <button className='agregar-dato'>Agregar</button>
            </div>
          </div>
          <div className='dato'>
            <p className='key'>Saldo disponible: </p>
            <span className='value'>$0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
