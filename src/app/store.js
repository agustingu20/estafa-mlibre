/* istanbul ignore file */
import { configureStore } from '@reduxjs/toolkit';
import productIdSlice from './productIdSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    searchResult: searchSlice,
    productId: productIdSlice,
  },
  devTools: true,
});

export default store;
