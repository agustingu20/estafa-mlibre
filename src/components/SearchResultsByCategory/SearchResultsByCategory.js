/* eslint no-unsafe-optional-chaining: "error" */

import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setOffset } from '../../app/offsetSlice';
import { setSearchResults } from '../../app/searchSlice';
import useFetch from '../../hooks/useFetch';
import { ProductCard } from '../ProductCard';
import SearchFilters from '../SearchFilters/SearchFilters';

const SearchResultsByCategory = () => {
  const { categoryId } = useParams();
  const { offset } = useSelector((state) => state);
  const dispatch = useDispatch();

  const searchResultsByCategory = useFetch(
    `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=12&offset=${offset.value}`,
  );

  const totalPagination = Math.trunc(searchResultsByCategory.data?.paging.total / 12) + 1;

  const nextOnClick = () => {
    dispatch(setOffset(offset.value + 12));
  };

  const prevOnClick = () => {
    dispatch(setOffset(offset.value - 12));
  };

  useEffect(() => {
    dispatch(setSearchResults(searchResultsByCategory.data));
  }, [searchResultsByCategory]);

  return (
    <>
      <div className="results-count" data-testid="nav-results">
        <SearchFilters />
      </div>
      <div className="d-flex justify-content-center mb-5">
        <div className="results-card-container">
          {searchResultsByCategory.data?.results?.map((result) => (
            <ProductCard key={`${result.id}`} product={result} data-testid='product-card'/>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <Button
          size="sm"
          variant="danger"
          onClick={prevOnClick}
          className={offset.value / 12 === 0 ? 'disabled' : 'active'}
        >
          Anterior
        </Button>
        <p className="my-auto ms-3 me-2">{offset.value / 12 + 1}</p>
        <p className="my-auto me-3">de {totalPagination} páginas</p>
        <Button
          size="sm"
          variant="danger"
          onClick={nextOnClick}
          className={
            offset.value / 12 === totalPagination - 1 ? 'disabled' : 'active'
          }
        >
          Siguiente
        </Button>
      </div>
    </>
  );
};

export default SearchResultsByCategory;
