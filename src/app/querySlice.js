/* istanbul ignore file */
import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'queryResults',
  initialState: { results: [] },
  reducers: {
    setqueryResults(state, action) {
      state.results = action.payload;
    },
  },
});

export const { setqueryResults } = querySlice.actions;
export default querySlice.reducer;
