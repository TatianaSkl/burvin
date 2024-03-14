import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://burvin-ok-backend.onrender.com';

export const allProducts = createAsyncThunk('products/all', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addProduct = createAsyncThunk('products/addProduct', async (product, thunkAPI) => {
  try {
    const response = await axios.post('/products', product);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, updatedProductData }, thunkAPI) => {
    try {
      const res = await axios.put(`/products/${id}`, updatedProductData);
      return res.data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/products/${productId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
