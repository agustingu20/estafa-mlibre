import FormularioLogin from '../../components/FormularioLogin/FormularioLogin';
import FormularioRegistro from '../../components/FormularioRegistro/FormularioRegistro';
import './loginRegistro.css';

const LoginRegistro = () => {
  return (
    <section className='wrapper-login-registro backgroud-general'>
      <FormularioLogin />
      <div className='divisor'></div>
      <FormularioRegistro />
    </section>
  );
};

export default LoginRegistro;
