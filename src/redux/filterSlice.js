import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterView: 'Всі',
  filterSize: 'Всі',
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
  },
});

export const filterReducer = filterSlice.reducer;
export const { getFilter } = filterSlice.actions;
