import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products.products;
export const selectLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;
export const selectFavorites = state => state.favorites.favorites;
export const selectFilterView = state => state.filter.filterView;
export const selectFilterSize = state => state.filter.filterSize;
export const selectIsFiltred = state => state.filter.isFiltred;
export const selectSearch = state => state.search.search;

export const filtredProducts = createSelector(
  [selectProducts, selectFilterView, selectFilterSize],
  (products, view, size) => {
    let filter = products;

    if (view !== 'Всі' && size !== 'Всі') {
      filter = filter.filter(
        product =>
          product.view === view && product.options.some(option => option.sizes.includes(size))
      );
    } else if (view !== 'Всі' && size === 'Всі') {
      filter = filter.filter(product => product.view === view);
    } else if (view === 'Всі' && size !== 'Всі') {
      filter = filter.filter(product =>
        product.options.some(option => option.sizes.includes(size))
      );
    }

    return filter;
  }
);
