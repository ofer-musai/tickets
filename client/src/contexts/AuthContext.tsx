import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { getMe } from '../services/api/api';
import type { AuthUser } from '../services/api/api';

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
}

interface AuthContextValue extends AuthState {
  isAuthenticated: boolean;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, token: null, isLoading: true });

  useEffect(() => {
    const token = localStorage.getItem('tf_token');
    if (!token) {
      setState({ user: null, token: null, isLoading: false });
      return;
    }
    getMe()
      .then(({ user }) => setState({ user, token, isLoading: false }))
      .catch(() => {
        localStorage.removeItem('tf_token');
        setState({ user: null, token: null, isLoading: false });
      });
  }, []);

  function login(token: string, user: AuthUser) {
    localStorage.setItem('tf_token', token);
    setState({ user, token, isLoading: false });
  }

  function logout() {
    localStorage.removeItem('tf_token');
    setState({ user: null, token: null, isLoading: false });
  }

  return (
    <AuthContext.Provider value={{ ...state, isAuthenticated: !!state.token && !!state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
