import Container from 'react-bootstrap/Container';
import './footerStyle.css';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LogoSL from '../../assets/logo-estafa-libre.png';
import Boton from '../Boton/Boton';
import { suscription } from '../../hooks/suscripcion';

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (correo) => {
    const { data } = await axios(
      `https://api-estafamlibre.herokuapp.com/api/suscription/${correo.suscribir}`,
    );
    suscription(data);
    reset();
  };
  return (
    <footer className="footer-wrapper">
      <Container fluid className="wrapper">
        <div className="suscribir p-0">
          <div className="text">
            <h3>OUR NEWSSELLER</h3>
            <p>
              Suscribete para obtener información útil sobre nosotros y también
              tu
              <span className="resaltar"> descuento del 0%</span> en tu proxima
              compra.
            </p>
          </div>
          <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              className={classNames({
                error: errors.suscribir,
                '': !errors.suscribir,
              })}
              placeholder="ejemplo@gmail.com"
              {...register(
                'suscribir',
                {
                  required: true,
                },
                {
                  maxLength: 254,
                },
              )}
            />
            <Boton texto={'Suscribir'} />
          </form>
        </div>
        <div className="seccion-primaria">
          <div className="columna columna-uno">
            <img className="logo" src={LogoSL} alt="Logo de Estafa ML" />
            <div className="texto">
              Para estafar se necesitan dos, uno que mienta y otro que crea.
            </div>
            <div className="redes">
              <Link to="*">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to="*">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to="*">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="columna columna-dos">
            <p className="titulo-columna">INFORMACIÓN</p>
            <Link to="about">Sobre Estafa MLibre</Link>
            <Link to="*">FAQ</Link>
            <Link to="*">Contactanos</Link>
          </div>
          <div className="columna columna-tres">
            <p className="titulo-columna">LINKS RÁPIDOS</p>
            <Link to="*">Wishlist</Link>
            <Link to="*">Checkout</Link>
            <Link to="*">Carrito</Link>
          </div>
          <div className="columna columna-cuatro">
            <p className="titulo-columna">CONTACTO</p>
            <p>2153 Av. Libertador, Tucuman, 4000</p>
            <p>(0381) 555-4444</p>
            <p>estafa-mlibre@gmail.com</p>
          </div>
        </div>
        <div className="separador"></div>
        <div className="seccion-secundaria">
          <p>COPYRIGHT 2022 ESTAFA MLIBRE</p>
          <p>ALL RIGHT RESERVED</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
