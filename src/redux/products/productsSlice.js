import { createSlice } from '@reduxjs/toolkit';
import { allProducts } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

// const handleFullfield = state => {
//   state.isLoading = false;
//   state.error = null;
// };

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase(allProducts.pending, handlePending);
    builder.addCase(allProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.products = payload;
    });
    builder.addCase(allProducts.rejected, handleRejected);
  },
});

export const productsReducer = productsSlice.reducer;
