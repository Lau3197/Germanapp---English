import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { APP_DATA_SYNCED_EVENT } from '../utils/trainerStorage';

const readStoredFavorites = (storageKey: string): string[] => {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch (error) {
    console.error(`Could not load exercise favorites (${storageKey})`, error);
    return [];
  }
};

export function useExerciseFavorites(storageKey: string) {
  const [favorites, setFavorites] = useState<string[]>(() => readStoredFavorites(storageKey));
  const hydratedKeyRef = useRef(storageKey);
  const skipWriteRef = useRef(true);

  useEffect(() => {
    if (hydratedKeyRef.current === storageKey) return;
    hydratedKeyRef.current = storageKey;
    skipWriteRef.current = true;
    setFavorites(readStoredFavorites(storageKey));
  }, [storageKey]);

  useEffect(() => {
    if (skipWriteRef.current) {
      skipWriteRef.current = false;
      return;
    }

    try {
      localStorage.setItem(storageKey, JSON.stringify(favorites));
    } catch (error) {
      console.error(`Could not save exercise favorites (${storageKey})`, error);
    }
  }, [favorites, storageKey]);

  // Refresh when the cloud sync (or another tab) rewrites this trainer's favorites.
  useEffect(() => {
    const reload = () => {
      skipWriteRef.current = true;
      setFavorites(readStoredFavorites(storageKey));
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.storageArea !== window.localStorage) return;
      if (event.key === null || event.key === storageKey) reload();
    };

    window.addEventListener(APP_DATA_SYNCED_EVENT, reload);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(APP_DATA_SYNCED_EVENT, reload);
      window.removeEventListener('storage', handleStorage);
    };
  }, [storageKey]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(previous => previous.includes(id)
      ? previous.filter(item => item !== id)
      : [...previous, id]);
  }, []);

  const favoriteIds = useMemo(() => new Set(favorites), [favorites]);

  return { favoriteIds, toggleFavorite };
}
