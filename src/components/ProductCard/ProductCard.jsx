import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './productCard.css';

function ProductCard({ product }) {
  return (
    <Card className="text-center cardProduct">
      <Card.Img className='fluid' src={product.thumbnail} />
      <Card.Body>
        <Card.Title className="textDescription">{product.title}</Card.Title>
        <Card.Text className="textPrice">$ {Math.trunc(product.price)}</Card.Text>
        <Button className="buttonProduc" variant="primary">
          Ver producto
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
