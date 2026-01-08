import { useMemo, useState, useCallback } from 'react';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { GRAMMAR_DATA } from '../data/grammarData';
import { THEMES } from '../constants';
import { NOMEN_VERBEN_LIST } from '../data/nomenVerbenData';
import { TRANSLATION_DATA } from '../data/translationData';

// Note: EXPRESSIONS_DATA sera ajouté quand le fichier existera

export type SearchResultType = 
  | 'vocabulary' 
  | 'grammar' 
  | 'expression' 
  | 'nomen-verb' 
  | 'translation'
  | 'table';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  description?: string;
  theme?: string;
  level?: string;
  matchedText: string;
  score: number; // Pour le tri par pertinence
}

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlève les accents
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

  // Construire l'index de recherche
  const searchIndex = useMemo(() => {
    const index: SearchResult[] = [];

    // Indexer le vocabulaire
    Object.entries(VOCABULARY_DATA).forEach(([themeId, data]) => {
      const themeName = THEMES.find(t => t.id === themeId)?.name || themeId;
      
      data.words.forEach((word, idx) => {
        index.push({
          id: `vocab-${themeId}-${idx}`,
          type: 'vocabulary',
          title: word.german,
          subtitle: word.french,
          description: word.example,
          theme: themeName,
          level: word.level,
          matchedText: `${word.german} ${word.french} ${word.example || ''}`,
          score: 0,
        });
      });

      data.phrases.forEach((phrase, idx) => {
        index.push({
          id: `phrase-${themeId}-${idx}`,
          type: 'vocabulary',
          title: phrase.german,
          subtitle: phrase.french,
          description: phrase.context,
          theme: themeName,
          matchedText: `${phrase.german} ${phrase.french} ${phrase.context || ''}`,
          score: 0,
        });
      });
    });

    // Indexer la grammaire
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

    // Indexer les Nomen-Verb
    NOMEN_VERBEN_LIST.forEach((item, idx) => {
      index.push({
        id: `nv-${idx}`,
        type: 'nomen-verb',
        title: item.german,
        subtitle: item.french,
        description: item.example,
        level: item.level,
        matchedText: `${item.german} ${item.french} ${item.example || ''}`,
        score: 0,
      });
    });

    // Note: Les expressions seront indexées quand le fichier de données sera créé

    // Indexer les conseils de traduction
    TRANSLATION_DATA.forEach(section => {
      section.tips.forEach(tip => {
        index.push({
          id: `trans-${tip.id}`,
          type: 'translation',
          title: tip.title,
          subtitle: section.title,
          description: tip.content.substring(0, 150) + '...',
          level: section.level,
          matchedText: `${tip.title} ${section.title} ${tip.content}`,
          score: 0,
        });
      });
    });

    return index;
  }, []);

  // Fonction de recherche
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
      .slice(0, 50); // Limiter à 50 résultats

    return results;
  }, [searchIndex]);

  // Résultats de recherche
  const results = useMemo(() => {
    return search(query);
  }, [query, search]);

  // Grouper les résultats par type
  const groupedResults = useMemo(() => {
    const groups: Record<SearchResultType, SearchResult[]> = {
      vocabulary: [],
      grammar: [],
      expression: [],
      'nomen-verb': [],
      translation: [],
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

