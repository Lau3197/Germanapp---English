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
  all: 'All',
  B1: 'B1',
  B2: 'B2',
  'B2+': 'B2+'
};

const TOTAL_EXAMPLES = STRUCTURE_COMPARISONS.reduce(
  (count, pattern) => count + pattern.examples.length,
  0
);

const PRACTICE_MODIFIERS = [
  { english: ' today.', german: ' heute.' },
  { english: ' this week.', german: ' diese Woche.' },
  { english: ' at home.', german: ' zu Hause.' },
  { english: ' for now.', german: ' vorerst.' },
  { english: ' in the end.', german: ' am Ende.' },
  { english: ' as usual.', german: ' wie üblich.' },
  { english: ' in Germany.', german: ' in Deutschland.' }
];

function getPracticeItems(pattern: StructureComparison) {
  const items = pattern.examples.map((example, index) => ({
    id: `${pattern.id}-example-${index}`,
    structureTitle: pattern.title,
    english: example.english,
    german: example.german
  }));

  PRACTICE_MODIFIERS.forEach((modifier, index) => {
    const source = pattern.examples[index % pattern.examples.length];
    items.push({
      id: `${pattern.id}-variant-${index}`,
      structureTitle: pattern.title,
      english: source.english.replace(/[.!?]$/, '') + modifier.english,
      german: source.german.replace(/[.!?]$/, '') + modifier.german
    });
  });

  return items.slice(0, 10);
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
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
  const [revealedReviewItems, setRevealedReviewItems] = useState<Set<string>>(new Set());

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
  const practiceItems = selectedPattern ? getPracticeItems(selectedPattern) : [];
  const hasActiveFilters = selectedCategory !== 'all' || selectedLevel !== 'all' || query.trim().length > 0;

  const resetFilters = () => {
    setQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
  };

  const toggleReviewAnswer = (itemId: string) => {
    setRevealedReviewItems(current => {
      const next = new Set(current);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  return (
    <div className="structure-page animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="structure-hero">
        <div className="min-w-0">
          <h2 className="structure-hero-title" style={{ color: 'var(--terracotta-800)' }}>
            Hard-to-translate structures
          </h2>
          <p className="structure-hero-sub" style={{ color: 'var(--sand-600)' }}>
            Compare the English cue, the German structure, and the reflex to build before translating.
          </p>
          <div className="structure-hero-guide" style={{ borderColor: 'var(--turquoise-200)', backgroundColor: 'var(--turquoise-50)' }}>
            <strong style={{ color: 'var(--turquoise-800)' }}>How to use this library</strong>
            <p style={{ color: 'var(--sand-700)' }}>
              Do not translate word for word. First identify the meaning of the English sentence, then choose the German pattern,
              place the verb correctly, and finally compare your sentence with the examples and the “Avoid” list.
            </p>
          </div>
          <p className="structure-hero-meta" style={{ color: 'var(--sand-500)' }}>
            <strong style={{ color: 'var(--terracotta-700)' }}>{STRUCTURE_COMPARISONS.length}</strong> patterns
            <span aria-hidden="true"> · </span>
            <strong style={{ color: 'var(--terracotta-700)' }}>{categoryOptions.length - 1}</strong> types
            <span aria-hidden="true"> · </span>
            <strong style={{ color: 'var(--terracotta-700)' }}>{TOTAL_EXAMPLES}</strong> examples
          </p>
        </div>

        <p className="structure-hero-motto" style={{ color: 'var(--turquoise-800)' }}>
          <span style={{ color: 'var(--turquoise-600)' }}>The more precisely you link ideas, the more natural your German sounds.</span>
          Je präziser du Gedanken verbindest, desto natürlicher klingt dein Deutsch.
        </p>
      </header>

      <div className="structure-workspace">
        <aside
          className="structure-rail"
          style={{ borderColor: 'var(--terracotta-100)' }}
        >
          <div className="structure-rail-filters" style={{ borderColor: 'var(--terracotta-100)' }}>
            <label className="structure-search">
              <span className="sr-only">Search a structure</span>
              <svg
                className="structure-search-icon"
                style={{ color: 'var(--sand-400)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="unless, not until, worth..."
                style={{ borderColor: 'var(--sand-200)', color: 'var(--sand-800)' }}
              />
            </label>

            <div className="structure-levels" role="group" aria-label="Level">
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
                    style={{
                      backgroundColor: isActive ? 'var(--turquoise-700)' : 'white',
                      color: isActive ? 'white' : isUnavailable ? 'var(--sand-400)' : 'var(--sand-700)',
                      borderColor: isActive ? 'var(--turquoise-700)' : 'var(--terracotta-100)',
                      cursor: isUnavailable ? 'not-allowed' : 'pointer',
                      opacity: isUnavailable ? 0.55 : 1
                    }}
                    aria-pressed={isActive}
                  >
                    {LEVEL_LABELS[level]}
                    <span style={{ color: isActive ? 'rgba(255,255,255,0.75)' : 'var(--sand-400)' }}>{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="structure-select">
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value as CategoryFilter)}
                aria-label="Structure type"
                style={{ borderColor: 'var(--sand-200)', color: 'var(--sand-800)' }}
              >
                {categoryOptions.map(category => (
                  <option
                    key={category}
                    value={category}
                    disabled={category !== 'all' && categoryCounts[category] === 0}
                  >
                    {STRUCTURE_CATEGORY_LABELS[category]} ({categoryCounts[category]})
                  </option>
                ))}
              </select>
              <svg
                className="structure-select-icon"
                style={{ color: 'var(--sand-400)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="structure-rail-status" style={{ borderColor: 'var(--terracotta-100)' }}>
            <p style={{ color: 'var(--sand-600)' }}>
              <strong style={{ color: 'var(--terracotta-800)' }}>{filteredPatterns.length}</strong>
              {' '}result{filteredPatterns.length === 1 ? '' : 's'}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}
              >
                Reset
              </button>
            )}
          </div>

          <div className="structure-rail-list">
            {filteredPatterns.length === 0 && (
              <p className="structure-rail-empty" style={{ color: 'var(--sand-500)' }}>
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
                  className={`structure-rail-item ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    backgroundColor: isActive ? 'var(--terracotta-50)' : 'transparent',
                    borderColor: isActive ? 'var(--terracotta-200)' : 'transparent'
                  }}
                >
                  <span className="structure-rail-item-meta">
                    <span style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
                      {pattern.level}
                    </span>
                    <em style={{ color: 'var(--turquoise-700)' }}>
                      {STRUCTURE_CATEGORY_LABELS[pattern.category]}
                    </em>
                  </span>
                  <span
                    className="structure-rail-item-title"
                    style={{ color: isActive ? 'var(--terracotta-800)' : 'var(--sand-800)' }}
                  >
                    {pattern.title}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {selectedPattern ? (
          <article className="structure-detail" style={{ borderColor: 'var(--terracotta-100)' }}>
            <div className="structure-detail-head" style={{ borderColor: 'var(--terracotta-100)' }}>
              <div className="structure-detail-badges">
                <span style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
                  {selectedPattern.level}
                </span>
                <span style={{ backgroundColor: 'var(--turquoise-50)', color: 'var(--turquoise-700)' }}>
                  {STRUCTURE_CATEGORY_LABELS[selectedPattern.category]}
                </span>
              </div>
              <h3 style={{ color: 'var(--terracotta-800)' }}>{selectedPattern.title}</h3>
              <p className="structure-detail-label" style={{ color: 'var(--terracotta-600)' }}>Short answer</p>
              <p className="structure-detail-core" style={{ color: 'var(--sand-800)' }}>
                {selectedPattern.coreAnswer}
              </p>
              <p className="structure-detail-label" style={{ color: 'var(--turquoise-700)' }}>Why the structure changes</p>
              <p className="structure-detail-explain" style={{ color: 'var(--sand-600)' }}>
                {selectedPattern.explanation}
              </p>
            </div>

            <div className="structure-detail-body">
              <section className="structure-shift">
                <div style={{ borderColor: 'var(--sand-200)', backgroundColor: 'var(--sand-50)' }}>
                  <p style={{ color: 'var(--sand-500)' }}>English cue</p>
                  <p style={{ color: 'var(--sand-800)' }}>{selectedPattern.sourcePattern}</p>
                </div>
                <span className="structure-shift-arrow" style={{ backgroundColor: 'var(--terracotta-600)' }} aria-hidden="true">
                  →
                </span>
                <div style={{ borderColor: 'var(--turquoise-200)', backgroundColor: 'var(--turquoise-50)' }}>
                  <p style={{ color: 'var(--turquoise-700)' }}>German structure</p>
                  <p style={{ color: 'var(--sand-800)' }}>{selectedPattern.germanPattern}</p>
                </div>
              </section>

              <section className="structure-reading-guide" aria-labelledby="structure-reading-guide-title">
                <div className="structure-section-head">
                  <h4 id="structure-reading-guide-title" style={{ color: 'var(--terracotta-800)' }}>Build this sentence step by step</h4>
                </div>
                <ol className="structure-reading-steps">
                  <li style={{ borderColor: 'var(--sand-200)' }}>
                    <span style={{ backgroundColor: 'var(--terracotta-600)' }}>1</span>
                    <div><strong style={{ color: 'var(--sand-800)' }}>Start from the English cue</strong><p style={{ color: 'var(--sand-600)' }}>{selectedPattern.sourcePattern}. This is the meaning you need to express; do not copy its word order.</p></div>
                  </li>
                  <li style={{ borderColor: 'var(--sand-200)' }}>
                    <span style={{ backgroundColor: 'var(--turquoise-700)' }}>2</span>
                    <div><strong style={{ color: 'var(--sand-800)' }}>Build this German frame</strong><p className="structure-reading-formula" style={{ color: 'var(--turquoise-800)' }}>{selectedPattern.germanPattern}</p></div>
                  </li>
                  <li style={{ borderColor: 'var(--sand-200)' }}>
                    <span style={{ backgroundColor: 'var(--sand-600)' }}>3</span>
                    <div><strong style={{ color: 'var(--sand-800)' }}>Put the information into the frame</strong><p style={{ color: 'var(--sand-600)' }}>{selectedPattern.examples[0].german}</p></div>
                  </li>
                  <li style={{ borderColor: 'var(--sand-200)' }}>
                    <span style={{ backgroundColor: 'var(--terracotta-600)' }}>4</span>
                    <div><strong style={{ color: 'var(--sand-800)' }}>Check this specific point</strong><p style={{ color: 'var(--sand-600)' }}>{selectedPattern.examples[0].note || selectedPattern.avoid[0]}</p></div>
                  </li>
                </ol>
              </section>

              <section>
                <div className="structure-section-head">
                  <h4 style={{ color: 'var(--terracotta-800)' }}>Examples to memorize</h4>
                  <span style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
                    {selectedPattern.examples.length}
                  </span>
                </div>

                <div className="structure-examples">
                  {selectedPattern.examples.map(example => (
                    <div
                      key={`${selectedPattern.id}-${example.english}`}
                      className="structure-example"
                      style={{ borderColor: 'var(--sand-200)' }}
                    >
                      <div className="structure-example-pair">
                        <div>
                          <p style={{ color: 'var(--sand-500)' }}>English</p>
                          <p style={{ color: 'var(--sand-800)' }}>{example.english}</p>
                        </div>
                        <div>
                          <p style={{ color: 'var(--terracotta-600)' }}>German</p>
                          <p style={{ color: 'var(--terracotta-800)' }}>{example.german}</p>
                        </div>
                      </div>
                      {example.note && (
                        <p className="structure-example-note" style={{ borderColor: 'var(--sand-200)', color: 'var(--sand-600)' }}>
                          <span style={{ color: 'var(--turquoise-700)' }}>Reflex</span>
                          {example.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section
                className="structure-avoid"
                style={{ borderColor: 'var(--terracotta-200)', backgroundColor: 'var(--terracotta-50)' }}
              >
                <h4 style={{ color: 'var(--terracotta-800)' }}>Avoid the calque</h4>
                <ul>
                  {selectedPattern.avoid.map(item => (
                    <li key={item} style={{ borderColor: 'var(--terracotta-200)', color: 'var(--terracotta-800)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        ) : (
          <section className="structure-empty" style={{ borderColor: 'var(--terracotta-100)' }}>
            <h3 style={{ color: 'var(--terracotta-800)' }}>No structure found</h3>
            <p style={{ color: 'var(--sand-600)' }}>
              Try another keyword or reset the category filter.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              style={{ backgroundColor: 'var(--terracotta-600)', color: 'white' }}
            >
              Reset filters
            </button>
          </section>
        )}
      </div>

      <section className="structure-final-review" aria-labelledby="structure-final-review-title">
        <div className="structure-final-review-head">
          <div>
            <p className="structure-detail-label" style={{ color: 'var(--turquoise-700)' }}>Final check</p>
            <h3 id="structure-final-review-title" style={{ color: 'var(--terracotta-800)' }}>Translate 10 sentences</h3>
            <p style={{ color: 'var(--sand-600)' }}>
              Translate ten different sentences using the structure above without looking at the answers. Then reveal each correction
              and compare the word order, the verb position, and the specific German frame.
            </p>
          </div>
          <span style={{ backgroundColor: 'var(--terracotta-50)', color: 'var(--terracotta-700)' }}>10 exercises for this structure</span>
        </div>

        <div className="structure-final-review-list">
          {practiceItems.map((item, index) => {
            const isRevealed = revealedReviewItems.has(item.id);

            return (
              <article key={item.id} className="structure-final-review-item" style={{ borderColor: 'var(--sand-200)' }}>
                <div className="structure-final-review-number" style={{ color: 'var(--terracotta-700)' }}>{index + 1}</div>
                <div className="structure-final-review-content">
                  <p className="structure-final-review-pattern" style={{ color: 'var(--turquoise-700)' }}>{item.structureTitle}</p>
                  <p className="structure-final-review-prompt" style={{ color: 'var(--sand-800)' }}>{item.english}</p>
                  <button
                    type="button"
                    className="structure-final-review-button"
                    onClick={() => toggleReviewAnswer(item.id)}
                    style={{ backgroundColor: isRevealed ? 'var(--sand-100)' : 'var(--terracotta-600)', color: isRevealed ? 'var(--sand-700)' : 'white' }}
                    aria-expanded={isRevealed}
                  >
                    {isRevealed ? 'Hide answer' : 'Show answer'}
                  </button>
                  {isRevealed && (
                    <div className="structure-final-review-answer" style={{ borderColor: 'var(--turquoise-200)', backgroundColor: 'var(--turquoise-50)' }}>
                      <span style={{ color: 'var(--turquoise-700)' }}>Correction</span>
                      <strong style={{ color: 'var(--sand-800)' }}>{item.german}</strong>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
