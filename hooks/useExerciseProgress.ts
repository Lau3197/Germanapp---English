import { useCallback, useEffect, useMemo, useState } from 'react';

export interface ExerciseResult {
  attempts: number;
  correct: number;
  incorrect: number;
  lastCorrect: boolean;
  lastAnsweredAt: number;
}

type StoredProgress = Record<string, ExerciseResult>;

export function useExerciseProgress(storageKey: string) {
  const [results, setResults] = useState<StoredProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setResults(JSON.parse(saved));
    } catch (error) {
      console.error(`Could not load exercise progress (${storageKey})`, error);
    } finally {
      setIsLoaded(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (isLoaded) localStorage.setItem(storageKey, JSON.stringify(results));
  }, [isLoaded, results, storageKey]);

  const recordAnswer = useCallback((id: string, correct: boolean) => {
    setResults(previous => {
      const current = previous[id] || { attempts: 0, correct: 0, incorrect: 0, lastCorrect: false, lastAnsweredAt: 0 };
      return { ...previous, [id]: {
        attempts: current.attempts + 1,
        correct: current.correct + (correct ? 1 : 0),
        incorrect: current.incorrect + (correct ? 0 : 1),
        lastCorrect: correct,
        lastAnsweredAt: Date.now(),
      }};
    });
  }, []);

  const completedIds = useMemo(
    () => new Set(Object.keys(results).filter(id => results[id].attempts > 0)),
    [results]
  );

  return { results, completedIds, recordAnswer, resetProgress: () => setResults({}) };
}
