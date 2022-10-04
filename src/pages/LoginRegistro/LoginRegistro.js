import { useRef } from 'react';
import Boton from '../../components/Boton/Boton';
import Input from '../../components/Inputs/Input';
import './loginRegistro.css';

const LoginRegistro = () => {
  const modalPass = useRef();
  const cerrarModal = useRef();
  const botonIniciarSesion = useRef();

  const recuperarPass = (e) => {
    e.preventDefault();
    modalPass.current.showModal();
  };

  const enviarCuenta = (e) => {
    e.preventDefault();
    modalPass.current.close();
  };

  const IniciarSesion = (e) => {
    e.preventDefault();
  };

  return (
    <section className='wrapper-login-registro backgroud-general'>
      <form className='wrapper-login'>
        <h2 className='titulo'>Ingresa</h2>
        <Input type={'email'} idFor={'emailLogin'} label={'E-mail'} />
        <Input type={'password'} idFor={'passLogin'} label={'Contraseña'} />
        <a href='/' className='olvide-pass' onClick={recuperarPass}>
          Olvide mi contraseña :(
        </a>
        <dialog className='modal-recupera-pass' ref={modalPass}>
          <p>
            Para recuperar tu contraseña debes depositarnos en la cuenta que te
            llegara a tu email luego de hacer click en &quot;Aceptar&quot;
          </p>
          <Boton texto={'Aceptar'} ref={cerrarModal} onClick={enviarCuenta} />
        </dialog>
        <Boton
          texto={'Iniciar Sesión'}
          ref={botonIniciarSesion}
          onClick={IniciarSesion}
        />
      </form>
      <div className="divisor"></div>
      <form className='wrapper-registro'>
        <h2 className='titulo'>Registrate</h2>
        <Input type={'text'} idFor={'nickNameRegistro'} label={'Nombre'} />
        <Input type={'email'} idFor={'emailRegistro'} label={'E-mail'} />
        <Input type={'password'} idFor={'passRegistro'} label={'Contraseña'} />
        <Input type={'password'} idFor={'passRepiteRegistro'} label={'Repite Contraseña'} />
        <Boton
          texto={'Enviar'}
          ref={botonIniciarSesion}
          onClick={IniciarSesion}
        />
      </form>
    </section>
  );
};

export default LoginRegistro;
