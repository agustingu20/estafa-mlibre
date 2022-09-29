import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProductId } from '../../app/productIdSlice';
import SearchFilters from '../SearchFilters/SearchFilters';
import './resultCards.css';

const SearchResultsCards = () => {
  const { searchResult } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <>
      <div className="results-count">
        <SearchFilters />
      </div>
      <div className="d-flex justify-content-center mb-5">
        <div className="results-card-container">
          {searchResult.results?.results?.map((result) => (
            <Card className="result-card" key={`${result.id}`}>
              <div className="d-flex">
                <Card.Img
                  variant="top"
                  src={result.thumbnail}
                  className="img-card"
                />
                <h3 className="mt-5 me-3">$ {Math.trunc(result.price)}</h3>
              </div>
              <Card.Body>
                <Link style={{ textDecoration: 'none' }} onClick={() => dispatch(setProductId(result.id)) }>
                  <Card.Title name={`${result.id}`}>{result.title}</Card.Title>
                </Link>
                {result.shipping.free_shipping === true && (
                  <Card.Text className="text-success fw-bold">
                    Envío Gratis
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResultsCards;
