/* istanbul ignore file */
import { configureStore } from '@reduxjs/toolkit';
import querySlice from './querySlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    searchResult: searchSlice,
    queryResult: querySlice,
  },
  devTools: true,
});

export default store;
