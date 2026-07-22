import { initializeApp, getApps } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
  type User as FirebaseUser,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAUjnLnLvWozmmNybnxRIH4lv6uF7FJooU',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'german-app---english.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'german-app---english',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'german-app---english.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '849693122757',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:849693122757:web:9af6fdc92307a4270b50ac',
};

const registrationAccessCode = (
  import.meta.env.VITE_REGISTRATION_ACCESS_CODE || ''
).trim();

export const firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export interface AppUser {
  id: string;
  email: string;
  name?: string;
}

interface SyncData {
  favorites: any[];
  annotations: any[];
  stats: any;
  spacedRepetition: Record<string, any>;
  spacedRepetitionToday: any | null;
  spacedRepetitionCustomLists: any[];
  schemaVersion: number;
}

const appDataDoc = (uid: string) => doc(firestore, 'users', uid, 'appData', 'main');

const SYNC_SCHEMA_VERSION = 2;
const STORAGE_KEYS = {
  favorites: 'grammarFavorites',
  annotations: 'grammarAnnotations',
  stats: 'grammarStats',
  spacedRepetition: 'spacedRepetition_en',
  spacedRepetitionToday: 'spacedRepetitionToday_en',
  spacedRepetitionCustomLists: 'spacedRepetitionCustomLists_en',
} as const;

const SYNCED_STORAGE_KEYS = new Set<string>(Object.values(STORAGE_KEYS));

export const shouldSyncLocalStorageKey = (key: string | null) => (
  !!key && SYNCED_STORAGE_KEYS.has(key)
);

const safeParse = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch {
    return fallback;
  }
};

const safeWrite = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Browser storage can be unavailable in private mode or when quota is exceeded.
  }
};

const asArray = (value: unknown) => Array.isArray(value) ? value : [];

const asRecord = (value: unknown): Record<string, any> => (
  value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, any> : {}
);

const toNumber = (value: unknown, fallback = 0) => (
  typeof value === 'number' && Number.isFinite(value) ? value : fallback
);

const readLocalAppData = (): SyncData => ({
  favorites: asArray(safeParse(STORAGE_KEYS.favorites, [])),
  annotations: asArray(safeParse(STORAGE_KEYS.annotations, [])),
  stats: asRecord(safeParse(STORAGE_KEYS.stats, {})),
  spacedRepetition: asRecord(safeParse(STORAGE_KEYS.spacedRepetition, {})),
  spacedRepetitionToday: safeParse(STORAGE_KEYS.spacedRepetitionToday, null),
  spacedRepetitionCustomLists: asArray(safeParse(STORAGE_KEYS.spacedRepetitionCustomLists, [])),
  schemaVersion: SYNC_SCHEMA_VERSION,
});

const writeLocalAppData = (data: Partial<SyncData>) => {
  if (Array.isArray(data.favorites)) {
    safeWrite(STORAGE_KEYS.favorites, data.favorites);
  }
  if (Array.isArray(data.annotations)) {
    safeWrite(STORAGE_KEYS.annotations, data.annotations);
  }
  if (data.stats && typeof data.stats === 'object') {
    safeWrite(STORAGE_KEYS.stats, data.stats);
  }
  if (data.spacedRepetition && typeof data.spacedRepetition === 'object') {
    safeWrite(STORAGE_KEYS.spacedRepetition, data.spacedRepetition);
  }
  if (data.spacedRepetitionToday && typeof data.spacedRepetitionToday === 'object') {
    safeWrite(STORAGE_KEYS.spacedRepetitionToday, data.spacedRepetitionToday);
  }
  if (Array.isArray(data.spacedRepetitionCustomLists)) {
    safeWrite(STORAGE_KEYS.spacedRepetitionCustomLists, data.spacedRepetitionCustomLists);
  }
};

const mergeByKey = (remoteItems: any[], localItems: any[], getKey: (item: any) => string) => {
  const merged = new Map<string, any>();
  [...remoteItems, ...localItems].forEach((item, index) => {
    if (!item || typeof item !== 'object') return;
    merged.set(getKey(item) || `item-${index}`, item);
  });
  return Array.from(merged.values());
};

const mergeDailyHistory = (remoteHistory: any[], localHistory: any[]) => {
  const history = new Map<string, any>();

  [...remoteHistory, ...localHistory].forEach((day) => {
    if (!day || typeof day !== 'object' || typeof day.date !== 'string') return;
    const existing = history.get(day.date);

    history.set(day.date, existing ? {
      ...existing,
      ...day,
      timeSpent: Math.max(toNumber(existing.timeSpent), toNumber(day.timeSpent)),
      lessonsCompleted: Array.from(new Set([
        ...asArray(existing.lessonsCompleted),
        ...asArray(day.lessonsCompleted),
      ])),
      quizScore: Math.max(toNumber(existing.quizScore), toNumber(day.quizScore)),
    } : {
      ...day,
      timeSpent: Math.max(0, toNumber(day.timeSpent)),
      lessonsCompleted: asArray(day.lessonsCompleted),
    });
  });

  return Array.from(history.values()).sort((a, b) => a.date.localeCompare(b.date));
};

