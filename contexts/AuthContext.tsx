import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  firebaseAuth,
  firebaseAuthAPI,
  firebaseSyncAPI,
  shouldSyncLocalStorageKey,
  toAppUser,
  type AppUser,
} from '../services/firebase';

interface AuthContextType {
  user: AppUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (email: string, password: string, registrationCode: string, name?: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateProfile: (data: { name?: string; email?: string }) => Promise<{ success: boolean; message?: string }>;
  updatePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; message?: string }>;
  deleteAccount: () => Promise<{ success: boolean; message?: string }>;
  syncData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const authSyncRef = useRef<Promise<void> | null>(null);

  const syncBeforeUse = async (uid: string) => {
    if (authSyncRef.current) {
      await authSyncRef.current;
      return;
    }

    let syncPromise: Promise<void>;
    syncPromise = firebaseSyncAPI.fullSync(uid)
      .catch((error) => {
        console.warn('Firebase full sync failed:', error);
      })
      .finally(() => {
        if (authSyncRef.current === syncPromise) {
          authSyncRef.current = null;
        }
      });

    authSyncRef.current = syncPromise;
    await syncPromise;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (firebaseUser) => {
      if (firebaseUser) {
        const appUser = toAppUser(firebaseUser);
        await syncBeforeUse(appUser.id);
        setUser(appUser);
      } else {
        setUser(null);
      }

      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    const userId = user.id;
    let debounceTimer: ReturnType<typeof window.setTimeout> | null = null;
    let intervalTimer: ReturnType<typeof window.setInterval> | null = null;
    let isSyncing = false;
    let needsAnotherPass = false;
    let isDisposed = false;
    let lastSyncedSignature = firebaseSyncAPI.getLocalAppDataSignature();

    const syncNow = async () => {
      if (isDisposed) return;

      const currentSignature = firebaseSyncAPI.getLocalAppDataSignature();
      if (currentSignature === lastSyncedSignature) return;

      if (isSyncing) {
        needsAnotherPass = true;
        return;
      }

      isSyncing = true;

      try {
        await firebaseSyncAPI.fullSync(userId);
        lastSyncedSignature = firebaseSyncAPI.getLocalAppDataSignature();
      } catch (error) {
        console.warn('Firebase auto sync failed:', error);
      } finally {
        isSyncing = false;

        if (needsAnotherPass && !isDisposed) {
          needsAnotherPass = false;
          scheduleSync(1000);
        }
      }
    };

    const scheduleSync = (delay = 1500) => {
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }

      debounceTimer = window.setTimeout(() => {
        void syncNow();
      }, delay);
    };

    const originalSetItem = Storage.prototype.setItem;
    const originalRemoveItem = Storage.prototype.removeItem;
    const originalClear = Storage.prototype.clear;

    const patchedSetItem = function (this: Storage, key: string, value: string) {
      originalSetItem.call(this, key, value);
      if (this === window.localStorage && shouldSyncLocalStorageKey(key)) {
        scheduleSync();
      }
    };

    const patchedRemoveItem = function (this: Storage, key: string) {
      originalRemoveItem.call(this, key);
      if (this === window.localStorage && shouldSyncLocalStorageKey(key)) {
        scheduleSync();
      }
    };

    const patchedClear = function (this: Storage) {
      originalClear.call(this);
      if (this === window.localStorage) {
        scheduleSync();
      }
    };

    Storage.prototype.setItem = patchedSetItem;
    Storage.prototype.removeItem = patchedRemoveItem;
    Storage.prototype.clear = patchedClear;

    const handleStorage = (event: StorageEvent) => {
      if (event.storageArea === window.localStorage && shouldSyncLocalStorageKey(event.key)) {
        scheduleSync();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        scheduleSync(0);
      }
    };

    const handlePageHide = () => {
      scheduleSync(0);
    };

    window.addEventListener('storage', handleStorage);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    intervalTimer = window.setInterval(() => scheduleSync(0), 30000);
    const unsubscribeCloud = firebaseSyncAPI.watchCloud(userId);

    return () => {
      isDisposed = true;
      unsubscribeCloud();

      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
      if (intervalTimer) {
        window.clearInterval(intervalTimer);
      }

      window.removeEventListener('storage', handleStorage);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);

      if (Storage.prototype.setItem === patchedSetItem) {
        Storage.prototype.setItem = originalSetItem;
      }
      if (Storage.prototype.removeItem === patchedRemoveItem) {
        Storage.prototype.removeItem = originalRemoveItem;
      }
      if (Storage.prototype.clear === patchedClear) {
        Storage.prototype.clear = originalClear;
      }
    };
  }, [user?.id]);

  const login = async (email: string, password: string) => {
    try {
      const appUser = await firebaseAuthAPI.login(email, password);
      await syncBeforeUse(appUser.id);
      setUser(appUser);
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const register = async (email: string, password: string, registrationCode: string, name?: string) => {
    try {
      const appUser = await firebaseAuthAPI.register(email, password, registrationCode, name);
      await syncBeforeUse(appUser.id);
      setUser(appUser);
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    void firebaseAuthAPI.logout();
    setUser(null);
  };

  const updateProfile = async (data: { name?: string; email?: string }) => {
    try {
      const updatedUser = await firebaseAuthAPI.updateProfile(data);
      setUser(updatedUser);
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const updatePassword = async (currentPassword: string, newPassword: string) => {
    try {
      await firebaseAuthAPI.updatePassword(currentPassword, newPassword);
      return { success: true, message: 'Password updated' };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const deleteAccount = async () => {
    try {
      await firebaseAuthAPI.deleteAccount();
      setUser(null);
      return { success: true, message: 'Account deleted successfully' };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const syncData = async () => {
    if (user) {
      await firebaseSyncAPI.fullSync(user.id);
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
      updatePassword,
      deleteAccount,
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
