import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI, syncAPI } from '../services/api';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (email: string, password: string, name?: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateProfile: (data: { name?: string; email?: string }) => Promise<{ success: boolean; message?: string }>;
  syncData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const checkAuth = async () => {
      if (authAPI.isAuthenticated()) {
        try {
          const response = await authAPI.getProfile();
          if (response.success && response.user) {
            setUser(response.user);
            // Synchroniser les données depuis le serveur
            await syncAPI.syncFromServer();
          }
        } catch (error) {
          // Token invalide, déconnecter
          authAPI.logout();
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await authAPI.login(email, password);
      if (response.success && response.user) {
        setUser(response.user);
        // Synchroniser les données
        await syncAPI.fullSync();
        return { success: true };
      }
      return { success: false, message: response.message };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const register = async (email: string, password: string, name?: string) => {
    try {
      const response = await authAPI.register(email, password, name);
      if (response.success && response.user) {
        setUser(response.user);
        // Envoyer les données locales existantes au serveur
        await syncAPI.syncToServer();
        return { success: true };
      }
      return { success: false, message: response.message };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
  };

  const updateProfile = async (data: { name?: string; email?: string }) => {
    try {
      const response = await authAPI.updateProfile(data);
      if (response.success && response.user) {
        setUser(response.user);
        return { success: true };
      }
      return { success: false, message: response.message };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const syncData = async () => {
    if (user) {
      await syncAPI.fullSync();
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      register,
      logout,
      updateProfile,
      syncData
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


