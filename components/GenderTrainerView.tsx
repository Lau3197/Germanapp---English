import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { AppTheme, GermanWord, LanguageLevel } from '../types';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { usePandaMascot } from '../contexts/PandaMascotContext';
import { findGenderRule } from '../data/genderRules';
import { getTranslation, getThemeLanguage } from '../utils/translations';
import { useExerciseProgress } from '../hooks/useExerciseProgress';
import { useExerciseFavorites } from '../hooks/useExerciseFavorites';

type Article = 'der' | 'die' | 'das';
type Phase = 'menu' | 'drill' | 'result';

// Bold the target word where it appears inside its example sentence, so the
// noun is visible in context rather than just as an isolated flashcard term.
const highlightWordInExample = (example: string, word: string): React.ReactNode => {
  const idx = example.toLowerCase().indexOf(word.toLowerCase());
  if (idx === -1) return example;
  const before = example.slice(0, idx);
  const match = example.slice(idx, idx + word.length);
  const after = example.slice(idx + word.length);
  return <>{before}<strong className="not-italic font-black text-slate-700">{match}</strong>{after}</>;
};

interface SessionStats {
  correct: number;
  incorrect: number;
  total: number;
}

// Visual config for each gender. der = blue, die = rose, das = emerald —
// the de-facto colour convention across German-learning tools.
// Colours are applied via inline styles because the app themes every
// `.rounded-*` border globally, which would otherwise swallow border classes.
const GENDERS: {
  key: Article;
  hint: string;
  solid: string; // strong fill (correct answer, legend)
  tint: string;  // soft idle background
  text: string;  // coloured text token (not border-overridden)
}[] = [
  { key: 'der', hint: 'masculine', solid: '#3b82f6', tint: '#eff6ff', text: '#1d4ed8' },
  { key: 'die', hint: 'feminine', solid: '#f43f5e', tint: '#fff1f2', text: '#be123c' },
  { key: 'das', hint: 'neuter', solid: '#10b981', tint: '#ecfdf5', text: '#047857' },
];

const GENDER_BY_KEY = Object.fromEntries(GENDERS.map(g => [g.key, g])) as Record<Article, (typeof GENDERS)[number]>;

const LEVELS: (LanguageLevel | 'All')[] = ['All', LanguageLevel.A1, LanguageLevel.A2, LanguageLevel.B1, LanguageLevel.B2, LanguageLevel.C1, LanguageLevel.C2];

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Every noun that carries a gender, deduplicated across themes.
const ALL_NOUNS: GermanWord[] = (() => {
  const seen = new Set<string>();
  const nouns: GermanWord[] = [];
  Object.values(VOCABULARY_DATA).forEach(content => {
    content.words.forEach(word => {
      if (word.article === 'der' || word.article === 'die' || word.article === 'das') {
        const key = `${word.article}|${word.german}`;
        if (!seen.has(key)) {
          seen.add(key);
          nouns.push(word);
        }
      }
    });
  });
  return nouns;
})();

interface GenderTrainerViewProps {
  appTheme?: AppTheme;
}

