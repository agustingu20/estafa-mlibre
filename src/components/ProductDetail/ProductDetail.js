import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';

const ProductDetail = () => {
  const { productId } = useSelector((state) => state);

  const searchProductById = useFetch(`https://api.mercadolibre.com/items/${productId.id}`);
  console.log('producto', searchProductById);

  return (
    <>
      <div>
        {searchProductById.data?.pictures.map((picture) => (
            <img key={picture.id} src={picture.url} alt={`${picture.id}`} />
        )).slice(-4)}
      </div>
      <div>
        <div>
          <h1>{searchProductById.data?.title}</h1>
          {searchProductById.data?.shipping.free_shipping === true && <p>Envío Gratis</p>}
          <h3>$ {searchProductById.data?.price}</h3>
        </div>
        <div>
          <Button variant="success"> Comprar </Button>
          <Button variant="outline-warning"> Agregar Carrito </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
