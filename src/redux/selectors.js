import { createSelector } from '@reduxjs/toolkit';
import products from '../bd/products.json';

export const selectFavorites = state => state.favorites.favorites;
export const selectFilterView = state => state.filter.filterView;
export const selectFilterSize = state => state.filter.filterSize;
export const selectIsFiltred = state => state.filter.isFiltred;

export const filtredProducts = createSelector(
  [selectFilterView, selectFilterSize],
  (view, size) => {
    let filter = products;

    if (view !== '' && size !== '') {
      filter = filter.filter(
        product => product.view === view && product.size.split(',').includes(size)
      );
    } else if (view !== '' && size === '') {
      filter = filter.filter(product => product.view === view);
    } else if (view === '' && size !== '') {
      filter = filter.filter(product => product.size.split(',').includes(size));
    }

    return filter;
  }
);
