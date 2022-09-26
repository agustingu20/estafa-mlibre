import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './resultCards.css';

const SearchResultsCards = () => {
  const { searchResult } = useSelector((state) => state);
  console.log(searchResult.results);

  return (
    <div className='d-flex justify-content-center my-5'>
      <div className="results-card-container">
        {searchResult.results?.map((result) => (
          <Card className="result-card" key={`${result.id}`}>
            <Card.Img variant="top" src={result.thumbnail} />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
              <Card.Text>{result.title}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsCards;
