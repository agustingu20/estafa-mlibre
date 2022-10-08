import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import React from 'react';
import { schemaRegistro } from '../../utils/EsquemasValidaciones';
import Input from '../Inputs/Input';
import Boton from '../Boton/Boton';

const FormularioRegistro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaRegistro),
  });
  const onSubmitRegistro = data => console.log(data);
  return (
        <form className='wrapper-registro' onSubmit={handleSubmit(onSubmitRegistro)}>
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
  );
};

export default FormularioRegistro;
