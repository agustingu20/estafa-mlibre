/* istanbul ignore file */
import { createSlice } from '@reduxjs/toolkit';

const productId = createSlice({
  name: 'productId',
  initialState: { id: '' },
  reducers: {
    setProductId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setProductId } = productId.actions;
export default productId.reducer;
