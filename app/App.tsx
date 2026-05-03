import AppLogin from '@/auth/App';
import LogoutComponent from '@/auth/logout';
import { AuthProvider } from '@/components/services/AuthContext';
import Categories from '@/pages/categories';
import Home from '@/pages/includes/home';
import ProductTable from '@/pages/includes/product';
import SettingsPage from '@/pages/includes/settings';
import { default as PageTitle, default as Pagetitle } from '@/pages/pagestittle';
import TemplateDefault from '@/pages/templatedefault';
import ProtectedRoute from '@/ProtectedRoutes';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Pagetitle title="Pos System Login"><AppLogin /></Pagetitle>} />
      <Route path="/logout" element={<Pagetitle title={"Logout System"}><LogoutComponent /></Pagetitle>} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <TemplateDefault />
          </ProtectedRoute>
        }
      >
        <Route index element={<Pagetitle title="Dasboard System"><Home /></Pagetitle>} />
        <Route path="/product" element={<PageTitle title="List Product"><ProductTable /></PageTitle>} />
        <Route path="/category" element={<PageTitle title="List Categories"><Categories /></PageTitle>} />
        <Route path="/settings" element={<Pagetitle title={"Setup Pos System"}><SettingsPage /></Pagetitle>} />
      </Route>
    </>,
  ),
);
function AppContent() {
  return <RouterProvider router={router} />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
