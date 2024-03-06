import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://burvin-ok-backend.onrender.com';

export const allProducts = createAsyncThunk('products/all', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/products');
    console.log(response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
