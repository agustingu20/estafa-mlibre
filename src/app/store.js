import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    searchResult: searchSlice,
  },
  devTools: true,
});

export default store;
