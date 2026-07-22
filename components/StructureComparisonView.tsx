import React, { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  STRUCTURE_CATEGORY_LABELS,
  STRUCTURE_COMPARISONS,
  StructureCategory,
  StructureComparison
} from '../data/structureComparisonData';

type CategoryFilter = StructureCategory | 'all';
type LevelFilter = StructureComparison['level'] | 'all';

const categoryOptions: CategoryFilter[] = [
  'all',
  'translation-shift',
  'clause-structure',
  'cohesion',
  'voice',
  'reported-speech',
  'nominal-style',
  'tense',
  'word-order',
  'perspective',
  'lexical'
];

const levelOptions: LevelFilter[] = ['all', 'B1', 'B2', 'B2+'];

const LEVEL_LABELS: Record<LevelFilter, string> = {
  all: 'All levels',
  B1: 'B1',
  B2: 'B2',
  'B2+': 'B2+'
};

const TOTAL_EXAMPLES = STRUCTURE_COMPARISONS.reduce(
  (count, pattern) => count + pattern.examples.length,
  0
);

const LEVEL_TOTAL_COUNTS = levelOptions.reduce((counts, level) => {
  counts[level] =
    level === 'all'
      ? STRUCTURE_COMPARISONS.length
      : STRUCTURE_COMPARISONS.filter(pattern => pattern.level === level).length;

  return counts;
}, {} as Record<LevelFilter, number>);

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getSearchText(pattern: StructureComparison): string {
  return [
    pattern.title,
    pattern.sourcePattern,
    pattern.germanPattern,
    pattern.coreAnswer,
    pattern.explanation,
    ...pattern.avoid,
    ...pattern.examples.flatMap(example => [
      example.english,
      example.german,
      example.note
    ])
  ].join(' ');
}

function matchesFilters(
  pattern: StructureComparison,
  category: CategoryFilter,
  level: LevelFilter,
  normalizedQuery: string
): boolean {
  const matchesCategory = category === 'all' || pattern.category === category;
  const matchesLevel = level === 'all' || pattern.level === level;
  const indexedText = STRUCTURE_SEARCH_INDEX.get(pattern.id) || '';
  const matchesQuery = !normalizedQuery || indexedText.includes(normalizedQuery);

  return matchesCategory && matchesLevel && matchesQuery;
}

const STRUCTURE_SEARCH_INDEX = new Map(
  STRUCTURE_COMPARISONS.map(pattern => [pattern.id, normalize(getSearchText(pattern))])
);

