import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { Header, Loader } from 'components';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} />
    </>
  );
};
