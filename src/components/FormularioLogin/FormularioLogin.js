import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../utils/EsquemasValidaciones';
import Input from '../Inputs/Input';
import Boton from '../Boton/Boton';

const FormularioLogin = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmitLogin = (data) => console.log(data);
  return (
    <form className="wrapper-login" onSubmit={handleSubmit(onSubmitLogin)}>
      <h2 className="titulo">Ingresa</h2>
      <Input
        type={'email'}
        idFor={'emailLogin'}
        label={'E-mail'}
        hookForm={{ ...register('email') }}
        errorMensaje={errors?.email?.message}
      />
      <Input
        type={'password'}
        idFor={'passLogin'}
        label={'Contraseña'}
        hookForm={{ ...register('password') }}
        errorMensaje={errors?.password?.message}
      />
      <a href="/" className="olvide-pass" onClick={recuperarPass}>
        Olvide mi contraseña :(
      </a>
      <dialog className="modal-recupera-pass" ref={modalPass}>
        <p>
          Para recuperar tu contraseña debes depositarnos en la cuenta que te
          llegara a tu email luego de hacer click en &quot;Aceptar&quot;
        </p>
        <Boton texto={'Aceptar'} ref={cerrarModal} onClick={enviarCuenta} />
      </dialog>
      <Boton texto={'Iniciar Sesión'} ref={botonIniciarSesion} />
    </form>
  );
};

export default FormularioLogin;