const getDailyHistoryTotal = (dailyHistory: any[]) => (
  dailyHistory.reduce((total, day) => total + Math.max(0, toNumber(day.timeSpent)), 0)
);

const laterDate = (remoteDate: unknown, localDate: unknown) => {
  const remote = typeof remoteDate === 'string' ? remoteDate : '';
  const local = typeof localDate === 'string' ? localDate : '';
  return local >= remote ? local : remote;
};

const mergeStats = (remoteStats: any, localStats: any) => {
  const remote = asRecord(remoteStats);
  const local = asRecord(localStats);
  const dailyHistory = mergeDailyHistory(asArray(remote.dailyHistory), asArray(local.dailyHistory));
  const completedLessons = Array.from(new Set([
    ...asArray(remote.completedLessons),
    ...asArray(local.completedLessons),
  ]));

  return {
    ...remote,
    ...local,
    completedLessons,
    totalTimeSpent: Math.max(
      toNumber(remote.totalTimeSpent),
      toNumber(local.totalTimeSpent),
      getDailyHistoryTotal(dailyHistory)
    ),
    dailyGoal: toNumber(local.dailyGoal, toNumber(remote.dailyGoal, 15)) || 15,
    currentStreak: Math.max(toNumber(remote.currentStreak), toNumber(local.currentStreak)),
    longestStreak: Math.max(toNumber(remote.longestStreak), toNumber(local.longestStreak)),
    lastActivityDate: laterDate(remote.lastActivityDate, local.lastActivityDate),
    dailyHistory,
    quizResults: mergeByKey(
      asArray(remote.quizResults),
      asArray(local.quizResults),
      (result) => `${result.topicId || ''}:${result.date || ''}:${result.score ?? ''}`
    ),
  };
};

const mergeSpacedRepetition = (
  remoteProgress: Record<string, any>,
  localProgress: Record<string, any>
) => {
  const merged = new Map<string, any>();

  [...Object.entries(remoteProgress), ...Object.entries(localProgress)].forEach(([wordId, incoming]) => {
    if (!incoming || typeof incoming !== 'object') return;
    const existing = merged.get(wordId);

    if (!existing) {
      merged.set(wordId, incoming);
      return;
    }

    const incomingLastReview = toNumber(incoming.lastReview);
    const existingLastReview = toNumber(existing.lastReview);
    const latest = incomingLastReview >= existingLastReview ? incoming : existing;
    const previous = latest === incoming ? existing : incoming;

    merged.set(wordId, {
      ...previous,
      ...latest,
      wordId: latest.wordId || previous.wordId || wordId,
      correctCount: Math.max(toNumber(previous.correctCount), toNumber(latest.correctCount)),
      incorrectCount: Math.max(toNumber(previous.incorrectCount), toNumber(latest.incorrectCount)),
      streak: Math.max(toNumber(previous.streak), toNumber(latest.streak)),
      lastReview: Math.max(toNumber(previous.lastReview), toNumber(latest.lastReview)),
      english: latest.english || previous.english,
      article: latest.article || previous.article,
      isCustom: Boolean(latest.isCustom || previous.isCustom),
      customListId: latest.customListId || previous.customListId,
    });
  });

  return Object.fromEntries(merged);
};

const mergeTodayCounter = (remoteToday: any, localToday: any) => {
  const remote = asRecord(remoteToday);
  const local = asRecord(localToday);
  const remoteDate = typeof remote.date === 'string' ? remote.date : '';
  const localDate = typeof local.date === 'string' ? local.date : '';

  if (!remoteDate && !localDate) return null;
  if (remoteDate === localDate) {
    return {
      date: localDate || remoteDate,
      count: Math.max(toNumber(remote.count), toNumber(local.count)),
    };
  }

  return localDate >= remoteDate
    ? { date: localDate, count: toNumber(local.count) }
    : { date: remoteDate, count: toNumber(remote.count) };
};

const mergeCustomLists = (remoteLists: any[], localLists: any[]) => {
  const lists = new Map<string, any>();

  [...remoteLists, ...localLists].forEach((list, index) => {
    if (!list || typeof list !== 'object') return;
    const id = typeof list.id === 'string' ? list.id : `list-${index}`;
    const existing = lists.get(id);

    if (!existing) {
      lists.set(id, {
        ...list,
        words: asArray(list.words),
      });
      return;
    }

    lists.set(id, {
      ...existing,
      ...list,
      words: mergeByKey(
        asArray(existing.words),
        asArray(list.words),
        (word) => String(word.german || word.de || '').trim().toLowerCase()
      ),
    });
  });

  return Array.from(lists.values());
};

