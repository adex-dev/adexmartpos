import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { useAuthInit } from '@/components/hooks/useAuthInit';
import { AuthProvider } from '@/components/services/AuthContext';
import TemplateDefault from '@/pages/templatedefault';
import Home from '@/pages/includes/home';
import ProductTable from '@/pages/includes/product';
import SettingsPage from '@/pages/includes/settings';
import ProtectedRoute from '@/ProtectedRoutes';
import AppLogin from '@/auth/App';
import Logout from '@/auth/logout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<AppLogin />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <TemplateDefault />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="/product" element={<ProductTable />} />
        <Route path="/settings" element={<SettingsPage />} />
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
