import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components';

const WelcomePage = lazy(() => import('pages/Welcome/Welcome'));
const CollectionsPage = lazy(() => import('pages/Collections/Collections'));
const CollectionOnePage = lazy(() => import('pages/CollectionOne/CollectionOne'));
const CollectionTwoPage = lazy(() => import('pages/CollectionTwo/CollectionTwo'));
const CollectionThreePage = lazy(() => import('pages/CollectionThree/CollectionThree'));
const OutletPage = lazy(() => import('pages/Outlet/Outlet'));
const FavoritesPage = lazy(() => import('pages/Favorites/Favorites'));
const SearchPage = lazy(() => import('pages/Search/Search'));
const NewsPage = lazy(() => import('pages/News/News'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="collection-1" element={<CollectionOnePage />} />
        <Route path="collection-2" element={<CollectionTwoPage />} />
        <Route path="collection-3" element={<CollectionThreePage />} />
        <Route path="outlet" element={<OutletPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
};
