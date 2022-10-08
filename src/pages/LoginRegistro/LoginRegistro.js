import { useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Boton from '../../components/Boton/Boton';
import Input from '../../components/Inputs/Input';
import './loginRegistro.css';

const schemaRegistro = yup.object({
  nombre: yup.string().required('Este campo es requerido').min(5, 'Mínimo 5 caracteres.').max(20, 'Máximo 20 caracteres.'),
  email: yup.string().required('Este campo es requerido').email('Debe ser un email valido.'),
  password: yup.string().required('Este campo es requerido').min(5, 'Mínimo 5 caracteres.').max(20, 'Máximo 20 caracteres.'),
  confirmPassword: yup.string().required('Este campo es requerido').oneOf([yup.ref('password'), null], 'Las contraseñass deben coincidir'),
}).required();

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

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaRegistro),
  });
  const onSubmit = data => console.log(data);

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
        />
      </form>
      <div className="divisor"></div>
      <form className='wrapper-registro' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='titulo'>Registrate</h2>
        <Input type={'text'} idFor={'nickNameRegistro'} label={'Nombre'} hookForm={
        { ...register('nombre') }} errorMensaje={errors?.nombre?.message}/>
        <Input type={'email'} idFor={'emailRegistro'} label={'E-mail'} hookForm={
          { ...register('email') }} errorMensaje={errors?.email?.message}/>
        <Input type={'password'} idFor={'passRegistro'} label={'Contraseña'} hookForm={
          { ...register('password') }} errorMensaje={errors?.password?.message}/>
        <Input type={'password'} idFor={'passRepiteRegistro'} label={'Repite la contraseña'} hookForm={
          { ...register('confirmPassword') }} errorMensaje={errors?.confirmPassword?.message}/>
        <Boton
          texto={'Enviar'}
        />
      </form>
    </section>
  );
};

export default LoginRegistro;
