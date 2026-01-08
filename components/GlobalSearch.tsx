import React, { useEffect, useRef } from 'react';
import { useGlobalSearch, SearchResult, SearchResultType } from '../hooks/useGlobalSearch';
import { MainTab } from '../types';

interface GlobalSearchProps {
  onNavigate: (tab: MainTab, data?: any) => void;
}

const typeLabels: Record<SearchResultType, { label: string; icon: string; color: string }> = {
  vocabulary: { label: 'Vocabulaire', icon: '📚', color: 'var(--coral-500)' },
  grammar: { label: 'Grammaire', icon: '📖', color: 'var(--turquoise-500)' },
  expression: { label: 'Expression', icon: '💬', color: 'var(--sage-500)' },
  'nomen-verb': { label: 'Nomen-Verb', icon: '🔗', color: 'var(--sand-600)' },
  translation: { label: 'Traduction', icon: '📰', color: 'var(--coral-600)' },
};

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ onNavigate }) => {
  const {
    query,
    setQuery,
    isOpen,
    open,
    close,
    groupedResults,
    totalResults,
  } = useGlobalSearch();

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Raccourci clavier Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        open();
      }
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, open, close]);

  // Focus sur l'input à l'ouverture
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Fermer en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, close]);

  const handleResultClick = (result: SearchResult) => {
    onNavigate(result.navigationData.tab as MainTab, result.navigationData);
    close();
  };

  return (
    <>
      {/* Bouton de recherche */}
      <button
        onClick={open}
        className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all hover:shadow-md"
        style={{ backgroundColor: 'var(--sand-100)' }}
        title="Rechercher (Ctrl+K)"
      >
        <svg className="w-4 h-4" style={{ color: 'var(--sand-500)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-sm hidden md:inline" style={{ color: 'var(--sand-500)' }}>Rechercher...</span>
        <kbd className="hidden md:inline text-xs px-1.5 py-0.5 rounded bg-white border" style={{ borderColor: 'var(--sand-200)', color: 'var(--sand-400)' }}>
          ⌘K
        </kbd>
      </button>

      {/* Modal de recherche */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-start justify-center pt-[10vh] px-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[70vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Barre de recherche */}
            <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: 'var(--sand-200)' }}>
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un mot, une règle, une expression..."
                className="flex-1 text-lg outline-none"
                style={{ color: 'var(--sand-800)' }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-4 h-4" style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={close}
                className="px-2 py-1 text-xs rounded border hover:bg-gray-50"
                style={{ borderColor: 'var(--sand-200)', color: 'var(--sand-500)' }}
              >
                Échap
              </button>
            </div>

            {/* Résultats */}
            <div className="flex-1 overflow-y-auto">
              {query.length < 2 ? (
                <div className="p-8 text-center">
                  <p className="text-lg mb-2" style={{ color: 'var(--sand-400)' }}>🔍</p>
                  <p style={{ color: 'var(--sand-500)' }}>
                    Tapez au moins 2 caractères pour rechercher
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['Akkusativ', 'Präteritum', 'Konjunktiv', 'Passiv', 'Perfekt'].map(suggestion => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="px-3 py-1.5 rounded-full text-sm transition-all hover:shadow-md"
                        style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              ) : totalResults === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-4xl mb-2">🤷</p>
                  <p className="font-semibold" style={{ color: 'var(--sand-700)' }}>
                    Aucun résultat pour "{query}"
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'var(--sand-500)' }}>
                    Essayez avec d'autres termes
                  </p>
                </div>
              ) : (
                <div className="p-2">
                  {/* Afficher le nombre de résultats */}
                  <p className="px-3 py-2 text-xs font-semibold" style={{ color: 'var(--sand-500)' }}>
                    {totalResults} résultat{totalResults > 1 ? 's' : ''}
                  </p>

                  {/* Groupes de résultats */}
                  {(Object.entries(groupedResults) as [SearchResultType, SearchResult[]][])
                    .filter(([_, results]) => results.length > 0)
                    .map(([type, results]) => (
                      <div key={type} className="mb-4">
                        <div className="flex items-center gap-2 px-3 py-2">
                          <span>{typeLabels[type].icon}</span>
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: typeLabels[type].color }}>
                            {typeLabels[type].label}
                          </span>
                          <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-500)' }}>
                            {results.length}
                          </span>
                        </div>
                        
                        <div className="space-y-1">
                          {results.slice(0, 5).map(result => (
                            <button
                              key={result.id}
                              onClick={() => handleResultClick(result)}
                              className="w-full text-left px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-start gap-3"
                            >
                              <div 
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm"
                                style={{ backgroundColor: `${typeLabels[type].color}20`, color: typeLabels[type].color }}
                              >
                                {typeLabels[type].icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold truncate" style={{ color: 'var(--sand-800)' }}>
                                  <HighlightMatch text={result.title} query={query} />
                                </p>
                                {result.subtitle && (
                                  <p className="text-sm truncate" style={{ color: 'var(--sand-500)' }}>
                                    <HighlightMatch text={result.subtitle} query={query} />
                                  </p>
                                )}
                                {result.theme && (
                                  <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}>
                                    {result.theme}
                                  </span>
                                )}
                                {result.level && (
                                  <span className="inline-block mt-1 ml-1 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--turquoise-100)', color: 'var(--turquoise-700)' }}>
                                    {result.level}
                                  </span>
                                )}
                              </div>
                              <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--sand-300)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          ))}
                          
                          {results.length > 5 && (
                            <p className="px-3 py-2 text-xs" style={{ color: 'var(--sand-400)' }}>
                              + {results.length - 5} autres résultats
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t px-4 py-3 flex items-center justify-between text-xs" style={{ borderColor: 'var(--sand-200)', color: 'var(--sand-400)' }}>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border bg-white" style={{ borderColor: 'var(--sand-200)' }}>↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded border bg-white" style={{ borderColor: 'var(--sand-200)' }}>↓</kbd>
                  <span>naviguer</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border bg-white" style={{ borderColor: 'var(--sand-200)' }}>↵</kbd>
                  <span>ouvrir</span>
                </span>
              </div>
              <span>Recherche dans toute l'application</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Composant pour surligner les correspondances
const HighlightMatch: React.FC<{ text: string; query: string }> = ({ text, query }) => {
  if (!query || query.length < 2) return <>{text}</>;

  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  const index = normalizedText.indexOf(normalizedQuery);

  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <>
      {before}
      <mark className="bg-yellow-200 text-inherit rounded px-0.5">{match}</mark>
      {after}
    </>
  );
};