export const StructureComparisonView: React.FC = () => {
  const { patternId } = useParams<{ patternId?: string }>();
  const initialSelectedId =
    STRUCTURE_COMPARISONS.some(pattern => pattern.id === patternId)
      ? patternId as string
      : STRUCTURE_COMPARISONS[0].id;
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>('all');
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [selectedId, setSelectedId] = useState(initialSelectedId);

  useEffect(() => {
    if (patternId && STRUCTURE_COMPARISONS.some(pattern => pattern.id === patternId)) {
      setSelectedId(patternId);
      setSelectedCategory('all');
      setSelectedLevel('all');
    }
  }, [patternId]);

  const normalizedQuery = useMemo(() => normalize(deferredQuery.trim()), [deferredQuery]);

  const categoryCounts = useMemo(() => {
    return categoryOptions.reduce((counts, category) => {
      counts[category] = STRUCTURE_COMPARISONS.filter(pattern =>
        matchesFilters(pattern, category, selectedLevel, normalizedQuery)
      ).length;

      return counts;
    }, {} as Record<CategoryFilter, number>);
  }, [normalizedQuery, selectedLevel]);

  const levelCounts = useMemo(() => {
    return levelOptions.reduce((counts, level) => {
      counts[level] = STRUCTURE_COMPARISONS.filter(pattern =>
        matchesFilters(pattern, selectedCategory, level, normalizedQuery)
      ).length;

      return counts;
    }, {} as Record<LevelFilter, number>);
  }, [normalizedQuery, selectedCategory]);

  const filteredPatterns = useMemo(() => {
    return STRUCTURE_COMPARISONS.filter(pattern =>
      matchesFilters(pattern, selectedCategory, selectedLevel, normalizedQuery)
    );
  }, [normalizedQuery, selectedCategory, selectedLevel]);

  const selectedPattern =
    filteredPatterns.find(pattern => pattern.id === selectedId) ||
    filteredPatterns[0] ||
    null;
  const hasActiveFilters = selectedCategory !== 'all' || selectedLevel !== 'all' || query.trim().length > 0;

  const resetFilters = () => {
    setQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-end">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center rounded-lg px-3 py-1 text-xs font-black uppercase tracking-widest"
              style={{ backgroundColor: 'var(--turquoise-50)', color: 'var(--turquoise-700)' }}
            >
              B1 / B2 / B2+
            </span>
            <span
              className="inline-flex items-center rounded-lg px-3 py-1 text-xs font-black uppercase tracking-widest"
              style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
            >
              Translation reflexes
            </span>
          </div>
          <h2
            className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl"
            style={{ color: 'var(--terracotta-800)' }}
          >
            Hard-to-translate structures
          </h2>
          <p
            className="mt-3 max-w-3xl text-lg font-medium leading-relaxed"
            style={{ color: 'var(--sand-600)' }}
          >
            Compare the English cue, the German structure, and the reflex to build before translating.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-2 rounded-lg border bg-white p-3 shadow-sm sm:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4" style={{ borderColor: 'var(--terracotta-100)' }}>
          <div className="min-w-0 rounded-md px-3 py-2" style={{ backgroundColor: 'var(--sand-50)' }}>
            <dt className="text-[11px] font-black uppercase tracking-wider" style={{ color: 'var(--sand-500)' }}>
              Patterns
            </dt>
            <dd className="mt-1 text-2xl font-black" style={{ color: 'var(--terracotta-800)' }}>
              {STRUCTURE_COMPARISONS.length}
            </dd>
          </div>
          <div className="min-w-0 rounded-md px-3 py-2" style={{ backgroundColor: 'var(--terracotta-50)' }}>
            <dt className="text-[11px] font-black uppercase tracking-wider" style={{ color: 'var(--terracotta-700)' }}>
              B1
            </dt>
            <dd className="mt-1 text-2xl font-black" style={{ color: 'var(--terracotta-800)' }}>
              {LEVEL_TOTAL_COUNTS.B1}
            </dd>
          </div>
          <div className="min-w-0 rounded-md px-3 py-2" style={{ backgroundColor: 'var(--turquoise-50)' }}>
            <dt className="text-[11px] font-black uppercase tracking-wider" style={{ color: 'var(--turquoise-700)' }}>
              Categories
            </dt>
            <dd className="mt-1 text-2xl font-black" style={{ color: 'var(--turquoise-800)' }}>
              {categoryOptions.length - 1}
            </dd>
          </div>
          <div className="min-w-0 rounded-md px-3 py-2" style={{ backgroundColor: 'var(--sand-50)' }}>
            <dt className="text-[11px] font-black uppercase tracking-wider" style={{ color: 'var(--terracotta-700)' }}>
              Examples
            </dt>
            <dd className="mt-1 text-2xl font-black" style={{ color: 'var(--terracotta-800)' }}>
              {TOTAL_EXAMPLES}
            </dd>
          </div>
        </dl>
      </section>

      <section
        className="overflow-hidden rounded-lg border bg-white shadow-sm"
        style={{ borderColor: 'var(--terracotta-100)' }}
      >
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 p-4 sm:p-5">
            <label className="relative block">
              <span className="sr-only">Search a structure</span>
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                style={{ color: 'var(--sand-400)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search: unless, not until, worth, supposed to..."
                className="h-12 w-full rounded-lg border bg-white pl-12 pr-4 text-sm font-semibold outline-none transition sm:text-base"
                style={{
                  borderColor: 'var(--sand-200)',
                  color: 'var(--sand-800)'
                }}
              />
            </label>

            <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start">
              <div className="min-w-0">
                <p id="structure-type-filter" className="text-[11px] font-black uppercase tracking-widest" style={{ color: 'var(--sand-500)' }}>
                  Type
                </p>
                <div className="structures-filter-scroll mt-2 flex max-w-full gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0" aria-labelledby="structure-type-filter">
                  {categoryOptions.map(category => {
                    const isActive = selectedCategory === category;
                    const count = categoryCounts[category];
                    const isUnavailable = category !== 'all' && count === 0 && !isActive;

                    return (
                      <button
                        key={category}
                        type="button"
                        disabled={isUnavailable}
                        onClick={() => setSelectedCategory(category)}
                        className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-black transition-all"
                        style={{
                          backgroundColor: isActive ? 'var(--terracotta-600)' : 'var(--sand-50)',
                          color: isActive ? 'white' : isUnavailable ? 'var(--sand-400)' : 'var(--sand-700)',
                          border: `1px solid ${isActive ? 'var(--terracotta-600)' : 'var(--terracotta-100)'}`,
                          cursor: isUnavailable ? 'not-allowed' : 'pointer',
                          opacity: isUnavailable ? 0.55 : 1
                        }}
                        aria-pressed={isActive}
                      >
                        <span>{STRUCTURE_CATEGORY_LABELS[category]}</span>
                        <span
                          className="rounded-md px-1.5 py-0.5 text-[11px]"
                          style={{
                            backgroundColor: isActive ? 'rgba(255,255,255,0.18)' : 'white',
                            color: isActive ? 'white' : isUnavailable ? 'var(--sand-400)' : 'var(--sand-500)'
                          }}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="min-w-0 xl:min-w-[230px]">
                <p id="structure-level-filter" className="text-[11px] font-black uppercase tracking-widest" style={{ color: 'var(--sand-500)' }}>
                  Level
                </p>
                <div className="mt-2 flex flex-wrap gap-2" aria-labelledby="structure-level-filter">
                  {levelOptions.map(level => {
                    const isActive = selectedLevel === level;
                    const count = levelCounts[level];
                    const isUnavailable = level !== 'all' && count === 0 && !isActive;

                    return (
                      <button
                        key={level}
                        type="button"
                        disabled={isUnavailable}
                        onClick={() => setSelectedLevel(level)}
                        className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-black transition-all"
                        style={{
                          backgroundColor: isActive ? 'var(--turquoise-700)' : 'white',
                          color: isActive ? 'white' : isUnavailable ? 'var(--sand-400)' : 'var(--sand-700)',
                          border: `1px solid ${isActive ? 'var(--turquoise-700)' : 'var(--terracotta-100)'}`,
                          cursor: isUnavailable ? 'not-allowed' : 'pointer',
                          opacity: isUnavailable ? 0.55 : 1
                        }}
                        aria-pressed={isActive}
                      >
                        <span>{LEVEL_LABELS[level]}</span>
                        <span
                          className="rounded-md px-1.5 py-0.5 text-[11px]"
                          style={{
                            backgroundColor: isActive ? 'rgba(255,255,255,0.18)' : 'var(--sand-50)',
                            color: isActive ? 'white' : isUnavailable ? 'var(--sand-400)' : 'var(--sand-500)'
                          }}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div
            className="min-w-0 border-t p-4 sm:p-5 lg:border-l lg:border-t-0"
            style={{ borderColor: 'var(--terracotta-100)', backgroundColor: 'var(--turquoise-50)' }}
          >
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--turquoise-700)' }}>
              Model structure
            </p>
            <p className="mt-2 text-sm font-bold leading-relaxed" style={{ color: 'var(--sand-700)' }}>
              The more precisely you link ideas, the more natural your German sounds.
            </p>
            <p className="mt-3 break-words text-xl font-black leading-snug" style={{ color: 'var(--terracotta-800)' }}>
              Je präziser du Gedanken verbindest, desto natürlicher klingt dein Deutsch.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
        <aside
          className="overflow-hidden rounded-lg border bg-white shadow-sm xl:sticky xl:top-[calc(var(--app-header-sticky-height)+24px)]"
          style={{ borderColor: 'var(--terracotta-100)' }}
        >
          <div className="flex items-center justify-between gap-3 border-b px-4 py-3" style={{ borderColor: 'var(--terracotta-100)' }}>
            <div>
              <p className="text-sm font-black" style={{ color: 'var(--terracotta-800)' }}>
                {filteredPatterns.length} pattern{filteredPatterns.length === 1 ? '' : 's'}
              </p>
              <p className="text-xs font-bold" style={{ color: 'var(--sand-500)' }}>
                {selectedLevel === 'all' ? 'All levels' : selectedLevel} · {selectedCategory === 'all' ? 'All types' : STRUCTURE_CATEGORY_LABELS[selectedCategory]}
              </p>
            </div>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-lg px-3 py-2 text-xs font-black transition"
                style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
              >
                Reset
              </button>
            )}
          </div>

          <div className="max-h-[430px] space-y-1 overflow-y-auto p-2 xl:max-h-[calc(100vh-var(--app-header-sticky-height)-120px)]">
            {filteredPatterns.length === 0 && (
              <p className="p-4 text-sm font-medium" style={{ color: 'var(--sand-500)' }}>
                No structure found.
              </p>
            )}
            {filteredPatterns.map(pattern => {
              const isActive = selectedPattern?.id === pattern.id;

              return (
                <button
                  key={pattern.id}
                  type="button"
                  onClick={() => setSelectedId(pattern.id)}
                  className="w-full rounded-lg p-3 text-left transition-all"
                  style={{
                    backgroundColor: isActive ? 'var(--terracotta-50)' : 'transparent',
                    border: `1px solid ${isActive ? 'var(--terracotta-200)' : 'transparent'}`
                  }}
                >
                  <div className="mb-2 flex min-w-0 items-center gap-2">
                    <span
                      className="shrink-0 rounded-md px-2 py-1 text-[11px] font-black"
                      style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
                    >
                      {pattern.level}
                    </span>
                    <span
                      className="truncate text-[11px] font-black uppercase tracking-wider"
                      style={{ color: 'var(--turquoise-700)' }}
                    >
                      {STRUCTURE_CATEGORY_LABELS[pattern.category]}
                    </span>
                  </div>
                  <p
                    className="text-sm font-black leading-snug"
                    style={{ color: isActive ? 'var(--terracotta-800)' : 'var(--sand-800)' }}
                  >
                    {pattern.title}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs font-medium leading-relaxed" style={{ color: 'var(--sand-500)' }}>
                    {pattern.coreAnswer}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        {selectedPattern ? (
          <article
            className="overflow-hidden rounded-lg border bg-white shadow-sm"
            style={{ borderColor: 'var(--terracotta-100)' }}
          >
            <div className="border-b p-5 sm:p-7" style={{ borderColor: 'var(--terracotta-100)' }}>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-lg px-3 py-1 text-xs font-black" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
                  {selectedPattern.level}
                </span>
                <span className="rounded-lg px-3 py-1 text-xs font-black" style={{ backgroundColor: 'var(--turquoise-50)', color: 'var(--turquoise-700)' }}>
                  {STRUCTURE_CATEGORY_LABELS[selectedPattern.category]}
                </span>
              </div>
              <h3 className="max-w-4xl text-3xl font-black leading-tight tracking-tight" style={{ color: 'var(--terracotta-800)' }}>
                {selectedPattern.title}
              </h3>
              <p className="mt-4 max-w-4xl text-lg font-bold leading-relaxed" style={{ color: 'var(--sand-800)' }}>
                {selectedPattern.coreAnswer}
              </p>
              <p className="mt-3 max-w-4xl font-medium leading-relaxed" style={{ color: 'var(--sand-600)' }}>
                {selectedPattern.explanation}
              </p>
            </div>

            <div className="space-y-7 p-5 sm:p-7">
              <section className="grid gap-3 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:items-stretch">
                <div className="rounded-lg border p-4" style={{ borderColor: 'var(--sand-200)', backgroundColor: 'var(--sand-50)' }}>
                  <p className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--sand-500)' }}>
                    English cue
                  </p>
                  <p className="mt-2 font-black leading-relaxed" style={{ color: 'var(--sand-800)' }}>
                    {selectedPattern.sourcePattern}
                  </p>
                </div>
                <div
                  className="hidden items-center justify-center rounded-lg border text-xl font-black md:flex"
                  style={{ borderColor: 'var(--terracotta-100)', color: 'var(--terracotta-600)' }}
                  aria-hidden="true"
                >
                  →
                </div>
                <div className="rounded-lg border p-4" style={{ borderColor: 'var(--turquoise-200)', backgroundColor: 'var(--turquoise-50)' }}>
                  <p className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--turquoise-700)' }}>
                    German structure
                  </p>
                  <p className="mt-2 font-black leading-relaxed" style={{ color: 'var(--sand-800)' }}>
                    {selectedPattern.germanPattern}
                  </p>
                </div>
              </section>

              <section>
                <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h4 className="text-xl font-black" style={{ color: 'var(--terracotta-800)' }}>
                      Examples to memorize
                    </h4>
                    <p className="mt-1 text-sm font-medium" style={{ color: 'var(--sand-500)' }}>
                      Read left to right: cue, target sentence, translation reflex.
                    </p>
                  </div>
                  <span className="rounded-lg px-3 py-1 text-xs font-black" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
                    {selectedPattern.examples.length} examples
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedPattern.examples.map((example, index) => (
                    <div
                      key={`${selectedPattern.id}-${example.english}`}
                      className="grid gap-3 rounded-lg border p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_220px]"
                      style={{ borderColor: 'var(--sand-200)', backgroundColor: index % 2 === 0 ? 'white' : 'var(--sand-50)' }}
                    >
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider" style={{ color: 'var(--sand-500)' }}>
                          English
                        </p>
                        <p className="mt-1 font-bold leading-relaxed" style={{ color: 'var(--sand-800)' }}>
                          {example.english}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider" style={{ color: 'var(--terracotta-600)' }}>
                          German
                        </p>
                        <p className="mt-1 font-black leading-relaxed" style={{ color: 'var(--terracotta-800)' }}>
                          {example.german}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-black uppercase tracking-wider" style={{ color: 'var(--turquoise-700)' }}>
                          Reflex
                        </p>
                        <p className="mt-1 text-sm font-medium leading-relaxed" style={{ color: 'var(--sand-600)' }}>
                          {example.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border p-4" style={{ borderColor: 'var(--terracotta-200)', backgroundColor: 'var(--terracotta-50)' }}>
                <h4 className="text-base font-black" style={{ color: 'var(--terracotta-800)' }}>
                  Avoid the calque
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selectedPattern.avoid.map(item => (
                    <li
                      key={item}
                      className="rounded-lg border bg-white px-3 py-2 text-sm font-bold leading-relaxed"
                      style={{ borderColor: 'var(--terracotta-200)', color: 'var(--terracotta-800)' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        ) : (
          <section
            className="rounded-lg border bg-white p-8 text-center shadow-sm"
            style={{ borderColor: 'var(--terracotta-100)' }}
          >
            <h3 className="text-2xl font-black" style={{ color: 'var(--terracotta-800)' }}>
              No structure found
            </h3>
            <p className="mx-auto mt-3 max-w-xl font-medium leading-relaxed" style={{ color: 'var(--sand-600)' }}>
              Try another keyword or reset the category filter.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-lg px-4 py-3 text-sm font-black"
              style={{ backgroundColor: 'var(--terracotta-600)', color: 'white' }}
            >
              Reset filters
            </button>
          </section>
        )}
      </div>
    </div>
  );
};
