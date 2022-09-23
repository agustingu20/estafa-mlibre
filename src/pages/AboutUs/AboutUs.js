import './aboutUs.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '../../assets/box.png';
import Ipone from '../../assets/ipone.png';
import Xiaom from '../../assets/xiaom.png';
import Mike from '../../assets/mike.png';

const AboutUs = () => {
  return (
    <section className='wrapper-about backgroud-general'>
      <div className='about-header'>
        <div className='descripcion'>
          <h2>SOMOS ESTAFA MLIBRE</h2>
          <p>
            Somo la versión malvada de ML, no ofrecemos descuentos (paguen lo
            que corresponde, ratas) y hacemos los envíos cuando se pueda, vaya
            uno a saber cuando llega.
          </p>
        </div>
        <div className='paquete'>
          <img src={Box} alt='caja con logo de Estafa MLibre' />
        </div>
      </div>
      <div className='wrapper-caracteristicas'>
        <div className='caracteristica'>
          <i className='icon fa-solid fa-truck-fast'></i>
          <h3>Envios</h3>
          <p>
            NADA ES GRATIS EN ESTA VIDA. SI QUIEREN QUE LES LLEGUE A SU CASA
            GARPEN AL CORREO, SI NO, VAYAN A BUSCARLO A DONDE VIVA EL VENDEDOR
          </p>
        </div>
        <div className='caracteristica'>
          <i className='icon fa-solid fa-headset'></i>
          <h3>Soporte</h3>
          <p>
            SEGURO AL MENOS UN MENSAJE AUTOMATICO TE LLEGA, PERO CUANDO TE
            RESPONDERA UNA PERSONA REAL, NO SABEMOS.
          </p>
        </div>
        <div className='caracteristica'>
          <i className='icon fa-solid fa-tags'></i>
          <h3>AHORRO</h3>
          <p>NO HAY DESCUENTO, ASÍ QUE NO HAY AHORRO.</p>
        </div>
      </div>
      <div className='wrapper-datos'>
        <div className='data'>
          <div className='cover'></div>
          <i className='icon fa-solid fa-parachute-box'></i>
          <p>Mas de 500.000 productos publicados</p>
        </div>
        <div className='data'>
          <div className='cover'></div>
          <i className='icon fa-solid fa-shop'></i>
          <p>Mas de 4000 tiendas disponiles</p>
        </div>
        <div className='data'>
          <i className='icon fa-solid fa-money-bill-transfer'></i>
          <div className='cover'></div>
          <p>Mas de 10.000 ventas diarias.</p>
        </div>
        {/* <div className='cover'></div> */}
      </div>
      <div className='comentarios'>
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Milei</h3>
              <p>
                Mucha gracias por el descuento del 0%, me sirvio para nada.
                Aguante Mercado Libre.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <Carousel.Caption>
              <h3>Lgante</h3>
              <p>
                quise pner a bender mis cemillas de marihuana i no me dejn, que
                ortiva son loco.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Pepito Sanchez</h3>
              <p>
                Gracias por la caja vacia que me llego, me hacia falta para
                guarda mi ropa.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='wrapper-marcas'>
        <h2>Grandes marcas nos acompañan</h2>
        <div className='grupo-marcas'>
          <div className='marca'>
            <img src={Ipone} alt='logo Ipone' />
          </div>
          <div className='marca'>
            <img src={Xiaom} alt='Logo Xiaom' />
          </div>
          <div className='marca'>
            <img src={Mike} alt='Logo Mike' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
