import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import {
  UserStats,
  addTimeToStats,
  defaultStats,
  getDayTimeSpent,
  getDailyHistoryTotal,
  getLocalDateKey,
  normalizeStats,
  readStatsFromStorage,
  updateStreakForToday,
  writeStatsToStorage
} from '../utils/studyStats';

// The study clock lives here, above the router, so it keeps running whatever
// page the user is on. It measures wall-clock time (Date.now deltas) instead of
// counting interval ticks, so a throttled background tab can't inflate or lose
// time, and it flushes to localStorage regularly rather than only on unmount.

const TICK_MS = 1000;
const FLUSH_MS = 15000;
// Stop counting after this long without any interaction: the user left the
// laptop open on a lesson, that is not study time.
const IDLE_TIMEOUT_MS = 2 * 60 * 1000;
// Cap a single tick's contribution so a sleeping machine or a stalled tab can't
// dump an hour into the counter when it wakes up.
const MAX_TICK_MS = 5000;

const ACTIVITY_EVENTS = ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart', 'scroll'] as const;

interface StudyTimeContextType {
  stats: UserStats;
  /** Seconds studied today, including the not-yet-flushed part of this session. */
  todayTimeSpent: number;
  /** All-time seconds studied, including the not-yet-flushed part of this session. */
  totalTimeSpent: number;
  /** False while paused (tab hidden or user idle). */
  isTracking: boolean;
  /** Persist a change to the stats object (daily goal, quiz results, ...). */
  updateStats: (updater: (current: UserStats) => UserStats) => void;
  /** Re-read localStorage, e.g. after an import. */
  refreshStats: () => void;
}

const StudyTimeContext = createContext<StudyTimeContextType | undefined>(undefined);

export const StudyTimeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<UserStats>(defaultStats);
  const [pendingSeconds, setPendingSeconds] = useState(0);
  const [isTracking, setIsTracking] = useState(true);

  // Milliseconds accumulated since the last flush to localStorage.
  const pendingMsRef = useRef(0);
  // Day the pending milliseconds belong to (handles a session crossing midnight).
  const pendingDateRef = useRef(getLocalDateKey());
  const lastTickRef = useRef(Date.now());
  const lastActivityRef = useRef(Date.now());

  const flush = useCallback(() => {
    const wholeSeconds = Math.floor(pendingMsRef.current / 1000);
    if (wholeSeconds <= 0) return;

    pendingMsRef.current -= wholeSeconds * 1000;
    const updated = addTimeToStats(readStatsFromStorage(), wholeSeconds, pendingDateRef.current);
    writeStatsToStorage(updated);
    setStats(updated);
    setPendingSeconds(Math.floor(pendingMsRef.current / 1000));
  }, []);

  // Load once, and roll the streak forward for today.
  useEffect(() => {
    const loaded = updateStreakForToday(readStatsFromStorage());
    writeStatsToStorage(loaded);
    setStats(loaded);
    lastTickRef.current = Date.now();
    lastActivityRef.current = Date.now();
  }, []);

  // Count time.
  useEffect(() => {
    const markActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        flush();
      } else {
        // Coming back to the tab counts as activity, and the gap while hidden
        // must not be credited.
        lastTickRef.current = Date.now();
        lastActivityRef.current = Date.now();
      }
    };

    const tick = () => {
      const now = Date.now();
      const delta = now - lastTickRef.current;
      lastTickRef.current = now;

      const paused = document.hidden || now - lastActivityRef.current > IDLE_TIMEOUT_MS;
      setIsTracking(!paused);
      if (paused || delta <= 0) return;

      const today = getLocalDateKey();
      if (today !== pendingDateRef.current) {
        flush();
        pendingDateRef.current = today;
      }

      pendingMsRef.current += Math.min(delta, MAX_TICK_MS);
      setPendingSeconds(Math.floor(pendingMsRef.current / 1000));
    };

    const tickInterval = window.setInterval(tick, TICK_MS);
    const flushInterval = window.setInterval(flush, FLUSH_MS);

    ACTIVITY_EVENTS.forEach(event =>
      window.addEventListener(event, markActivity, { passive: true })
    );
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', flush);
    window.addEventListener('beforeunload', flush);

    return () => {
      window.clearInterval(tickInterval);
      window.clearInterval(flushInterval);
      ACTIVITY_EVENTS.forEach(event => window.removeEventListener(event, markActivity));
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', flush);
      window.removeEventListener('beforeunload', flush);
      flush();
    };
  }, [flush]);

  const updateStats = useCallback((updater: (current: UserStats) => UserStats) => {
    setStats(prev => writeStatsToStorage(normalizeStats(updater(prev))));
  }, []);

  const refreshStats = useCallback(() => {
    setStats(readStatsFromStorage());
  }, []);

  const todayTimeSpent = getDayTimeSpent(stats) + pendingSeconds;
  const totalTimeSpent =
    Math.max(stats.totalTimeSpent, getDailyHistoryTotal(stats.dailyHistory)) + pendingSeconds;

  return (
    <StudyTimeContext.Provider
      value={{ stats, todayTimeSpent, totalTimeSpent, isTracking, updateStats, refreshStats }}
    >
      {children}
    </StudyTimeContext.Provider>
  );
};

export const useStudyTime = () => {
  const context = useContext(StudyTimeContext);
  if (context === undefined) {
    throw new Error('useStudyTime must be used within a StudyTimeProvider');
  }
  return context;
};
