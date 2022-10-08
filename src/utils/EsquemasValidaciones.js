import * as yup from 'yup';

export const schemaRegistro = yup
  .object({
    nombre: yup
      .string()
      .required('Este campo es requerido')
      .min(5, 'Mínimo 5 caracteres.')
      .max(20, 'Máximo 20 caracteres.'),
    email: yup
      .string()
      .required('Este campo es requerido')
      .email('Debe ser un email valido.'),
    password: yup
      .string()
      .required('Este campo es requerido')
      .min(5, 'Mínimo 5 caracteres.')
      .max(20, 'Máximo 20 caracteres.'),
    confirmPassword: yup
      .string()
      .required('Este campo es requerido')
      .oneOf([yup.ref('password'), null], 'Las contraseñass deben coincidir'),
  })
  .required();

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .required('Este campo es requerido')
      .email('Debe ser un email valido.'),
    password: yup
      .string()
      .required('Este campo es requerido')
      .min(5, 'Mínimo 5 caracteres.')
      .max(20, 'Máximo 20 caracteres.'),
  })
  .required();
