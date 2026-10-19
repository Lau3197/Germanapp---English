// Shared read/write helpers for the `grammarStats` localStorage entry.
// Extracted from StatsView so the global study-time tracker and every view
// that displays progress work on exactly the same normalized shape.

export interface DailyStats {
  date: string;
  timeSpent: number; // in seconds
  lessonsCompleted: string[];
  quizScore?: number;
}

export interface UserStats {
  totalTimeSpent: number;
  completedLessons: string[];
  dailyGoal: number; // in minutes
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
  dailyHistory: DailyStats[];
  quizResults: { topicId: string; score: number; date: string }[];
}

export const STATS_STORAGE_KEY = 'grammarStats';

export const defaultStats: UserStats = {
  totalTimeSpent: 0,
  completedLessons: [],
  dailyGoal: 15,
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: '',
  dailyHistory: [],
  quizResults: []
};

export const getLocalDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const toNumber = (value: unknown, fallback = 0) => {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
};

const toStringArray = (value: unknown) => {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
};

const normalizeDailyHistory = (value: unknown): DailyStats[] => {
  if (!Array.isArray(value)) return [];

  return value
    .map((entry): DailyStats | null => {
      if (!entry || typeof entry !== 'object') return null;

      const day = entry as Record<string, unknown>;
      if (typeof day.date !== 'string') return null;

      const normalized: DailyStats = {
        date: day.date,
        timeSpent: Math.max(0, Math.floor(toNumber(day.timeSpent))),
        lessonsCompleted: toStringArray(day.lessonsCompleted)
      };

      if (typeof day.quizScore === 'number' && Number.isFinite(day.quizScore)) {
        normalized.quizScore = day.quizScore;
      }

      return normalized;
    })
    .filter((day): day is DailyStats => day !== null);
};

const normalizeQuizResults = (value: unknown): UserStats['quizResults'] => {
  if (!Array.isArray(value)) return [];

  return value
    .map((entry): UserStats['quizResults'][number] | null => {
      if (!entry || typeof entry !== 'object') return null;

      const result = entry as Record<string, unknown>;
      if (typeof result.topicId !== 'string' || typeof result.date !== 'string') return null;

      return {
        topicId: result.topicId,
        score: toNumber(result.score),
        date: result.date
      };
    })
    .filter((result): result is UserStats['quizResults'][number] => result !== null);
};

export const getDailyHistoryTotal = (dailyHistory: DailyStats[]) => {
  return dailyHistory.reduce((total, day) => total + Math.max(0, day.timeSpent), 0);
};

export const normalizeStats = (rawStats: Partial<UserStats> | null | undefined): UserStats => {
  const source = rawStats || {};
  const dailyHistory = normalizeDailyHistory(source.dailyHistory);
  const totalFromHistory = getDailyHistoryTotal(dailyHistory);

  return {
    totalTimeSpent: Math.max(0, Math.floor(toNumber(source.totalTimeSpent)), totalFromHistory),
    completedLessons: toStringArray(source.completedLessons),
    dailyGoal: Math.max(1, Math.floor(toNumber(source.dailyGoal, defaultStats.dailyGoal))),
    currentStreak: Math.max(0, Math.floor(toNumber(source.currentStreak))),
    longestStreak: Math.max(0, Math.floor(toNumber(source.longestStreak))),
    lastActivityDate: typeof source.lastActivityDate === 'string' ? source.lastActivityDate : '',
    dailyHistory,
    quizResults: normalizeQuizResults(source.quizResults)
  };
};

export const readStatsFromStorage = (): UserStats => {
  if (typeof window === 'undefined') return defaultStats;

  const savedStats = window.localStorage.getItem(STATS_STORAGE_KEY);
  if (!savedStats) return defaultStats;

  try {
    return normalizeStats(JSON.parse(savedStats));
  } catch {
    return defaultStats;
  }
};

export const writeStatsToStorage = (stats: UserStats): UserStats => {
  const normalized = normalizeStats(stats);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(normalized));
  }
  return normalized;
};

export const updateStreakForToday = (rawStats: UserStats) => {
  const stats = normalizeStats(rawStats);
  const today = getLocalDateKey();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = getLocalDateKey(yesterdayDate);

  if (stats.lastActivityDate === today) {
    return stats;
  }

  const updated = { ...stats };
  if (stats.lastActivityDate === yesterday) {
    updated.currentStreak = stats.currentStreak + 1;
  } else {
    updated.currentStreak = 1;
  }

  updated.longestStreak = Math.max(updated.currentStreak, stats.longestStreak);
  updated.lastActivityDate = today;
  return normalizeStats(updated);
};

export const addTimeToStats = (rawStats: UserStats, timeToSave: number, date: string) => {
  const stats = normalizeStats(rawStats);
  const dailyHistory = stats.dailyHistory.map(day => ({
    ...day,
    lessonsCompleted: [...day.lessonsCompleted]
  }));
  const todayIndex = dailyHistory.findIndex(day => day.date === date);

  if (todayIndex >= 0) {
    dailyHistory[todayIndex] = {
      ...dailyHistory[todayIndex],
      timeSpent: dailyHistory[todayIndex].timeSpent + timeToSave
    };
  } else {
    dailyHistory.push({
      date,
      timeSpent: timeToSave,
      lessonsCompleted: []
    });
  }

  return normalizeStats({
    ...stats,
    totalTimeSpent: stats.totalTimeSpent + timeToSave,
    lastActivityDate: date,
    dailyHistory
  });
};

export const getDayTimeSpent = (stats: UserStats, date = getLocalDateKey()) => {
  return stats.dailyHistory.find(day => day.date === date)?.timeSpent || 0;
};