export const GenderTrainerView: React.FC<GenderTrainerViewProps> = ({ appTheme = 'classic' }) => {
  const { triggerMood } = usePandaMascot();
  const { results, completedIds, practicedIds, recordAnswer, resetProgress } = useExerciseProgress('trainerProgress_gender_en');
  const { favoriteIds, toggleFavorite } = useExerciseFavorites('trainerFavorites_gender_en');

  const [phase, setPhase] = useState<Phase>('menu');
  const [selectedLevel, setSelectedLevel] = useState<LanguageLevel | 'All'>('All');
  const [wordCount, setWordCount] = useState<number | 'all'>(20);

  const [sessionWords, setSessionWords] = useState<GermanWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const [stats, setStats] = useState<SessionStats>({ correct: 0, incorrect: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [missed, setMissed] = useState<GermanWord[]>([]);
  const [isRevision, setIsRevision] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [includePreviousErrors, setIncludePreviousErrors] = useState(true);

  // Nouns available for the current level filter.
  const availableNouns = useMemo(() => {
    if (selectedLevel === 'All') return ALL_NOUNS;
    return ALL_NOUNS.filter(w => w.level === selectedLevel);
  }, [selectedLevel]);

  const getNounId = useCallback((word: GermanWord) => `${word.article}|${word.german}`.toLowerCase(), []);
  const studyNouns = useMemo(
    () => availableNouns.filter(word => !favoritesOnly || favoriteIds.has(getNounId(word))),
    [availableNouns, favoritesOnly, favoriteIds, getNounId]
  );
  const unmasteredNouns = useMemo(
    () => studyNouns.filter(word => !completedIds.has(getNounId(word))),
    [studyNouns, completedIds, getNounId]
  );
  const hasPastError = useCallback(
    (word: GermanWord) => (results[getNounId(word)]?.incorrect || 0) > 0,
    [results, getNounId]
  );
  const drillNouns = useMemo(
    () => includePreviousErrors
      ? unmasteredNouns
      : unmasteredNouns.filter(word => !hasPastError(word)),
    [includePreviousErrors, unmasteredNouns, hasPastError]
  );

  const startSession = useCallback((pool: GermanWord[], revision: boolean, includeMastered = false) => {
    const count = revision || wordCount === 'all'
      ? pool.length
      : Math.min(wordCount, pool.length);
    // Past mistakes go to the front of the queue before slicing: the pool holds
    // hundreds of nouns, so a plain shuffle would almost never draw the few the
    // learner actually got wrong. Reshuffled afterwards so they aren't bunched
    // at the start of the drill.
    const ordered = includeMastered
      ? [...pool].sort((a, b) => {
        const resultA = results[getNounId(a)];
        const resultB = results[getNounId(b)];
        const incorrectDifference = (resultB?.incorrect || 0) - (resultA?.incorrect || 0);
        if (incorrectDifference !== 0) return incorrectDifference;
        const accuracyA = resultA?.attempts ? resultA.correct / resultA.attempts : 0;
        const accuracyB = resultB?.attempts ? resultB.correct / resultB.attempts : 0;
        if (accuracyA !== accuracyB) return accuracyA - accuracyB;
        return (resultA?.attempts || 0) - (resultB?.attempts || 0);
      })
      : revision || !includePreviousErrors
      ? shuffleArray(pool)
      : [...shuffleArray(pool.filter(hasPastError)), ...shuffleArray(pool.filter(word => !hasPastError(word)))];
    const words = includeMastered ? ordered.slice(0, count) : shuffleArray(ordered.slice(0, count));
    setSessionWords(words);
    setCurrentIndex(0);
    setSelected(null);
    setStats({ correct: 0, incorrect: 0, total: words.length });
    setStreak(0);
    setBestStreak(0);
    setMissed([]);
    setIsRevision(revision);
    setShowHint(false);
    setPhase('drill');
  }, [wordCount, includePreviousErrors, hasPastError, results, getNounId]);

  const currentWord = sessionWords[currentIndex];

  const handleAnswer = useCallback((choice: Article) => {
    if (selected !== null || !currentWord) return;

    const correct = choice === currentWord.article;
    recordAnswer(getNounId(currentWord), correct);
    setSelected(choice);
    setStats(prev => ({
      ...prev,
      correct: prev.correct + (correct ? 1 : 0),
      incorrect: prev.incorrect + (correct ? 0 : 1),
    }));

    if (correct) {
      setStreak(prev => {
        const next = prev + 1;
        setBestStreak(b => Math.max(b, next));
        return next;
      });
      triggerMood(streak >= 4 ? 'dancing' : 'celebrating', streak >= 4 ? 12000 : 16000);
    } else {
      setStreak(0);
      setMissed(prev => (prev.some(w => w.german === currentWord.german) ? prev : [...prev, currentWord]));
      // Keep Adolfino in the full slow paw-raise sequence while the correction is visible.
      triggerMood('encouraging', 16000);
    }
  }, [selected, currentWord, streak, triggerMood, recordAnswer, getNounId]);

  // Manual advance only — triggered by the Next button or Enter, never automatic.
  const advanceToNext = useCallback(() => {
    setSelected(null);
    setShowHint(false);
    if (currentIndex < sessionWords.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setPhase('result');
    }
  }, [currentIndex, sessionWords.length]);

  // Keyboard: 1/2/3 (or d/f/g) map to der/die/das; Enter advances once answered.
  useEffect(() => {
    if (phase !== 'drill') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (selected !== null) {
          e.preventDefault();
          advanceToNext();
        }
        return;
      }
      if (selected !== null) return;
      const map: Record<string, Article> = {
        '1': 'der', '2': 'die', '3': 'das',
        d: 'der', f: 'die', g: 'das',
      };
      const choice = map[e.key.toLowerCase()];
      if (choice) {
        e.preventDefault();
        handleAnswer(choice);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, selected, handleAnswer, advanceToNext]);

  useEffect(() => {
    if (phase === 'result') triggerMood('celebrating', 4200);
  }, [phase, triggerMood]);

  const backToMenu = () => {
    setPhase('menu');
    setSelected(null);
    setCurrentIndex(0);
  };

  // ============================================
  // RESULT
  // ============================================
  if (phase === 'result') {
    const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : percentage >= 40 ? '💪' : '📚';
    const message = percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good job!' : percentage >= 40 ? 'Keep going!' : 'A bit more practice!';
    const hasErrors = missed.length > 0;

    return (
      <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-500">
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center border border-slate-100">
          {isRevision && (
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                🔄 Review Mode
              </span>
            </div>
          )}

          <div className="text-7xl mb-6 animate-bounce">{emoji}</div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">{message}</h2>
          <p className="text-slate-500 mb-6">Der / Die / Das drill finished</p>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 mb-6">
            <div className="text-5xl font-black mb-2" style={{ color: 'var(--terracotta-600)' }}>
              {stats.correct} / {stats.total}
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <span className="text-emerald-600 font-bold">✓ {stats.correct} correct</span>
              <span className="text-rose-500 font-bold">✗ {stats.incorrect} mistake{stats.incorrect > 1 ? 's' : ''}</span>
            </div>
            <p className="text-slate-500 text-sm mt-3">🔥 Best streak: <span className="font-bold">{bestStreak}</span></p>
          </div>

          <div className="h-4 bg-slate-200 rounded-full overflow-hidden mb-6">
            <div
              className="h-full transition-all duration-1000 rounded-full"
              style={{ width: `${percentage}%`, background: `linear-gradient(90deg, var(--terracotta-500), var(--terracotta-600))` }}
            />
          </div>

          {hasErrors && (
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 mb-6 text-left">
              <p className="text-rose-700 font-bold text-sm mb-3 flex items-center gap-2">
                <span>📝</span> Genders to review ({missed.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {missed.map((word, idx) => {
                  const g = GENDER_BY_KEY[word.article as Article];
                  const rule = findGenderRule(word.german);
                  return (
                    <span key={idx} className="px-3 py-1 bg-white border border-rose-200 rounded-lg text-sm text-slate-700">
                      <span className="font-bold" style={{ color: g?.text }}>{word.article}</span> {word.german}
                      {rule && <span className="ml-1.5 text-[10px] font-bold text-slate-400">{rule.label}</span>}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <div className="space-y-3">
            {hasErrors && (
              <button
                onClick={() => startSession(missed, true)}
                className="w-full font-bold py-4 rounded-xl transition-all text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-amber-500 to-orange-500"
              >
                🔄 Review {missed.length} mistake{missed.length > 1 ? 's' : ''}
              </button>
            )}
            <button
              onClick={() => startSession(drillNouns, false)}
              className={`w-full font-bold py-4 rounded-xl transition-all ${hasErrors ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'text-white shadow-lg hover:shadow-xl'}`}
              style={!hasErrors ? { backgroundColor: 'var(--terracotta-600)' } : {}}
            >
              {hasErrors ? '🔁 New full session' : '🔄 Restart'}
            </button>
            <button
              onClick={backToMenu}
              className="w-full bg-slate-100 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors"
            >
              ← Change settings
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // DRILL
  // ============================================
  if (phase === 'drill' && currentWord) {
    const answered = selected !== null;
    const progress = ((currentIndex + (answered ? 1 : 0)) / sessionWords.length) * 100;
    const rule = findGenderRule(currentWord.german);
    const ruleMatches = rule ? rule.article === currentWord.article : false;
    const ruleColor = rule ? GENDER_BY_KEY[rule.article]?.text : undefined;
    const translation = getTranslation(currentWord, getThemeLanguage(appTheme));

    return (
      <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={backToMenu} className="text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Menu</span>
          </button>
          <div className="flex items-center gap-4">
            {streak >= 2 && (
              <span className="text-orange-500 font-bold text-sm animate-in fade-in">🔥 {streak}</span>
            )}
            <span className="text-slate-600 font-bold">{currentIndex + 1} / {sessionWords.length}</span>
            <div className="flex gap-2 text-sm">
              <span className="text-emerald-600 font-bold">✓ {stats.correct}</span>
              <span className="text-rose-500 font-bold">✗ {stats.incorrect}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-8">
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--terracotta-500), var(--terracotta-600))' }}
          />
        </div>

        {/* Word */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 mb-8 text-center">
          <span className="font-bold text-sm uppercase tracking-widest mb-3 block" style={{ color: 'var(--terracotta-600)' }}>
            Which article?
          </span>
          <h2 className="text-5xl font-black text-slate-800">{currentWord.german}</h2>
          <button type="button" onClick={() => toggleFavorite(getNounId(currentWord))} className="mt-3 font-bold" style={{ color: favoriteIds.has(getNounId(currentWord)) ? '#d97706' : 'var(--sand-500)' }}>
            {favoriteIds.has(getNounId(currentWord)) ? '★ Favorite' : '☆ Add to favorites'}
          </button>
          {translation && <p className="gender-card-translation">{translation}</p>}

          {/* Optional pre-answer hint: general pattern only, doesn't confirm this word */}
          {!answered && rule && (
            <div className="mt-4">
              {showHint ? (
                <p className="text-xs italic px-3 py-2 rounded-lg inline-block" style={{ backgroundColor: '#f8fafc', color: '#64748b' }}>
                  💡 {rule.description}
                </p>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowHint(true)}
                  className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 transition-colors"
                >
                  💡 Show grammar hint
                </button>
              )}
            </div>
          )}

          {/* Reveal after answering */}
          {answered && (
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-2xl font-black">
                <span style={{ color: GENDER_BY_KEY[currentWord.article as Article]?.text }}>{currentWord.article}</span>{' '}
                <span className="text-slate-800">{currentWord.german}</span>
              </p>
              {currentWord.plural && currentWord.plural !== 'n/a' && (
                <p className="gender-card-plural">Plural: die {currentWord.plural}</p>
              )}
              {currentWord.example && (
                <p className="gender-card-example">
                  "{highlightWordInExample(currentWord.example, currentWord.german)}"
                </p>
              )}
              {rule && (
                <div
                  className="mt-4 rounded-xl p-3 text-sm text-left inline-block max-w-md"
                  style={{
                    backgroundColor: ruleMatches ? '#f8fafc' : '#fffbeb',
                    border: `1px solid ${ruleMatches ? '#e2e8f0' : '#fbbf24'}`,
                  }}
                >
                  <p className="font-bold mb-0.5" style={{ color: ruleMatches ? ruleColor : '#b45309' }}>
                    {ruleMatches ? `📐 Follows the rule (${rule.label})` : `⚠️ Exception to the "${rule.label}" rule`}
                  </p>
                  <p className="text-slate-600">{rule.description}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Gender buttons */}
        <div className="grid grid-cols-3 gap-4">
          {GENDERS.map((g, idx) => {
            const isCorrectGender = currentWord.article === g.key;
            const isPicked = selected === g.key;

            let style: React.CSSProperties;
            if (!answered) {
              style = { backgroundColor: g.tint, borderColor: g.solid, color: g.text };
            } else if (isCorrectGender) {
              style = { backgroundColor: g.solid, borderColor: g.solid, color: '#ffffff' };
            } else if (isPicked) {
              style = { backgroundColor: '#fff1f2', borderColor: '#f43f5e', color: '#be123c' };
            } else {
              style = { backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#cbd5e1' };
            }

            return (
              <button
                key={g.key}
                disabled={answered}
                onClick={() => handleAnswer(g.key)}
                style={style}
                className="py-8 rounded-2xl border-2 font-black text-2xl transition-all flex flex-col items-center gap-1 enabled:hover:brightness-95"
              >
                <span>{g.key}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-70">{g.hint}</span>
                <span className="text-[10px] font-bold opacity-40 mt-1">{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Manual advance */}
        {answered && (
          <button
            onClick={advanceToNext}
            autoFocus
            className="w-full mt-4 font-black text-lg py-4 rounded-2xl transition-all text-white shadow-lg hover:shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300"
            style={{ backgroundColor: 'var(--terracotta-600)' }}
          >
            {currentIndex < sessionWords.length - 1 ? 'Next →' : 'See results →'}
          </button>
        )}

        <p className="text-center text-slate-400 text-xs mt-6">
          {answered
            ? <>Press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded font-bold">Enter</kbd> to continue</>
            : <>Tip: press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded font-bold">1</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 rounded font-bold">2</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 rounded font-bold">3</kbd> to answer</>
          }
        </p>
      </div>
    );
  }

  // ============================================
  // MENU
  // ============================================
  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-slate-800 mb-2">
          🎨 Der / Die / Das Trainer
        </h2>
        <p className="text-slate-500">Gender is the #1 hurdle in German. Drill it until it's automatic.</p>
      </div>

      {/* Colour legend */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {GENDERS.map(g => (
          <div key={g.key} className="rounded-2xl p-4 text-center text-white" style={{ backgroundColor: g.solid }}>
            <p className="text-2xl font-black">{g.key}</p>
            <p className="text-[11px] font-bold uppercase tracking-wider opacity-80">{g.hint}</p>
          </div>
        ))}
      </div>

      {/* Configuration */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 mb-8">
        <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
          <span className="text-xl">⚙️</span> Configuration
        </h3>

        {/* Level */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-600 mb-2">Level</label>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map(lvl => {
              const active = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${active ? 'text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  style={active ? { backgroundColor: 'var(--terracotta-600)' } : {}}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {/* Count */}
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Number of nouns: <span className="font-bold" style={{ color: 'var(--terracotta-600)' }}>
              {wordCount === 'all' ? `All (${availableNouns.length})` : Math.min(wordCount, availableNouns.length)}
            </span>
          </label>
          <div className="flex flex-wrap gap-2">
            {[10, 20, 30, 50].filter(n => n <= availableNouns.length).map(num => (
              <button
                key={num}
                onClick={() => setWordCount(num)}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${wordCount === num ? 'text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                style={wordCount === num ? { backgroundColor: 'var(--terracotta-600)' } : {}}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setWordCount('all')}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${wordCount === 'all' ? 'text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              style={wordCount === 'all' ? { backgroundColor: 'var(--terracotta-600)' } : {}}
            >
              All ({availableNouns.length})
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => startSession(drillNouns, false)}
        disabled={drillNouns.length === 0}
        className="w-full font-black text-lg py-5 rounded-2xl transition-all text-white shadow-lg hover:shadow-xl hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--terracotta-600)' }}
      >
        🚀 {drillNouns.length ? 'Continue drill' : 'All selected nouns mastered'} ({drillNouns.length} nouns)
      </button>
      <button
        type="button"
        onClick={() => startSession(studyNouns, false, true)}
        disabled={studyNouns.length === 0}
        className="mt-3 w-full rounded-2xl border-2 border-[var(--terracotta-200)] bg-white py-4 font-black text-[var(--terracotta-700)] transition-all hover:bg-[var(--terracotta-50)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        🔁 Révision complète — {wordCount === 'all' ? `tous les ${studyNouns.length}` : `${Math.min(wordCount, studyNouns.length)}`} noms
      </button>
      <p className="mt-2 text-center text-xs font-bold text-slate-500">Inclut les noms déjà maîtrisés · erreurs en premier · progression conservée</p>
      <label className="mt-4 flex items-center justify-center gap-3 text-sm font-semibold text-slate-700 cursor-pointer">
        <input
          type="checkbox"
          checked={includePreviousErrors}
          onChange={event => setIncludePreviousErrors(event.target.checked)}
          className="h-4 w-4 accent-emerald-700"
        />
        Include mistakes from previous sessions
        <span className="font-normal text-slate-500">
          ({unmasteredNouns.filter(hasPastError).length} first)
        </span>
      </label>
      <div className="mt-3 flex justify-center gap-3 text-sm">
        <button type="button" onClick={() => setFavoritesOnly(value => !value)} className={`rounded-xl px-4 py-2 font-bold ${favoritesOnly ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>★ {favoritesOnly ? 'All nouns' : `Favorites (${favoriteIds.size})`}</button>
      </div>
      {favoritesOnly && !studyNouns.length && <p className="text-center text-sm text-amber-700 mt-3">No favorites yet. Add them while studying.</p>}
      <p className="text-center text-sm text-slate-500 mt-3">
        {practicedIds.size > 0 ? `${Math.min(completedIds.size, availableNouns.length)} mastered · ${Math.min(unmasteredNouns.length, availableNouns.length)} to reinforce.` : 'Your results are saved automatically.'}
        {practicedIds.size > 0 && <button type="button" onClick={resetProgress} className="ml-2 underline font-bold">Reset progress</button>}
      </p>
    </div>
  );
};

export default GenderTrainerView;
