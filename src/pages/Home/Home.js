import './home.css';
import Hogar from '../../assets/hogar.webp';
import Tecnologia from '../../assets/tecnologia.webp';
import Mascotas from '../../assets/mascotas.webp';

const Home = () => {
  return (
    <section className='landing-wrapper backgroud-general'>
      <div className='elige-categoria'>
        <h2 className='titulo-grupo-catgoria'>Compra por categoria</h2>
        <h4>Las mas populares son</h4>
        <div className='grupo-populares'>
          <a href='/' className='categoria hogar'>
            <div>
              <img src={Hogar} alt='categoria hogar' />
              <div className='nombre-categoria'>
                <h2>Hogar</h2>
                <h5>115 productos</h5>
              </div>
            </div>
          </a>
          <a href='/' className='categoria tecnologia'>
            <div>
              <img src={Tecnologia} alt='categoria Tecnologia' />
              <div className='nombre-categoria'>
                <h2>Tecnología</h2>
                <h5>115 productos</h5>
              </div>
            </div>
          </a>
          <a href='/' className='categoria mascotas'>
            <div>
              <img src={Mascotas} alt='categoria Mascota' />
              <div className='nombre-categoria'>
                <h2>Mascotas</h2>
                <h5>115 productos</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
      <section className='destacados'>
        <h2>Te puede interesar...</h2>
        <div className='grupo-destacados'>
          <div className='producto'>producto</div>
        </div>
      </section>
      <div className='pequenio-aboutUs'>
        <img src='' alt='' />
        <div className='text-wrapper'>
          <h2>Titilo</h2>
          <div className='info'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            commodi labore? Molestias, minus aperiam? Ipsam vero fugiat,
            assumenda obcaecati soluta voluptatibus laborum, eius quis quibusdam
            accusantium atque mollitia debitis impedit?
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
