import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { Header, Loader } from 'components';

export const SharedLayout = () => {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';

  return (
    <>
      <Header backGround={isWelcomePage} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} />
    </>
  );
};
