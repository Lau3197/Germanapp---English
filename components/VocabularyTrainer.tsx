import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { GermanWord } from '../types';

type TrainingMode = 'menu' | 'qcm' | 'writing' | 'flashcards';
type Direction = 'fr-de' | 'de-fr';

interface VocabularyTrainerProps {
  words: GermanWord[];
  onComplete: () => void;
  themeName?: string;
}

interface SessionStats {
  correct: number;
  incorrect: number;
  total: number;
}

// Utilitaire pour mélanger un tableau
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Normaliser une chaîne pour la comparaison
const normalizeString = (str: string): string => {
  return str.toLowerCase().trim()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[.,!?;:'"()]/g, '');
};

export const VocabularyTrainer: React.FC<VocabularyTrainerProps> = ({ words, onComplete, themeName }) => {
  const [mode, setMode] = useState<TrainingMode>('menu');
  const [direction, setDirection] = useState<Direction>('fr-de');
  const [wordCount, setWordCount] = useState<number | 'all'>('all'); // Par défaut: tous les mots
  const [sessionWords, setSessionWords] = useState<GermanWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, incorrect: 0, total: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [incorrectWords, setIncorrectWords] = useState<GermanWord[]>([]); // Mots ratés
  const [isRevisionMode, setIsRevisionMode] = useState(false); // Mode révision

  // Démarrer une session d'entraînement
  const startSession = useCallback((selectedMode: TrainingMode) => {
    const count = wordCount === 'all' ? words.length : Math.min(wordCount, words.length);
    const shuffled = shuffleArray(words).slice(0, count);
    setSessionWords(shuffled);
    setCurrentIndex(0);
    setStats({ correct: 0, incorrect: 0, total: count });
    setIsFinished(false);
    setIncorrectWords([]);
    setIsRevisionMode(false);
    setMode(selectedMode);
  }, [words, wordCount]);

  // Démarrer une session de révision (uniquement les mots ratés)
  const startRevisionSession = useCallback((selectedMode: TrainingMode) => {
    const shuffled = shuffleArray(incorrectWords);
    setSessionWords(shuffled);
    setCurrentIndex(0);
    setStats({ correct: 0, incorrect: 0, total: shuffled.length });
    setIsFinished(false);
    setIncorrectWords([]);
    setIsRevisionMode(true);
    setMode(selectedMode);
  }, [incorrectWords]);

  // Passer au mot suivant
  const nextWord = useCallback((wasCorrect: boolean, currentWord?: GermanWord) => {
    setStats(prev => ({
      ...prev,
      correct: prev.correct + (wasCorrect ? 1 : 0),
      incorrect: prev.incorrect + (wasCorrect ? 0 : 1)
    }));

    // Ajouter aux mots incorrects si raté
    if (!wasCorrect && currentWord) {
      setIncorrectWords(prev => {
        // Éviter les doublons
        if (prev.some(w => w.german === currentWord.german)) return prev;
        return [...prev, currentWord];
      });
    }

    if (currentIndex < sessionWords.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, sessionWords.length]);

  // Retour au menu
  const backToMenu = () => {
    setMode('menu');
    setIsFinished(false);
    setCurrentIndex(0);
    setIncorrectWords([]);
    setIsRevisionMode(false);
  };

  // Écran de résultats
  if (isFinished) {
    const percentage = Math.round((stats.correct / stats.total) * 100);
    const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : percentage >= 40 ? '💪' : '📚';
    const message = percentage >= 80 ? 'Excellent !' : percentage >= 60 ? 'Bien joué !' : percentage >= 40 ? 'Continue comme ça !' : 'Encore un peu de pratique !';
    const hasErrors = incorrectWords.length > 0;

    return (
      <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-500">
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center border border-slate-100">
          {/* Badge mode révision */}
          {isRevisionMode && (
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                🔄 Mode Révision
              </span>
            </div>
          )}
          
          <div className="text-7xl mb-6 animate-bounce">{emoji}</div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">{message}</h2>
          <p className="text-slate-500 mb-6">
            {isRevisionMode ? 'Révision terminée' : 'Session terminée'}
          </p>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 mb-6">
            <div className="text-5xl font-black mb-2" style={{ color: 'var(--terracotta-600)' }}>
              {stats.correct} / {stats.total}
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <span className="text-emerald-600 font-bold">✓ {stats.correct} correct{stats.correct > 1 ? 's' : ''}</span>
              <span className="text-rose-500 font-bold">✗ {stats.incorrect} erreur{stats.incorrect > 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="h-4 bg-slate-200 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full transition-all duration-1000 rounded-full"
              style={{ 
                width: `${percentage}%`,
                background: `linear-gradient(90deg, var(--terracotta-500), var(--terracotta-600))`
              }}
            />
          </div>

          {/* Liste des mots ratés */}
          {hasErrors && (
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 mb-6 text-left">
              <p className="text-rose-700 font-bold text-sm mb-3 flex items-center gap-2">
                <span>📝</span> Mots à réviser ({incorrectWords.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {incorrectWords.map((word, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-white border border-rose-200 rounded-lg text-sm text-slate-700"
                  >
                    {word.article} {word.german}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            {/* Bouton révision des erreurs - Prioritaire si erreurs */}
            {hasErrors && (
              <button
                onClick={() => startRevisionSession(mode)}
                className="w-full font-bold py-4 rounded-xl transition-all text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-amber-500 to-orange-500"
              >
                🔄 Réviser les {incorrectWords.length} erreur{incorrectWords.length > 1 ? 's' : ''}
              </button>
            )}
            
            <button
              onClick={() => startSession(mode)}
              className={`w-full font-bold py-4 rounded-xl transition-all ${
                hasErrors 
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                  : 'text-white shadow-lg hover:shadow-xl'
              }`}
              style={!hasErrors ? { backgroundColor: 'var(--terracotta-600)' } : {}}
            >
              {hasErrors ? '🔁 Nouvelle session complète' : '🔄 Recommencer'}
            </button>
            
            <button
              onClick={backToMenu}
              className="w-full bg-slate-100 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors"
            >
              ← Changer de mode
            </button>
            <button
              onClick={onComplete}
              className="w-full text-slate-500 font-medium py-3 hover:text-slate-700 transition-colors"
            >
              Retour aux thèmes
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Menu principal
  if (mode === 'menu') {
    return (
      <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-800 mb-2">
            🎯 Entraînement Vocabulaire
          </h2>
          {themeName && (
            <p className="text-slate-500">Thème : <span className="font-bold">{themeName}</span></p>
          )}
          <p className="text-slate-400 text-sm mt-1">{words.length} mots disponibles</p>
        </div>

        {/* Configuration */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 mb-8">
          <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span className="text-xl">⚙️</span> Configuration
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Direction */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Direction</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDirection('fr-de')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                    direction === 'fr-de' 
                      ? 'text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  style={direction === 'fr-de' ? { backgroundColor: 'var(--terracotta-600)' } : {}}
                >
                  🇫🇷 → 🇩🇪
                </button>
                <button
                  onClick={() => setDirection('de-fr')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                    direction === 'de-fr' 
                      ? 'text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  style={direction === 'de-fr' ? { backgroundColor: 'var(--terracotta-600)' } : {}}
                >
                  🇩🇪 → 🇫🇷
                </button>
              </div>
            </div>

            {/* Nombre de mots */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Nombre de mots : <span className="font-bold" style={{ color: 'var(--terracotta-600)' }}>
                  {wordCount === 'all' ? `Tous (${words.length})` : wordCount}
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setWordCount('all')}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    wordCount === 'all' 
                      ? 'text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  style={wordCount === 'all' ? { backgroundColor: 'var(--terracotta-600)' } : {}}
                >
                  Tous ({words.length})
                </button>
                {[10, 20, 30, 50].filter(n => n <= words.length).map(num => (
                  <button
                    key={num}
                    onClick={() => setWordCount(num)}
                    className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                      wordCount === num 
                        ? 'text-white shadow-md' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                    style={wordCount === num ? { backgroundColor: 'var(--terracotta-600)' } : {}}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modes d'entraînement */}
        <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
          <span className="text-xl">🎮</span> Choisissez un mode
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* QCM */}
          <button
            onClick={() => startSession('qcm')}
            className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-300 transition-all hover:shadow-lg text-left"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
            <h4 className="font-black text-slate-800 text-lg mb-2">Quiz QCM</h4>
            <p className="text-slate-500 text-sm">Choisissez la bonne réponse parmi 4 propositions</p>
            <div className="mt-4 flex items-center gap-2 text-blue-600 font-bold text-sm">
              <span>Commencer</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </button>

          {/* Écriture */}
          <button
            onClick={() => startSession('writing')}
            className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-emerald-300 transition-all hover:shadow-lg text-left"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✍️</div>
            <h4 className="font-black text-slate-800 text-lg mb-2">Écriture</h4>
            <p className="text-slate-500 text-sm">Tapez la traduction du mot affiché</p>
            <div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-sm">
              <span>Commencer</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </button>

          {/* Flashcards */}
          <button
            onClick={() => startSession('flashcards')}
            className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-purple-300 transition-all hover:shadow-lg text-left"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🃏</div>
            <h4 className="font-black text-slate-800 text-lg mb-2">Flashcards</h4>
            <p className="text-slate-500 text-sm">Retournez les cartes et évaluez-vous</p>
            <div className="mt-4 flex items-center gap-2 text-purple-600 font-bold text-sm">
              <span>Commencer</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Bouton retour */}
        <div className="mt-8 text-center">
          <button
            onClick={onComplete}
            className="text-slate-500 font-medium hover:text-slate-700 transition-colors"
          >
            ← Retour aux thèmes
          </button>
        </div>
      </div>
    );
  }

  // Mode QCM
  if (mode === 'qcm') {
    return (
      <QCMMode
        words={sessionWords}
        allWords={words}
        currentIndex={currentIndex}
        direction={direction}
        onAnswer={nextWord}
        onBack={backToMenu}
        stats={stats}
      />
    );
  }

  // Mode Écriture
  if (mode === 'writing') {
    return (
      <WritingMode
        words={sessionWords}
        currentIndex={currentIndex}
        direction={direction}
        onAnswer={nextWord}
        onBack={backToMenu}
        stats={stats}
      />
    );
  }

  // Mode Flashcards
  if (mode === 'flashcards') {
    return (
      <FlashcardsMode
        words={sessionWords}
        currentIndex={currentIndex}
        direction={direction}
        onAnswer={nextWord}
        onBack={backToMenu}
        stats={stats}
      />
    );
  }

  return null;
};

// ============================================
// MODE QCM
// ============================================
interface QCMModeProps {
  words: GermanWord[];
  allWords: GermanWord[];
  currentIndex: number;
  direction: Direction;
  onAnswer: (correct: boolean, currentWord?: GermanWord) => void;
  onBack: () => void;
  stats: SessionStats;
}

const QCMMode: React.FC<QCMModeProps> = ({ words, allWords, currentIndex, direction, onAnswer, onBack, stats }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentWord = words[currentIndex];

  // Générer les options
  const options = useMemo(() => {
    if (!currentWord) return [];
    
    // Obtenir 3 mauvaises réponses
    const others = allWords.filter(w => w.german !== currentWord.german);
    const wrongOptions = shuffleArray(others).slice(0, 3);
    
    // Mélanger avec la bonne réponse
    return shuffleArray([...wrongOptions, currentWord]);
  }, [currentWord, allWords]);

  const handleSelect = (option: GermanWord) => {
    if (selectedOption !== null) return;

    const correctAnswer = direction === 'fr-de' ? currentWord.german : currentWord.french;
    const selectedAnswer = direction === 'fr-de' ? option.german : option.french;
    const correct = selectedAnswer === correctAnswer;

    setSelectedOption(direction === 'fr-de' ? option.german : option.french);
    setIsCorrect(correct);

    setTimeout(() => {
      onAnswer(correct, currentWord);
      setSelectedOption(null);
      setIsCorrect(null);
    }, 1200);
  };

  if (!currentWord) return null;

  const question = direction === 'fr-de' ? currentWord.french : `${currentWord.article} ${currentWord.german}`;
  const getOptionText = (opt: GermanWord) => direction === 'fr-de' ? `${opt.article} ${opt.german}` : opt.french;
  const correctAnswer = direction === 'fr-de' ? `${currentWord.article} ${currentWord.german}` : currentWord.french;

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span className="font-medium">Menu</span>
        </button>
        <div className="flex items-center gap-4">
          <span className="text-slate-600 font-bold">{currentIndex + 1} / {words.length}</span>
          <div className="flex gap-2 text-sm">
            <span className="text-emerald-600 font-bold">✓ {stats.correct}</span>
            <span className="text-rose-500 font-bold">✗ {stats.incorrect}</span>
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-8">
        <div 
          className="h-full transition-all duration-500 rounded-full"
          style={{ 
            width: `${((currentIndex + 1) / words.length) * 100}%`,
            background: 'linear-gradient(90deg, var(--terracotta-500), var(--terracotta-600))'
          }}
        />
      </div>

      {/* Question */}
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 mb-8 text-center">
        <span className="font-bold text-sm uppercase tracking-widest mb-3 block" style={{ color: 'var(--terracotta-600)' }}>
          {direction === 'fr-de' ? 'Traduisez en allemand' : 'Traduisez en français'}
        </span>
        <h2 className="text-4xl font-black text-slate-800">{question}</h2>
        {direction === 'fr-de' && currentWord.level && (
          <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold">
            {currentWord.level}
          </span>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option, idx) => {
          const optionText = getOptionText(option);
          const isSelected = selectedOption === (direction === 'fr-de' ? option.german : option.french);
          const isCorrectOption = (direction === 'fr-de' ? option.german : option.french) === (direction === 'fr-de' ? currentWord.german : currentWord.french);

          let buttonClass = 'bg-white border-slate-100 text-slate-700 hover:border-blue-200';
          if (selectedOption !== null) {
            if (isSelected && isCorrect) {
              buttonClass = 'bg-emerald-50 border-emerald-500 text-emerald-700';
            } else if (isSelected && !isCorrect) {
              buttonClass = 'bg-rose-50 border-rose-500 text-rose-700';
            } else if (isCorrectOption) {
              buttonClass = 'bg-emerald-50 border-emerald-500 text-emerald-700';
            }
          }

          return (
            <button
              key={idx}
              disabled={selectedOption !== null}
              onClick={() => handleSelect(option)}
              className={`p-5 text-xl font-semibold rounded-2xl border-2 transition-all text-left ${buttonClass}`}
            >
              <span className="text-slate-400 text-sm block mb-1">{String.fromCharCode(65 + idx)}</span>
              {optionText}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ============================================
// MODE ÉCRITURE
// ============================================
interface WritingModeProps {
  words: GermanWord[];
  currentIndex: number;
  direction: Direction;
  onAnswer: (correct: boolean, currentWord?: GermanWord) => void;
  onBack: () => void;
  stats: SessionStats;
}

const WritingMode: React.FC<WritingModeProps> = ({ words, currentIndex, direction, onAnswer, onBack, stats }) => {
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentWord = words[currentIndex];
  if (!currentWord) return null;

  const question = direction === 'fr-de' ? currentWord.french : `${currentWord.article} ${currentWord.german}`;
  const correctAnswer = direction === 'fr-de' ? currentWord.german : currentWord.french;
  const fullCorrectAnswer = direction === 'fr-de' ? `${currentWord.article} ${currentWord.german}` : currentWord.french;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (showResult || !userInput.trim()) return;

    // Comparer les réponses (avec tolérance)
    const normalizedInput = normalizeString(userInput);
    const normalizedCorrect = normalizeString(correctAnswer);
    
    // Accepter aussi avec l'article pour fr->de
    const normalizedFullCorrect = normalizeString(fullCorrectAnswer);
    
    const correct = normalizedInput === normalizedCorrect || normalizedInput === normalizedFullCorrect;
    
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    onAnswer(isCorrect, currentWord);
    setUserInput('');
    setShowResult(false);
  };

  const handleSkip = () => {
    setIsCorrect(false);
    setShowResult(true);
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span className="font-medium">Menu</span>
        </button>
        <div className="flex items-center gap-4">
          <span className="text-slate-600 font-bold">{currentIndex + 1} / {words.length}</span>
          <div className="flex gap-2 text-sm">
            <span className="text-emerald-600 font-bold">✓ {stats.correct}</span>
            <span className="text-rose-500 font-bold">✗ {stats.incorrect}</span>
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-8">
        <div 
          className="h-full transition-all duration-500 rounded-full"
          style={{ 
            width: `${((currentIndex + 1) / words.length) * 100}%`,
            background: 'linear-gradient(90deg, var(--terracotta-500), var(--terracotta-600))'
          }}
        />
      </div>

      {/* Question */}
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 mb-8 text-center">
        <span className="font-bold text-sm uppercase tracking-widest mb-3 block" style={{ color: 'var(--terracotta-600)' }}>
          {direction === 'fr-de' ? 'Écrivez en allemand' : 'Écrivez en français'}
        </span>
        <h2 className="text-4xl font-black text-slate-800">{question}</h2>
        {currentWord.level && (
          <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold">
            {currentWord.level}
          </span>
        )}
      </div>

      {/* Zone de réponse */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={showResult}
            placeholder={direction === 'fr-de' ? 'Tapez la traduction allemande...' : 'Tapez la traduction française...'}
            className={`w-full text-2xl font-bold p-6 rounded-2xl border-2 outline-none transition-all ${
              showResult 
                ? (isCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-rose-50 border-rose-500 text-rose-700')
                : 'border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100'
            }`}
            autoFocus
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          {showResult && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl">
              {isCorrect ? '✓' : '✗'}
            </div>
          )}
        </div>

        {/* Afficher la bonne réponse si faux */}
        {showResult && !isCorrect && (
          <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-sm text-emerald-600 font-medium mb-1">Bonne réponse :</p>
            <p className="text-2xl font-black text-emerald-700">{fullCorrectAnswer}</p>
          </div>
        )}

        {/* Exemple */}
        {showResult && currentWord.example && (
          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-sm text-slate-500 font-medium mb-1">Exemple :</p>
            <p className="text-slate-700 italic">"{currentWord.example}"</p>
          </div>
        )}

        {/* Boutons */}
        <div className="flex gap-3">
          {!showResult ? (
            <>
              <button
                type="submit"
                disabled={!userInput.trim()}
                className="flex-1 font-bold py-4 rounded-xl transition-all text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--terracotta-600)' }}
              >
                Vérifier
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="px-6 py-4 rounded-xl border-2 border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-colors"
              >
                Je ne sais pas
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 font-bold py-4 rounded-xl transition-all text-white shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'var(--terracotta-600)' }}
            >
              Continuer →
            </button>
          )}
        </div>
      </form>

      {/* Aide clavier */}
      {!showResult && direction === 'fr-de' && (
        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm mb-2">Caractères spéciaux :</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(char => (
              <button
                key={char}
                type="button"
                onClick={() => setUserInput(prev => prev + char)}
                className="w-10 h-10 bg-white border border-slate-200 rounded-lg font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================
// MODE FLASHCARDS
// ============================================
interface FlashcardsModeProps {
  words: GermanWord[];
  currentIndex: number;
  direction: Direction;
  onAnswer: (correct: boolean, currentWord?: GermanWord) => void;
  onBack: () => void;
  stats: SessionStats;
}

const FlashcardsMode: React.FC<FlashcardsModeProps> = ({ words, currentIndex, direction, onAnswer, onBack, stats }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const currentWord = words[currentIndex];
  if (!currentWord) return null;

  const frontContent = direction === 'fr-de' ? currentWord.french : `${currentWord.article} ${currentWord.german}`;
  const backContent = direction === 'fr-de' ? `${currentWord.article} ${currentWord.german}` : currentWord.french;

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleAnswer = (correct: boolean) => {
    onAnswer(correct, currentWord);
    setIsFlipped(false);
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span className="font-medium">Menu</span>
        </button>
        <div className="flex items-center gap-4">
          <span className="text-slate-600 font-bold">{currentIndex + 1} / {words.length}</span>
          <div className="flex gap-2 text-sm">
            <span className="text-emerald-600 font-bold">✓ {stats.correct}</span>
            <span className="text-rose-500 font-bold">✗ {stats.incorrect}</span>
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-8">
        <div 
          className="h-full transition-all duration-500 rounded-full"
          style={{ 
            width: `${((currentIndex + 1) / words.length) * 100}%`,
            background: 'linear-gradient(90deg, var(--terracotta-500), var(--terracotta-600))'
          }}
        />
      </div>

      {/* Carte */}
      <div className="perspective-1000 mb-8">
        <div 
          className={`relative w-full h-80 cursor-pointer transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={!isFlipped ? handleFlip : undefined}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Face avant */}
          <div 
            className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center justify-center p-8 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--terracotta-600)' }}>
              {direction === 'fr-de' ? '🇫🇷 Français' : '🇩🇪 Allemand'}
            </span>
            <h2 className="text-4xl font-black text-slate-800 text-center mb-4">{frontContent}</h2>
            {currentWord.level && (
              <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold">
                {currentWord.level}
              </span>
            )}
            <p className="text-slate-400 mt-6 text-sm">Cliquez pour retourner</p>
          </div>

          {/* Face arrière */}
          <div 
            className="absolute inset-0 bg-gradient-to-br rounded-3xl shadow-xl flex flex-col items-center justify-center p-8"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'linear-gradient(135deg, var(--terracotta-500), var(--terracotta-600))'
            }}
          >
            <span className="font-bold text-sm uppercase tracking-widest mb-4 text-white/80">
              {direction === 'fr-de' ? '🇩🇪 Allemand' : '🇫🇷 Français'}
            </span>
            <h2 className="text-4xl font-black text-white text-center mb-4">{backContent}</h2>
            {currentWord.plural && currentWord.plural !== 'n/a' && direction === 'fr-de' && (
              <p className="text-white/80 text-sm">Pluriel : {currentWord.plural}</p>
            )}
            {currentWord.example && (
              <p className="text-white/70 text-sm mt-4 italic text-center">"{currentWord.example}"</p>
            )}
          </div>
        </div>
      </div>

      {/* Boutons de réponse */}
      {!isFlipped ? (
        <button
          onClick={handleFlip}
          className="w-full font-bold py-4 rounded-xl transition-all text-white shadow-lg hover:shadow-xl"
          style={{ backgroundColor: 'var(--terracotta-600)' }}
        >
          🔄 Retourner la carte
        </button>
      ) : (
        <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => handleAnswer(false)}
            className="flex flex-col items-center gap-2 p-6 rounded-2xl border-2 border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 hover:border-rose-300 transition-all"
          >
            <span className="text-3xl">😓</span>
            <span className="font-bold">Je ne savais pas</span>
          </button>
          <button
            onClick={() => handleAnswer(true)}
            className="flex flex-col items-center gap-2 p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 transition-all"
          >
            <span className="text-3xl">😊</span>
            <span className="font-bold">Je savais !</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default VocabularyTrainer;

