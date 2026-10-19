import { useMemo, useState, useCallback } from 'react';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { GRAMMAR_DATA } from '../data/grammarData';
import { THEMES } from '../constants';
import { NOMEN_VERBEN_LIST } from '../data/nomenVerbenData';
import { VERBEN_MIT_PRAEPOSITIONEN } from '../data/verbenMitPraepositionenData';
import { STRUCTURE_COMPARISONS, STRUCTURE_CATEGORY_LABELS } from '../data/structureComparisonData';
import { getTranslation } from '../utils/translations';

// Note: EXPRESSIONS_DATA will be added when the file exists

export type SearchResultType = 
  | 'vocabulary' 
  | 'grammar' 
  | 'structure'
  | 'expression' 
  | 'nomen-verb' 
  | 'verb-preposition'
  | 'table';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  description?: string;
  theme?: string;
  themeId?: string; // Used to deep-link into the correct vocabulary theme
  level?: string;
  matchedText: string;
  score: number; // For relevance sorting
}

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss');
}

function calculateScore(text: string, query: string, normalizedText: string, normalizedQuery: string): number {
  // Score exact match
  if (normalizedText === normalizedQuery) return 100;
  
  // Score starts with
  if (normalizedText.startsWith(normalizedQuery)) return 90;
  
  // Score word starts with
  const words = normalizedText.split(/\s+/);
  if (words.some(w => w.startsWith(normalizedQuery))) return 80;
  
  // Score contains
  if (normalizedText.includes(normalizedQuery)) return 70;
  
  // Score partial match (all query words found)
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1);
  const allWordsFound = queryWords.every(qw => normalizedText.includes(qw));
  if (allWordsFound) return 60;
  
  return 0;
}

export function useGlobalSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

    // Build the search index
  const searchIndex = useMemo(() => {
    const index: SearchResult[] = [];

    // Index vocabulary
    Object.entries(VOCABULARY_DATA).forEach(([themeId, data]) => {
      const themeName = THEMES.find(t => t.id === themeId)?.name || themeId;
      
      data.words.forEach((word, idx) => {
        const translation = getTranslation(word);
        index.push({
          id: `vocab-${themeId}-${idx}`,
          type: 'vocabulary',
          title: word.german,
          subtitle: translation,
          description: word.example,
          theme: themeName,
          themeId,
          level: word.level,
          matchedText: `${word.german} ${word.english || ''} ${word.french || ''} ${translation} ${word.example || ''}`,
          score: 0,
        });
      });

      data.phrases.forEach((phrase, idx) => {
        const translation = getTranslation(phrase);
        index.push({
          id: `phrase-${themeId}-${idx}`,
          type: 'vocabulary',
          title: phrase.german,
          subtitle: translation,
          description: phrase.context,
          theme: themeName,
          themeId,
          matchedText: `${phrase.german} ${phrase.english || ''} ${phrase.french || ''} ${translation} ${phrase.context || ''}`,
          score: 0,
        });
      });
    });

    // Index grammar
    GRAMMAR_DATA.forEach(level => {
      level.sections.forEach(section => {
        section.topics.forEach(topic => {
          index.push({
            id: `grammar-${topic.id}`,
            type: 'grammar',
            title: topic.title,
            subtitle: section.title,
            description: topic.content.substring(0, 150) + '...',
            level: level.level,
            matchedText: `${topic.title} ${section.title} ${topic.content}`,
            score: 0,
          });
        });
      });
    });

    // Index structure comparisons
    STRUCTURE_COMPARISONS.forEach(item => {
      index.push({
        id: `structure-${item.id}`,
        type: 'structure',
        title: item.title,
        subtitle: STRUCTURE_CATEGORY_LABELS[item.category],
        description: item.coreAnswer,
        level: item.level,
        matchedText: [
          item.title,
          item.sourcePattern,
          item.germanPattern,
          item.coreAnswer,
          item.explanation,
          ...item.avoid,
          ...item.examples.flatMap(example => [
            example.english,
            example.german,
            example.note
          ])
        ].join(' '),
        score: 0,
      });
    });

    // Index Nomen-Verb entries
    NOMEN_VERBEN_LIST.forEach((item, idx) => {
      index.push({
        id: `nv-${idx}`,
        type: 'nomen-verb',
        title: item.german,
        subtitle: item.english,
        description: item.example,
        level: item.level,
        matchedText: `${item.german} ${item.english} ${item.example || ''}`,
        score: 0,
      });
    });

    // Index verb-preposition patterns
    VERBEN_MIT_PRAEPOSITIONEN.forEach((item, idx) => {
      index.push({
        id: `vmp-${idx}`,
        type: 'verb-preposition',
        title: `${item.verb} ${item.preposition}`,
        subtitle: `${item.translation} / ${item.translationLt} (${item.case === 'A' ? 'Accusative' : 'Dative'})`,
        description: `${item.exampleEn} / ${item.exampleLt}`,
        matchedText: `${item.verb} ${item.preposition} ${item.translation} ${item.translationLt} ${item.exampleDe} ${item.exampleEn} ${item.exampleLt}`,
        score: 0,
      });
    });

    // Note: expressions will be indexed when the data file is created

    return index;
  }, []);

  // Search function
  const search = useCallback((searchQuery: string): SearchResult[] => {
    if (!searchQuery || searchQuery.length < 2) return [];

    const normalizedQuery = normalizeText(searchQuery);

    const results = searchIndex
      .map(item => {
        const normalizedText = normalizeText(item.matchedText);
        const score = calculateScore(item.matchedText, searchQuery, normalizedText, normalizedQuery);
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50); // Limit to 50 results

    return results;
  }, [searchIndex]);

  // Search results
  const results = useMemo(() => {
    return search(query);
  }, [query, search]);

  // Group results by type
  const groupedResults = useMemo(() => {
    const groups: Record<SearchResultType, SearchResult[]> = {
      vocabulary: [],
      grammar: [],
      structure: [],
      expression: [],
      'nomen-verb': [],
      'verb-preposition': [],
      table: [],
    };

    results.forEach(result => {
      groups[result.type].push(result);
    });

    return groups;
  }, [results]);

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  return {
    query,
    setQuery,
    results,
    groupedResults,
    isOpen,
    openSearch,
    closeSearch,
    totalResults: results.length,
  };
}

