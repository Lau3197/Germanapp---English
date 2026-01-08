import React, { useState, useEffect, useCallback } from 'react';
import { useSpacedRepetition, WordProgress } from '../hooks/useSpacedRepetition';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { THEMES } from '../constants';

type RevisionMode = 'menu' | 'session' | 'results';
type AnswerState = 'waiting' | 'correct' | 'incorrect';

export const RevisionView: React.FC = () => {
  const {
    addWords,
    getWordsToReview,
    getStats,
    recordAnswer,
    isLoaded,
  } = useSpacedRepetition();

  const [mode, setMode] = useState<RevisionMode>('menu');
  const [sessionWords, setSessionWords] = useState<WordProgress[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('waiting');
  const [userInput, setUserInput] = useState('');
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
  const [reviewType, setReviewType] = useState<'flashcard' | 'writing'>('flashcard');
  const [direction, setDirection] = useState<'de-fr' | 'fr-de'>('de-fr');

  const stats = getStats();
  const wordsToReview = getWordsToReview();

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

  const startSession = useCallback((wordCount: number = 20) => {
    const words = getWordsToReview(wordCount);
    if (words.length === 0) return;
    
    setSessionWords(words);
    setCurrentIndex(0);
    setSessionStats({ correct: 0, incorrect: 0 });
    setShowAnswer(false);
    setAnswerState('waiting');
    setUserInput('');
    setMode('session');
  }, [getWordsToReview]);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    const currentWord = sessionWords[currentIndex];
    if (!currentWord) return;

    recordAnswer(currentWord.wordId, isCorrect);
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    setSessionStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
    }));

    // Passer au mot suivant après un délai
    setTimeout(() => {
      if (currentIndex < sessionWords.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setShowAnswer(false);
        setAnswerState('waiting');
        setUserInput('');
      } else {
        setMode('results');
      }
    }, 1000);
  }, [sessionWords, currentIndex, recordAnswer]);

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

  const currentWord = sessionWords[currentIndex];

  // Écran du menu
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
              {stats.learningWords}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--sand-600)' }}>En cours</p>
          </div>
          <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--sage-100)' }}>
            <p className="text-3xl font-black" style={{ color: 'var(--sage-700)' }}>
              {stats.todayReviewed}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--sage-600)' }}>Aujourd'hui</p>
          </div>
        </div>

        {/* Boîtes Leitner */}
        <div className="bg-white rounded-2xl p-6 mb-8 border" style={{ borderColor: 'var(--sand-200)' }}>
          <h3 className="font-bold mb-4" style={{ color: 'var(--sand-800)' }}>Système de boîtes</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(box => {
              const count = Array.from(getWordsToReview(1000)).filter(w => w.box === box).length;
              const totalInBox = stats.totalWords > 0 
                ? Math.round((box === 1 ? stats.newWords : box === 5 ? stats.masteredWords : 0) / stats.totalWords * 100)
                : 0;
              const labels = ['Nouveau', '1 jour', '3 jours', '1 semaine', '2 semaines'];
              
              return (
                <div 
                  key={box} 
                  className="flex-1 p-4 rounded-xl text-center transition-all"
                  style={{ 
                    backgroundColor: box === 1 ? 'var(--coral-50)' : 
                                    box === 5 ? 'var(--turquoise-50)' : 'var(--sand-50)',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderColor: box === 1 ? 'var(--coral-200)' : 
                                box === 5 ? 'var(--turquoise-200)' : 'var(--sand-200)'
                  }}
                >
                  <p className="text-2xl font-black" style={{ 
                    color: box === 1 ? 'var(--coral-600)' : 
                           box === 5 ? 'var(--turquoise-600)' : 'var(--sand-600)' 
                  }}>
                    {box}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--sand-500)' }}>{labels[box - 1]}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Options de révision */}
        <div className="bg-white rounded-2xl p-6 mb-8 border" style={{ borderColor: 'var(--sand-200)' }}>
          <h3 className="font-bold mb-4" style={{ color: 'var(--sand-800)' }}>Options</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--sand-600)' }}>
                Type d'exercice
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setReviewType('flashcard')}
                  className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
                    reviewType === 'flashcard' ? 'text-white' : ''
                  }`}
                  style={{
                    backgroundColor: reviewType === 'flashcard' ? 'var(--coral-500)' : 'var(--sand-100)',
                    color: reviewType === 'flashcard' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🃏 Flashcards
                </button>
                <button
                  onClick={() => setReviewType('writing')}
                  className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
                    reviewType === 'writing' ? 'text-white' : ''
                  }`}
                  style={{
                    backgroundColor: reviewType === 'writing' ? 'var(--coral-500)' : 'var(--sand-100)',
                    color: reviewType === 'writing' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  ✍️ Écriture
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--sand-600)' }}>
                Direction
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDirection('de-fr')}
                  className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all`}
                  style={{
                    backgroundColor: direction === 'de-fr' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: direction === 'de-fr' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🇩🇪 → 🇫🇷
                </button>
                <button
                  onClick={() => setDirection('fr-de')}
                  className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all`}
                  style={{
                    backgroundColor: direction === 'fr-de' ? 'var(--turquoise-500)' : 'var(--sand-100)',
                    color: direction === 'fr-de' ? 'white' : 'var(--sand-700)'
                  }}
                >
                  🇫🇷 → 🇩🇪
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de démarrage */}
        {stats.wordsToReview > 0 ? (
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
              onClick={() => startSession(stats.wordsToReview)}
              className="px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 border-2"
              style={{ 
                borderColor: 'var(--coral-500)', 
                color: 'var(--coral-500)',
                backgroundColor: 'white'
              }}
            >
              Tout réviser ({stats.wordsToReview})
            </button>
          </div>
        ) : (
          <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--turquoise-50)' }}>
            <p className="text-4xl mb-4">🎉</p>
            <p className="text-xl font-bold" style={{ color: 'var(--turquoise-700)' }}>
              Aucun mot à réviser !
            </p>
            <p style={{ color: 'var(--turquoise-600)' }}>
              Revenez plus tard ou ajoutez des mots depuis le vocabulaire.
            </p>
          </div>
        )}
      </div>
    );
  }

  // Écran de session
  if (mode === 'session' && currentWord) {
    const progress = ((currentIndex + 1) / sessionWords.length) * 100;
    const question = direction === 'de-fr' ? currentWord.german : currentWord.french;
    const answer = direction === 'de-fr' ? currentWord.french : currentWord.german;

    return (
      <div className="max-w-2xl mx-auto">
        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--sand-600)' }}>
            <span>Mot {currentIndex + 1} / {sessionWords.length}</span>
            <span>Boîte {currentWord.box}/5</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--sand-200)' }}>
            <div 
              className="h-full rounded-full transition-all duration-300"
              style={{ 
                width: `${progress}%`,
                backgroundColor: 'var(--coral-500)'
              }}
            />
          </div>
        </div>

        {/* Carte */}
        <div 
          className={`p-8 rounded-3xl text-center mb-8 transition-all ${
            answerState === 'correct' ? 'ring-4 ring-green-400' :
            answerState === 'incorrect' ? 'ring-4 ring-red-400' : ''
          }`}
          style={{ 
            backgroundColor: 'white',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}
        >
          {/* Question */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--sand-500)' }}>
              {direction === 'de-fr' ? '🇩🇪 Allemand' : '🇫🇷 Français'}
            </p>
            <p className="text-3xl font-black" style={{ color: 'var(--sand-800)' }}>
              {question}
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--sand-400)' }}>
              Thème : {THEMES.find(t => t.id === currentWord.theme)?.name || currentWord.theme}
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
                    className="w-full px-4 py-3 rounded-xl border-2 text-center text-lg font-medium focus:outline-none transition-all"
                    style={{ 
                      borderColor: 'var(--sand-300)',
                      backgroundColor: 'var(--sand-50)'
                    }}
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
        </div>

        {/* Boutons de réponse (Flashcard) */}
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
        {answerState !== 'waiting' && (
          <div className={`text-center p-4 rounded-xl font-bold text-lg ${
            answerState === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {answerState === 'correct' ? '✅ Correct ! Boîte +1' : '❌ Incorrect. Retour boîte 1'}
          </div>
        )}

        {/* Bouton quitter */}
        <button
          onClick={() => setMode('menu')}
          className="mt-8 w-full py-3 rounded-xl font-medium transition-all"
          style={{ 
            backgroundColor: 'var(--sand-100)',
            color: 'var(--sand-600)'
          }}
        >
          Quitter la session
        </button>
      </div>
    );
  }

  // Écran des résultats
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

          <p style={{ color: 'var(--sand-600)' }}>
            {percentage >= 80 
              ? 'Excellent travail ! Vos mots montent dans les boîtes.'
              : percentage >= 50 
              ? 'Bon travail ! Continuez à réviser régulièrement.'
              : 'Pas de souci, les mots difficiles reviendront plus souvent.'}
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setMode('menu')}
            className="px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
            style={{ 
              backgroundColor: 'var(--sand-100)',
              color: 'var(--sand-700)'
            }}
          >
            Retour au menu
          </button>
          {stats.wordsToReview > 0 && (
            <button
              onClick={() => startSession(20)}
              className="px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--coral-500)' }}
            >
              Continuer à réviser
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
};

