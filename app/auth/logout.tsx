import { FetchLogout } from '@/components/services/Api';
import { setAccessToken } from '@/components/services/axios';
import { useEffect } from 'react';
export default function LogoutComponent() {
  const handleLogout = async () => {
    try {
      await FetchLogout({
        address: '/logout',
      });
         sessionStorage.removeItem('user');
    } catch (error) {
      console.log('logout error', error);
    } finally {
      setAccessToken(null);
      window.location.href = '/login';
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return null;
}
