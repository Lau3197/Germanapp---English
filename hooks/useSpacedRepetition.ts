import { useState, useEffect, useCallback } from 'react';

// Spaced Repetition System based on Leitner system
// Words are in "boxes" (1-5), the higher the box, the longer the interval

export interface WordProgress {
  wordId: string;           // Unique identifier (theme-german)
  german: string;           // German word for reference
  english: string;          // English translation
  article?: string;         // Article for nouns (der/die/das)
  theme: string;            // Origin theme
  box: number;              // Leitner Box (1-5)
  nextReview: number;       // Timestamp of next review
  lastReview: number;       // Timestamp of last review
  correctCount: number;     // Number of correct answers
  incorrectCount: number;   // Number of incorrect answers
  streak: number;           // Current streak of correct answers
  isCustom?: boolean;       // If word comes from custom list
  customListId?: string;    // ID of custom list
}

export interface CustomList {
  id: string;
  name: string;
  createdAt: number;
  words: { german: string; english: string }[];
}

export interface SpacedRepetitionStats {
  totalWords: number;
  wordsToReview: number;
  masteredWords: number;    // Box 5
  learningWords: number;    // Boxes 2-4
  newWords: number;         // Box 1
  averageBox: number;
  todayReviewed: number;
}

// Intervals in milliseconds for each box
const BOX_INTERVALS: Record<number, number> = {
  1: 0,                          // Immediate (new or missed)
  2: 1 * 24 * 60 * 60 * 1000,   // 1 day
  3: 3 * 24 * 60 * 60 * 1000,   // 3 days
  4: 7 * 24 * 60 * 60 * 1000,   // 1 week
  5: 14 * 24 * 60 * 60 * 1000,  // 2 weeks
};

const STORAGE_KEY = 'spacedRepetition_en'; // Changed key to avoid conflict/corruption with French data
const TODAY_KEY = 'spacedRepetitionToday_en';
const CUSTOM_LISTS_KEY = 'spacedRepetitionCustomLists_en';

