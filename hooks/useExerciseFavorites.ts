import { useCallback, useEffect, useState } from 'react';

export function useExerciseFavorites(storageKey: string) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setFavorites(JSON.parse(saved));
    } catch (error) {
      console.error(`Could not load exercise favorites (${storageKey})`, error);
    } finally {
      setIsLoaded(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (isLoaded) localStorage.setItem(storageKey, JSON.stringify(favorites));
  }, [favorites, isLoaded, storageKey]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(previous => previous.includes(id)
      ? previous.filter(item => item !== id)
      : [...previous, id]);
  }, []);

  return { favoriteIds: new Set(favorites), toggleFavorite };
}
