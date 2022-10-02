/* istanbul ignore file */
import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import productIdSlice from './productIdSlice';
=======
import querySlice from './querySlice';
>>>>>>> e7e6dbbc247cfd7476c11a866bef29404f847f1b
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    queryResult: querySlice,
    searchResult: searchSlice,
    productId: productIdSlice,
  },
  devTools: true,
});

export default store;