export function useSpacedRepetition() {
  const [progress, setProgress] = useState<Map<string, WordProgress>>(new Map());
  const [todayReviewed, setTodayReviewed] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customLists, setCustomLists] = useState<CustomList[]>([]);

  // Load data on startup
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const map = new Map<string, WordProgress>(Object.entries(parsed));
        setProgress(map);
      } catch (e) {
        console.error('Error loading spaced repetition data:', e);
      }
    }

    // Load today's counter
    const todayData = localStorage.getItem(TODAY_KEY);
    if (todayData) {
      const { date, count } = JSON.parse(todayData);
      const today = new Date().toISOString().split('T')[0];
      if (date === today) {
        setTodayReviewed(count);
      }
    }

    // Load custom lists
    const savedLists = localStorage.getItem(CUSTOM_LISTS_KEY);
    if (savedLists) {
      try {
        setCustomLists(JSON.parse(savedLists));
      } catch (e) {
        console.error('Error loading custom lists:', e);
      }
    }

    setIsLoaded(true);
  }, []);

  // Save data
  useEffect(() => {
    if (!isLoaded) return;
    const obj = Object.fromEntries(progress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }, [progress, isLoaded]);

  // Save today's counter
  useEffect(() => {
    if (!isLoaded) return;
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(TODAY_KEY, JSON.stringify({ date: today, count: todayReviewed }));
  }, [todayReviewed, isLoaded]);

  // Save custom lists
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(CUSTOM_LISTS_KEY, JSON.stringify(customLists));
  }, [customLists, isLoaded]);

  // Generate unique ID for a word
  const getWordId = useCallback((theme: string, german: string): string => {
    return `${theme}-${german}`.toLowerCase().replace(/\s+/g, '-');
  }, []);

  // Add a word to revision system
  const addWord = useCallback((theme: string, german: string, english: string) => {
    const wordId = getWordId(theme, german);

    setProgress(prev => {
      if (prev.has(wordId)) return prev; // Already added

      const newMap = new Map(prev);
      newMap.set(wordId, {
        wordId,
        german,
        english,
        theme,
        box: 1,
        nextReview: Date.now(),
        lastReview: 0,
        correctCount: 0,
        incorrectCount: 0,
        streak: 0,
      });
      return newMap;
    });
  }, [getWordId]);

  // Add multiple words (also repairs existing words missing 'english' or 'article')
  const addWords = useCallback((words: { theme: string; german: string; english: string; article?: string }[]) => {
    setProgress(prev => {
      const newMap = new Map<string, WordProgress>(prev);

      words.forEach(({ theme, german, english, article }) => {
        const wordId = getWordId(theme, german);
        const existing = newMap.get(wordId);

        if (!existing) {
          // New word - add it
          newMap.set(wordId, {
            wordId,
            german,
            english,
            article: article || undefined,
            theme,
            box: 1,
            nextReview: Date.now(),
            lastReview: 0,
            correctCount: 0,
            incorrectCount: 0,
            streak: 0,
          });
        } else if (!existing.english || !existing.article) {
          // Existing word missing english or article - repair it
          newMap.set(wordId, {
            ...existing,
            english: english || existing.english,
            article: article || existing.article,
          });
        }
      });

      return newMap;
    });
  }, [getWordId]);

  // Record an answer (correct or incorrect)
  const recordAnswer = useCallback((wordId: string, isCorrect: boolean) => {
    const now = Date.now();

    setProgress(prev => {
      const word = prev.get(wordId);
      if (!word) return prev;

      const newMap = new Map(prev);
      let newBox = word.box;
      let newStreak = word.streak;

      if (isCorrect) {
        // Correct answer: move up one box (max 5)
        newBox = Math.min(word.box + 1, 5);
        newStreak = word.streak + 1;
      } else {
        // Incorrect answer: reset to box 1
        newBox = 1;
        newStreak = 0;
      }

      const nextReview = now + BOX_INTERVALS[newBox];

      newMap.set(wordId, {
        ...word,
        box: newBox,
        nextReview,
        lastReview: now,
        correctCount: word.correctCount + (isCorrect ? 1 : 0),
        incorrectCount: word.incorrectCount + (isCorrect ? 0 : 1),
        streak: newStreak,
      });

      return newMap;
    });

    setTodayReviewed(prev => prev + 1);
  }, []);

  // Get words to review now
  const getWordsToReview = useCallback((limit?: number): WordProgress[] => {
    const now = Date.now();
    const toReview = Array.from(progress.values())
      .filter(word => word.nextReview <= now)
      .sort((a, b) => {
        // Priority: low box first, then review date
        if (a.box !== b.box) return a.box - b.box;
        return a.nextReview - b.nextReview;
      });

    return limit ? toReview.slice(0, limit) : toReview;
  }, [progress]);

  // Get words by theme
  const getWordsByTheme = useCallback((theme: string): WordProgress[] => {
    return Array.from(progress.values())
      .filter(word => word.theme === theme);
  }, [progress]);

  // Get stats
  const getStats = useCallback((): SpacedRepetitionStats => {
    const words = Array.from(progress.values());
    const now = Date.now();

    const masteredWords = words.filter(w => w.box === 5).length;
    const learningWords = words.filter(w => w.box >= 2 && w.box <= 4).length;
    const newWords = words.filter(w => w.box === 1).length;
    const wordsToReview = words.filter(w => w.nextReview <= now).length;

    const totalBoxes = words.reduce((sum, w) => sum + w.box, 0);
    const averageBox = words.length > 0 ? totalBoxes / words.length : 0;

    return {
      totalWords: words.length,
      wordsToReview,
      masteredWords,
      learningWords,
      newWords,
      averageBox,
      todayReviewed,
    };
  }, [progress, todayReviewed]);

  // Get progress of a specific word
  const getWordProgress = useCallback((theme: string, german: string): WordProgress | undefined => {
    const wordId = getWordId(theme, german);
    return progress.get(wordId);
  }, [progress, getWordId]);

  // Check if a word is in the system
  const hasWord = useCallback((theme: string, german: string): boolean => {
    const wordId = getWordId(theme, german);
    return progress.has(wordId);
  }, [progress, getWordId]);

  // Reset everything
  const reset = useCallback(() => {
    setProgress(new Map());
    setTodayReviewed(0);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TODAY_KEY);
  }, []);

  // ===== CUSTOM LISTS MANAGEMENT =====

  // Create a new custom list
  const createCustomList = useCallback((name: string, words: { german: string; english: string }[]): CustomList => {
    const newList: CustomList = {
      id: `custom-${Date.now()}`,
      name,
      createdAt: Date.now(),
      words,
    };

    setCustomLists(prev => [...prev, newList]);

    // Add words to revision system
    words.forEach(word => {
      const wordId = `${newList.id}-${word.german}`.toLowerCase().replace(/\s+/g, '-');
      setProgress(prev => {
        if (prev.has(wordId)) return prev;
        const newMap = new Map(prev);
        newMap.set(wordId, {
          wordId,
          german: word.german,
          english: word.english,
          theme: newList.id,
          box: 1,
          nextReview: Date.now(),
          lastReview: 0,
          correctCount: 0,
          incorrectCount: 0,
          streak: 0,
          isCustom: true,
          customListId: newList.id,
        });
        return newMap;
      });
    });

    return newList;
  }, []);

  // Delete a custom list
  const deleteCustomList = useCallback((listId: string) => {
    setCustomLists(prev => prev.filter(l => l.id !== listId));

    // Delete associated words
    setProgress(prev => {
      const newMap = new Map(prev);
      Array.from(prev.entries()).forEach(([key, word]) => {
        if (word.customListId === listId) {
          newMap.delete(key);
        }
      });
      return newMap;
    });
  }, []);

  // Import list from JSON
  const importListFromJSON = useCallback((jsonString: string): CustomList | null => {
    try {
      const data = JSON.parse(jsonString);

      // Validation
      if (!data.name || !Array.isArray(data.words)) {
        throw new Error('Invalid format');
      }

      const words = data.words.map((w: any) => ({
        german: w.german || w.de || w.allemand || '',
        english: w.english || w.en || w.anglais || '',
      })).filter((w: any) => w.german && w.english);

      if (words.length === 0) {
        throw new Error('No valid words found');
      }

      return createCustomList(data.name, words);
    } catch (e) {
      console.error('JSON import error:', e);
      return null;
    }
  }, [createCustomList]);

  // Import list from CSV
  const importListFromCSV = useCallback((csvString: string, listName: string): CustomList | null => {
    try {
      const lines = csvString.trim().split('\n');
      const words: { german: string; english: string }[] = [];

      // Detect if first line is header
      const firstLine = lines[0].toLowerCase();
      const hasHeader = firstLine.includes('german') || firstLine.includes('english') ||
        firstLine.includes('allemand') || firstLine.includes('anglais') ||
        firstLine.includes('de') || firstLine.includes('en');

      const startIndex = hasHeader ? 1 : 0;

      for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Support ; or , or tab as separator
        const separator = line.includes(';') ? ';' : line.includes('\t') ? '\t' : ',';
        const parts = line.split(separator).map(p => p.trim().replace(/^["']|["']$/g, ''));

        if (parts.length >= 2 && parts[0] && parts[1]) {
          words.push({
            german: parts[0],
            english: parts[1],
          });
        }
      }

      if (words.length === 0) {
        throw new Error('No valid words found');
      }

      return createCustomList(listName, words);
    } catch (e) {
      console.error('CSV import error:', e);
      return null;
    }
  }, [createCustomList]);

  // Export list to JSON
  const exportListToJSON = useCallback((listId: string): string | null => {
    const list = customLists.find(l => l.id === listId);
    if (!list) return null;

    return JSON.stringify({
      name: list.name,
      words: list.words,
      exportedAt: new Date().toISOString(),
    }, null, 2);
  }, [customLists]);

  // Export list to CSV
  const exportListToCSV = useCallback((listId: string): string | null => {
    const list = customLists.find(l => l.id === listId);
    if (!list) return null;

    const header = 'German;English\n';
    const rows = list.words.map(w => `${w.german};${w.english}`).join('\n');
    return header + rows;
  }, [customLists]);

  // Get available themes (app + custom)
  const getAvailableThemes = useCallback((): { id: string; name: string; isCustom: boolean; wordCount: number; toReviewCount: number }[] => {
    const now = Date.now();
    const themes: Map<string, { name: string; isCustom: boolean; wordCount: number; toReviewCount: number }> = new Map();

    // Browse all words to count by theme
    Array.from(progress.values()).forEach(word => {
      const existing = themes.get(word.theme);
      const toReview = word.nextReview <= now ? 1 : 0;

      if (existing) {
        existing.wordCount++;
        existing.toReviewCount += toReview;
      } else {
        const customList = customLists.find(l => l.id === word.theme);
        themes.set(word.theme, {
          name: customList?.name || word.theme,
          isCustom: !!word.isCustom,
          wordCount: 1,
          toReviewCount: toReview,
        });
      }
    });

    return Array.from(themes.entries()).map(([id, data]) => ({
      id,
      ...data,
    }));
  }, [progress, customLists]);

  // Get words to review by theme(s)
  const getWordsToReviewByThemes = useCallback((themeIds: string[], limit?: number): WordProgress[] => {
    const now = Date.now();
    const toReview = Array.from(progress.values())
      .filter(word => themeIds.includes(word.theme) && word.nextReview <= now)
      .sort((a, b) => {
        if (a.box !== b.box) return a.box - b.box;
        return a.nextReview - b.nextReview;
      });

    return limit ? toReview.slice(0, limit) : toReview;
  }, [progress]);

  return {
    progress,
    isLoaded,
    addWord,
    addWords,
    recordAnswer,
    getWordsToReview,
    getWordsByTheme,
    getStats,
    getWordProgress,
    hasWord,
    reset,
    // Custom lists
    customLists,
    createCustomList,
    deleteCustomList,
    importListFromJSON,
    importListFromCSV,
    exportListToJSON,
    exportListToCSV,
    getAvailableThemes,
    getWordsToReviewByThemes,
  };
}
