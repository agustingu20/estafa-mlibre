import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './productCard.css';

function ProductCard({ product }) {
  const itemId = product.id;

  return (
    <Card className="text-center cardProduct">
      <Card.Img className="fluid" src={product.thumbnail} />
      <Card.Body>
        <Card.Title className="textDescription" data-testid='titulo-card'>{product.title}</Card.Title>
        <Card.Text className="textPrice">
          $ {Math.trunc(product.price).toLocaleString('es-ES')}
        </Card.Text>
        <Link to={`/items/${itemId}`}>
          <Button
            className="buttonProduc"
            variant="primary"
          >
            Ver producto
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
