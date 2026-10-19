// Storage contract shared by the trainers (which write the results) and the
// Firebase sync layer (which pushes them to the cloud). Kept React-free so both
// sides can import it without pulling a hook into the service layer.

// An item counts as mastered after three correct answers in a row.
export const MASTERY_THRESHOLD = 3;

// Every trainer stores under `trainerProgress_<trainer>` / `trainerFavorites_<trainer>`,
// so the sync layer picks new trainers up by prefix without another registration step.
export const TRAINER_PROGRESS_PREFIX = 'trainerProgress_';
export const TRAINER_FAVORITES_PREFIX = 'trainerFavorites_';

// "Reset progress" has to survive the cloud merge: without a tombstone the next
// sync would simply pull the wiped results back down from Firestore.
export const TRAINER_CLEARED_KEY = 'trainerProgressClearedAt';

// The grammar exercises first stored under a key outside the prefix, so their
// results never left the device. Moved once, on load, before anything reads them.
export const GRAMMAR_EXERCISE_PROGRESS_KEY = `${TRAINER_PROGRESS_PREFIX}grammarExercises_en`;
const LEGACY_GRAMMAR_EXERCISE_PROGRESS_KEY = 'grammarExerciseProgress';

const migrateLegacyGrammarProgress = () => {
  try {
    const legacyRaw = localStorage.getItem(LEGACY_GRAMMAR_EXERCISE_PROGRESS_KEY);
    if (legacyRaw === null) return;

    const legacy = parse(legacyRaw);
    const current = parse(localStorage.getItem(GRAMMAR_EXERCISE_PROGRESS_KEY));
    if (legacy && typeof legacy === 'object' && !Array.isArray(legacy)) {
      const merged = current && typeof current === 'object' && !Array.isArray(current)
        ? { ...legacy, ...current }
        : legacy;
      localStorage.setItem(GRAMMAR_EXERCISE_PROGRESS_KEY, JSON.stringify(merged));
    }

    const cleared = parse(localStorage.getItem(TRAINER_CLEARED_KEY));
    if (cleared && typeof cleared === 'object' && LEGACY_GRAMMAR_EXERCISE_PROGRESS_KEY in cleared) {
      const { [LEGACY_GRAMMAR_EXERCISE_PROGRESS_KEY]: legacyClearedAt, ...rest } = cleared as Record<string, number>;
      localStorage.setItem(TRAINER_CLEARED_KEY, JSON.stringify({
        ...rest,
        [GRAMMAR_EXERCISE_PROGRESS_KEY]: Math.max(legacyClearedAt || 0, rest[GRAMMAR_EXERCISE_PROGRESS_KEY] || 0),
      }));
    }

    localStorage.removeItem(LEGACY_GRAMMAR_EXERCISE_PROGRESS_KEY);
  } catch {
    // Browser storage can be unavailable in private mode.
  }
};

// Dispatched by the sync layer after it writes merged data into localStorage, so
// mounted trainers refresh instead of overwriting the freshly pulled results.
export const APP_DATA_SYNCED_EVENT = 'appdata:synced';

export const isTrainerStorageKey = (key: string) => (
  key.startsWith(TRAINER_PROGRESS_PREFIX)
  || key.startsWith(TRAINER_FAVORITES_PREFIX)
  || key === TRAINER_CLEARED_KEY
);

const parse = (raw: string | null): unknown => {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

// Collect every `<prefix>*` entry currently in localStorage, keyed by storage key.
export const readTrainerStore = <T,>(prefix: string, coerce: (value: unknown) => T | null): Record<string, T> => {
  const store: Record<string, T> = {};

  try {
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (!key || !key.startsWith(prefix)) continue;
      const value = coerce(parse(localStorage.getItem(key)));
      if (value !== null) store[key] = value;
    }
  } catch {
    // Browser storage can be unavailable in private mode.
  }

  return store;
};

export const notifyAppDataSynced = () => {
  try {
    window.dispatchEvent(new Event(APP_DATA_SYNCED_EVENT));
  } catch {
    // No window (or no CustomEvent support) — nothing to notify.
  }
};

migrateLegacyGrammarProgress();
