import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
const Home = lazy(() => import('../pages/HomePage'));
const Nannies = lazy(() => import('../pages/NanniesPage'));
const Favorites = lazy(() => import('../pages/FavoritesPage'));

function App() {
  return (
    <>
      <Toaster positions="top-right" toastOptions={{ duration: 1500 }} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="nannies" element={<Nannies />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
