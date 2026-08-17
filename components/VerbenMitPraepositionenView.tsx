import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  PrepositionCase,
  VERBEN_MIT_PRAEPOSITIONEN,
  VerbPrepositionEntry
} from '../data/verbenMitPraepositionenData';
import { usePracticeSession } from '../hooks/usePracticeSession';
import {
  MemoryBadge,
  MemoryStats,
  ProgressFooter,
  SessionHeader,
  SessionResult,
  SessionSizePicker,
  sessionCountLabel,
} from './PracticeSessionUI';

type CaseFilter = 'all' | PrepositionCase;

const CASE_LABELS: Record<PrepositionCase, { short: string; label: string; color: string; bg: string; border: string }> = {
  A: {
    short: 'A',
    label: 'Accusative',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-200'
  },
  D: {
    short: 'D',
    label: 'Dative',
    color: 'text-indigo-700',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200'
  }
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss');

const getEntrySearchText = (entry: VerbPrepositionEntry) =>
  [
    entry.verb,
    entry.preposition,
    entry.case,
    entry.translation,
    entry.translationLt,
    entry.exampleDe,
    entry.exampleEn,
    entry.exampleLt,
    CASE_LABELS[entry.case].label
  ].join(' ');

// Module scope: the practice session keys progress off these, so they must stay
// referentially stable across renders.
const getEntryId = (entry: VerbPrepositionEntry) => `${entry.verb}|${entry.preposition}`.toLowerCase();

const checkAnswer = (entry: VerbPrepositionEntry, answer: string) =>
  normalizeText(answer.trim()) === normalizeText(entry.preposition);

export const VerbenMitPraepositionenView: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') || '');
  const [caseFilter, setCaseFilter] = useState<CaseFilter>('all');
  const [practiceCase, setPracticeCase] = useState<CaseFilter>('all');

  const practiceItems = useMemo(
    () => VERBEN_MIT_PRAEPOSITIONEN.filter(entry => practiceCase === 'all' || entry.case === practiceCase),
    [practiceCase]
  );

  const session = usePracticeSession({
    items: practiceItems,
    getId: getEntryId,
    isCorrect: checkAnswer,
    progressKey: 'trainerProgress_verbPrepositions_en',
    favoritesKey: 'trainerFavorites_verbPrepositions_en',
  });

  const currentEntry = session.currentItem;
  const currentCase = currentEntry ? CASE_LABELS[currentEntry.case] : null;
  const answered = session.status !== 'idle';

  // Typing trainer: the caret has to be back in the field for the next item,
  // otherwise every card needs a click before it can be answered.
  const answerInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (session.phase === 'drill' && !answered) answerInputRef.current?.focus();
  }, [session.phase, session.index, answered]);

  // Deep-link from the global search: seed the filter and scroll to the list.
  useEffect(() => {
    const term = searchParams.get('q');
    if (!term) return;
    setSearchQuery(term);
    setCaseFilter('all');
    const timer = setTimeout(() => {
      document.getElementById('vmp-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSearchParams(prev => {
        const next = new URLSearchParams(prev);
        next.delete('q');
        return next;
      }, { replace: true });
    }, 250);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const caseCounts = useMemo(() => {
    return VERBEN_MIT_PRAEPOSITIONEN.reduce(
      (counts, entry) => {
        counts[entry.case] += 1;
        return counts;
      },
      { A: 0, D: 0 }
    );
  }, []);

  const filteredEntries = useMemo(() => {
    const normalizedQuery = normalizeText(searchQuery.trim());

    return VERBEN_MIT_PRAEPOSITIONEN.filter(entry => {
      const matchesCase = caseFilter === 'all' || entry.case === caseFilter;
      const matchesSearch =
        !normalizedQuery || normalizeText(getEntrySearchText(entry)).includes(normalizedQuery);

      return matchesCase && matchesSearch;
    });
  }, [caseFilter, searchQuery]);

  const filterOptions: { id: CaseFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: VERBEN_MIT_PRAEPOSITIONEN.length },
    { id: 'A', label: 'Accusative', count: caseCounts.A },
    { id: 'D', label: 'Dative', count: caseCounts.D }
  ];

  // Enter checks the answer, then Enter again moves on.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (answered) session.next();
    else session.submit();
  };

  const renderPractice = () => {
    if (session.phase === 'result') {
      return (
        <SessionResult
          subtitle="Verb + preposition session finished"
          correct={session.sessionStats.correct}
          incorrect={session.sessionStats.incorrect}
          total={session.sessionItems.length}
          bestStreak={session.bestStreak}
          isReview={session.isReview}
          missed={session.missed.map(entry => ({
            id: getEntryId(entry),
            primary: `${entry.verb} ${entry.preposition} + ${CASE_LABELS[entry.case].label}`,
            secondary: entry.translation,
          }))}
          onReviewMistakes={session.reviewMistakes}
          onRestart={session.start}
          onMenu={session.backToMenu}
        />
      );
    }

    if (session.phase === 'drill' && currentEntry && currentCase) {
      return (
        <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
          <SessionHeader
            index={session.index}
            total={session.sessionItems.length}
            correct={session.sessionStats.correct}
            incorrect={session.sessionStats.incorrect}
            streak={session.streak}
            onExit={session.backToMenu}
            answered={answered}
          />

          <form onSubmit={handleSubmit}>
            <div className="rounded-2xl p-5 bg-slate-50" style={{ border: '1px solid #e2e8f0' }}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                  German pattern
                </p>
                <MemoryBadge result={session.currentResult} />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-3xl font-black text-slate-900 break-words">
                  {currentEntry.verb} <span style={{ color: 'var(--terracotta-600)' }}>___</span>
                </p>
                <span className={`px-3 py-1 rounded-lg text-sm font-black ${currentCase.bg} ${currentCase.color}`}>
                  {currentCase.label}
                </span>
              </div>
              <p className="text-sm font-bold mt-3" style={{ color: 'var(--terracotta-700)' }}>
                {currentEntry.translation}
              </p>
              <p className="text-sm font-semibold mt-1 text-slate-500">
                {currentEntry.translationLt}
              </p>
              <button
                type="button"
                onClick={() => session.toggleFavorite(session.currentId)}
                className="mt-3 font-bold text-sm"
                style={{ color: session.isFavorite ? '#d97706' : 'var(--sand-500)' }}
              >
                {session.isFavorite ? '★ Favorite' : '☆ Add to favorites'}
              </button>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <input
                ref={answerInputRef}
                type="text"
                value={session.answer}
                onChange={(event) => session.setAnswer(event.target.value)}
                placeholder="Type the German preposition..."
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                aria-label="Missing German preposition"
                disabled={answered}
              />
              {answered ? (
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl text-white font-black shadow-lg"
                  style={{ backgroundColor: 'var(--terracotta-600)' }}
                >
                  {session.index < session.sessionItems.length - 1 ? 'Next →' : 'See results →'}
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-black shadow-indigo-200 shadow-lg"
                  >
                    Check
                  </button>
                  <button
                    type="button"
                    onClick={session.reveal}
                    className="px-5 py-3 rounded-xl bg-white font-black border border-slate-200"
                    style={{ color: 'var(--sand-700)' }}
                  >
                    Show answer
                  </button>
                </>
              )}
            </div>

            {answered && (
              <div
                className="mt-4 rounded-2xl p-5"
                style={session.status === 'correct'
                  ? { backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }
                  : { backgroundColor: '#fff1f2', border: '1px solid #fecdd3' }}
                aria-live="polite"
              >
                <p className="text-sm font-black mb-2">
                  {session.status === 'correct' ? 'Correct.' : session.status === 'incorrect' ? 'Not yet.' : 'Answer shown.'}
                </p>
                <p className="text-lg font-black text-slate-900">
                  {currentEntry.verb} {currentEntry.preposition} + {currentCase.label}
                </p>
                <p className="text-sm font-bold mt-1" style={{ color: 'var(--terracotta-700)' }}>
                  {currentEntry.translation}
                </p>
                <p className="text-sm font-semibold mt-1 text-slate-500">
                  {currentEntry.translationLt}
                </p>
                <div className="rounded-xl bg-white/70 p-4 mt-4">
                  <p className="text-slate-900 font-bold leading-relaxed">{currentEntry.exampleDe}</p>
                  <p className="text-slate-500 font-medium leading-relaxed mt-2">{currentEntry.exampleEn}</p>
                  <p className="text-slate-600 font-medium leading-relaxed mt-2">{currentEntry.exampleLt}</p>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded font-bold">Enter</kbd> to continue
                </p>
              </div>
            )}
          </form>
        </section>
      );
    }

    // MENU
    return (
      <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
        <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta-600)' }}>
          Practice
        </p>
        <h3 className="text-2xl font-black text-slate-900 mb-1">Find the missing preposition.</h3>
        <p className="text-sm font-semibold text-slate-500 mb-6">
          Your answers are remembered between sessions: mistakes come back first, mastered patterns step aside.
        </p>

        <div className="mb-6">
          <MemoryStats
            total={session.scopedCounts.total}
            mastered={session.scopedCounts.mastered}
            weak={session.scopedCounts.weak}
            unseen={session.scopedCounts.unseen}
            accuracy={session.summary.accuracy}
            attempts={session.summary.attempts}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-600 mb-2">Case</label>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => {
              const active = practiceCase === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setPracticeCase(option.id)}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${active ? 'text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  style={active ? { backgroundColor: 'var(--terracotta-600)' } : {}}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <SessionSizePicker value={session.size} onChange={session.setSize} poolSize={session.duePool.length} />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6 text-sm font-semibold text-slate-700">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={session.skipMastered}
              onChange={event => session.setSkipMastered(event.target.checked)}
              className="h-4 w-4 accent-emerald-700"
            />
            Skip mastered patterns ({session.scopedCounts.mastered})
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={session.favoritesOnly}
              onChange={event => session.setFavoritesOnly(event.target.checked)}
              className="h-4 w-4 accent-amber-600"
            />
            ★ Favorites only ({session.favoriteIds.size})
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={session.weakOnly}
              onChange={event => session.setWeakOnly(event.target.checked)}
              className="h-4 w-4 accent-rose-600"
            />
            🎯 Only my mistakes ({session.scopedCounts.weak})
          </label>
        </div>

        <button
          type="button"
          onClick={session.start}
          disabled={!session.duePool.length}
          className="w-full font-black text-lg py-5 rounded-2xl transition-all text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: 'var(--terracotta-600)' }}
        >
          {session.duePool.length
            ? `🚀 Start session (${sessionCountLabel(session.size, session.duePool.length)})`
            : session.weakOnly ? 'No saved mistakes here yet'
            : session.favoritesOnly ? 'No favorites in this selection'
            : 'Everything here is mastered'}
        </button>

        <ProgressFooter summary={session.summary} onReset={session.resetProgress} />
      </section>
    );
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <h2 className="text-5xl sm:text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>
          Prepositional Verbs
        </h2>
        <p className="text-xl sm:text-2xl font-medium max-w-3xl" style={{ color: 'var(--sand-600)' }}>
          Fixed German verb-preposition pairs with English and Lithuanian meanings, case patterns, and translated examples.
        </p>
      </div>

      {renderPractice()}

      <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-1">
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta-600)' }}>
              How it works
            </p>
            <h3 className="text-2xl font-black text-slate-900">Learn the full pattern.</h3>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-black text-slate-900 mb-2">Verb + preposition</p>
              <p>Many German verbs require one fixed preposition. Learn them together, not as separate words.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-black text-slate-900 mb-2">Case after the preposition</p>
              <p><strong>A</strong> means accusative. <strong>D</strong> means dative. The noun or pronoun after the preposition changes case.</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-black text-slate-900 mb-2">Meaning is fixed</p>
              <p>The English or Lithuanian translation often uses a different preposition, so memorize the German pattern through examples.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-3">
          {filterOptions.map(option => {
            const isActive = caseFilter === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setCaseFilter(option.id)}
                className="px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
                style={{
                  backgroundColor: isActive ? 'var(--terracotta-600)' : 'white',
                  color: isActive ? 'white' : 'var(--sand-600)',
                  border: isActive ? '1px solid var(--terracotta-600)' : '1px solid var(--terracotta-200)',
                  boxShadow: isActive ? '0 10px 30px -10px rgba(184, 93, 62, 0.4)' : 'none'
                }}
              >
                <span>{option.label}</span>
                <span
                  className="px-2 py-0.5 rounded-lg text-xs"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.18)' : 'var(--sand-100)',
                    color: isActive ? 'white' : 'var(--sand-500)'
                  }}
                >
                  {option.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:max-w-md lg:ml-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search a verb, preposition, meaning, or example in English or Lithuanian..."
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl outline-none transition-all"
            style={{ border: '1px solid var(--terracotta-200)', color: 'var(--sand-800)' }}
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--sand-500)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div id="vmp-results" className="mb-5 flex items-center justify-between gap-4 scroll-mt-24">
        <p className="text-sm font-bold" style={{ color: 'var(--sand-500)' }}>
          {filteredEntries.length} pattern{filteredEntries.length === 1 ? '' : 's'}
        </p>
        <div className="hidden sm:flex items-center gap-3 text-xs font-black uppercase tracking-widest" style={{ color: 'var(--sand-400)' }}>
          <span>German pattern</span>
          <span>English/Lithuanian meaning</span>
          <span>Translated examples</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {filteredEntries.map((entry, index) => {
          const caseInfo = CASE_LABELS[entry.case];
          const entryId = getEntryId(entry);
          const isFavorite = session.favoriteIds.has(entryId);

          return (
            <article
              key={`${entry.verb}-${entry.preposition}-${entry.exampleDe}`}
              className={`bg-white rounded-2xl border ${caseInfo.border} overflow-hidden hover:shadow-lg transition-all`}
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--sand-400)' }}>
                        #{index + 1}
                      </span>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-black ${caseInfo.bg} ${caseInfo.color}`}>
                        {caseInfo.label}
                      </span>
                      <button
                        type="button"
                        onClick={() => session.toggleFavorite(entryId)}
                        className="text-xs font-black"
                        style={{ color: isFavorite ? '#d97706' : 'var(--sand-400)' }}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {isFavorite ? '★' : '☆'}
                      </button>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 break-words">
                      {entry.verb} <span style={{ color: 'var(--terracotta-600)' }}>{entry.preposition}</span>
                    </h3>
                  </div>
                  <div className={`w-11 h-11 rounded-xl ${caseInfo.bg} ${caseInfo.color} flex items-center justify-center font-black shrink-0`}>
                    {caseInfo.short}
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: 'var(--sand-400)' }}>
                    English meaning
                  </p>
                  <p className="text-lg font-bold" style={{ color: 'var(--terracotta-700)' }}>
                    {entry.translation}
                  </p>
                  <p className="text-xs font-black uppercase tracking-widest mt-3 mb-1" style={{ color: 'var(--sand-400)' }}>
                    Lithuanian meaning
                  </p>
                  <p className="text-base font-bold text-slate-600">
                    {entry.translationLt}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: 'var(--sand-400)' }}>
                    Example
                  </p>
                  <p className="text-slate-900 font-bold leading-relaxed">{entry.exampleDe}</p>
                  <p className="text-slate-500 font-medium leading-relaxed mt-2">{entry.exampleEn}</p>
                  <p className="text-slate-600 font-medium leading-relaxed mt-2">{entry.exampleLt}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
          <p className="text-slate-500 font-bold text-lg">No verb-preposition pattern found</p>
          <p className="text-slate-400 text-sm mt-1">Try another search term or change the case filter.</p>
        </div>
      )}
    </div>
  );
};
