import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearch(state, { payload }) {
      state.search = payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const { getSearch } = searchSlice.actions;
