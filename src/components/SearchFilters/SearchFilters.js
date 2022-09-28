import React from 'react';
import { useSelector } from 'react-redux';
import './searchFilters.css';

const SearchFilters = () => {
  const { searchResult } = useSelector((state) => state);

  return (
    <div>
      <ul>
        {searchResult.results?.filters?.map((filter) => (
          <li key={`${filter.id}`}>
            <div className='d-flex search-list'>
              <p>{filter.values.map((fil) => fil.name)}</p>
              <p className='mx-1'>{'>'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilters;
