import { createContext, useContext, useState } from 'react';
import { setAccessToken as setAxiosToken } from './axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [accessToken, setAccessTokenState] = useState(undefined);
  const setAccessToken = (token) => {
    setAccessTokenState(token);
    setAxiosToken(token);
  };
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
