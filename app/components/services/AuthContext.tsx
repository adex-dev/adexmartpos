import { createContext, useContext, useState, useEffect } from 'react';
import { setAccessToken as setAxiosToken } from './axios';

const AuthContext = createContext(null);
const apilink = import.meta.env.VITE_API;

export function AuthProvider({ children }) {
  const [accessToken, setAccessTokenState] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const setAccessToken = (token) => {
    setAccessTokenState(token);
    setAxiosToken(token);
  };
  useEffect(() => {
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
