import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MyContacts = lazy(() => import('./pages/MyContacts/MyContacts'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<PublicRoute component={RegisterPage} redirectTo="/my-contacts" />} />
        <Route path="/login" element={<PublicRoute component={LoginPage} redirectTo="/my-contacts" />}/>


        <Route path="/my-contacts" element={<PrivateRoute component={MyContacts} redirectTo="/login" />} />


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
