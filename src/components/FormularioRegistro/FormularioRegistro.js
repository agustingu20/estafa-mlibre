import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegistro } from '../../utils/EsquemasValidaciones';
import Input from '../Inputs/Input';
import Boton from '../Boton/Boton';
import { suscription } from '../../hooks/suscripcion';

const FormularioRegistro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegistro),
  });
  const onSubmitRegistro = async (data) => {
    try {
      const { confirmPassword, ...dataRest } = data;
      const response = await axios.post('/usuarios', dataRest);
      Swal.fire({
        icon: 'success',
        title: 'Registro correcto',
        text: 'Se a registrado correctamente',
      }).then(() => {
        window.location.href = '/';
      });
    } catch (error) {
      suscription(error.response.data.errors[0].msg);
    }
  };
  return (
    <form
      className="wrapper-registro"
      onSubmit={handleSubmit(onSubmitRegistro)}
    >
      <h2 className="titulo">Registrate</h2>
      <Input
        type={'text'}
        idFor={'nickNameRegistro'}
        label={'Nombre'}
        hookForm={{ ...register('nombre') }}
        errorMensaje={errors?.nombre?.message}
      />
      <Input
        type={'email'}
        idFor={'emailRegistro'}
        label={'E-mail'}
        hookForm={{ ...register('correo') }}
        errorMensaje={errors?.email?.message}
      />
      <Input
        type={'password'}
        idFor={'passRegistro'}
        label={'Contraseña'}
        hookForm={{ ...register('password') }}
        errorMensaje={errors?.password?.message}
      />
      <Input
        type={'password'}
        idFor={'passRepiteRegistro'}
        label={'Repite la contraseña'}
        hookForm={{ ...register('confirmPassword') }}
        errorMensaje={errors?.confirmPassword?.message}
      />
      <Boton texto={'Enviar'} />
    </form>
  );
};

export default FormularioRegistro;
