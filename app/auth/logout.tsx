import { useEffect } from 'react';
import { setAccessToken } from '../components/services/axios';
export default function Logout() {
  const handleLogout = async () => {
    try {
      let data = await FetchLogout({
        address: '/public/logout',
      });
    } catch (error) {
      console.log('logout error', e);
    } finally {
      setAccessToken(null);
      window.location.href = '/login';
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);
}
