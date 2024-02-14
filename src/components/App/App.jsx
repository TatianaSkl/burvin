import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components';

const WelcomePage = lazy(() => import('pages/Welcome/Welcome'));
const CatalogPage = lazy(() => import('pages/Catalog/Catalog'));
const OutletPage = lazy(() => import('pages/Outlet/Outlet'));
const FavoritesPage = lazy(() => import('pages/Favorites/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="outlet" element={<OutletPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
};
