import { createContext, useContext, useState, useEffect } from 'react';
import { setAccessToken as setAxiosToken } from './axios';
import axios from 'axios';

const AuthContext = createContext(null);
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
  useEffect(() => {
    const init = async () => {
      if (accessToken) {
        setIsReady(true);
        await axios
          .post(`${apilink}/public/auth/refresh`, {}, { withCredentials: true })
          .then((res) => setAccessToken(res.data.access_token))
          .catch(() => setAccessToken(null));
        return;
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
        console.log('Belum login / Sesi habis');
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

export const useAuth = () => useContext(AuthContext);
