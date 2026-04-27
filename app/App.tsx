import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import TemplateDefault from './pages/templatedefault';
import Home from './pages/includes/home';
import ProductTable from './pages/includes/product';
import SettingsPage from './pages/includes/settings';
function App() {
  const Logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<TemplateDefault />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<ProductTable />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
