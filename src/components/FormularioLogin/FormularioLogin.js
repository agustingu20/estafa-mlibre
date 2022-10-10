import axios from 'axios';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../utils/EsquemasValidaciones';
import Input from '../Inputs/Input';
import Boton from '../Boton/Boton';

const FormularioLogin = () => {
  const botonIniciarSesion = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmitLogin = async (data) => {
    const response = await axios.post('/auth/login', data);
    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
    window.location.href = '/';
  };
  return (
    <form className="wrapper-login" onSubmit={handleSubmit(onSubmitLogin)}>
      <h2 className="titulo">Ingresa</h2>
      <Input
        type={'email'}
        idFor={'emailLogin'}
        label={'E-mail'}
        hookForm={{ ...register('correo') }}
        errorMensaje={errors?.email?.message}
      />
      <Input
        type={'password'}
        idFor={'passLogin'}
        label={'Contraseña'}
        hookForm={{ ...register('password') }}
        errorMensaje={errors?.password?.message}
      />
      <a href="/" className="olvide-pass" >
        Olvide mi contraseña :(
      </a>
      <Boton texto={'Iniciar Sesión'} ref={botonIniciarSesion} />
    </form>
  );
};

export default FormularioLogin;
