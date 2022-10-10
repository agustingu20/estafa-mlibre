/* istanbul ignore file */

import { configureStore } from '@reduxjs/toolkit';
import offsetSlice from './offsetSlice';
import querySlice from './querySlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    searchResult: searchSlice,
    queryResult: querySlice,
    offset: offsetSlice,
  },
  devTools: true,
});

export default store;
