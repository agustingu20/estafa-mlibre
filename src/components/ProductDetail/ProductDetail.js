import React from 'react';
import { Button } from 'react-bootstrap';

const ProductDetail = () => {
  return (
    <>
      <div>
        <img src="" alt="image_1" />
        <img src="" alt="image_2" />
        <img src="" alt="image_3" />
        <img src="" alt="image_4" />
      </div>
      <div>
        <div>
            <h1>titulo</h1>
            <p>Vendido por pepito</p>
            <h3>$1000</h3>
        </div>
        <div>
            <Button variant='success'> Comprar </Button>
            <Button variant='outline-warning'> Agregar Carrito </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
