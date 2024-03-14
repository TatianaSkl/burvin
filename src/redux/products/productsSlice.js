import { createSlice } from '@reduxjs/toolkit';
import { allProducts, addProduct, deleteProduct, updateProduct } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfield = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(allProducts.pending, handlePending)
      .addCase(allProducts.fulfilled, (state, { payload }) => {
        handleFullfield(state);
        state.products = payload;
      })
      .addCase(allProducts.rejected, handleRejected)
      .addCase(addProduct.pending, handlePending)
      .addCase(addProduct.fulfilled, (state, action) => {
        handleFullfield(state);
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, handleRejected)
      .addCase(updateProduct.pending, handlePending)
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.products = state.products.map(product => {
          if (product._id === updatedProduct._id) {
            return updatedProduct;
          } else {
            return product;
          }
        });
        handleFullfield(state);
      })
      .addCase(updateProduct.rejected, handleRejected)
      .addCase(deleteProduct.pending, handlePending)
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(product => product._id === action.payload.id);
        state.products.splice(index, 1);
        handleFullfield(state);
      })
      .addCase(deleteProduct.rejected, handleRejected),
});

export const productsReducer = productsSlice.reducer;
