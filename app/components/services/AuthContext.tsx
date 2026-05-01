import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { showAlert } from '../utils/alert';
import { setAccessToken as setAxiosToken } from './axios';

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  isReady: boolean;
};
const AuthContext = createContext<AuthContextType | null>(null);
const apilink = import.meta.env.VITE_API;
export function AuthProvider({ children }) {
  const [accessToken, setAccessTokenState] = useState(() => {
    return sessionStorage.getItem('at_token') || null;
  });
  const [isReady, setIsReady] = useState(false);

  const setAccessToken = (token) => {
    setAccessTokenState(token);
    setAxiosToken(token);
    if (token) {
      sessionStorage.setItem('at_token', token);
    } else {
      sessionStorage.removeItem('at_token');
    }
  };
  const isLogoutPage = window.location.pathname === '/logout';
  useEffect(() => {
    const init = async () => {
      if (isLogoutPage) {
        setIsReady(true);
        return;
      }
      if (accessToken) {
        setIsReady(true);
        const user = sessionStorage.getItem('user');
        if (user) {
          await axios
            .post(
              `${apilink}/public/auth/refresh`,
              {},
              { withCredentials: true },
            )
            .then((res) => setAccessToken(res.data.access_token))
            .catch(() => setAccessToken(null));
          return;
        } else {
          try {
            const res = await axios.post(
              `${apilink}/public/auth/refressh`,
              {},
              { withCredentials: true },
            );
            sessionStorage.setItem('user', JSON.stringify(res.data.users));
            setAccessToken(res.data.access_token);
          } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              showAlert({
                actions: 'error',
                title: 'kesalahan',
                timers: 2000,
                message: error.response?.data?.error || error.message,
              });
              setAccessToken(null)
              return;
            }

            showAlert({
              actions: 'error',
              title: 'kesalahan',
              timers: 2000,
              message: 'unknown error',
            });
            setAccessToken(null)
          }
          
          return;
        }
      }
      try {
        const res = await axios.post(
          `${apilink}/public/auth/refresh`,
          {},
          { withCredentials: true },
        );
        setAccessToken(res.data.access_token);
      } catch (err) {
        setAccessToken(null);
        showAlert({
          actions: 'error',
          title: 'kesalahan',
          timers: 2000,
          message: 'Belum login / Sesi habis',
        });
      } finally {
        setIsReady(true);
      }
    };
    init();
  }, []);
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, isReady }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
