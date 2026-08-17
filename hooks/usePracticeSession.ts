import { useCallback, useMemo, useState } from 'react';
import { ExerciseResult, useExerciseProgress } from './useExerciseProgress';
import { useExerciseFavorites } from './useExerciseFavorites';
import { MASTERY_THRESHOLD } from '../utils/trainerStorage';

export type PracticePhase = 'menu' | 'drill' | 'result';
export type SessionSize = number | 'all';
export type AnswerStatus = 'idle' | 'correct' | 'incorrect' | 'revealed';

export const SESSION_SIZES: SessionSize[] = [10, 20, 50, 'all'];

const SIZE_STORAGE_PREFIX = 'trainerSessionSize_';

const shuffle = <T,>(items: T[]): T[] => {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const isMastered = (result: ExerciseResult | undefined) => (
  (result?.consecutiveCorrect || 0) >= MASTERY_THRESHOLD
);

/** Missed at least once and not yet secure — the "my mistakes" pool. */
export const isWeak = (result: ExerciseResult | undefined) => (
  !!result && result.incorrect > 0 && !isMastered(result)
);

// Weakest first: items already missed, then never seen, then seen but not
// secure, then mastered. The pools run to a hundred items, so a plain shuffle
// would almost never draw the handful the learner actually gets wrong.
const priority = (result: ExerciseResult | undefined) => {
  if (!result || result.attempts === 0) return 1;
  if (isMastered(result)) return 3;
  if (result.incorrect > 0) return 0;
  return 2;
};

const readStoredSize = (progressKey: string): SessionSize => {
  try {
    const saved = localStorage.getItem(`${SIZE_STORAGE_PREFIX}${progressKey}`);
    if (saved === 'all') return 'all';
    const parsed = Number(saved);
    return SESSION_SIZES.includes(parsed) ? parsed : 20;
  } catch {
    return 20;
  }
};

interface PracticeSessionConfig<T> {
  /** Full item pool. Keep the reference stable (useMemo) — it drives the queue. */
  items: T[];
  /** Stable, human-readable id per item; also the progress/favorite key. */
  getId: (item: T) => string;
  /** Answer check, already normalized by the caller. */
  isCorrect: (item: T, answer: string) => boolean;
  progressKey: string;
  favoritesKey: string;
}

/**
 * Menu → drill → result state machine shared by the typed-answer trainers.
 * Results live in `useExerciseProgress`, which persists them and syncs them to
 * the account, so a session picks up where the last one stopped.
 */
export function usePracticeSession<T>({
  items,
  getId,
  isCorrect,
  progressKey,
  favoritesKey,
}: PracticeSessionConfig<T>) {
  const { results, completedIds, summary, recordAnswer, resetProgress } = useExerciseProgress(progressKey);
  const { favoriteIds, toggleFavorite } = useExerciseFavorites(favoritesKey);

  const [phase, setPhase] = useState<PracticePhase>('menu');
  const [size, setSize] = useState<SessionSize>(() => readStoredSize(progressKey));
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [skipMastered, setSkipMastered] = useState(true);
  const [weakOnly, setWeakOnly] = useState(false);

  const [sessionItems, setSessionItems] = useState<T[]>([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<AnswerStatus>('idle');
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [missed, setMissed] = useState<T[]>([]);
  const [isReview, setIsReview] = useState(false);

  const scopedItems = useMemo(
    () => items.filter(item => !favoritesOnly || favoriteIds.has(getId(item))),
    [items, favoritesOnly, favoriteIds, getId]
  );

  // "Only my mistakes" draws from the saved history, not just the last session:
  // weak items are already excluded from `completedIds`, so it supersedes the
  // skip-mastered filter rather than stacking with it.
  const duePool = useMemo(() => {
    if (weakOnly) return scopedItems.filter(item => isWeak(results[getId(item)]));
    return skipMastered ? scopedItems.filter(item => !completedIds.has(getId(item))) : scopedItems;
  }, [scopedItems, weakOnly, results, skipMastered, completedIds, getId]);

  const scopedCounts = useMemo(() => {
    let mastered = 0;
    let weak = 0;
    let unseen = 0;

    scopedItems.forEach((item) => {
      const result = results[getId(item)];
      if (isMastered(result)) mastered += 1;
      else if (isWeak(result)) weak += 1;
      else if (!result || result.attempts === 0) unseen += 1;
    });

    return { total: scopedItems.length, mastered, weak, unseen };
  }, [scopedItems, results, getId]);

  const changeSize = useCallback((next: SessionSize) => {
    setSize(next);
    try {
      localStorage.setItem(`${SIZE_STORAGE_PREFIX}${progressKey}`, String(next));
    } catch {
      // Storage can be unavailable in private mode — the choice just won't stick.
    }
  }, [progressKey]);

  const startSession = useCallback((pool: T[], review = false) => {
    if (!pool.length) return;

    const buckets: T[][] = [[], [], [], []];
    pool.forEach(item => buckets[priority(results[getId(item)])].push(item));
    const ordered = review ? shuffle(pool) : buckets.flatMap(bucket => shuffle(bucket));
    const count = review || size === 'all' ? ordered.length : Math.min(size, ordered.length);
    // Reshuffled after slicing so the weak items aren't all bunched at the front.
    const queue = shuffle(ordered.slice(0, count));

    setSessionItems(queue);
    setIndex(0);
    setAnswer('');
    setStatus('idle');
    setSessionStats({ correct: 0, incorrect: 0 });
    setStreak(0);
    setBestStreak(0);
    setMissed([]);
    setIsReview(review);
    setPhase('drill');
  }, [results, getId, size]);

  const start = useCallback(() => startSession(duePool, false), [startSession, duePool]);
  const reviewMistakes = useCallback(() => startSession(missed, true), [startSession, missed]);

  const currentItem = sessionItems[index];
  const currentId = currentItem ? getId(currentItem) : '';
  const currentResult = currentId ? results[currentId] : undefined;

  const registerMiss = useCallback((item: T) => {
    setMissed(previous => (previous.some(entry => getId(entry) === getId(item)) ? previous : [...previous, item]));
  }, [getId]);

  const submit = useCallback(() => {
    if (!currentItem || status !== 'idle' || !answer.trim()) return;

    const correct = isCorrect(currentItem, answer);
    recordAnswer(getId(currentItem), correct);
    setStatus(correct ? 'correct' : 'incorrect');
    setSessionStats(previous => ({
      correct: previous.correct + (correct ? 1 : 0),
      incorrect: previous.incorrect + (correct ? 0 : 1),
    }));

    if (correct) {
      setStreak((previous) => {
        const next = previous + 1;
        setBestStreak(best => Math.max(best, next));
        return next;
      });
    } else {
      setStreak(0);
      registerMiss(currentItem);
    }
  }, [currentItem, status, answer, isCorrect, recordAnswer, getId, registerMiss]);

  // Revealing counts as a miss: otherwise the score and the saved history would
  // quietly ignore every item the learner couldn't produce.
  const reveal = useCallback(() => {
    if (!currentItem || status !== 'idle') return;

    recordAnswer(getId(currentItem), false);
    setStatus('revealed');
    setSessionStats(previous => ({ ...previous, incorrect: previous.incorrect + 1 }));
    setStreak(0);
    registerMiss(currentItem);
  }, [currentItem, status, recordAnswer, getId, registerMiss]);

  const next = useCallback(() => {
    setAnswer('');
    setStatus('idle');
    if (index < sessionItems.length - 1) {
      setIndex(previous => previous + 1);
    } else {
      setPhase('result');
    }
  }, [index, sessionItems.length]);

  const backToMenu = useCallback(() => {
    setPhase('menu');
    setAnswer('');
    setStatus('idle');
    setIndex(0);
  }, []);

  return {
    phase,
    size,
    setSize: changeSize,
    favoritesOnly,
    setFavoritesOnly,
    skipMastered,
    setSkipMastered,
    weakOnly,
    setWeakOnly,

    results,
    summary,
    resetProgress,
    favoriteIds,
    toggleFavorite,

    scopedItems,
    duePool,
    scopedCounts,

    start,
    startSession,
    reviewMistakes,
    backToMenu,

    sessionItems,
    index,
    currentItem,
    currentId,
    currentResult,
    isFavorite: currentId ? favoriteIds.has(currentId) : false,

    answer,
    setAnswer,
    status,
    submit,
    reveal,
    next,

    sessionStats,
    streak,
    bestStreak,
    missed,
    isReview,
  };
}
