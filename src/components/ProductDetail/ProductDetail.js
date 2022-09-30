import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import './productDetail.css';
import freeShipping from '../../assets/shipping.png';

const ProductDetail = () => {
  const { productId } = useSelector((state) => state);

  const searchProductById = useFetch(
    `https://api.mercadolibre.com/items/${productId.id}`,
  );
  console.log('producto', searchProductById);

  return (
    <>
      <div className="component-wrapper">
        <div className="image-wrapper">
          <div className="d-flex flex-column mt-4 me-2">
            <img
              className="secondary-image"
              src={searchProductById.data?.pictures[1]?.url}
              alt="image_2"
            />
            <img
              className="secondary-image"
              src={searchProductById.data?.pictures[2]?.url}
              alt="image_3"
            />
            <img
              className="secondary-image"
              src={searchProductById.data?.pictures[3]?.url}
              alt="image_4"
            />
          </div>
          <img
            className="main-image"
            src={searchProductById.data?.pictures[0]?.url}
            alt="image_1"
          />
        </div>
        <div className="description-wrapper">
          <div className="text-center">
            <h1 className="mb-3">{searchProductById.data?.title}</h1>
            {searchProductById.data?.shipping.free_shipping === true && (
              <p className="text-success fw-bold">
                Envío Gratis <img src={freeShipping} alt="free_shipping" />
              </p>
            )}
            <h3 className="mb-4">
              $ {Math.trunc(searchProductById.data?.price)}
            </h3>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className='buttons-wrapper'>
              <button className="button-buy m-2">Comprar</button>
              <button className="shop-cart m-2">
                Agregar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
