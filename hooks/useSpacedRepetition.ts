import { useState, useEffect, useCallback } from 'react';

// Système de Leitner - 5 boîtes avec intervalles croissants
export interface WordProgress {
  wordId: string;        // Identifiant unique : "theme-german"
  german: string;
  french: string;
  article?: string;
  box: number;           // Boîte 1-5
  nextReviewDate: string; // ISO date
  lastReviewDate: string;
  correctCount: number;
  incorrectCount: number;
  theme: string;
}

export interface SpacedRepetitionStats {
  totalWords: number;
  wordsToReview: number;
  masteredWords: number;  // Boîte 5
  learningWords: number;  // Boîtes 1-4
  accuracy: number;       // Pourcentage de bonnes réponses
}

// Intervalles en jours pour chaque boîte
const BOX_INTERVALS: Record<number, number> = {
  1: 1,   // Tous les jours
  2: 2,   // Tous les 2 jours
  3: 4,   // Tous les 4 jours
  4: 7,   // Toutes les semaines
  5: 14,  // Toutes les 2 semaines
};

const STORAGE_KEY = 'spacedRepetitionData';

export function useSpacedRepetition() {
  const [wordProgress, setWordProgress] = useState<Record<string, WordProgress>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Charger les données au démarrage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setWordProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Erreur de chargement des données de révision:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Sauvegarder à chaque modification
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wordProgress));
    }
  }, [wordProgress, isLoaded]);

  // Ajouter un mot au système de révision
  const addWord = useCallback((
    german: string,
    french: string,
    theme: string,
    article?: string
  ) => {
    const wordId = `${theme}-${german}`.toLowerCase().replace(/\s+/g, '-');
    
    setWordProgress(prev => {
      // Ne pas écraser si déjà présent
      if (prev[wordId]) return prev;
      
      const today = new Date().toISOString().split('T')[0];
      return {
        ...prev,
        [wordId]: {
          wordId,
          german,
          french,
          article,
          box: 1,
          nextReviewDate: today, // À réviser immédiatement
          lastReviewDate: today,
          correctCount: 0,
          incorrectCount: 0,
          theme,
        }
      };
    });
  }, []);

  // Ajouter plusieurs mots d'un coup
  const addWords = useCallback((words: { german: string; french: string; theme: string; article?: string }[]) => {
    const today = new Date().toISOString().split('T')[0];
    
    setWordProgress(prev => {
      const newProgress = { ...prev };
      
      words.forEach(({ german, french, theme, article }) => {
        const wordId = `${theme}-${german}`.toLowerCase().replace(/\s+/g, '-');
        
        // Ne pas écraser si déjà présent
        if (!newProgress[wordId]) {
          newProgress[wordId] = {
            wordId,
            german,
            french,
            article,
            box: 1,
            nextReviewDate: today,
            lastReviewDate: today,
            correctCount: 0,
            incorrectCount: 0,
            theme,
          };
        }
      });
      
      return newProgress;
    });
  }, []);

  // Enregistrer une réponse (correcte ou incorrecte)
  const recordAnswer = useCallback((wordId: string, isCorrect: boolean) => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    setWordProgress(prev => {
      const word = prev[wordId];
      if (!word) return prev;
      
      let newBox = word.box;
      
      if (isCorrect) {
        // Monte d'une boîte (max 5)
        newBox = Math.min(5, word.box + 1);
      } else {
        // Retourne à la boîte 1
        newBox = 1;
      }
      
      // Calcule la prochaine date de révision
      const nextDate = new Date(today);
      nextDate.setDate(nextDate.getDate() + BOX_INTERVALS[newBox]);
      
      return {
        ...prev,
        [wordId]: {
          ...word,
          box: newBox,
          nextReviewDate: nextDate.toISOString().split('T')[0],
          lastReviewDate: todayStr,
          correctCount: word.correctCount + (isCorrect ? 1 : 0),
          incorrectCount: word.incorrectCount + (isCorrect ? 0 : 1),
        }
      };
    });
  }, []);

  // Obtenir les mots à réviser aujourd'hui
  const getWordsToReview = useCallback((): WordProgress[] => {
    const today = new Date().toISOString().split('T')[0];
    
    return Object.values(wordProgress)
      .filter(word => word.nextReviewDate <= today)
      .sort((a, b) => {
        // Priorité : boîtes basses d'abord, puis date
        if (a.box !== b.box) return a.box - b.box;
        return a.nextReviewDate.localeCompare(b.nextReviewDate);
      });
  }, [wordProgress]);

  // Obtenir les mots par thème
  const getWordsByTheme = useCallback((theme: string): WordProgress[] => {
    return Object.values(wordProgress)
      .filter(word => word.theme === theme);
  }, [wordProgress]);

  // Obtenir les statistiques
  const getStats = useCallback((): SpacedRepetitionStats => {
    const words = Object.values(wordProgress);
    const today = new Date().toISOString().split('T')[0];
    
    const totalCorrect = words.reduce((sum, w) => sum + w.correctCount, 0);
    const totalAnswers = words.reduce((sum, w) => sum + w.correctCount + w.incorrectCount, 0);
    
    return {
      totalWords: words.length,
      wordsToReview: words.filter(w => w.nextReviewDate <= today).length,
      masteredWords: words.filter(w => w.box === 5).length,
      learningWords: words.filter(w => w.box < 5).length,
      accuracy: totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0,
    };
  }, [wordProgress]);

  // Obtenir les statistiques par boîte
  const getBoxStats = useCallback((): Record<number, number> => {
    const stats: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    
    Object.values(wordProgress).forEach(word => {
      stats[word.box] = (stats[word.box] || 0) + 1;
    });
    
    return stats;
  }, [wordProgress]);

  // Supprimer un mot du système
  const removeWord = useCallback((wordId: string) => {
    setWordProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[wordId];
      return newProgress;
    });
  }, []);

  // Réinitialiser toutes les données
  const resetAll = useCallback(() => {
    setWordProgress({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Vérifier si un mot est dans le système
  const isWordInSystem = useCallback((german: string, theme: string): boolean => {
    const wordId = `${theme}-${german}`.toLowerCase().replace(/\s+/g, '-');
    return !!wordProgress[wordId];
  }, [wordProgress]);

  // Obtenir la progression d'un mot spécifique
  const getWordProgress = useCallback((german: string, theme: string): WordProgress | null => {
    const wordId = `${theme}-${german}`.toLowerCase().replace(/\s+/g, '-');
    return wordProgress[wordId] || null;
  }, [wordProgress]);

  return {
    wordProgress,
    isLoaded,
    addWord,
    addWords,
    recordAnswer,
    getWordsToReview,
    getWordsByTheme,
    getStats,
    getBoxStats,
    removeWord,
    resetAll,
    isWordInSystem,
    getWordProgress,
  };
}

