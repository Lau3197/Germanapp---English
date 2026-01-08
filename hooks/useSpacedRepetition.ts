import { useState, useEffect, useCallback } from 'react';

// Système de révision espacée basé sur l'algorithme de Leitner
// Les mots sont dans des "boîtes" (1-5), plus la boîte est haute, plus l'intervalle est long

export interface WordProgress {
  wordId: string;           // Identifiant unique du mot (theme-german)
  german: string;           // Mot allemand pour référence
  french: string;           // Traduction française
  theme: string;            // Thème d'origine
  box: number;              // Boîte Leitner (1-5)
  nextReview: number;       // Timestamp de la prochaine révision
  lastReview: number;       // Timestamp de la dernière révision
  correctCount: number;     // Nombre de bonnes réponses
  incorrectCount: number;   // Nombre de mauvaises réponses
  streak: number;           // Série actuelle de bonnes réponses
}

export interface SpacedRepetitionStats {
  totalWords: number;
  wordsToReview: number;
  masteredWords: number;    // Boîte 5
  learningWords: number;    // Boîtes 2-4
  newWords: number;         // Boîte 1
  averageBox: number;
  todayReviewed: number;
}

// Intervalles en millisecondes pour chaque boîte
const BOX_INTERVALS: Record<number, number> = {
  1: 0,                          // Immédiat (nouveau ou raté)
  2: 1 * 24 * 60 * 60 * 1000,   // 1 jour
  3: 3 * 24 * 60 * 60 * 1000,   // 3 jours
  4: 7 * 24 * 60 * 60 * 1000,   // 1 semaine
  5: 14 * 24 * 60 * 60 * 1000,  // 2 semaines
};

const STORAGE_KEY = 'spacedRepetition';
const TODAY_KEY = 'spacedRepetitionToday';

export function useSpacedRepetition() {
  const [progress, setProgress] = useState<Map<string, WordProgress>>(new Map());
  const [todayReviewed, setTodayReviewed] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Charger les données au démarrage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const map = new Map<string, WordProgress>(Object.entries(parsed));
        setProgress(map);
      } catch (e) {
        console.error('Erreur chargement révision espacée:', e);
      }
    }

    // Charger le compteur du jour
    const todayData = localStorage.getItem(TODAY_KEY);
    if (todayData) {
      const { date, count } = JSON.parse(todayData);
      const today = new Date().toISOString().split('T')[0];
      if (date === today) {
        setTodayReviewed(count);
      }
    }

    setIsLoaded(true);
  }, []);

  // Sauvegarder les données
  useEffect(() => {
    if (!isLoaded) return;
    const obj = Object.fromEntries(progress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }, [progress, isLoaded]);

  // Sauvegarder le compteur du jour
  useEffect(() => {
    if (!isLoaded) return;
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(TODAY_KEY, JSON.stringify({ date: today, count: todayReviewed }));
  }, [todayReviewed, isLoaded]);

  // Générer un ID unique pour un mot
  const getWordId = useCallback((theme: string, german: string): string => {
    return `${theme}-${german}`.toLowerCase().replace(/\s+/g, '-');
  }, []);

  // Ajouter un mot au système de révision
  const addWord = useCallback((theme: string, german: string, french: string) => {
    const wordId = getWordId(theme, german);
    
    setProgress(prev => {
      if (prev.has(wordId)) return prev; // Déjà ajouté
      
      const newMap = new Map(prev);
      newMap.set(wordId, {
        wordId,
        german,
        french,
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

  // Ajouter plusieurs mots
  const addWords = useCallback((words: { theme: string; german: string; french: string }[]) => {
    setProgress(prev => {
      const newMap = new Map(prev);
      
      words.forEach(({ theme, german, french }) => {
        const wordId = getWordId(theme, german);
        if (!newMap.has(wordId)) {
          newMap.set(wordId, {
            wordId,
            german,
            french,
            theme,
            box: 1,
            nextReview: Date.now(),
            lastReview: 0,
            correctCount: 0,
            incorrectCount: 0,
            streak: 0,
          });
        }
      });
      
      return newMap;
    });
  }, [getWordId]);

  // Enregistrer une réponse (correcte ou incorrecte)
  const recordAnswer = useCallback((wordId: string, isCorrect: boolean) => {
    const now = Date.now();
    
    setProgress(prev => {
      const word = prev.get(wordId);
      if (!word) return prev;

      const newMap = new Map(prev);
      let newBox = word.box;
      let newStreak = word.streak;

      if (isCorrect) {
        // Bonne réponse : monter d'une boîte (max 5)
        newBox = Math.min(word.box + 1, 5);
        newStreak = word.streak + 1;
      } else {
        // Mauvaise réponse : redescendre à la boîte 1
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

  // Obtenir les mots à réviser maintenant
  const getWordsToReview = useCallback((limit?: number): WordProgress[] => {
    const now = Date.now();
    const toReview = Array.from(progress.values())
      .filter(word => word.nextReview <= now)
      .sort((a, b) => {
        // Priorité : boîte basse d'abord, puis date de révision
        if (a.box !== b.box) return a.box - b.box;
        return a.nextReview - b.nextReview;
      });
    
    return limit ? toReview.slice(0, limit) : toReview;
  }, [progress]);

  // Obtenir les mots par thème
  const getWordsByTheme = useCallback((theme: string): WordProgress[] => {
    return Array.from(progress.values())
      .filter(word => word.theme === theme);
  }, [progress]);

  // Obtenir les statistiques
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

  // Obtenir le progrès d'un mot spécifique
  const getWordProgress = useCallback((theme: string, german: string): WordProgress | undefined => {
    const wordId = getWordId(theme, german);
    return progress.get(wordId);
  }, [progress, getWordId]);

  // Vérifier si un mot est dans le système
  const hasWord = useCallback((theme: string, german: string): boolean => {
    const wordId = getWordId(theme, german);
    return progress.has(wordId);
  }, [progress, getWordId]);

  // Réinitialiser tout
  const reset = useCallback(() => {
    setProgress(new Map());
    setTodayReviewed(0);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TODAY_KEY);
  }, []);

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
  };
}

