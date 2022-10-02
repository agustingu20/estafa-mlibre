/* istanbul ignore file */
import { configureStore } from '@reduxjs/toolkit';
import querySlice from './querySlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    queryResult: querySlice,
    searchResult: searchSlice,
  },
  devTools: true,
});

export default store;
