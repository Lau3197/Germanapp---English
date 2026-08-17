import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  APP_DATA_SYNCED_EVENT,
  MASTERY_THRESHOLD,
  TRAINER_CLEARED_KEY,
} from '../utils/trainerStorage';

export { APP_DATA_SYNCED_EVENT, MASTERY_THRESHOLD } from '../utils/trainerStorage';

export interface ExerciseResult {
  attempts: number;
  correct: number;
  incorrect: number;
  lastCorrect: boolean;
  consecutiveCorrect: number;
  lastAnsweredAt: number;
}

export interface ProgressSummary {
  practiced: number;
  mastered: number;
  weak: number;
  attempts: number;
  correct: number;
  incorrect: number;
  accuracy: number;
}

type StoredProgress = Record<string, ExerciseResult>;

const EMPTY_RESULT: ExerciseResult = {
  attempts: 0,
  correct: 0,
  incorrect: 0,
  lastCorrect: false,
  consecutiveCorrect: 0,
  lastAnsweredAt: 0,
};

const toCount = (value: unknown) => (typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : 0);

const normalizeResult = (value: unknown): ExerciseResult => {
  if (!value || typeof value !== 'object') return { ...EMPTY_RESULT };
  const result = value as Partial<ExerciseResult>;

  return {
    attempts: toCount(result.attempts),
    correct: toCount(result.correct),
    incorrect: toCount(result.incorrect),
    lastCorrect: Boolean(result.lastCorrect),
    consecutiveCorrect: typeof result.consecutiveCorrect === 'number'
      ? Math.max(0, Math.min(result.consecutiveCorrect, MASTERY_THRESHOLD))
      : (result.lastCorrect ? 1 : 0),
    lastAnsweredAt: toCount(result.lastAnsweredAt),
  };
};

export const readStoredProgress = (storageKey: string): StoredProgress => {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return {};
    const parsed = JSON.parse(saved) as Record<string, unknown>;
    if (!parsed || typeof parsed !== 'object') return {};
    return Object.fromEntries(
      Object.entries(parsed).map(([id, result]) => [id, normalizeResult(result)])
    );
  } catch (error) {
    console.error(`Could not load exercise progress (${storageKey})`, error);
    return {};
  }
};

const markCleared = (storageKey: string) => {
  try {
    const raw = localStorage.getItem(TRAINER_CLEARED_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const map = parsed && typeof parsed === 'object' ? parsed : {};
    localStorage.setItem(TRAINER_CLEARED_KEY, JSON.stringify({ ...map, [storageKey]: Date.now() }));
  } catch (error) {
    console.error('Could not record the progress reset', error);
  }
};

export function useExerciseProgress(storageKey: string) {
  // Seeded from localStorage on the first render: loading in an effect meant the
  // first save could race ahead of the load and flush an empty object over it.
  const [results, setResults] = useState<StoredProgress>(() => readStoredProgress(storageKey));
  const hydratedKeyRef = useRef(storageKey);
  const skipWriteRef = useRef(true);

  useEffect(() => {
    if (hydratedKeyRef.current === storageKey) return;
    hydratedKeyRef.current = storageKey;
    skipWriteRef.current = true;
    setResults(readStoredProgress(storageKey));
  }, [storageKey]);

  useEffect(() => {
    if (skipWriteRef.current) {
      skipWriteRef.current = false;
      return;
    }

    try {
      localStorage.setItem(storageKey, JSON.stringify(results));
    } catch (error) {
      console.error(`Could not save exercise progress (${storageKey})`, error);
    }
  }, [results, storageKey]);

  // Refresh when the cloud sync (or another tab) rewrites this trainer's results.
  useEffect(() => {
    const reload = () => {
      skipWriteRef.current = true;
      setResults(readStoredProgress(storageKey));
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

  const recordAnswer = useCallback((id: string, correct: boolean) => {
    setResults(previous => {
      const current = previous[id] || EMPTY_RESULT;
      return { ...previous, [id]: {
        attempts: current.attempts + 1,
        correct: current.correct + (correct ? 1 : 0),
        incorrect: current.incorrect + (correct ? 0 : 1),
        lastCorrect: correct,
        consecutiveCorrect: correct ? Math.min(current.consecutiveCorrect + 1, MASTERY_THRESHOLD) : 0,
        lastAnsweredAt: Date.now(),
      }};
    });
  }, []);

  const resetProgress = useCallback(() => {
    markCleared(storageKey);
    skipWriteRef.current = false;
    setResults({});
  }, [storageKey]);

  const completedIds = useMemo(
    () => new Set(Object.keys(results).filter(id => results[id].consecutiveCorrect >= MASTERY_THRESHOLD)),
    [results]
  );

  const practicedIds = useMemo(
    () => new Set(Object.keys(results).filter(id => results[id].attempts > 0)),
    [results]
  );

  const summary = useMemo<ProgressSummary>(() => {
    // Object.values widens to unknown[] under this project's tsconfig.
    const entries: ExerciseResult[] = Object.keys(results).map(id => results[id]);
    const attempts = entries.reduce((total, result) => total + result.attempts, 0);
    const correct = entries.reduce((total, result) => total + result.correct, 0);
    const incorrect = entries.reduce((total, result) => total + result.incorrect, 0);

    return {
      practiced: entries.filter(result => result.attempts > 0).length,
      mastered: entries.filter(result => result.consecutiveCorrect >= MASTERY_THRESHOLD).length,
      weak: entries.filter(result => result.incorrect > 0 && result.consecutiveCorrect < MASTERY_THRESHOLD).length,
      attempts,
      correct,
      incorrect,
      accuracy: attempts > 0 ? Math.round((correct / attempts) * 100) : 0,
    };
  }, [results]);

  return { results, completedIds, practicedIds, summary, recordAnswer, resetProgress };
}
