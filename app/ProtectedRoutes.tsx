import { useAuth } from '@/components/services/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { accessToken, isReady } = useAuth();
  const location = useLocation();

  // Jika isReady masih false, berarti sistem sedang cek refresh token
  if (!isReady) {
    return <div>Loading session...</div>; // Atau tampilkan spinner
  }

  if (!accessToken) {
    // Simpan lokasi saat ini agar setelah login bisa kembali ke sini
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
