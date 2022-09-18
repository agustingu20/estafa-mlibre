import './footerStyle.css';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='wrapper'>
        <div className='suscribir'>
          <div className='text'>
            <h3>OUR NEWSSELLER</h3>
            <p>
              Suscribete para obtener información útil sobre nosotros y también
              tu
              <span className='resaltar'> descuento del 0%</span> en tu proxima
              compra.
            </p>
          </div>
          <form className='formulario'>
            <input type='email' />
            <button>Suscribir</button>
          </form>
        </div>
        <div className='seccion-primaria'>
          <div className='columna columna-uno'>
            <h3>Estafa MLibre</h3>
            <div className='texto'>
              Lorem ipsum dolor sit amet consectetur adipisici.
            </div>
            <div className='redes'>
              <a href='*'>
                <i className='fa-brands fa-instagram'></i>
              </a>
              <a href='*'>
                <i className='fa-brands fa-facebook-f'></i>
              </a>
              <a href='*'>
                <i className='fa-brands fa-twitter'></i>
              </a>
            </div>
          </div>
          <div className='columna columna-dos'>
            <p className='titulo-columna'>INFORMACIÓN</p>
            <a href='*'>Sobre Estafa MLibre</a>
            <a href='*'>FAQ</a>
            <a href='*'>Contactanos</a>
          </div>
          <div className='columna columna-tres'>
            <p className='titulo-columna'>LINKS RÁPIDOS</p>
            <a href='*'>Wishlist</a>
            <a href='*'>Checkout</a>
            <a href='*'>Carrito</a>
          </div>
          <div className='columna columna-cuatro'>
            <p className='titulo-columna'>CONTACTO</p>
            <a href='*'>2153 Av. Libertador, Tucuman, 4000</a>
            <a href='*'>(0381) 555-4444</a>
            <a href='*'>estafa-mlibre@gmail.com</a>
          </div>
        </div>
        <div className='separador'></div>
        <div className='seccion-secundaria'>
          <p>COPYRIGHT 2022 ESTAFA MLIBRE</p>
          <p>ALL RIGHT RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
