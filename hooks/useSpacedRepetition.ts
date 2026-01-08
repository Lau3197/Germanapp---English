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
  isCustom?: boolean;       // Si le mot vient d'une liste personnalisée
  customListId?: string;    // ID de la liste personnalisée
}

export interface CustomList {
  id: string;
  name: string;
  createdAt: number;
  words: { german: string; french: string }[];
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
const CUSTOM_LISTS_KEY = 'spacedRepetitionCustomLists';

export function useSpacedRepetition() {
  const [progress, setProgress] = useState<Map<string, WordProgress>>(new Map());
  const [todayReviewed, setTodayReviewed] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customLists, setCustomLists] = useState<CustomList[]>([]);

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

    // Charger les listes personnalisées
    const savedLists = localStorage.getItem(CUSTOM_LISTS_KEY);
    if (savedLists) {
      try {
        setCustomLists(JSON.parse(savedLists));
      } catch (e) {
        console.error('Erreur chargement listes personnalisées:', e);
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

  // Sauvegarder les listes personnalisées
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(CUSTOM_LISTS_KEY, JSON.stringify(customLists));
  }, [customLists, isLoaded]);

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

  // ===== GESTION DES LISTES PERSONNALISÉES =====

  // Créer une nouvelle liste personnalisée
  const createCustomList = useCallback((name: string, words: { german: string; french: string }[]): CustomList => {
    const newList: CustomList = {
      id: `custom-${Date.now()}`,
      name,
      createdAt: Date.now(),
      words,
    };
    
    setCustomLists(prev => [...prev, newList]);
    
    // Ajouter les mots au système de révision
    words.forEach(word => {
      const wordId = `${newList.id}-${word.german}`.toLowerCase().replace(/\s+/g, '-');
      setProgress(prev => {
        if (prev.has(wordId)) return prev;
        const newMap = new Map(prev);
        newMap.set(wordId, {
          wordId,
          german: word.german,
          french: word.french,
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

  // Supprimer une liste personnalisée
  const deleteCustomList = useCallback((listId: string) => {
    setCustomLists(prev => prev.filter(l => l.id !== listId));
    
    // Supprimer les mots associés
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

  // Importer une liste depuis JSON
  const importListFromJSON = useCallback((jsonString: string): CustomList | null => {
    try {
      const data = JSON.parse(jsonString);
      
      // Validation
      if (!data.name || !Array.isArray(data.words)) {
        throw new Error('Format invalide');
      }
      
      const words = data.words.map((w: any) => ({
        german: w.german || w.de || w.allemand || '',
        french: w.french || w.fr || w.francais || w.français || '',
      })).filter((w: any) => w.german && w.french);
      
      if (words.length === 0) {
        throw new Error('Aucun mot valide trouvé');
      }
      
      return createCustomList(data.name, words);
    } catch (e) {
      console.error('Erreur import JSON:', e);
      return null;
    }
  }, [createCustomList]);

  // Importer une liste depuis CSV
  const importListFromCSV = useCallback((csvString: string, listName: string): CustomList | null => {
    try {
      const lines = csvString.trim().split('\n');
      const words: { german: string; french: string }[] = [];
      
      // Détecter si la première ligne est un header
      const firstLine = lines[0].toLowerCase();
      const hasHeader = firstLine.includes('german') || firstLine.includes('french') || 
                        firstLine.includes('allemand') || firstLine.includes('français') ||
                        firstLine.includes('de') || firstLine.includes('fr');
      
      const startIndex = hasHeader ? 1 : 0;
      
      for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Supporter ; ou , ou tab comme séparateur
        const separator = line.includes(';') ? ';' : line.includes('\t') ? '\t' : ',';
        const parts = line.split(separator).map(p => p.trim().replace(/^["']|["']$/g, ''));
        
        if (parts.length >= 2 && parts[0] && parts[1]) {
          words.push({
            german: parts[0],
            french: parts[1],
          });
        }
      }
      
      if (words.length === 0) {
        throw new Error('Aucun mot valide trouvé');
      }
      
      return createCustomList(listName, words);
    } catch (e) {
      console.error('Erreur import CSV:', e);
      return null;
    }
  }, [createCustomList]);

  // Exporter une liste en JSON
  const exportListToJSON = useCallback((listId: string): string | null => {
    const list = customLists.find(l => l.id === listId);
    if (!list) return null;
    
    return JSON.stringify({
      name: list.name,
      words: list.words,
      exportedAt: new Date().toISOString(),
    }, null, 2);
  }, [customLists]);

  // Exporter une liste en CSV
  const exportListToCSV = useCallback((listId: string): string | null => {
    const list = customLists.find(l => l.id === listId);
    if (!list) return null;
    
    const header = 'German;French\n';
    const rows = list.words.map(w => `${w.german};${w.french}`).join('\n');
    return header + rows;
  }, [customLists]);

  // Obtenir les thèmes disponibles (app + custom)
  const getAvailableThemes = useCallback((): { id: string; name: string; isCustom: boolean; wordCount: number; toReviewCount: number }[] => {
    const now = Date.now();
    const themes: Map<string, { name: string; isCustom: boolean; wordCount: number; toReviewCount: number }> = new Map();
    
    // Parcourir tous les mots pour compter par thème
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

  // Obtenir les mots à réviser par thème(s)
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
    // Listes personnalisées
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

