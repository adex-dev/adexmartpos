import axios from 'axios';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { showAlert } from '../utils/alert';
import { setAccessToken as setAxiosToken } from './axios';

type UserType = {
  modul_access?: string[];
  [key: string]: any;
};
type StoreType = {
  [key: string]: any;
};
type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  isReady: boolean;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  storeContext: StoreType | null;
  setStore: React.Dispatch<React.SetStateAction<StoreType | null>>;
  setModulAccess: (modules: string[]) => void;
  modulAccess: string[];
  hasAccess: (key: string) => boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);
const apilink = import.meta.env.VITE_API;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Akses Token
  const [accessToken, setAccessTokenState] = useState(() => {
    return sessionStorage.getItem('at_token') || null;
  });
  // Daftar User
  const [user, setUser] = useState<UserType | null>(() => {
    const raw = sessionStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  });

  // Daftar Store
  const [storeContext, setStore] = useState<StoreType | null>(() => {
    const rawStore = sessionStorage.getItem('store');
    return rawStore ? JSON.parse(rawStore) : null;
  });

  // Akses Control
  const [modulAccess, setModulAccess] = useState<string[]>(() => {
    const rawAccess = sessionStorage.getItem('modul_access');
    return rawAccess ? JSON.parse(rawAccess) : [];
  });

  // Bypass role
  const BYPASS_ROLES = ['admin', 'director', 'adex','manager'];

  const accessSet = useMemo(() => new Set(modulAccess), [modulAccess]);
  const hasAccess = (key: string) => {
    if (user?.Roles && BYPASS_ROLES.includes(user.Roles)) {
      return true;
    }
    return accessSet.has(key);
  };

  // Token Setter
  const setAccessToken = (token: string | null) => {
    setAccessTokenState(token);
    setAxiosToken(token);

    if (token) {
      sessionStorage.setItem('at_token', token);
    } else {
      sessionStorage.removeItem('at_token');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('store');
      sessionStorage.removeItem('modul_access');
      setUser(null);
      setStore(null);
      setModulAccess([]);
    }
  };
  const [isReady, setIsReady] = useState(false);
  const Pathpage = window.location.pathname;
  const isLogoutPage = Pathpage === '/logout';

  useEffect(() => {
    const init = async () => {
      if (isLogoutPage) {
        setIsReady(true);
        return;
      }
      try {
        const storedUser = sessionStorage.getItem('user');
        const storedAccess = sessionStorage.getItem('modul_access');
        const stored = sessionStorage.getItem('store');
        let endpoint ="refresh"
        if (user?.Roles && BYPASS_ROLES.includes(user.Roles)) {
          if (!storedUser) {
            endpoint="refressh"
          }
        }else{
          if (!storedUser || !storedAccess || !stored) {
             endpoint="refressh"
          }
        }
        const res = await axios.post(
          `${apilink}/public/auth/${endpoint}`,
          {},
          { withCredentials: true },
        );
        const token = res.data.access_token;
        const userData = res.data.user;
        const modules = res.data.modul_access;
        const storeData = res.data.store;
        setAccessToken(token);

        if (userData) {
          sessionStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        }
        if (endpoint === 'refressh') {
          sessionStorage.setItem('modul_access', modules);
          if (modules) {
            setModulAccess(modules);
          } else {
            setModulAccess([]);
          }
          sessionStorage.setItem('store', JSON.stringify(storeData));
          if (storeData) {
            setStore(storeData);
          }
        }
      } catch (error: unknown) {
        setAccessToken(null);
        if (Pathpage !== '/login') {
          if (axios.isAxiosError(error)) {
            showAlert({
              actions: 'error',
              title: 'kesalahan',
              timers: 2000,
              message: error.response?.data?.error || error.message,
            });
          } else {
            showAlert({
              actions: 'error',
              title: 'kesalahan',
              timers: 2000,
              message: 'Belum login / Sesi habis',
            });
          }
        }
      } finally {
        setIsReady(true);
      }
    };
    init();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isReady,
        user,
        setUser,
        storeContext,
        setStore,
        setModulAccess,
        modulAccess,
        hasAccess,
      }}
    >
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
