import React, { useState, useEffect, useMemo } from 'react';
import { useSpacedRepetition, WordProgress } from '../hooks/useSpacedRepetition';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { THEMES } from '../constants';

type RevisionMode = 'menu' | 'session' | 'results';
type Direction = 'fr-de' | 'de-fr';

export const RevisionView: React.FC = () => {
  const {
    isLoaded,
    addWords,
    recordAnswer,
    getWordsToReview,
    getStats,
    getBoxStats,
    resetAll,
  } = useSpacedRepetition();

  const [mode, setMode] = useState<RevisionMode>('menu');
  const [direction, setDirection] = useState<Direction>('fr-de');
  const [sessionWords, setSessionWords] = useState<WordProgress[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
  const [showImportModal, setShowImportModal] = useState(false);

  const stats = useMemo(() => getStats(), [getStats, isLoaded]);
  const boxStats = useMemo(() => getBoxStats(), [getBoxStats, isLoaded]);
  const wordsToReview = useMemo(() => getWordsToReview(), [getWordsToReview, isLoaded]);

  // Importer tous les mots d'un thème
  const importTheme = (themeId: string) => {
    const themeData = VOCABULARY_DATA[themeId];
    if (!themeData) return;

    const theme = THEMES.find(t => t.id === themeId);
    const themeName = theme?.name || themeId;

    const wordsToAdd = themeData.words.map(w => ({
      german: w.german,
      french: w.french,
      theme: themeName,
      article: w.article || undefined,
    }));

    addWords(wordsToAdd);
    setShowImportModal(false);
  };

  // Importer tous les thèmes
  const importAllThemes = () => {
    THEMES.forEach(theme => {
      const themeData = VOCABULARY_DATA[theme.id];
      if (themeData) {
        const wordsToAdd = themeData.words.map(w => ({
          german: w.german,
          french: w.french,
          theme: theme.name,
          article: w.article || undefined,
        }));
        addWords(wordsToAdd);
      }
    });
    setShowImportModal(false);
  };

  // Démarrer une session de révision
  const startSession = () => {
    const words = getWordsToReview();
    if (words.length === 0) return;
    
    // Mélanger les mots
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setSessionWords(shuffled.slice(0, 20)); // Max 20 mots par session
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionStats({ correct: 0, incorrect: 0 });
    setMode('session');
  };

  // Enregistrer une réponse
  const handleAnswer = (isCorrect: boolean) => {
    const currentWord = sessionWords[currentIndex];
    recordAnswer(currentWord.wordId, isCorrect);
    
    setSessionStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
    }));

    // Passer au mot suivant ou terminer
    if (currentIndex < sessionWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      setMode('results');
    }
  };

  // Vue Menu
  if (mode === 'menu') {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--coral-700)' }}>
            🔄 Révision Espacée
          </h2>
          <p className="text-lg" style={{ color: 'var(--sand-600)' }}>
            Système Leitner : les mots difficiles reviennent plus souvent
          </p>
        </div>

        {/* Stats principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            label="À réviser" 
            value={stats.wordsToReview} 
            color="var(--coral-500)"
            icon="📚"
          />
          <StatCard 
            label="Total" 
            value={stats.totalWords} 
            color="var(--turquoise-500)"
            icon="📖"
          />
          <StatCard 
            label="Maîtrisés" 
            value={stats.masteredWords} 
            color="var(--sage-500)"
            icon="🏆"
          />
          <StatCard 
            label="Précision" 
            value={`${stats.accuracy}%`} 
            color="var(--sand-600)"
            icon="🎯"
          />
        </div>

        {/* Boîtes Leitner */}
        <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-100">
          <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--sand-800)' }}>
            📦 Distribution des mots
          </h3>
          <div className="flex gap-2 items-end h-32">
            {[1, 2, 3, 4, 5].map(box => {
              const count = boxStats[box] || 0;
              const maxCount = Math.max(...Object.values(boxStats), 1);
              const height = (count / maxCount) * 100;
              const intervals = ['1j', '2j', '4j', '7j', '14j'];
              
              return (
                <div key={box} className="flex-1 flex flex-col items-center">
                  <span className="text-xs font-bold mb-1" style={{ color: 'var(--sand-600)' }}>
                    {count}
                  </span>
                  <div 
                    className="w-full rounded-t-lg transition-all"
                    style={{ 
                      height: `${Math.max(height, 5)}%`,
                      backgroundColor: box === 5 ? 'var(--sage-400)' : `var(--coral-${200 + box * 100})`,
                    }}
                  />
                  <div className="mt-2 text-center">
                    <p className="text-sm font-bold" style={{ color: 'var(--sand-700)' }}>
                      Boîte {box}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--sand-500)' }}>
                      {intervals[box - 1]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          {stats.wordsToReview > 0 ? (
            <button
              onClick={startSession}
              className="w-full py-4 rounded-2xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-lg flex items-center justify-center gap-3"
              style={{ backgroundColor: 'var(--coral-500)' }}
            >
              <span className="text-2xl">🎯</span>
              Réviser {Math.min(stats.wordsToReview, 20)} mot{stats.wordsToReview > 1 ? 's' : ''}
            </button>
          ) : stats.totalWords > 0 ? (
            <div className="w-full py-4 rounded-2xl text-center font-bold text-lg" style={{ backgroundColor: 'var(--sage-100)', color: 'var(--sage-700)' }}>
              ✅ Tout est révisé ! Revenez demain.
            </div>
          ) : null}

          <div className="flex gap-4">
            <button
              onClick={() => setShowImportModal(true)}
              className="flex-1 py-3 rounded-xl font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-700)' }}
            >
              <span>📥</span> Importer du vocabulaire
            </button>
            
            {stats.totalWords > 0 && (
              <button
                onClick={() => {
                  if (confirm('Réinitialiser toutes les données de révision ?')) {
                    resetAll();
                  }
                }}
                className="px-4 py-3 rounded-xl font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}
              >
                🗑️
              </button>
            )}
          </div>

          {/* Direction toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="text-sm font-medium" style={{ color: 'var(--sand-600)' }}>Direction :</span>
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setDirection('fr-de')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  direction === 'fr-de' ? 'bg-white shadow-sm' : ''
                }`}
                style={{ color: direction === 'fr-de' ? 'var(--coral-600)' : 'var(--sand-500)' }}
              >
                🇫🇷 → 🇩🇪
              </button>
              <button
                onClick={() => setDirection('de-fr')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  direction === 'de-fr' ? 'bg-white shadow-sm' : ''
                }`}
                style={{ color: direction === 'de-fr' ? 'var(--coral-600)' : 'var(--sand-500)' }}
              >
                🇩🇪 → 🇫🇷
              </button>
            </div>
          </div>
        </div>

        {/* Modal d'import */}
        {showImportModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold" style={{ color: 'var(--sand-800)' }}>
                  📥 Importer du vocabulaire
                </h3>
                <button
                  onClick={() => setShowImportModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <button
                onClick={importAllThemes}
                className="w-full py-4 mb-4 rounded-xl font-bold transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--coral-100)', color: 'var(--coral-700)' }}
              >
                📚 Importer TOUS les thèmes
              </button>

              <p className="text-sm mb-4" style={{ color: 'var(--sand-500)' }}>
                Ou choisissez un thème spécifique :
              </p>

              <div className="grid grid-cols-2 gap-2">
                {THEMES.map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => importTheme(theme.id)}
                    className="p-3 rounded-xl text-left transition-all hover:shadow-md border"
                    style={{ borderColor: 'var(--sand-200)' }}
                  >
                    <span className="text-2xl">{theme.icon}</span>
                    <p className="font-semibold text-sm mt-1" style={{ color: 'var(--sand-700)' }}>
                      {theme.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Vue Session de révision
  if (mode === 'session' && sessionWords.length > 0) {
    const currentWord = sessionWords[currentIndex];
    const progress = ((currentIndex + 1) / sessionWords.length) * 100;

    return (
      <div className="max-w-2xl mx-auto">
        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => setMode('menu')}
              className="text-sm font-semibold flex items-center gap-1"
              style={{ color: 'var(--coral-600)' }}
            >
              ← Quitter
            </button>
            <span className="text-sm font-bold" style={{ color: 'var(--sand-600)' }}>
              {currentIndex + 1} / {sessionWords.length}
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--sand-200)' }}>
            <div 
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%`, backgroundColor: 'var(--coral-500)' }}
            />
          </div>
        </div>

        {/* Carte */}
        <div 
          className="bg-white rounded-3xl p-8 shadow-xl mb-8 min-h-[300px] flex flex-col items-center justify-center cursor-pointer"
          onClick={() => !showAnswer && setShowAnswer(true)}
        >
          {/* Boîte actuelle */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
            style={{ 
              backgroundColor: currentWord.box === 5 ? 'var(--sage-100)' : 'var(--coral-100)',
              color: currentWord.box === 5 ? 'var(--sage-700)' : 'var(--coral-700)'
            }}
          >
            Boîte {currentWord.box}
          </div>

          {/* Question */}
          <p className="text-sm font-semibold mb-4" style={{ color: 'var(--sand-500)' }}>
            {direction === 'fr-de' ? '🇫🇷 Français → Allemand' : '🇩🇪 Allemand → Français'}
          </p>
          
          <p className="text-3xl font-black text-center mb-6" style={{ color: 'var(--sand-800)' }}>
            {direction === 'fr-de' ? currentWord.french : (
              currentWord.article ? `${currentWord.article} ${currentWord.german}` : currentWord.german
            )}
          </p>

          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="px-6 py-3 rounded-xl font-semibold transition-all"
              style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
            >
              Voir la réponse
            </button>
          ) : (
            <div className="text-center animate-in fade-in duration-300">
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--sage-600)' }}>
                Réponse :
              </p>
              <p className="text-2xl font-bold" style={{ color: 'var(--sage-700)' }}>
                {direction === 'fr-de' ? (
                  currentWord.article ? `${currentWord.article} ${currentWord.german}` : currentWord.german
                ) : currentWord.french}
              </p>
            </div>
          )}
        </div>

        {/* Boutons de réponse */}
        {showAnswer && (
          <div className="flex gap-4 animate-in slide-in-from-bottom duration-300">
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 py-4 rounded-2xl font-bold text-lg transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}
            >
              <span className="text-2xl">❌</span>
              Je ne savais pas
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 py-4 rounded-2xl font-bold text-lg transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}
            >
              <span className="text-2xl">✅</span>
              Je savais !
            </button>
          </div>
        )}

        {/* Stats de session */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <p className="text-2xl font-black" style={{ color: '#16a34a' }}>{sessionStats.correct}</p>
            <p className="text-xs" style={{ color: 'var(--sand-500)' }}>Correct</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-black" style={{ color: '#dc2626' }}>{sessionStats.incorrect}</p>
            <p className="text-xs" style={{ color: 'var(--sand-500)' }}>Incorrect</p>
          </div>
        </div>
      </div>
    );
  }

  // Vue Résultats
  if (mode === 'results') {
    const total = sessionStats.correct + sessionStats.incorrect;
    const accuracy = total > 0 ? Math.round((sessionStats.correct / total) * 100) : 0;

    return (
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-6xl mb-4">
            {accuracy >= 80 ? '🎉' : accuracy >= 50 ? '👍' : '💪'}
          </div>
          
          <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--sand-800)' }}>
            Session terminée !
          </h2>
          
          <p className="text-lg mb-8" style={{ color: 'var(--sand-600)' }}>
            {accuracy >= 80 ? 'Excellent travail !' : accuracy >= 50 ? 'Bien joué !' : 'Continuez, vous progressez !'}
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <p className="text-4xl font-black" style={{ color: '#16a34a' }}>{sessionStats.correct}</p>
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>Correct</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black" style={{ color: '#dc2626' }}>{sessionStats.incorrect}</p>
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>Incorrect</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black" style={{ color: 'var(--coral-600)' }}>{accuracy}%</p>
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>Précision</p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startSession}
              className="w-full py-3 rounded-xl font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--coral-500)', color: 'white' }}
            >
              🔄 Nouvelle session
            </button>
            <button
              onClick={() => setMode('menu')}
              className="w-full py-3 rounded-xl font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
            >
              ← Retour au menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Composant StatCard
const StatCard: React.FC<{ label: string; value: number | string; color: string; icon: string }> = ({ 
  label, value, color, icon 
}) => (
  <div className="bg-white rounded-2xl p-4 border border-gray-100">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-semibold" style={{ color: 'var(--sand-500)' }}>{label}</span>
    </div>
    <p className="text-3xl font-black" style={{ color }}>{value}</p>
  </div>
);

