import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterView: '',
  filterSize: '',
  isFiltred: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilter(state, { payload }) {
      state.isFiltred = true;
      state.filterView = payload.view;
      state.filterSize = payload.size;
    },
    resetFilter(state, { payload }) {
      state.filterView = '';
      state.filterSize = '';
      state.isFiltred = false;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { getFilter, resetFilter } = filterSlice.actions;
