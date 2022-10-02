/* istanbul ignore file */
import { configureStore } from '@reduxjs/toolkit';
import productIdSlice from './productIdSlice';
import querySlice from './querySlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    productId: productIdSlice,
    searchResult: searchSlice,
    queryResult: querySlice,
  },
  devTools: true,
});

export default store;
