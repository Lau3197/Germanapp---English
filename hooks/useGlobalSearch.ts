import { useMemo, useState, useCallback } from 'react';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { GRAMMAR_DATA } from '../data/grammarData';
import { THEMES } from '../constants';
import { NOMEN_VERBEN_LIST } from '../data/nomenVerbenData';
import { TRANSLATION_DATA } from '../data/translationData';

// Note: Les expressions sont définies directement dans ExpressionsView.tsx
// Pour la recherche, nous les incluons ici statiquement

export type SearchResultType = 'vocabulary' | 'grammar' | 'expression' | 'nomen-verb' | 'translation';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  context?: string;
  theme?: string;
  level?: string;
  // Pour la navigation
  navigationData: {
    tab: string;
    themeId?: string;
    sectionId?: string;
    topicId?: string;
    level?: string;
  };
}

// Fonction pour normaliser les chaînes (accents, casse)
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[äÄ]/g, 'a')
    .replace(/[öÖ]/g, 'o')
    .replace(/[üÜ]/g, 'u')
    .replace(/ß/g, 'ss');
}

// Fonction pour vérifier si un texte contient la recherche
function matchesSearch(text: string, query: string): boolean {
  return normalizeString(text).includes(normalizeString(query));
}

// Fonction pour extraire un extrait autour du match
function getContextSnippet(text: string, query: string, maxLength: number = 100): string {
  const normalizedText = normalizeString(text);
  const normalizedQuery = normalizeString(query);
  const index = normalizedText.indexOf(normalizedQuery);
  
  if (index === -1) return text.slice(0, maxLength) + '...';
  
  const start = Math.max(0, index - 30);
  const end = Math.min(text.length, index + query.length + 70);
  
  let snippet = text.slice(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return snippet;
}

export function useGlobalSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Index de recherche pré-calculé
  const searchIndex = useMemo(() => {
    const results: SearchResult[] = [];

    // 1. VOCABULAIRE
    THEMES.forEach(theme => {
      const themeData = VOCABULARY_DATA[theme.id];
      if (!themeData) return;

      themeData.words.forEach((word, idx) => {
        results.push({
          id: `vocab-${theme.id}-${idx}`,
          type: 'vocabulary',
          title: word.article ? `${word.article} ${word.german}` : word.german,
          subtitle: word.french,
          theme: theme.name,
          level: word.level,
          navigationData: {
            tab: 'vocabulary',
            themeId: theme.id,
          }
        });
      });
    });

    // 2. GRAMMAIRE
    GRAMMAR_DATA.forEach(level => {
      level.sections.forEach(section => {
        section.topics.forEach(topic => {
          results.push({
            id: `grammar-${topic.id}`,
            type: 'grammar',
            title: topic.title,
            subtitle: section.title,
            context: topic.content.slice(0, 150) + '...',
            level: level.level,
            navigationData: {
              tab: 'grammar',
              level: level.level,
              sectionId: section.title,
              topicId: topic.id,
            }
          });
        });
      });
    });

    // 3. NOMEN-VERBEN
    NOMEN_VERBEN_LIST.forEach((item, idx) => {
      results.push({
        id: `nv-${idx}`,
        type: 'nomen-verb',
        title: item.german,
        subtitle: item.french,
        context: item.example,
        level: item.level,
        navigationData: {
          tab: 'nomen-verben',
        }
      });
    });

    // 4. EXPRESSIONS (données intégrées pour la recherche)
    const expressionCategories = [
      { category: 'Quotidien', expressions: [
        { german: "Wie geht's?", french: "Comment ça va ?" },
        { german: "Was ist los?", french: "Qu'est-ce qui se passe ?" },
        { german: "Keine Ahnung!", french: "Aucune idée !" },
        { german: "Macht nichts!", french: "Ce n'est pas grave !" },
        { german: "Genau!", french: "Exactement !" },
        { german: "Stimmt!", french: "C'est vrai !" },
        { german: "Auf jeden Fall!", french: "Absolument !" },
        { german: "Kein Problem!", french: "Pas de problème !" },
        { german: "Na klar!", french: "Bien sûr !" },
        { german: "Alles klar?", french: "Tout est clair ?" },
      ]},
      { category: 'Proverbes', expressions: [
        { german: "Übung macht den Meister.", french: "C'est en forgeant qu'on devient forgeron." },
        { german: "Morgenstund hat Gold im Mund.", french: "Le monde appartient à ceux qui se lèvent tôt." },
        { german: "Aller Anfang ist schwer.", french: "Tout début est difficile." },
        { german: "Ohne Fleiß kein Preis.", french: "On n'a rien sans rien." },
        { german: "Der Apfel fällt nicht weit vom Stamm.", french: "Tel père, tel fils." },
      ]},
      { category: 'Idiomes', expressions: [
        { german: "Das ist nicht mein Bier.", french: "Ce n'est pas mon problème." },
        { german: "Ich verstehe nur Bahnhof.", french: "Je n'y comprends rien." },
        { german: "Tomaten auf den Augen haben", french: "Ne pas voir l'évidence" },
        { german: "Die Daumen drücken", french: "Croiser les doigts" },
        { german: "Schwein haben", french: "Avoir de la chance" },
      ]},
    ];
    
    expressionCategories.forEach(({ category, expressions }) => {
      expressions.forEach((expr, idx) => {
        results.push({
          id: `expr-${category}-${idx}`,
          type: 'expression',
          title: expr.german,
          subtitle: expr.french,
          theme: category,
          navigationData: {
            tab: 'expressions',
          }
        });
      });
    });

    // 5. TRADUCTION
    TRANSLATION_DATA.forEach(section => {
      section.tips.forEach(tip => {
        results.push({
          id: `trans-${tip.id}`,
          type: 'translation',
          title: tip.title,
          subtitle: section.title,
          context: tip.content.slice(0, 150) + '...',
          navigationData: {
            tab: 'translation',
          }
        });
      });
    });

    return results;
  }, []);

  // Résultats filtrés
  const searchResults = useMemo(() => {
    if (!query || query.length < 2) return [];

    const filtered = searchIndex.filter(item => {
      // Recherche dans le titre
      if (matchesSearch(item.title, query)) return true;
      // Recherche dans le sous-titre
      if (item.subtitle && matchesSearch(item.subtitle, query)) return true;
      // Recherche dans le contexte
      if (item.context && matchesSearch(item.context, query)) return true;
      // Recherche dans le thème
      if (item.theme && matchesSearch(item.theme, query)) return true;
      return false;
    });

    // Trier par pertinence (titre match > subtitle match > context match)
    return filtered.sort((a, b) => {
      const aInTitle = matchesSearch(a.title, query);
      const bInTitle = matchesSearch(b.title, query);
      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;
      return 0;
    }).slice(0, 50); // Limiter à 50 résultats
  }, [query, searchIndex]);

  // Grouper par type
  const groupedResults = useMemo(() => {
    const groups: Record<SearchResultType, SearchResult[]> = {
      vocabulary: [],
      grammar: [],
      expression: [],
      'nomen-verb': [],
      translation: [],
    };

    searchResults.forEach(result => {
      groups[result.type].push(result);
    });

    return groups;
  }, [searchResults]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    query,
    setQuery,
    isOpen,
    open,
    close,
    toggle,
    searchResults,
    groupedResults,
    totalResults: searchResults.length,
  };
}

