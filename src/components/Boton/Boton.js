import './boton.css';

const Boton = ({ texto }) => {
  return (
    <button className='buttom-component' type='submit'>{texto}</button>
  );
};

export default Boton;
