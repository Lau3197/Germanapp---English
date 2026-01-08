import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSpacedRepetition, WordProgress, CustomList } from '../hooks/useSpacedRepetition';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { THEMES } from '../constants';

type RevisionMode = 'menu' | 'themes' | 'import' | 'session' | 'results' | 'manage-lists';
type AnswerState = 'waiting' | 'correct' | 'incorrect';
type ExerciseType = 'flashcard' | 'writing' | 'qcm' | 'pairs' | 'fillblank' | 'chrono';

interface PairItem {
  id: string;
  text: string;
  type: 'german' | 'french';
  matched: boolean;
  selected: boolean;
}

export const RevisionView: React.FC = () => {
  const {
    addWords,
    getWordsToReview,
    getStats,
    recordAnswer,
    isLoaded,
    customLists,
    createCustomList,
    deleteCustomList,
    importListFromJSON,
    importListFromCSV,
    exportListToJSON,
    exportListToCSV,
    getAvailableThemes,
    getWordsToReviewByThemes,
  } = useSpacedRepetition();

  const [mode, setMode] = useState<RevisionMode>('menu');
  const [sessionWords, setSessionWords] = useState<WordProgress[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('waiting');
  const [userInput, setUserInput] = useState('');
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
  const [reviewType, setReviewType] = useState<ExerciseType>('flashcard');
  const [direction, setDirection] = useState<'de-fr' | 'fr-de'>('de-fr');
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  
  // Import
  const [importType, setImportType] = useState<'json' | 'csv'>('csv');
  const [importText, setImportText] = useState('');
  const [importListName, setImportListName] = useState('');
  const [importError, setImportError] = useState('');
  const [importSuccess, setImportSuccess] = useState('');
  
  // QCM
  const [qcmOptions, setQcmOptions] = useState<string[]>([]);
  const [selectedQcmOption, setSelectedQcmOption] = useState<string | null>(null);
  
  // Pairs game
  const [pairItems, setPairItems] = useState<PairItem[]>([]);
  const [selectedPair, setSelectedPair] = useState<PairItem | null>(null);
  const [pairsMatched, setPairsMatched] = useState(0);
  const [pairsTotal, setPairsTotal] = useState(0);
  
  // Fill blank
  const [fillBlankSentence, setFillBlankSentence] = useState('');
  const [fillBlankAnswer, setFillBlankAnswer] = useState('');
  
  // Chrono mode
  const [chronoTime, setChronoTime] = useState(60);
  const [chronoRemaining, setChronoRemaining] = useState(60);
  const [chronoActive, setChronoActive] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chronoRef = useRef<NodeJS.Timeout | null>(null);

  const stats = getStats();
  const availableThemes = getAvailableThemes();

  // Initialiser tous les mots du vocabulaire dans le système
  useEffect(() => {
    if (!isLoaded) return;

    const allWords: { theme: string; german: string; french: string }[] = [];
    
    Object.entries(VOCABULARY_DATA).forEach(([themeId, data]) => {
      data.words.forEach(word => {
        allWords.push({
          theme: themeId,
          german: word.german,
          french: word.french,
        });
      });
    });

    if (allWords.length > 0) {
      addWords(allWords);
    }
  }, [isLoaded, addWords]);

  // Nettoyer le timer chrono
  useEffect(() => {
    return () => {
      if (chronoRef.current) clearInterval(chronoRef.current);
    };
  }, []);

  // Timer chrono
  useEffect(() => {
    if (chronoActive && chronoRemaining > 0) {
      chronoRef.current = setInterval(() => {
        setChronoRemaining(prev => {
          if (prev <= 1) {
            setChronoActive(false);
            setMode('results');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (chronoRef.current) clearInterval(chronoRef.current);
    };
  }, [chronoActive]);

  // Générer les options QCM
  const generateQcmOptions = useCallback((correctWord: WordProgress, allWords: WordProgress[]): string[] => {
    const correctAnswer = direction === 'de-fr' ? correctWord.french : correctWord.german;
    const otherAnswers = allWords
      .filter(w => w.wordId !== correctWord.wordId)
      .map(w => direction === 'de-fr' ? w.french : w.german)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const options = [correctAnswer, ...otherAnswers].sort(() => Math.random() - 0.5);
    return options;
  }, [direction]);

  // Initialiser le jeu de paires
  const initPairsGame = useCallback((words: WordProgress[]) => {
    const pairWords = words.slice(0, 6); // 6 paires max
    const items: PairItem[] = [];
    
    pairWords.forEach((word, idx) => {
      items.push({
        id: `de-${idx}`,
        text: word.german,
        type: 'german',
        matched: false,
        selected: false,
      });
      items.push({
        id: `fr-${idx}`,
        text: word.french,
        type: 'french',
        matched: false,
        selected: false,
      });
    });
    
    // Mélanger
    setPairItems(items.sort(() => Math.random() - 0.5));
    setPairsMatched(0);
    setPairsTotal(pairWords.length);
  }, []);

  // Générer une phrase à trous
  const generateFillBlank = useCallback((word: WordProgress) => {
    const templates = [
      { de: `Das Wort "___" bedeutet "${word.french}" auf Französisch.`, answer: word.german },
      { de: `"${word.german}" heißt "___" auf Französisch.`, answer: word.french },
      { de: `Übersetzen Sie: ${word.german} = ___`, answer: word.french },
      { de: `Wie sagt man "${word.french}" auf Deutsch? ___`, answer: word.german },
    ];
    const template = templates[Math.floor(Math.random() * templates.length)];
    setFillBlankSentence(template.de);
    setFillBlankAnswer(template.answer);
  }, []);

  const startSession = useCallback((wordCount: number = 20) => {
    let words: WordProgress[];
    
    if (selectedThemes.length > 0) {
      words = getWordsToReviewByThemes(selectedThemes, wordCount);
    } else {
      words = getWordsToReview(wordCount);
    }
    
    if (words.length === 0) return;
    
    setSessionWords(words);
    setCurrentIndex(0);
    setSessionStats({ correct: 0, incorrect: 0 });
    setShowAnswer(false);
    setAnswerState('waiting');
    setUserInput('');
    setSelectedQcmOption(null);
    
    // Initialisation spécifique par mode
    if (reviewType === 'qcm') {
      setQcmOptions(generateQcmOptions(words[0], words));
    } else if (reviewType === 'pairs') {
      initPairsGame(words);
    } else if (reviewType === 'fillblank') {
      generateFillBlank(words[0]);
    } else if (reviewType === 'chrono') {
      setChronoRemaining(chronoTime);
      setChronoActive(true);
      setQcmOptions(generateQcmOptions(words[0], words));
    }
    
    setMode('session');
  }, [getWordsToReview, getWordsToReviewByThemes, selectedThemes, reviewType, generateQcmOptions, initPairsGame, generateFillBlank, chronoTime]);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    const currentWord = sessionWords[currentIndex];
    if (!currentWord) return;

    recordAnswer(currentWord.wordId, isCorrect);
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    setSessionStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
    }));

    const goToNext = () => {
      if (currentIndex < sessionWords.length - 1) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setShowAnswer(false);
        setAnswerState('waiting');
        setUserInput('');
        setSelectedQcmOption(null);
        
        // Réinitialiser pour le prochain mot
        if (reviewType === 'qcm' || reviewType === 'chrono') {
          setQcmOptions(generateQcmOptions(sessionWords[nextIndex], sessionWords));
        } else if (reviewType === 'fillblank') {
          generateFillBlank(sessionWords[nextIndex]);
        }
      } else {
        if (reviewType === 'chrono') {
          setChronoActive(false);
        }
        setMode('results');
      }
    };

    // Délai plus court pour le mode chrono
    const delay = reviewType === 'chrono' ? 500 : 1000;
    setTimeout(goToNext, delay);
  }, [sessionWords, currentIndex, recordAnswer, reviewType, generateQcmOptions, generateFillBlank]);

  // Handler pour QCM
  const handleQcmSelect = useCallback((option: string) => {
    if (selectedQcmOption !== null) return; // Déjà répondu
    
    setSelectedQcmOption(option);
    const currentWord = sessionWords[currentIndex];
    const correctAnswer = direction === 'de-fr' ? currentWord.french : currentWord.german;
    const isCorrect = option === correctAnswer;
    
    handleAnswer(isCorrect);
  }, [selectedQcmOption, sessionWords, currentIndex, direction, handleAnswer]);

  // Handler pour les paires
  const handlePairSelect = useCallback((item: PairItem) => {
    if (item.matched) return;
    
    if (!selectedPair) {
      // Premier élément sélectionné
      setSelectedPair(item);
      setPairItems(prev => prev.map(p => 
        p.id === item.id ? { ...p, selected: true } : { ...p, selected: false }
      ));
    } else {
      // Deuxième élément sélectionné
      if (selectedPair.type === item.type) {
        // Même type, changer la sélection
        setSelectedPair(item);
        setPairItems(prev => prev.map(p => 
          p.id === item.id ? { ...p, selected: true } : { ...p, selected: false }
        ));
      } else {
        // Types différents, vérifier la correspondance
        const idx1 = parseInt(selectedPair.id.split('-')[1]);
        const idx2 = parseInt(item.id.split('-')[1]);
        
        if (idx1 === idx2) {
          // Match !
          setPairItems(prev => prev.map(p => 
            (p.id === selectedPair.id || p.id === item.id) 
              ? { ...p, matched: true, selected: false } 
              : p
          ));
          setPairsMatched(prev => {
            const newMatched = prev + 1;
            // Enregistrer comme correct pour les deux mots
            const word = sessionWords[idx1];
            if (word) recordAnswer(word.wordId, true);
            
            if (newMatched >= pairsTotal) {
              setTimeout(() => {
                setSessionStats(prev => ({ ...prev, correct: prev.correct + pairsTotal }));
                setMode('results');
              }, 500);
            }
            return newMatched;
          });
        } else {
          // Pas de match - animation d'erreur
          setPairItems(prev => prev.map(p => 
            (p.id === selectedPair.id || p.id === item.id) 
              ? { ...p, selected: true } 
              : p
          ));
          setTimeout(() => {
            setPairItems(prev => prev.map(p => ({ ...p, selected: false })));
          }, 500);
        }
        setSelectedPair(null);
      }
    }
  }, [selectedPair, sessionWords, pairsTotal, recordAnswer]);

  // Handler pour texte à trous
  const handleFillBlankCheck = useCallback(() => {
    const isCorrect = normalizeString(userInput) === normalizeString(fillBlankAnswer);
    setShowAnswer(true);
    handleAnswer(isCorrect);
  }, [userInput, fillBlankAnswer, handleAnswer]);

  const checkWritingAnswer = useCallback(() => {
    const currentWord = sessionWords[currentIndex];
    if (!currentWord) return;

    const correctAnswer = direction === 'de-fr' ? currentWord.french : currentWord.german;
    const isCorrect = normalizeString(userInput) === normalizeString(correctAnswer);
    
    setShowAnswer(true);
    handleAnswer(isCorrect);
  }, [sessionWords, currentIndex, direction, userInput, handleAnswer]);

  const normalizeString = (str: string): string => {
    return str.toLowerCase().trim()
      .replace(/[äÄ]/g, 'ae')
      .replace(/[öÖ]/g, 'oe')
      .replace(/[üÜ]/g, 'ue')
      .replace(/ß/g, 'ss')
      .replace(/[.,!?;:'"()]/g, '');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setImportText(content);
      
      // Détecter le type
      if (file.name.endsWith('.json')) {
        setImportType('json');
        try {
          const data = JSON.parse(content);
          if (data.name) setImportListName(data.name);
        } catch {}
      } else {
        setImportType('csv');
        setImportListName(file.name.replace(/\.(csv|txt)$/i, ''));
      }
    };
    reader.readAsText(file);
  };

  const handleImport = () => {
    setImportError('');
    setImportSuccess('');

    if (!importText.trim()) {
      setImportError('Veuillez coller ou importer du contenu');
      return;
    }

    let result: CustomList | null = null;

    if (importType === 'json') {
      result = importListFromJSON(importText);
    } else {
      if (!importListName.trim()) {
        setImportError('Veuillez donner un nom à la liste');
        return;
      }
      result = importListFromCSV(importText, importListName);
    }

    if (result) {
      setImportSuccess(`Liste "${result.name}" importée avec ${result.words.length} mots !`);
      setImportText('');
      setImportListName('');
      setTimeout(() => {
        setMode('menu');
        setImportSuccess('');
      }, 2000);
    } else {
      setImportError('Erreur lors de l\'import. Vérifiez le format.');
    }
  };

  const handleExport = (listId: string, format: 'json' | 'csv') => {
    const content = format === 'json' ? exportListToJSON(listId) : exportListToCSV(listId);
    if (!content) return;

    const list = customLists.find(l => l.id === listId);
    const filename = `${list?.name || 'liste'}.${format}`;
    
    const blob = new Blob([content], { type: format === 'json' ? 'application/json' : 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleTheme = (themeId: string) => {
    setSelectedThemes(prev => 
      prev.includes(themeId) 
        ? prev.filter(id => id !== themeId)
        : [...prev, themeId]
    );
  };

  const getThemeName = (themeId: string): string => {
    const customList = customLists.find(l => l.id === themeId);
    if (customList) return customList.name;
    const theme = THEMES.find(t => t.id === themeId);
    return theme?.name || themeId;
  };

  const selectedWordsToReview = selectedThemes.length > 0 
    ? getWordsToReviewByThemes(selectedThemes).length 
    : stats.wordsToReview;

  const currentWord = sessionWords[currentIndex];

  // ===== ÉCRAN DU MENU PRINCIPAL =====
  if (mode === 'menu') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--coral-700)' }}>
            🧠 Révision Espacée
          </h2>
          <p className="text-lg" style={{ color: 'var(--sand-600)' }}>
            Algorithme Leitner : les mots difficiles reviennent plus souvent
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--coral-100)' }}>
            <p className="text-3xl font-black" style={{ color: 'var(--coral-700)' }}>
              {stats.wordsToReview}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--coral-600)' }}>À réviser</p>
          </div>
          <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--turquoise-100)' }}>
            <p className="text-3xl font-black" style={{ color: 'var(--turquoise-700)' }}>
              {stats.masteredWords}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--turquoise-600)' }}>Maîtrisés</p>
          </div>
          <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--sand-100)' }}>
            <p className="text-3xl font-black" style={{ color: 'var(--sand-700)' }}>
              {stats.totalWords}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--sand-600)' }}>Total</p>
          </div>
          <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--sage-100)' }}>
            <p className="text-3xl font-black" style={{ color: 'var(--sage-700)' }}>
              {stats.todayReviewed}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--sage-600)' }}>Aujourd'hui</p>
          </div>
        </div>

        {/* Actions principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setMode('themes')}
            className="p-6 rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2"
            style={{ borderColor: 'var(--coral-200)', backgroundColor: 'white' }}
          >
            <span className="text-3xl mb-3 block">📚</span>
            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--coral-700)' }}>
              Choisir les catégories
            </h3>
            <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
              Sélectionner les thèmes à réviser
            </p>
          </button>

          <button
            onClick={() => setMode('import')}
            className="p-6 rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2"
            style={{ borderColor: 'var(--turquoise-200)', backgroundColor: 'white' }}
          >
            <span className="text-3xl mb-3 block">📥</span>
            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--turquoise-700)' }}>
              Importer une liste
            </h3>
            <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
              CSV ou JSON personnalisé
            </p>
          </button>

          <button
            onClick={() => setMode('manage-lists')}
            className="p-6 rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2"
            style={{ borderColor: 'var(--sand-200)', backgroundColor: 'white' }}
          >
            <span className="text-3xl mb-3 block">📋</span>
            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--sand-700)' }}>
              Mes listes ({customLists.length})
            </h3>
            <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
              Gérer les listes personnalisées
            </p>
          </button>
        </div>

        {/* Sélection affichée */}
        {selectedThemes.length > 0 && (
          <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--coral-50)' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium" style={{ color: 'var(--coral-700)' }}>
                {selectedThemes.length} catégorie(s) sélectionnée(s)
              </p>
              <button 
                onClick={() => setSelectedThemes([])}
                className="text-sm underline"
                style={{ color: 'var(--coral-600)' }}
              >
                Tout désélectionner
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedThemes.map(id => (
                <span 
                  key={id}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: 'var(--coral-200)', color: 'var(--coral-800)' }}
                >
                  {getThemeName(id)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Options de révision */}
        <div className="bg-white rounded-2xl p-6 mb-8 border" style={{ borderColor: 'var(--sand-200)' }}>
          <h3 className="font-bold mb-4" style={{ color: 'var(--sand-800)' }}>Options</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--sand-600)' }}>
                Type d'exercice
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setReviewType('flashcard')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'flashcard' ? 'var(--coral-500)' : 'var(--sand-100)',
                    color: reviewType === 'flashcard' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🃏 Flashcards
                </button>
                <button
                  onClick={() => setReviewType('writing')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'writing' ? 'var(--coral-500)' : 'var(--sand-100)',
                    color: reviewType === 'writing' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  ✍️ Écriture
                </button>
                <button
                  onClick={() => setReviewType('qcm')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'qcm' ? 'var(--coral-500)' : 'var(--sand-100)',
                    color: reviewType === 'qcm' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  📝 QCM
                </button>
                <button
                  onClick={() => setReviewType('pairs')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'pairs' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: reviewType === 'pairs' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🔗 Paires
                </button>
                <button
                  onClick={() => setReviewType('fillblank')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'fillblank' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: reviewType === 'fillblank' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  📋 Trous
                </button>
                <button
                  onClick={() => setReviewType('chrono')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'chrono' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: reviewType === 'chrono' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  ⏱️ Chrono
                </button>
              </div>
            </div>
          </div>

          {/* Options supplémentaires pour chrono */}
          {reviewType === 'chrono' && (
            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--sand-600)' }}>
                Temps limite
              </label>
              <div className="flex gap-2">
                {[30, 60, 90, 120].map(time => (
                  <button
                    key={time}
                    onClick={() => setChronoTime(time)}
                    className="flex-1 py-2 px-3 rounded-xl font-medium transition-all text-sm"
                    style={{
                      backgroundColor: chronoTime === time ? 'var(--coral-500)' : 'var(--sand-100)',
                      color: chronoTime === time ? 'white' : 'var(--sand-700)'
                    }}
                  >
                    {time}s
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Direction - masqué pour le mode paires */}
          {reviewType !== 'pairs' && (
            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--sand-600)' }}>
                Direction
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDirection('de-fr')}
                  className="flex-1 py-2 px-4 rounded-xl font-medium transition-all"
                  style={{
                    backgroundColor: direction === 'de-fr' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: direction === 'de-fr' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🇩🇪 → 🇫🇷
                </button>
                <button
                  onClick={() => setDirection('fr-de')}
                  className="flex-1 py-2 px-4 rounded-xl font-medium transition-all"
                  style={{
                    backgroundColor: direction === 'fr-de' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: direction === 'fr-de' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🇫🇷 → 🇩🇪
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Boutons de démarrage */}
        {selectedWordsToReview > 0 ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => startSession(10)}
              className="px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--coral-500)' }}
            >
              Réviser 10 mots
            </button>
            <button
              onClick={() => startSession(20)}
              className="px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--turquoise-500)' }}
            >
              Réviser 20 mots
            </button>
            <button
              onClick={() => startSession(selectedWordsToReview)}
              className="px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 border-2"
              style={{ 
                borderColor: 'var(--coral-500)', 
                color: 'var(--coral-500)',
                backgroundColor: 'white'
              }}
            >
              Tout ({selectedWordsToReview})
            </button>
          </div>
        ) : (
          <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--turquoise-50)' }}>
            <p className="text-4xl mb-4">🎉</p>
            <p className="text-xl font-bold" style={{ color: 'var(--turquoise-700)' }}>
              Aucun mot à réviser !
            </p>
            <p style={{ color: 'var(--turquoise-600)' }}>
              Revenez plus tard ou importez une nouvelle liste.
            </p>
          </div>
        )}
      </div>
    );
  }

  // ===== ÉCRAN SÉLECTION DES THÈMES =====
  if (mode === 'themes') {
    const appThemes = availableThemes.filter(t => !t.isCustom);
    const customThemes = availableThemes.filter(t => t.isCustom);

    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setMode('menu')}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--coral-600)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">Retour</span>
        </button>

        <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--coral-700)' }}>
          📚 Choisir les catégories à réviser
        </h2>

        {/* Boutons rapides */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedThemes(availableThemes.map(t => t.id))}
            className="px-4 py-2 rounded-xl text-sm font-medium"
            style={{ backgroundColor: 'var(--coral-100)', color: 'var(--coral-700)' }}
          >
            Tout sélectionner
          </button>
          <button
            onClick={() => setSelectedThemes([])}
            className="px-4 py-2 rounded-xl text-sm font-medium"
            style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
          >
            Tout désélectionner
          </button>
        </div>

        {/* Thèmes de l'application */}
        {appThemes.length > 0 && (
          <div className="mb-8">
            <h3 className="font-bold mb-4" style={{ color: 'var(--sand-700)' }}>
              Vocabulaire de l'application
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {appThemes.map(theme => {
                const isSelected = selectedThemes.includes(theme.id);
                const themeInfo = THEMES.find(t => t.id === theme.id);
                return (
                  <button
                    key={theme.id}
                    onClick={() => toggleTheme(theme.id)}
                    className={`p-4 rounded-xl text-left transition-all border-2 ${
                      isSelected ? 'ring-2 ring-coral-500' : ''
                    }`}
                    style={{
                      backgroundColor: isSelected ? 'var(--coral-50)' : 'white',
                      borderColor: isSelected ? 'var(--coral-300)' : 'var(--sand-200)'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{themeInfo?.icon || '📚'}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate" style={{ color: 'var(--sand-800)' }}>
                          {themeInfo?.name || theme.name}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--sand-500)' }}>
                          {theme.toReviewCount} à réviser / {theme.wordCount} mots
                        </p>
                      </div>
                      {isSelected && (
                        <span className="text-coral-500">✓</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Listes personnalisées */}
        {customThemes.length > 0 && (
          <div className="mb-8">
            <h3 className="font-bold mb-4" style={{ color: 'var(--turquoise-700)' }}>
              📥 Mes listes importées
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {customThemes.map(theme => {
                const isSelected = selectedThemes.includes(theme.id);
                return (
                  <button
                    key={theme.id}
                    onClick={() => toggleTheme(theme.id)}
                    className={`p-4 rounded-xl text-left transition-all border-2 ${
                      isSelected ? 'ring-2 ring-turquoise-500' : ''
                    }`}
                    style={{
                      backgroundColor: isSelected ? 'var(--turquoise-50)' : 'white',
                      borderColor: isSelected ? 'var(--turquoise-300)' : 'var(--sand-200)'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📋</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate" style={{ color: 'var(--sand-800)' }}>
                          {theme.name}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--sand-500)' }}>
                          {theme.toReviewCount} à réviser / {theme.wordCount} mots
                        </p>
                      </div>
                      {isSelected && (
                        <span className="text-turquoise-500">✓</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Bouton valider */}
        <div className="flex justify-center">
          <button
            onClick={() => setMode('menu')}
            className="px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'var(--coral-500)' }}
          >
            Valider la sélection ({selectedThemes.length} catégorie{selectedThemes.length > 1 ? 's' : ''})
          </button>
        </div>
      </div>
    );
  }

  // ===== ÉCRAN IMPORT =====
  if (mode === 'import') {
    return (
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => { setMode('menu'); setImportText(''); setImportError(''); setImportSuccess(''); }}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--coral-600)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">Retour</span>
        </button>

        <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--turquoise-700)' }}>
          📥 Importer une liste de vocabulaire
        </h2>

        {/* Type d'import */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setImportType('csv')}
            className="flex-1 py-3 rounded-xl font-medium transition-all"
            style={{
              backgroundColor: importType === 'csv' ? 'var(--turquoise-500)' : 'var(--sand-100)',
              color: importType === 'csv' ? 'white' : 'var(--sand-700)'
            }}
          >
            📄 CSV / Texte
          </button>
          <button
            onClick={() => setImportType('json')}
            className="flex-1 py-3 rounded-xl font-medium transition-all"
            style={{
              backgroundColor: importType === 'json' ? 'var(--turquoise-500)' : 'var(--sand-100)',
              color: importType === 'json' ? 'white' : 'var(--sand-700)'
            }}
          >
            📋 JSON
          </button>
        </div>

        {/* Upload fichier */}
        <div className="mb-6">
          <input
            type="file"
            ref={fileInputRef}
            accept={importType === 'json' ? '.json' : '.csv,.txt'}
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full p-6 rounded-xl border-2 border-dashed transition-all hover:border-turquoise-400"
            style={{ borderColor: 'var(--sand-300)' }}
          >
            <span className="text-3xl block mb-2">📁</span>
            <p className="font-medium" style={{ color: 'var(--sand-700)' }}>
              Cliquer pour sélectionner un fichier
            </p>
            <p className="text-sm" style={{ color: 'var(--sand-500)' }}>
              {importType === 'json' ? '.json' : '.csv ou .txt'}
            </p>
          </button>
        </div>

        {/* Nom de la liste (CSV) */}
        {importType === 'csv' && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sand-700)' }}>
              Nom de la liste *
            </label>
            <input
              type="text"
              value={importListName}
              onChange={(e) => setImportListName(e.target.value)}
              placeholder="Ma liste de vocabulaire"
              className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400"
              style={{ borderColor: 'var(--sand-300)' }}
            />
          </div>
        )}

        {/* Zone de texte */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sand-700)' }}>
            Ou coller le contenu directement :
          </label>
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder={importType === 'csv' 
              ? "allemand;français\nHund;chien\nKatze;chat" 
              : '{\n  "name": "Ma liste",\n  "words": [\n    {"german": "Hund", "french": "chien"}\n  ]\n}'
            }
            rows={8}
            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400 font-mono text-sm"
            style={{ borderColor: 'var(--sand-300)' }}
          />
        </div>

        {/* Format attendu */}
        <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--sand-50)' }}>
          <p className="font-medium mb-2" style={{ color: 'var(--sand-700)' }}>
            Format attendu ({importType.toUpperCase()}) :
          </p>
          {importType === 'csv' ? (
            <pre className="text-xs overflow-x-auto" style={{ color: 'var(--sand-600)' }}>
              {`allemand;français
Hund;chien
Katze;chat
Haus;maison`}
            </pre>
          ) : (
            <pre className="text-xs overflow-x-auto" style={{ color: 'var(--sand-600)' }}>
              {`{
  "name": "Ma liste",
  "words": [
    {"german": "Hund", "french": "chien"},
    {"german": "Katze", "french": "chat"}
  ]
}`}
            </pre>
          )}
        </div>

        {/* Messages */}
        {importError && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700">
            ❌ {importError}
          </div>
        )}
        {importSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-700">
            ✅ {importSuccess}
          </div>
        )}

        {/* Bouton importer */}
        <button
          onClick={handleImport}
          className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105"
          style={{ backgroundColor: 'var(--turquoise-500)' }}
        >
          Importer la liste
        </button>
      </div>
    );
  }

  // ===== ÉCRAN GESTION DES LISTES =====
  if (mode === 'manage-lists') {
    return (
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => setMode('menu')}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--coral-600)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">Retour</span>
        </button>

        <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--sand-700)' }}>
          📋 Mes listes personnalisées
        </h2>

        {customLists.length === 0 ? (
          <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--sand-50)' }}>
            <p className="text-4xl mb-4">📭</p>
            <p className="text-lg font-medium" style={{ color: 'var(--sand-600)' }}>
              Aucune liste personnalisée
            </p>
            <button
              onClick={() => setMode('import')}
              className="mt-4 px-6 py-3 rounded-xl font-medium text-white"
              style={{ backgroundColor: 'var(--turquoise-500)' }}
            >
              Importer une liste
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {customLists.map(list => (
              <div
                key={list.id}
                className="p-6 rounded-2xl bg-white border"
                style={{ borderColor: 'var(--sand-200)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: 'var(--sand-800)' }}>
                      {list.name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--sand-500)' }}>
                      {list.words.length} mots • Créée le {new Date(list.createdAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>

                {/* Aperçu des mots */}
                <div className="mb-4 p-3 rounded-xl" style={{ backgroundColor: 'var(--sand-50)' }}>
                  <p className="text-xs font-medium mb-2" style={{ color: 'var(--sand-600)' }}>
                    Aperçu :
                  </p>
                  <p className="text-sm" style={{ color: 'var(--sand-700)' }}>
                    {list.words.slice(0, 5).map(w => w.german).join(', ')}
                    {list.words.length > 5 && ` ... +${list.words.length - 5}`}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleExport(list.id, 'csv')}
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-700)' }}
                  >
                    📥 Export CSV
                  </button>
                  <button
                    onClick={() => handleExport(list.id, 'json')}
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
                  >
                    📥 Export JSON
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Supprimer la liste "${list.name}" ?`)) {
                        deleteCustomList(list.id);
                      }
                    }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-red-50 text-red-600"
                  >
                    🗑️ Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ===== ÉCRAN DE SESSION - MODE PAIRES =====
  if (mode === 'session' && reviewType === 'pairs') {
    return (
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--coral-700)' }}>
            🔗 Associer les paires
          </h2>
          <p className="text-lg" style={{ color: 'var(--sand-600)' }}>
            {pairsMatched} / {pairsTotal} paires trouvées
          </p>
          <div className="h-3 rounded-full overflow-hidden mt-4" style={{ backgroundColor: 'var(--sand-200)' }}>
            <div 
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${(pairsMatched / pairsTotal) * 100}%`, backgroundColor: 'var(--turquoise-500)' }}
            />
          </div>
        </div>

        {/* Grille des paires */}
        <div className="grid grid-cols-2 gap-4">
          {/* Colonne allemand */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-center mb-2" style={{ color: 'var(--sand-600)' }}>🇩🇪 Allemand</p>
            {pairItems.filter(p => p.type === 'german').map(item => (
              <button
                key={item.id}
                onClick={() => handlePairSelect(item)}
                disabled={item.matched}
                className={`w-full p-4 rounded-xl font-medium transition-all ${
                  item.matched ? 'opacity-50 cursor-not-allowed' : 'hover:scale-102'
                } ${item.selected ? 'ring-2 ring-coral-500' : ''}`}
                style={{
                  backgroundColor: item.matched ? 'var(--turquoise-100)' : 
                                   item.selected ? 'var(--coral-100)' : 'white',
                  color: item.matched ? 'var(--turquoise-700)' : 'var(--sand-800)',
                  boxShadow: item.matched ? 'none' : '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                {item.text}
                {item.matched && <span className="ml-2">✓</span>}
              </button>
            ))}
          </div>

          {/* Colonne français */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-center mb-2" style={{ color: 'var(--sand-600)' }}>🇫🇷 Français</p>
            {pairItems.filter(p => p.type === 'french').map(item => (
              <button
                key={item.id}
                onClick={() => handlePairSelect(item)}
                disabled={item.matched}
                className={`w-full p-4 rounded-xl font-medium transition-all ${
                  item.matched ? 'opacity-50 cursor-not-allowed' : 'hover:scale-102'
                } ${item.selected ? 'ring-2 ring-coral-500' : ''}`}
                style={{
                  backgroundColor: item.matched ? 'var(--turquoise-100)' : 
                                   item.selected ? 'var(--coral-100)' : 'white',
                  color: item.matched ? 'var(--turquoise-700)' : 'var(--sand-800)',
                  boxShadow: item.matched ? 'none' : '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                {item.text}
                {item.matched && <span className="ml-2">✓</span>}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => { setMode('menu'); setChronoActive(false); }}
          className="mt-8 w-full py-3 rounded-xl font-medium transition-all"
          style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}
        >
          Quitter la session
        </button>
      </div>
    );
  }

  // ===== ÉCRAN DE SESSION - AUTRES MODES =====
  if (mode === 'session' && currentWord) {
    const progress = ((currentIndex + 1) / sessionWords.length) * 100;
    const question = direction === 'de-fr' ? currentWord.german : currentWord.french;
    const answer = direction === 'de-fr' ? currentWord.french : currentWord.german;

    return (
      <div className="max-w-2xl mx-auto">
        {/* Barre de progression + Chrono */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--sand-600)' }}>
            <span>Mot {currentIndex + 1} / {sessionWords.length}</span>
            {reviewType === 'chrono' ? (
              <span className={`font-bold ${chronoRemaining <= 10 ? 'text-red-500 animate-pulse' : ''}`}>
                ⏱️ {chronoRemaining}s
              </span>
            ) : (
              <span>Boîte {currentWord.box}/5</span>
            )}
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--sand-200)' }}>
            <div 
              className="h-full rounded-full transition-all duration-300"
              style={{ 
                width: reviewType === 'chrono' ? `${(chronoRemaining / chronoTime) * 100}%` : `${progress}%`,
                backgroundColor: reviewType === 'chrono' 
                  ? (chronoRemaining <= 10 ? '#ef4444' : 'var(--turquoise-500)') 
                  : 'var(--coral-500)'
              }}
            />
          </div>
        </div>

        {/* Carte principale */}
        <div 
          className={`p-8 rounded-3xl text-center mb-8 transition-all ${
            answerState === 'correct' ? 'ring-4 ring-green-400' :
            answerState === 'incorrect' ? 'ring-4 ring-red-400' : ''
          }`}
          style={{ backgroundColor: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
        >
          <div className="mb-6">
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--sand-500)' }}>
              {direction === 'de-fr' ? '🇩🇪 Allemand' : '🇫🇷 Français'}
            </p>
            <p className="text-3xl font-black" style={{ color: 'var(--sand-800)' }}>
              {question}
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--sand-400)' }}>
              {getThemeName(currentWord.theme)}
            </p>
          </div>

          {/* Mode Flashcard */}
          {reviewType === 'flashcard' && (
            <>
              {showAnswer ? (
                <div className="pt-6 border-t" style={{ borderColor: 'var(--sand-200)' }}>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--sand-500)' }}>
                    {direction === 'de-fr' ? '🇫🇷 Français' : '🇩🇪 Allemand'}
                  </p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--coral-600)' }}>
                    {answer}
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--turquoise-500)' }}
                >
                  Voir la réponse
                </button>
              )}
            </>
          )}

          {/* Mode Écriture */}
          {reviewType === 'writing' && (
            <div className="pt-6 border-t" style={{ borderColor: 'var(--sand-200)' }}>
              {!showAnswer ? (
                <>
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && checkWritingAnswer()}
                    placeholder={direction === 'de-fr' ? 'Traduction française...' : 'Traduction allemande...'}
                    className="w-full px-4 py-3 rounded-xl border-2 text-center text-lg font-medium focus:outline-none"
                    style={{ borderColor: 'var(--sand-300)', backgroundColor: 'var(--sand-50)' }}
                    autoFocus
                  />
                  <button
                    onClick={checkWritingAnswer}
                    className="mt-4 px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: 'var(--coral-500)' }}
                  >
                    Vérifier
                  </button>
                </>
              ) : (
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--sand-500)' }}>
                    Votre réponse :
                  </p>
                  <p className={`text-xl font-bold mb-3 ${
                    answerState === 'correct' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {userInput || '(vide)'}
                  </p>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--sand-500)' }}>
                    Réponse correcte :
                  </p>
                  <p className="text-xl font-bold" style={{ color: 'var(--coral-600)' }}>
                    {answer}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Mode QCM */}
          {reviewType === 'qcm' && (
            <div className="pt-6 border-t" style={{ borderColor: 'var(--sand-200)' }}>
              <div className="grid grid-cols-2 gap-3">
                {qcmOptions.map((option, idx) => {
                  const isSelected = selectedQcmOption === option;
                  const isCorrect = option === answer;
                  const showResult = selectedQcmOption !== null;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleQcmSelect(option)}
                      disabled={selectedQcmOption !== null}
                      className={`p-4 rounded-xl font-medium transition-all ${
                        showResult 
                          ? isCorrect 
                            ? 'bg-green-100 text-green-700 ring-2 ring-green-400'
                            : isSelected 
                              ? 'bg-red-100 text-red-700 ring-2 ring-red-400'
                              : 'opacity-50'
                          : 'hover:scale-102'
                      }`}
                      style={{
                        backgroundColor: !showResult ? 'var(--sand-100)' : undefined,
                        color: !showResult ? 'var(--sand-800)' : undefined
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Mode Chrono (QCM rapide) */}
          {reviewType === 'chrono' && (
            <div className="pt-6 border-t" style={{ borderColor: 'var(--sand-200)' }}>
              <div className="grid grid-cols-2 gap-3">
                {qcmOptions.map((option, idx) => {
                  const isSelected = selectedQcmOption === option;
                  const isCorrect = option === answer;
                  const showResult = selectedQcmOption !== null;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleQcmSelect(option)}
                      disabled={selectedQcmOption !== null}
                      className={`p-4 rounded-xl font-medium transition-all ${
                        showResult 
                          ? isCorrect 
                            ? 'bg-green-100 text-green-700'
                            : isSelected 
                              ? 'bg-red-100 text-red-700'
                              : 'opacity-50'
                          : 'hover:scale-105 hover:shadow-md'
                      }`}
                      style={{
                        backgroundColor: !showResult ? 'var(--sand-100)' : undefined,
                        color: !showResult ? 'var(--sand-800)' : undefined
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Mode Texte à trous */}
          {reviewType === 'fillblank' && (
            <div className="pt-6 border-t" style={{ borderColor: 'var(--sand-200)' }}>
              <p className="text-lg mb-4" style={{ color: 'var(--sand-700)' }}>
                {fillBlankSentence}
              </p>
              {!showAnswer ? (
                <>
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleFillBlankCheck()}
                    placeholder="Votre réponse..."
                    className="w-full px-4 py-3 rounded-xl border-2 text-center text-lg font-medium focus:outline-none"
                    style={{ borderColor: 'var(--sand-300)', backgroundColor: 'var(--sand-50)' }}
                    autoFocus
                  />
                  <button
                    onClick={handleFillBlankCheck}
                    className="mt-4 px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: 'var(--coral-500)' }}
                  >
                    Vérifier
                  </button>
                </>
              ) : (
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--sand-500)' }}>
                    Votre réponse :
                  </p>
                  <p className={`text-xl font-bold mb-3 ${
                    answerState === 'correct' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {userInput || '(vide)'}
                  </p>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--sand-500)' }}>
                    Réponse correcte :
                  </p>
                  <p className="text-xl font-bold" style={{ color: 'var(--coral-600)' }}>
                    {fillBlankAnswer}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Boutons Flashcard */}
        {reviewType === 'flashcard' && showAnswer && answerState === 'waiting' && (
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 max-w-xs px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#ef4444' }}
            >
              ❌ Je ne savais pas
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 max-w-xs px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#22c55e' }}
            >
              ✅ Je savais !
            </button>
          </div>
        )}

        {/* Feedback */}
        {answerState !== 'waiting' && reviewType !== 'chrono' && (
          <div className={`text-center p-4 rounded-xl font-bold text-lg ${
            answerState === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {answerState === 'correct' ? '✅ Correct ! Boîte +1' : '❌ Incorrect. Retour boîte 1'}
          </div>
        )}

        <button
          onClick={() => { setMode('menu'); setChronoActive(false); }}
          className="mt-8 w-full py-3 rounded-xl font-medium transition-all"
          style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}
        >
          Quitter la session
        </button>
      </div>
    );
  }

  // ===== ÉCRAN DES RÉSULTATS =====
  if (mode === 'results') {
    const percentage = sessionWords.length > 0 
      ? Math.round((sessionStats.correct / sessionWords.length) * 100) 
      : 0;

    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="p-8 rounded-3xl mb-8" style={{ backgroundColor: 'white' }}>
          <p className="text-6xl mb-4">
            {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '💪'}
          </p>
          <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--sand-800)' }}>
            Session terminée !
          </h2>
          <p className="text-5xl font-black mb-4" style={{ 
            color: percentage >= 80 ? 'var(--turquoise-600)' : 
                   percentage >= 50 ? 'var(--coral-500)' : 'var(--sand-600)'
          }}>
            {percentage}%
          </p>

          <div className="flex justify-center gap-8 mb-6">
            <div>
              <p className="text-3xl font-black text-green-600">{sessionStats.correct}</p>
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>Corrects</p>
            </div>
            <div>
              <p className="text-3xl font-black text-red-600">{sessionStats.incorrect}</p>
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>Incorrects</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setMode('menu')}
            className="px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
          >
            Retour au menu
          </button>
          {selectedWordsToReview > 0 && (
            <button
              onClick={() => startSession(20)}
              className="px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--coral-500)' }}
            >
              Continuer
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
};
