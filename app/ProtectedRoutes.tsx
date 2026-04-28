import { useAuth } from './components/services/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { accessToken } = useAuth();
  if (accessToken === undefined) return null;
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
