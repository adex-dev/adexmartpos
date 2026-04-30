import { useEffect, useRef } from 'react';
import axios from 'axios';
import { setAccessToken } from '@/components/services/axios';
import { useAuth } from '@/components/services/AuthContext';
const apilink = import.meta.env.VITE_API;

export function useAuthInit() {
  const initialized = useRef(false);
  const { setAccessToken } = useAuth();

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const init = async () => {
      try {
        const res = await axios.post(
          `${apilink}/public/auth/refresh`,
          {},
          { withCredentials: true },
        );

        setAccessToken(res.data.access_token);
      } catch (err) {
        setAccessToken(null);
        console.log('belum login');
      }
    };

    init();
  }, []);
}
