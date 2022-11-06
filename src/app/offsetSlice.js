/* istanbul ignore file */

import { createSlice } from '@reduxjs/toolkit';

const offsetSlice = createSlice({
  name: 'offset',
  initialState: { value: 0 },
  reducers: {
    setOffset(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setOffset } = offsetSlice.actions;
export default offsetSlice.reducer;
