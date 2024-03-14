import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    },
    removeFromFavorites(state, { payload }) {
      return {
        ...state,
        favorites: state.favorites.filter(product => product._id !== payload),
      };
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
