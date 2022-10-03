import './home.css';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import Hogar from '../../assets/hogar.webp';
import Tecnologia from '../../assets/tecnologia.webp';
import Mascotas from '../../assets/mascotas.webp';
import About from '../../assets/about-landing.webp';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const data = useFetch('https://api.mercadolibre.com/sites/MLA/search?q=ipod&FilterID=discount');

  const hogar = useFetch('https://api.mercadolibre.com/categories/MLA1574');

  const computacion = useFetch('https://api.mercadolibre.com/categories/MLA1648');

  const mascotas = useFetch('https://api.mercadolibre.com/categories/MLA1071');

  const conDescuento = data?.data?.results;

  return (
    <section className='landing-wrapper backgroud-general'>
      <div className='elige-categoria'>
        <h2 className='titulo-grupo-catgoria'>Compra por categoria</h2>
        <h4>Las mas populares son</h4>
        <div className='grupo-populares'>
          <Link to='/search/category/MLA1574' className='categoria hogar'>
            <div>
              <img src={Hogar} alt='categoria hogar' />
              <div className='nombre-categoria'>
                <h2>{hogar?.data?.name}</h2>
                <h5>{hogar?.data?.total_items_in_this_category} Productos</h5>
              </div>
            </div>
          </Link>
          <Link to='/search/category/MLA1648' className='categoria tecnologia'>
            <div>
              <img src={Tecnologia} alt='categoria Tecnologia' />
              <div className='nombre-categoria'>
                <h2>{computacion?.data?.name}</h2>
                <h5>{computacion?.data?.total_items_in_this_category} productos</h5>
              </div>
            </div>
          </Link>
          <Link to='/search/category/MLA1071' className='categoria mascotas'>
            <div>
              <img src={Mascotas} alt='categoria Mascota' />
              <div className='nombre-categoria'>
                <h2>{mascotas?.data?.name}</h2>
                <h5>{mascotas?.data?.total_items_in_this_category} productos</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <section className='destacados'>
        <h2>Te puede interesar...</h2>
        <div className='grupo-destacados '>
          {conDescuento?.slice(0, 12)?.map((product) => (
            <ProductCard key={product?.id} product={product}/>
          ))}
        </div>
      </section>
      <div className='pequenio-aboutUs'>
        <img src={About} alt='foto ilustratova seccion Sobre nosotros' />
        <div className='text-wrapper'>
          <h2>Sobre nosotros</h2>
          <p className='info'>
            Somos Estafa MLibre, ya tenemos una sección que habla sobre nosotros en esta página así
            no que no se que escribir aquí para rellenar pero no puedo usar Lorem. Bueno, ya que
            importa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus
            rem minima similique fugiat aperiam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
