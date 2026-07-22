import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSpacedRepetition, WordProgress, CustomList } from '../hooks/useSpacedRepetition';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { THEMES } from '../constants';
import { usePandaMascot } from '../contexts/PandaMascotContext';

type RevisionMode = 'menu' | 'themes' | 'import' | 'session' | 'results' | 'manage-lists' | 'quick-add';
type AnswerState = 'waiting' | 'correct' | 'incorrect';
type ExerciseType = 'flashcard' | 'writing' | 'qcm' | 'pairs' | 'fillblank' | 'chrono';

interface PairItem {
  id: string;
  text: string;
  type: 'german' | 'english';
  matched: boolean;
  selected: boolean;
}

interface SessionItem {
  word: WordProgress;
  remainingSuccesses: number; // 1 by default, 3 if failed
  isRetry: boolean; // To know if it's a recycled word
}

export const RevisionView: React.FC = () => {
  const { triggerMood } = usePandaMascot();
  const {
    addWords,
    getWordsToReview,
    getStats,
    recordAnswer,
    isLoaded,
    customLists,
    createCustomList,
    addWordsToCustomList,
    deleteCustomList,
    importListFromJSON,
    importListFromCSV,
    exportListToJSON,
    exportListToCSV,
    getAvailableThemes,
    getWordsToReviewByThemes,
  } = useSpacedRepetition();

  const [mode, setMode] = useState<RevisionMode>('menu');
  // Replaced simple sessionWords with sessionQueue
  const [sessionQueue, setSessionQueue] = useState<SessionItem[]>([]);
  // We keep sessionWords to track TOTAL distinct words in session for progress bar
  const [sessionTotalDistinct, setSessionTotalDistinct] = useState(0);
  const [sessionCompletedCount, setSessionCompletedCount] = useState(0);

  const [showAnswer, setShowAnswer] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('waiting');
  const [userInput, setUserInput] = useState('');
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
  const [reviewType, setReviewType] = useState<ExerciseType>('flashcard');
  const [direction, setDirection] = useState<'de-en' | 'en-de'>('de-en');
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

  // Import
  const [importType, setImportType] = useState<'json' | 'csv'>('csv');
  const [importText, setImportText] = useState('');
  const [importListName, setImportListName] = useState('');
  const [importError, setImportError] = useState('');
  const [importSuccess, setImportSuccess] = useState('');

  // Quick add
  const [quickGerman, setQuickGerman] = useState('');
  const [quickEnglish, setQuickEnglish] = useState('');
  const [quickArticle, setQuickArticle] = useState<'' | 'der' | 'die' | 'das'>('');
  const [quickTargetListId, setQuickTargetListId] = useState<string>('new');
  const [quickNewListName, setQuickNewListName] = useState('My words');
  const [quickError, setQuickError] = useState('');
  const [quickAdded, setQuickAdded] = useState<{ german: string; english: string; article?: string }[]>([]);
  const quickGermanRef = useRef<HTMLInputElement>(null);

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

  // Initialize all vocabulary words in the system
  useEffect(() => {
    if (!isLoaded) return;

    const allWords: { theme: string; german: string; english: string; article?: string }[] = [];

    Object.entries(VOCABULARY_DATA).forEach(([themeId, data]) => {
      data.words.forEach(word => {
        allWords.push({
          theme: themeId,
          german: word.german,
          english: word.english,
          article: word.article || undefined,
        });
      });
    });

    if (allWords.length > 0) {
      addWords(allWords);
    }
  }, [isLoaded, addWords]);

  // Clean up chrono timer
  useEffect(() => {
    return () => {
      if (chronoRef.current) clearInterval(chronoRef.current);
    };
  }, []);

  // Chrono timer
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

  // Generate QCM options
  const generateQcmOptions = useCallback((correctWord: WordProgress, allWords: WordProgress[]): string[] => {
    const correctAnswer = direction === 'de-en' ? correctWord.english : correctWord.german;
    const otherAnswers = allWords
      .filter(w => w.wordId !== correctWord.wordId)
      .map(w => direction === 'de-en' ? w.english : w.german)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [correctAnswer, ...otherAnswers].sort(() => Math.random() - 0.5);
    return options;
  }, [direction]);

  // Initialize Pairs game
  const initPairsGame = useCallback((words: WordProgress[]) => {
    const pairWords = words.slice(0, 6); // 6 pairs max
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
        id: `en-${idx}`,
        text: word.english,
        type: 'english',
        matched: false,
        selected: false,
      });
    });

    // Shuffle
    setPairItems(items.sort(() => Math.random() - 0.5));
    setPairsMatched(0);
    setPairsTotal(pairWords.length);
  }, []);

  // Generate Fill Blank sentence
  const generateFillBlank = useCallback((word: WordProgress) => {
    const templates = [
      { de: `Das Wort "___" bedeutet "${word.english}" auf Englisch.`, answer: word.german },
      { de: `"${word.german}" heißt "___" auf Englisch.`, answer: word.english },
      { de: `Übersetzen Sie: ${word.german} = ___`, answer: word.english },
      { de: `Wie sagt man "${word.english}" auf Deutsch? ___`, answer: word.german },
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

    // Initialize Queue
    const initialQueue: SessionItem[] = words.map(w => ({
      word: w,
      remainingSuccesses: 1,
      isRetry: false
    }));

    setSessionQueue(initialQueue);
    setSessionTotalDistinct(words.length);
    setSessionCompletedCount(0);

    setSessionStats({ correct: 0, incorrect: 0 });
    setShowAnswer(false);
    setAnswerState('waiting');
    setUserInput('');
    setSelectedQcmOption(null);

    // Specific initialization per mode
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
    const currentItem = sessionQueue[0];
    if (!currentItem) return;

    recordAnswer(currentItem.word.wordId, isCorrect);
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    triggerMood(isCorrect ? 'applauding' : 'encouraging');
    setSessionStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
    }));

    const goToNext = () => {
      // Logic for Writing Mode: Dynamic Queue
      if (reviewType === 'writing') {
        let newQueue = [...sessionQueue];
        const processedItem = newQueue.shift(); // Remove current

        if (processedItem) {
          if (isCorrect) {
            // Success
            if (processedItem.remainingSuccesses > 1) {
              // Still need more successes (Reinforcement)
              newQueue.push({
                ...processedItem,
                remainingSuccesses: processedItem.remainingSuccesses - 1,
                isRetry: true
              });
            } else {
              // Done with this word
              setSessionCompletedCount(prev => prev + 1);
            }
          } else {
            // Failure
            // Must succeed 3 times total to clear
            newQueue.push({
              ...processedItem,
              remainingSuccesses: 3,
              isRetry: true
            });
          }
        }

        if (newQueue.length > 0) {
          setSessionQueue(newQueue);
          setShowAnswer(false);
          setAnswerState('waiting');
          setUserInput('');
          setSelectedQcmOption(null);

          // Init next word for specific modes
          // Note: for QCM/Chrono words might change, but for Writing we don't need special init beyond clearing input
          // But if we unified logic, we would need it. Writing mode is simple.
        } else {
          setMode('results');
        }

      } else {
        // Standard Linear Logic (Legacy for other modes)
        // Note: For simplicity, converting other modes to use queue as well would be better, 
        // but let's emulate linear by just shifting.
        // Actually, let's just use queue logic for all, but with remainingSuccesses always 1 for non-writing?
        // No, let's keep it simple: 

        // For non-writing modes, we just remove the item regardless of success for now (standard behavior), 
        // OR we could adopt "retry until correct" for all. 
        // User asked "pour la partie writing". Let's stick to that.

        let newQueue = [...sessionQueue];
        newQueue.shift(); // Always remove
        setSessionCompletedCount(prev => prev + 1);

        if (newQueue.length > 0) {
          setSessionQueue(newQueue);
          setShowAnswer(false);
          setAnswerState('waiting');
          setUserInput('');
          setSelectedQcmOption(null);

          // Reset for next word
          const nextItem = newQueue[0];
          const allQueueWords = newQueue.map(i => i.word); // Approximation for distraction generation

          if (reviewType === 'qcm' || reviewType === 'chrono') {
            setQcmOptions(generateQcmOptions(nextItem.word, allQueueWords));
          } else if (reviewType === 'fillblank') {
            generateFillBlank(nextItem.word);
          }
        } else {
          if (reviewType === 'chrono') setChronoActive(false);
          setMode('results');
        }
      }
    };

    // Shorter delay for chrono mode
    // Longer delay for writing failure/success to see visual feedback
    const delay = (reviewType === 'writing') ? 2000 : (reviewType === 'chrono' ? 500 : 1000);
    setTimeout(goToNext, delay);
  }, [sessionQueue, recordAnswer, reviewType, generateQcmOptions, generateFillBlank, triggerMood]);

  // QCM Handler
  const handleQcmSelect = useCallback((option: string) => {
    if (selectedQcmOption !== null) return; // Already answered

    setSelectedQcmOption(option);
    const currentItem = sessionQueue[0];
    const currentWord = currentItem?.word;
    if (!currentWord) return;

    const correctAnswer = direction === 'de-en' ? currentWord.english : currentWord.german;
    const isCorrect = option === correctAnswer;

    handleAnswer(isCorrect);
  }, [selectedQcmOption, sessionQueue, direction, handleAnswer]);

  // Pairs Handler
  const handlePairSelect = useCallback((item: PairItem) => {
    if (item.matched) return;
    // Pairs logic uses internal state, not main queue directly for progression until done
    // This part is trickier to adapt to queue perfectly without rewrite. 
    // Assuming pairs mode is "matches count", not word by word queue.
    // Pairs mode uses `sessionQueue` just to init?
    // The `initPairsGame` uses `words` arg. 
    // Let's assume Pairs mode completes separately and jumps to results.

    // ... (Existing pair logic is complex, self-contained. 
    // It creates its own items. It calls recordAnswer. 
    // It calls setMode('results') directly. 
    // It uses sessionWords[idx] for recording.
    // We need to fix the sessionWords reference to maybe valid queue items?
    // But pairs game takes a snapshot. The `sessionWords` was a state. 
    // Now we need `sessionQueue` to be the source.)

    if (!selectedPair) {
      // First item selected
      setSelectedPair(item);
      setPairItems(prev => prev.map(p =>
        p.id === item.id ? { ...p, selected: true } : { ...p, selected: false }
      ));
    } else {
      // Second item selected
      if (selectedPair.type === item.type) {
        // Same type, change selection
        setSelectedPair(item);
        setPairItems(prev => prev.map(p =>
          p.id === item.id ? { ...p, selected: true } : { ...p, selected: false }
        ));
      } else {
        // Different types, check match
        const idx1 = parseInt(selectedPair.id.split('-')[1]);
        const idx2 = parseInt(item.id.split('-')[1]);

        if (idx1 === idx2) {
          // Match!
          triggerMood('applauding');
          setPairItems(prev => prev.map(p =>
            (p.id === selectedPair.id || p.id === item.id)
              ? { ...p, matched: true, selected: false }
              : p
          ));
          setPairsMatched(prev => {
            const newMatched = prev + 1;
            // Record as correct for both words (roughly)
            // Record as correct for both words (roughly)
            // Pairs mode we just grab from original queue snapshot logic
            // We need a stable reference. `sessionWords` is gone.
            // But we have `sessionQueue`... actually Pairs mode doesn't iterate queue.
            // It just finishes. 
            // We should probably rely on `pairItems` indices mapping to original words logic if possible.
            // But `initPairsGame` used `words` passed to it.
            // We need to store the words used in pairs game to record stats.
            // Let's assume we don't break pairs mode for now.
            // Fixing the recordAnswer call:
            // The `idx1` index refers to the index in the init array. 
            // Let's assume we can access them via `sessionQueue` if it hasn't changed?
            // Pairs mode doesn't shift queue. So `sessionQueue` indices 0..5 are the words.
            const word = sessionQueue[idx1]?.word;
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
          // No match - error animation
          triggerMood('encouraging');
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
  }, [selectedPair, sessionQueue, pairsTotal, recordAnswer, triggerMood]);

  // Fill Blank Handler
  const handleFillBlankCheck = useCallback(() => {
    const isCorrect = normalizeString(userInput) === normalizeString(fillBlankAnswer);
    setShowAnswer(true);
    handleAnswer(isCorrect);
  }, [userInput, fillBlankAnswer, handleAnswer]);

  const checkWritingAnswer = useCallback(() => {
    const currentItem = sessionQueue[0];
    if (!currentItem) return;
    const currentWord = currentItem.word;

    const correctAnswer = direction === 'de-en' ? currentWord.english : currentWord.german;
    const isCorrect = normalizeString(userInput) === normalizeString(correctAnswer);

    setShowAnswer(true);
    handleAnswer(isCorrect);
  }, [sessionQueue, direction, userInput, handleAnswer]);

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

      // Detect type
      if (file.name.endsWith('.json')) {
        setImportType('json');
        try {
          const data = JSON.parse(content);
          if (data.name) setImportListName(data.name);
        } catch { }
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
      setImportError('Please paste or import content');
      return;
    }

    let result: CustomList | null = null;

    if (importType === 'json') {
      result = importListFromJSON(importText);
    } else {
      if (!importListName.trim()) {
        setImportError('Please give a name to the list');
        return;
      }
      result = importListFromCSV(importText, importListName);
    }

    if (result) {
      setImportSuccess(`List "${result.name}" imported with ${result.words.length} words!`);
      setImportText('');
      setImportListName('');
      setTimeout(() => {
        setMode('menu');
        setImportSuccess('');
      }, 2000);
    } else {
      setImportError('Import error. Check the format.');
    }
  };

  const addQuickWord = () => {
    setQuickError('');
    const german = quickGerman.trim();
    const english = quickEnglish.trim();

    if (!german || !english) {
      setQuickError('Please fill in both the German word and its translation.');
      return;
    }

    const article = quickArticle || undefined;
    let targetId = quickTargetListId;

    if (targetId === 'new') {
      const name = quickNewListName.trim() || 'My words';
      // Create the list empty, then append through the article-aware path so we
      // don't add the word twice (createCustomList would seed it without article).
      const list = createCustomList(name, []);
      addWordsToCustomList(list.id, [{ german, english, article }]);
      // Subsequent words append to this freshly created list.
      targetId = list.id;
      setQuickTargetListId(list.id);
    } else {
      addWordsToCustomList(targetId, [{ german, english, article }]);
    }

    setQuickAdded(prev => [{ german, english, article }, ...prev]);
    setQuickGerman('');
    setQuickEnglish('');
    setQuickArticle('');
    quickGermanRef.current?.focus();
  };

  const handleExport = (listId: string, format: 'json' | 'csv') => {
    const content = format === 'json' ? exportListToJSON(listId) : exportListToCSV(listId);
    if (!content) return;

    const list = customLists.find(l => l.id === listId);
    const filename = `${list?.name || 'list'}.${format}`;

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

  useEffect(() => {
    if (mode === 'results') {
      triggerMood('celebrating', 4200);
    }
  }, [mode, triggerMood]);

  const currentItem = sessionQueue[0];
  const currentWord = currentItem?.word;

  // ===== MAIN MENU SCREEN =====
  if (mode === 'menu') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--coral-700)' }}>
            🧠 Spaced Repetition
          </h2>
          <p className="text-lg" style={{ color: 'var(--sand-600)' }}>
            Leitner System: difficult words appear more often
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--coral-100)' }}>
            <p className="text-3xl font-black" style={{ color: 'var(--coral-700)' }}>
              {stats.wordsToReview}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--coral-600)' }}>To Review</p>
          </div>
          <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--turquoise-100)' }}>
            <p className="text-3xl font-black" style={{ color: 'var(--turquoise-700)' }}>
              {stats.masteredWords}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--turquoise-600)' }}>Mastered</p>
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
            <p className="text-sm font-medium" style={{ color: 'var(--sage-600)' }}>Today</p>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => { setMode('quick-add'); setQuickError(''); }}
            className="p-6 rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2"
            style={{ borderColor: 'var(--sage-300, #c7d0b8)', backgroundColor: 'white' }}
          >
            <span className="text-3xl mb-3 block">➕</span>
            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--sage-700, #4a5a34)' }}>
              Add Words
            </h3>
            <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
              Quickly add words one by one
            </p>
          </button>

          <button
            onClick={() => setMode('themes')}
            className="p-6 rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2"
            style={{ borderColor: 'var(--coral-200)', backgroundColor: 'white' }}
          >
            <span className="text-3xl mb-3 block">📚</span>
            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--coral-700)' }}>
              Select Categories
            </h3>
            <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
              Choose themes to review
            </p>
          </button>

          <button
            onClick={() => setMode('import')}
            className="p-6 rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2"
            style={{ borderColor: 'var(--turquoise-200)', backgroundColor: 'white' }}
          >
            <span className="text-3xl mb-3 block">📥</span>
            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--turquoise-700)' }}>
              Import List
            </h3>
            <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
              CSV or Custom JSON
            </p>
          </button>

          <button
            onClick={() => setMode('manage-lists')}
            className="p-6 rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2"
            style={{ borderColor: 'var(--sand-200)', backgroundColor: 'white' }}
          >
            <span className="text-3xl mb-3 block">📋</span>
            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--sand-700)' }}>
              My Lists ({customLists.length})
            </h3>
            <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
              Manage custom lists
            </p>
          </button>
        </div>

        {/* Selected Display */}
        {selectedThemes.length > 0 && (
          <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--coral-50)' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium" style={{ color: 'var(--coral-700)' }}>
                {selectedThemes.length} category(ies) selected
              </p>
              <button
                onClick={() => setSelectedThemes([])}
                className="text-sm underline"
                style={{ color: 'var(--coral-600)' }}
              >
                Deselect All
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

        {/* Revision Options */}
        <div className="bg-white rounded-2xl p-6 mb-8 border" style={{ borderColor: 'var(--sand-200)' }}>
          <h3 className="font-bold mb-4" style={{ color: 'var(--sand-800)' }}>Options</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--sand-600)' }}>
                Exercise Type
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
                  ✍️ Writing
                </button>
                <button
                  onClick={() => setReviewType('qcm')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'qcm' ? 'var(--coral-500)' : 'var(--sand-100)',
                    color: reviewType === 'qcm' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  📝 Quiz
                </button>
                <button
                  onClick={() => setReviewType('pairs')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'pairs' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: reviewType === 'pairs' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🔗 Pairs
                </button>
                <button
                  onClick={() => setReviewType('fillblank')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'fillblank' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: reviewType === 'fillblank' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  📋 Fill-in
                </button>
                <button
                  onClick={() => setReviewType('chrono')}
                  className="py-3 px-3 rounded-xl font-medium transition-all text-sm"
                  style={{
                    backgroundColor: reviewType === 'chrono' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: reviewType === 'chrono' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  ⏱️ Timer
                </button>
              </div>
            </div>
          </div>

          {/* Extra options for chrono */}
          {reviewType === 'chrono' && (
            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--sand-600)' }}>
                Time Limit
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

          {/* Direction - hidden for pairs */}
          {reviewType !== 'pairs' && (
            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--sand-600)' }}>
                Direction
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDirection('de-en')}
                  className="flex-1 py-2 px-4 rounded-xl font-medium transition-all"
                  style={{
                    backgroundColor: direction === 'de-en' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: direction === 'de-en' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🇩🇪 → 🇬🇧
                </button>
                <button
                  onClick={() => setDirection('en-de')}
                  className="flex-1 py-2 px-4 rounded-xl font-medium transition-all"
                  style={{
                    backgroundColor: direction === 'en-de' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: direction === 'en-de' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🇬🇧 → 🇩🇪
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Start Buttons */}
        {selectedWordsToReview > 0 ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => startSession(10)}
              className="px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--coral-500)' }}
            >
              Review 10 words
            </button>
            <button
              onClick={() => startSession(20)}
              className="px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--turquoise-500)' }}
            >
              Review 20 words
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
              All ({selectedWordsToReview})
            </button>
          </div>
        ) : (
          <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--turquoise-50)' }}>
            <p className="text-4xl mb-4">🎉</p>
            <p className="text-xl font-bold" style={{ color: 'var(--turquoise-700)' }}>
              No words to review!
            </p>
            <p style={{ color: 'var(--turquoise-600)' }}>
              Come back later or import a new list.
            </p>
          </div>
        )}
      </div>
    );
  }

  // ===== THEMES SELECTION SCREEN =====
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
          <span className="font-semibold">Back</span>
        </button>

        <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--coral-700)' }}>
          📚 Select categories to review
        </h2>

        {/* Quick Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedThemes(availableThemes.map(t => t.id))}
            className="px-4 py-2 rounded-xl text-sm font-medium"
            style={{ backgroundColor: 'var(--coral-100)', color: 'var(--coral-700)' }}
          >
            Select All
          </button>
          <button
            onClick={() => setSelectedThemes([])}
            className="px-4 py-2 rounded-xl text-sm font-medium"
            style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
          >
            Deselect All
          </button>
        </div>

        {/* App Themes */}
        {appThemes.length > 0 && (
          <div className="mb-8">
            <h3 className="font-bold mb-4" style={{ color: 'var(--sand-700)' }}>
              App Vocabulary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {appThemes.map(theme => {
                const isSelected = selectedThemes.includes(theme.id);
                const themeInfo = THEMES.find(t => t.id === theme.id);
                return (
                  <button
                    key={theme.id}
                    onClick={() => toggleTheme(theme.id)}
                    className={`p-4 rounded-xl text-left transition-all border-2 ${isSelected ? 'ring-2 ring-coral-500' : ''
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
                          {theme.toReviewCount} to review / {theme.wordCount} words
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

        {/* Custom lists */}
        {customThemes.length > 0 && (
          <div className="mb-8">
            <h3 className="font-bold mb-4" style={{ color: 'var(--turquoise-700)' }}>
              📥 My imported lists
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {customThemes.map(theme => {
                const isSelected = selectedThemes.includes(theme.id);
                return (
                  <button
                    key={theme.id}
                    onClick={() => toggleTheme(theme.id)}
                    className={`p-4 rounded-xl text-left transition-all border-2 ${isSelected ? 'ring-2 ring-turquoise-500' : ''
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
                          {theme.toReviewCount} to review / {theme.wordCount} words
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

        {/* Confirm button */}
        <div className="flex justify-center">
          <button
            onClick={() => setMode('menu')}
            className="px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'var(--coral-500)' }}
          >
            Confirm selection ({selectedThemes.length} categor{selectedThemes.length > 1 ? 'ies' : 'y'})
          </button>
        </div>
      </div>
    );
  }

  // ===== IMPORT SCREEN =====
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
          <span className="font-semibold">Back</span>
        </button>

        <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--turquoise-700)' }}>
          📥 Import vocabulary list
        </h2>

        {/* Import Type */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setImportType('csv')}
            className="flex-1 py-3 rounded-xl font-medium transition-all"
            style={{
              backgroundColor: importType === 'csv' ? 'var(--turquoise-500)' : 'var(--sand-100)',
              color: importType === 'csv' ? 'white' : 'var(--sand-700)'
            }}
          >
            📄 CSV / Text
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

        {/* File Upload */}
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
              Click to select a file
            </p>
            <p className="text-sm" style={{ color: 'var(--sand-500)' }}>
              {importType === 'json' ? '.json' : '.csv or .txt'}
            </p>
          </button>
        </div>

        {/* List Name (CSV) */}
        {importType === 'csv' && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sand-700)' }}>
              List Name *
            </label>
            <input
              type="text"
              value={importListName}
              onChange={(e) => setImportListName(e.target.value)}
              placeholder="My vocabulary list"
              className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400"
              style={{ borderColor: 'var(--sand-300)' }}
            />
          </div>
        )}

        {/* Text Area */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sand-700)' }}>
            Or paste content directly:
          </label>
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder={importType === 'csv'
              ? "german;english\nHund;dog\nKatze;cat"
              : '{\n  "name": "My list",\n  "words": [\n    {"german": "Hund", "english": "dog"}\n  ]\n}'
            }
            rows={8}
            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400 font-mono text-sm"
            style={{ borderColor: 'var(--sand-300)' }}
          />
        </div>

        {/* Expected Format */}
        <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--sand-50)' }}>
          <p className="font-medium mb-2" style={{ color: 'var(--sand-700)' }}>
            Expected Format ({importType.toUpperCase()}) :
          </p>
          {importType === 'csv' ? (
            <pre className="text-xs overflow-x-auto" style={{ color: 'var(--sand-600)' }}>
              {`german;english
Hund;dog
Katze;cat
Haus;house`}
            </pre>
          ) : (
            <pre className="text-xs overflow-x-auto" style={{ color: 'var(--sand-600)' }}>
              {`{
  "name": "My list",
  "words": [
    {"german": "Hund", "english": "dog"},
    {"german": "Katze", "english": "cat"}
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

        {/* Import Button */}
        <button
          onClick={handleImport}
          className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105"
          style={{ backgroundColor: 'var(--turquoise-500)' }}
        >
          Import List
        </button>
      </div>
    );
  }

  // ===== QUICK ADD SCREEN =====
  if (mode === 'quick-add') {
    const targetName = quickTargetListId === 'new'
      ? (quickNewListName.trim() || 'My words')
      : (customLists.find(l => l.id === quickTargetListId)?.name || 'list');

    return (
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => { setMode('menu'); setQuickAdded([]); setQuickError(''); }}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--coral-600)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">Back</span>
        </button>

        <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--sage-700, #4a5a34)' }}>
          ➕ Add words
        </h2>
        <p className="text-sm mb-6" style={{ color: 'var(--sand-600)' }}>
          Type a word and its translation, then press Enter. It goes straight into your review deck.
        </p>

        {/* Destination list */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--sand-700)' }}>
            Add to
          </label>
          <select
            value={quickTargetListId}
            onChange={(e) => setQuickTargetListId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400 bg-white"
            style={{ borderColor: 'var(--sand-300)', color: 'var(--sand-800)' }}
          >
            <option value="new">➕ New list…</option>
            {customLists.map(list => (
              <option key={list.id} value={list.id}>{list.name} ({list.words.length})</option>
            ))}
          </select>
          {quickTargetListId === 'new' && (
            <input
              type="text"
              value={quickNewListName}
              onChange={(e) => setQuickNewListName(e.target.value)}
              placeholder="List name"
              className="w-full mt-3 px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400"
              style={{ borderColor: 'var(--sand-300)' }}
            />
          )}
        </div>

        {/* Word entry form */}
        <div className="bg-white rounded-2xl p-6 border mb-4" style={{ borderColor: 'var(--sand-200)' }}>
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <select
              value={quickArticle}
              onChange={(e) => setQuickArticle(e.target.value as '' | 'der' | 'die' | 'das')}
              className="px-3 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400 bg-white sm:w-28"
              style={{ borderColor: 'var(--sand-300)', color: 'var(--coral-600)' }}
            >
              <option value="">—</option>
              <option value="der">der</option>
              <option value="die">die</option>
              <option value="das">das</option>
            </select>
            <input
              ref={quickGermanRef}
              type="text"
              value={quickGerman}
              onChange={(e) => setQuickGerman(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addQuickWord()}
              placeholder="🇩🇪 German word"
              className="flex-1 px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400 font-medium"
              style={{ borderColor: 'var(--sand-300)' }}
              autoFocus
            />
          </div>
          <input
            type="text"
            value={quickEnglish}
            onChange={(e) => setQuickEnglish(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addQuickWord()}
            placeholder="🇬🇧 English translation"
            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-turquoise-400 font-medium mb-4"
            style={{ borderColor: 'var(--sand-300)' }}
          />

          {quickError && (
            <p className="text-sm text-red-600 mb-3">❌ {quickError}</p>
          )}

          <button
            onClick={addQuickWord}
            className="w-full py-3 rounded-xl font-bold text-white text-lg transition-all hover:scale-[1.02]"
            style={{ backgroundColor: 'var(--sage-600, #5f7343)' }}
          >
            Add to “{targetName}”
          </button>
        </div>

        {/* Added this session */}
        {quickAdded.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: 'var(--sand-200)' }}>
            <div className="flex items-center justify-between mb-3">
              <p className="font-bold" style={{ color: 'var(--sand-700)' }}>
                Added this session ({quickAdded.length})
              </p>
              <button
                onClick={() => setMode('menu')}
                className="text-sm font-medium underline"
                style={{ color: 'var(--turquoise-600)' }}
              >
                Done
              </button>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {quickAdded.map((w, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ backgroundColor: 'var(--sand-50)' }}
                >
                  <span className="text-lg">✅</span>
                  <span className="font-bold" style={{ color: 'var(--sand-800)' }}>
                    {w.article && <span style={{ color: 'var(--coral-500)' }}>{w.article} </span>}
                    {w.german}
                  </span>
                  <span style={{ color: 'var(--sand-400)' }}>→</span>
                  <span style={{ color: 'var(--sand-600)' }}>{w.english}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ===== MANAGE LISTS SCREEN =====
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
          <span className="font-semibold">Back</span>
        </button>

        <h2 className="text-2xl font-black mb-6" style={{ color: 'var(--sand-700)' }}>
          📋 My Custom Lists
        </h2>

        {customLists.length === 0 ? (
          <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--sand-50)' }}>
            <p className="text-4xl mb-4">📭</p>
            <p className="text-lg font-medium" style={{ color: 'var(--sand-600)' }}>
              No custom lists
            </p>
            <button
              onClick={() => setMode('import')}
              className="mt-4 px-6 py-3 rounded-xl font-medium text-white"
              style={{ backgroundColor: 'var(--turquoise-500)' }}
            >
              Import a list
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
                      {list.words.length} words • Created on {new Date(list.createdAt).toLocaleDateString('en-US')}
                    </p>
                  </div>
                </div>

                {/* Word Preview */}
                <div className="mb-4 p-3 rounded-xl" style={{ backgroundColor: 'var(--sand-50)' }}>
                  <p className="text-xs font-medium mb-2" style={{ color: 'var(--sand-600)' }}>
                    Preview:
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
                      if (confirm(`Delete list "${list.name}"?`)) {
                        deleteCustomList(list.id);
                      }
                    }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-red-50 text-red-600"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ===== SESSION SCREEN - PAIRS MODE =====
  if (mode === 'session' && reviewType === 'pairs') {
    return (
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--coral-700)' }}>
            🔗 Match Pairs
          </h2>
          <p className="text-lg" style={{ color: 'var(--sand-600)' }}>
            {pairsMatched} / {pairsTotal} pairs matched
          </p>
          <div className="h-3 rounded-full overflow-hidden mt-4" style={{ backgroundColor: 'var(--sand-200)' }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${(pairsMatched / pairsTotal) * 100}%`, backgroundColor: 'var(--turquoise-500)' }}
            />
          </div>
        </div>

        {/* Pairs Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* German Column */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-center mb-2" style={{ color: 'var(--sand-600)' }}>🇩🇪 German</p>
            {pairItems.filter(p => p.type === 'german').map(item => (
              <button
                key={item.id}
                onClick={() => handlePairSelect(item)}
                disabled={item.matched}
                className={`w-full p-4 rounded-xl font-medium transition-all ${item.matched ? 'opacity-50 cursor-not-allowed' : 'hover:scale-102'
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

          {/* English Column */}
          <div className="space-y-3">
            <p className="text-sm font-bold text-center mb-2" style={{ color: 'var(--sand-600)' }}>🇬🇧 English</p>
            {pairItems.filter(p => p.type === 'english').map(item => (
              <button
                key={item.id}
                onClick={() => handlePairSelect(item)}
                disabled={item.matched}
                className={`w-full p-4 rounded-xl font-medium transition-all ${item.matched ? 'opacity-50 cursor-not-allowed' : 'hover:scale-102'
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
          Quit Session
        </button>
      </div>
    );
  }

  // ===== SESSION SCREEN - OTHER MODES =====
  if (mode === 'session' && currentWord) {
    const progress = (sessionCompletedCount / sessionTotalDistinct) * 100;
    const question = direction === 'de-en' ? currentWord.german : currentWord.english;
    const answer = direction === 'de-en' ? currentWord.english : currentWord.german;

    return (
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar + Timer */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--sand-600)' }}>
            <span>Progress: {sessionCompletedCount} / {sessionTotalDistinct}</span>
            {reviewType === 'chrono' ? (
              <span className={`font-bold ${chronoRemaining <= 10 ? 'text-red-500 animate-pulse' : ''}`}>
                ⏱️ {chronoRemaining}s
              </span>
            ) : (
              <span>Box {currentWord.box}/5</span>
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

        {/* Main Card */}
        <div
          className={`p-8 rounded-3xl text-center mb-8 transition-all ${answerState === 'correct' ? 'ring-8 ring-green-400 bg-green-50' :
            answerState === 'incorrect' ? 'ring-8 ring-red-400 bg-red-50' : ''
            }`}
          style={{
            backgroundColor: answerState === 'waiting' ? 'white' : undefined,
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}
        >
          <div className="mb-6">
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--sand-500)' }}>
              {direction === 'de-en' ? '🇩🇪 German' : '🇬🇧 English'}
            </p>
            <p className="text-3xl font-black" style={{ color: 'var(--sand-800)' }}>
              {direction === 'de-en' && currentWord.article ? (
                <><span style={{ color: 'var(--coral-500)' }}>{currentWord.article}</span> {question}</>
              ) : (
                question
              )}
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--sand-400)' }}>
              {getThemeName(currentWord.theme)}
            </p>
          </div>

          {/* Flashcard Mode */}
          {reviewType === 'flashcard' && (
            <>
              {showAnswer ? (
                <div className="pt-6 border-t" style={{ borderColor: 'var(--sand-200)' }}>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--sand-500)' }}>
                    {direction === 'de-en' ? '🇬🇧 English' : '🇩🇪 German'}
                  </p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--coral-600)' }}>
                    {direction === 'en-de' && currentWord.article ? (
                      <><span style={{ color: 'var(--coral-400)' }}>{currentWord.article}</span> {answer}</>
                    ) : (
                      answer
                    )}
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--turquoise-500)' }}
                >
                  Show Answer
                </button>
              )}
            </>
          )}

          {/* Writing Mode */}
          {reviewType === 'writing' && (
            <div className="pt-6 border-t" style={{ borderColor: 'var(--sand-200)' }}>
              {!showAnswer ? (
                <>
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && checkWritingAnswer()}
                    placeholder={direction === 'de-en' ? 'English translation...' : 'German translation...'}
                    className="w-full px-4 py-3 rounded-xl border-2 text-center text-lg font-medium focus:outline-none"
                    style={{ borderColor: 'var(--sand-300)', backgroundColor: 'var(--sand-50)' }}
                    autoFocus
                  />
                  <button
                    onClick={checkWritingAnswer}
                    className="mt-4 px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: 'var(--coral-500)' }}
                  >
                    Check
                  </button>
                </>
              ) : (
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--sand-500)' }}>
                    Your answer:
                  </p>
                  <p className={`text-xl font-bold mb-3 ${answerState === 'correct' ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {userInput || '(empty)'}
                  </p>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--sand-500)' }}>
                    Correct answer:
                  </p>
                  <p className="text-xl font-bold" style={{ color: 'var(--coral-600)' }}>
                    {direction === 'en-de' && currentWord.article ? (
                      <><span style={{ color: 'var(--coral-400)' }}>{currentWord.article}</span> {answer}</>
                    ) : (
                      answer
                    )}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* QCM Mode */}
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
                      className={`p-4 rounded-xl font-medium transition-all ${showResult
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

          {/* Chrono Mode (Quick QCM) */}
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
                      className={`p-4 rounded-xl font-medium transition-all ${showResult
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

          {/* Fill Blank Mode */}
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
                    placeholder="Your answer..."
                    className="w-full px-4 py-3 rounded-xl border-2 text-center text-lg font-medium focus:outline-none"
                    style={{ borderColor: 'var(--sand-300)', backgroundColor: 'var(--sand-50)' }}
                    autoFocus
                  />
                  <button
                    onClick={handleFillBlankCheck}
                    className="mt-4 px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: 'var(--coral-500)' }}
                  >
                    Check
                  </button>
                </>
              ) : (
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--sand-500)' }}>
                    Your answer:
                  </p>
                  <p className={`text-xl font-bold mb-3 ${answerState === 'correct' ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {userInput || '(empty)'}
                  </p>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--sand-500)' }}>
                    Correct answer:
                  </p>
                  <p className="text-xl font-bold" style={{ color: 'var(--coral-600)' }}>
                    {fillBlankAnswer}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Flashcard Buttons */}
        {reviewType === 'flashcard' && showAnswer && answerState === 'waiting' && (
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 max-w-xs px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#ef4444' }}
            >
              ❌ I didn't know
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 max-w-xs px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#22c55e' }}
            >
              ✅ I knew it!
            </button>
          </div>
        )}

        {/* Feedback */}
        {answerState !== 'waiting' && reviewType !== 'chrono' && (
          <div className={`text-center p-4 rounded-xl font-bold text-lg ${answerState === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
            {answerState === 'correct' ? '✅ Correct! Box +1' : '❌ Incorrect. Back to box 1'}
          </div>
        )}

        <button
          onClick={() => { setMode('menu'); setChronoActive(false); }}
          className="mt-8 w-full py-3 rounded-xl font-medium transition-all"
          style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}
        >
          Quit Session
        </button>
      </div>
    );
  }

  // ===== RESULTS SCREEN =====
  if (mode === 'results') {
    const percentage = sessionTotalDistinct > 0
      ? Math.round((sessionStats.correct / sessionTotalDistinct) * 100)
      : 0;

    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="p-8 rounded-3xl mb-8" style={{ backgroundColor: 'white' }}>
          <p className="text-6xl mb-4">
            {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '💪'}
          </p>
          <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--sand-800)' }}>
            Session Finished!
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
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>Correct</p>
            </div>
            <div>
              <p className="text-3xl font-black text-red-600">{sessionStats.incorrect}</p>
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>Incorrect</p>
            </div>
          </div>

          <div className="panda-session-reward panda-revision-result" aria-hidden="true">
            <div className="panda-session-reward-icon">
              {percentage >= 80 ? '🏆' : percentage >= 50 ? '🐼' : '🎋'}
            </div>
            <div>
              <p className="panda-session-reward-title">
                {percentage >= 80 ? 'Review champion' : percentage >= 50 ? 'Pandachan is with you' : 'Steady practice'}
              </p>
              <p className="panda-session-reward-text">
                {percentage >= 80 ? 'Pandachan is celebrating your session with you.' : percentage >= 50 ? 'Good session. Keep the rhythm.' : 'Take it slowly, word by word.'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setMode('menu')}
            className="px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
          >
            Back to Menu
          </button>
          {selectedWordsToReview > 0 && (
            <button
              onClick={() => startSession(20)}
              className="px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--coral-500)' }}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
};
