import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProductId } from '../../app/productIdSlice';
import './productCard.css';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card className="text-center cardProduct">
      <Card.Img className="fluid" src={product.thumbnail} />
      <Card.Body>
        <Card.Title className="textDescription">{product.title}</Card.Title>
        <Card.Text className="textPrice">
          $ {Math.trunc(product.price).toLocaleString('es-ES')}
        </Card.Text>
        <Link to='/items'>
          <Button
            className="buttonProduc"
            variant="primary"
            onClick={() => dispatch(setProductId(product.id))}
          >
            Ver producto
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
