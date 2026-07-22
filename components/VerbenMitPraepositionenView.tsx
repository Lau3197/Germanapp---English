import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  PrepositionCase,
  VERBEN_MIT_PRAEPOSITIONEN,
  VerbPrepositionEntry
} from '../data/verbenMitPraepositionenData';

type CaseFilter = 'all' | PrepositionCase;
type PracticeStatus = 'idle' | 'correct' | 'incorrect' | 'revealed';

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
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss');

// Fisher-Yates shuffle of the index range [0, count) so the trainer never
// presents items in the same fixed order twice in a row.
const shuffledOrder = (count: number): number[] => {
  const order = Array.from({ length: count }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
};

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

export const VerbenMitPraepositionenView: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() => searchParams.get('q') || '');
  const [caseFilter, setCaseFilter] = useState<CaseFilter>('all');
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [practiceAnswer, setPracticeAnswer] = useState('');
  const [practiceStatus, setPracticeStatus] = useState<PracticeStatus>('idle');

  const [order, setOrder] = useState<number[]>(() => shuffledOrder(VERBEN_MIT_PRAEPOSITIONEN.length));

  const currentPracticeEntry = VERBEN_MIT_PRAEPOSITIONEN[order[practiceIndex % order.length]];
  const currentPracticeCase = currentPracticeEntry ? CASE_LABELS[currentPracticeEntry.case] : null;

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

  const resetPractice = (nextIndex: number) => {
    setPracticeIndex(nextIndex);
    setPracticeAnswer('');
    setPracticeStatus('idle');
  };

  const goToNextExercise = () => {
    const next = practiceIndex + 1;
    if (next >= order.length) {
      // Completed a full pass — reshuffle so the next cycle is a new order.
      setOrder(shuffledOrder(VERBEN_MIT_PRAEPOSITIONEN.length));
      resetPractice(0);
    } else {
      resetPractice(next);
    }
  };

  const handlePracticeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!practiceAnswer.trim() || !currentPracticeEntry) {
      return;
    }

    const isCorrect = normalizeText(practiceAnswer) === normalizeText(currentPracticeEntry.preposition);
    setPracticeStatus(isCorrect ? 'correct' : 'incorrect');
  };

  const showCorrection = practiceStatus !== 'idle' && currentPracticeEntry && currentPracticeCase;

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

      {currentPracticeEntry && currentPracticeCase && (
        <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta-600)' }}>
                Practice
              </p>
              <h3 className="text-2xl font-black text-slate-900">Find the missing preposition.</h3>
              <p className="text-sm font-semibold text-slate-500 mt-2">
                Item {practiceIndex + 1} of {VERBEN_MIT_PRAEPOSITIONEN.length}
              </p>
            </div>

            <form onSubmit={handlePracticeSubmit} className="lg:col-span-2">
              <div className="rounded-2xl p-5 bg-slate-50 border border-slate-100">
                <p className="text-xs font-black uppercase tracking-widest mb-2 text-slate-400">
                  German pattern
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-3xl font-black text-slate-900 break-words">
                    {currentPracticeEntry.verb} <span style={{ color: 'var(--terracotta-600)' }}>___</span>
                  </p>
                  <span className={`px-3 py-1 rounded-lg text-sm font-black ${currentPracticeCase.bg} ${currentPracticeCase.color}`}>
                    {currentPracticeCase.label}
                  </span>
                </div>
                <p className="text-sm font-bold mt-3" style={{ color: 'var(--terracotta-700)' }}>
                  {currentPracticeEntry.translation}
                </p>
                <p className="text-sm font-semibold mt-1 text-slate-500">
                  {currentPracticeEntry.translationLt}
                </p>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={practiceAnswer}
                  onChange={(event) => {
                    setPracticeAnswer(event.target.value);
                    if (practiceStatus !== 'idle') {
                      setPracticeStatus('idle');
                    }
                  }}
                  placeholder="Type the German preposition..."
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  aria-label="Missing German preposition"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-black shadow-indigo-200 shadow-lg"
                >
                  Check
                </button>
                <button
                  type="button"
                  onClick={() => setPracticeStatus('revealed')}
                  className="px-5 py-3 rounded-xl bg-white font-black border border-slate-200"
                  style={{ color: 'var(--sand-700)' }}
                >
                  Show answer
                </button>
                <button
                  type="button"
                  onClick={goToNextExercise}
                  className="px-5 py-3 rounded-xl bg-white font-black border border-slate-200"
                  style={{ color: 'var(--terracotta-700)' }}
                >
                  Next
                </button>
              </div>

              {showCorrection && (
                <div
                  className={`mt-4 rounded-2xl p-5 border ${
                    practiceStatus === 'correct'
                      ? 'bg-emerald-50 border-emerald-100'
                      : 'bg-rose-50 border-rose-100'
                  }`}
                  aria-live="polite"
                >
                  <p className="text-sm font-black mb-2">
                    {practiceStatus === 'correct' ? 'Correct.' : practiceStatus === 'incorrect' ? 'Not yet.' : 'Answer shown.'}
                  </p>
                  <p className="text-lg font-black text-slate-900">
                    {currentPracticeEntry.verb} {currentPracticeEntry.preposition} + {currentPracticeCase.label}
                  </p>
                  <p className="text-sm font-bold mt-1" style={{ color: 'var(--terracotta-700)' }}>
                    {currentPracticeEntry.translation}
                  </p>
                  <p className="text-sm font-semibold mt-1 text-slate-500">
                    {currentPracticeEntry.translationLt}
                  </p>
                  <div className="rounded-xl bg-white/70 p-4 mt-4">
                    <p className="text-slate-900 font-bold leading-relaxed">{currentPracticeEntry.exampleDe}</p>
                    <p className="text-slate-500 font-medium leading-relaxed mt-2">{currentPracticeEntry.exampleEn}</p>
                    <p className="text-slate-600 font-medium leading-relaxed mt-2">{currentPracticeEntry.exampleLt}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>
      )}

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
