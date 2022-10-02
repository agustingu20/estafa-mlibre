import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults } from '../../app/searchSlice';
import useFetch from '../../hooks/useFetch';
import { ProductCard } from '../ProductCard';
import SearchFilters from '../SearchFilters/SearchFilters';
import './resultCards.css';

const SearchResultsCards = () => {
  const { queryResult, searchResult } = useSelector((state) => state);
  const dispatch = useDispatch();
  const searchResults = useFetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${queryResult.results}&limit=12`,
  );

  useEffect(() => {
    dispatch(setSearchResults(searchResults.data));
  }, [searchResults]);

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