const mergeAppData = (remoteData: Partial<SyncData>, localData: SyncData): SyncData => {
  const remote = remoteData || {};

  return {
    favorites: mergeByKey(asArray(remote.favorites), localData.favorites, (favorite) => favorite.id),
    annotations: mergeByKey(asArray(remote.annotations), localData.annotations, (annotation) => annotation.topicId || annotation.id),
    stats: mergeStats(remote.stats, localData.stats),
    spacedRepetition: mergeSpacedRepetition(
      asRecord(remote.spacedRepetition),
      localData.spacedRepetition
    ),
    spacedRepetitionToday: mergeTodayCounter(remote.spacedRepetitionToday, localData.spacedRepetitionToday),
    spacedRepetitionCustomLists: mergeCustomLists(
      asArray(remote.spacedRepetitionCustomLists),
      localData.spacedRepetitionCustomLists
    ),
    schemaVersion: SYNC_SCHEMA_VERSION,
  };
};

const getLocalAppDataSignature = () => JSON.stringify(readLocalAppData());

export const toAppUser = (user: FirebaseUser): AppUser => ({
  id: user.uid,
  email: user.email || '',
  name: user.displayName || undefined,
});

const getFirebaseErrorMessage = (error: any): string => {
  switch (error?.code) {
    case 'auth/email-already-in-use':
      return 'This email is already in use.';
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Incorrect email or password.';
    case 'auth/requires-recent-login':
      return 'Please sign in again before changing this setting.';
    case 'auth/weak-password':
      return 'Password must be at least 6 characters long.';
    case 'auth/invalid-email':
      return 'Invalid email.';
    case 'auth/network-request-failed':
      return 'Unable to reach Firebase. Check your internet connection or browser/network blocking.';
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is not enabled in Firebase.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized in Firebase Authentication.';
    default:
      return error?.message || 'An error occurred.';
  }
};

export const firebaseAuthAPI = {
  register: async (email: string, password: string, accessCode: string, name?: string) => {
    if (!registrationAccessCode) {
      throw new Error('Registration access code is not configured.');
    }

    if (registrationAccessCode && accessCode !== registrationAccessCode) {
      throw new Error('Invalid access code.');
    }

    try {
      const credential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      if (name?.trim()) {
        await updateProfile(credential.user, { displayName: name.trim() });
        await credential.user.reload();
      }
      return toAppUser(firebaseAuth.currentUser || credential.user);
    } catch (error) {
      throw new Error(getFirebaseErrorMessage(error));
    }
  },

  login: async (email: string, password: string) => {
    try {
      const credential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      return toAppUser(credential.user);
    } catch (error) {
      throw new Error(getFirebaseErrorMessage(error));
    }
  },

  logout: () => signOut(firebaseAuth),

  updateProfile: async (data: { name?: string; email?: string }) => {
    const currentUser = firebaseAuth.currentUser;
    if (!currentUser) {
      throw new Error('Not signed in.');
    }

    try {
      if (data.name !== undefined) {
        await updateProfile(currentUser, { displayName: data.name.trim() || null });
      }
      if (data.email && data.email !== currentUser.email) {
        await updateEmail(currentUser, data.email);
      }
      await currentUser.reload();
      return toAppUser(firebaseAuth.currentUser || currentUser);
    } catch (error) {
      throw new Error(getFirebaseErrorMessage(error));
    }
  },

  updatePassword: async (currentPassword: string, newPassword: string) => {
    const currentUser = firebaseAuth.currentUser;
    if (!currentUser?.email) {
      throw new Error('Not signed in.');
    }

    try {
      const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, newPassword);
    } catch (error) {
      throw new Error(getFirebaseErrorMessage(error));
    }
  },

  deleteAccount: async () => {
    const currentUser = firebaseAuth.currentUser;
    if (!currentUser) {
      throw new Error('Not signed in.');
    }

    try {
      await deleteUser(currentUser);
    } catch (error) {
      throw new Error(getFirebaseErrorMessage(error));
    }
  },
};

export const firebaseSyncAPI = {
  getLocalAppDataSignature,

  syncFromCloud: async (uid: string) => {
    const snapshot = await getDoc(appDataDoc(uid));
    if (snapshot.exists()) {
      writeLocalAppData(snapshot.data() as Partial<SyncData>);
    }
  },

  syncToCloud: async (uid: string) => {
    await setDoc(appDataDoc(uid), {
      ...readLocalAppData(),
      updatedAt: serverTimestamp(),
    }, { merge: true });
  },

  fullSync: async (uid: string) => {
    const localData = readLocalAppData();
    const snapshot = await getDoc(appDataDoc(uid));
    const mergedData = mergeAppData(
      snapshot.exists() ? snapshot.data() as Partial<SyncData> : {},
      localData
    );

    writeLocalAppData(mergedData);
    await setDoc(appDataDoc(uid), {
      ...mergedData,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  },
};
