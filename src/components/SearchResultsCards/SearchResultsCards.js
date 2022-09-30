import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard';
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
            <ProductCard key={`${result.id}`} product={result} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResultsCards;
