import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SearchFilters from '../SearchFilters/SearchFilters';
import './resultCards.css';

const SearchResultsCards = () => {
  const { searchResult } = useSelector((state) => state);

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
                <Card.Title>{result.title}</Card.Title>
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
