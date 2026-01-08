import React, { useEffect, useRef } from 'react';
import { useGlobalSearch, SearchResult, SearchResultType } from '../hooks/useGlobalSearch';
import { MainTab } from '../types';

interface GlobalSearchProps {
  onNavigate: (tab: MainTab, context?: any) => void;
}

const typeLabels: Record<SearchResultType, { label: string; icon: string; color: string }> = {
  vocabulary: { label: 'Vocabulaire', icon: '📚', color: 'var(--coral-500)' },
  grammar: { label: 'Grammaire', icon: '📖', color: 'var(--turquoise-500)' },
  expression: { label: 'Expression', icon: '💬', color: 'var(--sage-500)' },
  'nomen-verb': { label: 'Nomen-Verb', icon: '🔗', color: 'var(--sand-600)' },
  translation: { label: 'Traduction', icon: '📰', color: 'var(--coral-600)' },
  table: { label: 'Tableau', icon: '📋', color: 'var(--turquoise-600)' },
};

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ onNavigate }) => {
  const {
    query,
    setQuery,
    groupedResults,
    isOpen,
    openSearch,
    closeSearch,
    totalResults,
  } = useGlobalSearch();

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Raccourci clavier Ctrl+K ou Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, openSearch, closeSearch]);

  // Focus sur l'input quand le modal s'ouvre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Fermer en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeSearch]);

  const handleResultClick = (result: SearchResult) => {
    // Naviguer vers l'onglet approprié
    switch (result.type) {
      case 'vocabulary':
        onNavigate('vocabulary', { search: result.title });
        break;
      case 'grammar':
        onNavigate('grammar', { topicId: result.id.replace('grammar-', '') });
        break;
      case 'expression':
        onNavigate('expressions', { search: result.title });
        break;
      case 'nomen-verb':
        onNavigate('nomen-verben', { search: result.title });
        break;
      case 'translation':
        onNavigate('translation', { tipId: result.id.replace('trans-', '') });
        break;
      case 'table':
        onNavigate('tables');
        break;
    }
    closeSearch();
  };

  const hasResults = totalResults > 0;
  const showNoResults = query.length >= 2 && !hasResults;

  return (
    <>
      {/* Bouton de recherche */}
      <button
        onClick={openSearch}
        className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all hover:shadow-md"
        style={{ backgroundColor: 'var(--sand-100)' }}
        title="Rechercher (Ctrl+K)"
      >
        <svg className="w-5 h-5" style={{ color: 'var(--sand-500)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden md:inline text-sm" style={{ color: 'var(--sand-500)' }}>
          Rechercher...
        </span>
        <kbd className="hidden md:inline px-2 py-0.5 rounded text-xs font-mono" style={{ 
          backgroundColor: 'var(--sand-200)', 
          color: 'var(--sand-600)' 
        }}>
          ⌘K
        </kbd>
      </button>

      {/* Modal de recherche */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Contenu */}
          <div 
            ref={modalRef}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ maxHeight: '70vh' }}
          >
            {/* Barre de recherche */}
            <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: 'var(--sand-200)' }}>
              <svg className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5" style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={closeSearch}
                className="px-2 py-1 rounded text-xs font-medium"
                style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}
              >
                ESC
              </button>
            </div>

            {/* Résultats */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(70vh - 80px)' }}>
              {/* Message initial */}
              {query.length < 2 && (
                <div className="p-8 text-center" style={{ color: 'var(--sand-500)' }}>
                  <p className="text-4xl mb-4">🔍</p>
                  <p>Tapez au moins 2 caractères pour rechercher</p>
                  <p className="text-sm mt-2">
                    Recherche dans : vocabulaire, grammaire, expressions, traduction...
                  </p>
                </div>
              )}

              {/* Pas de résultats */}
              {showNoResults && (
                <div className="p-8 text-center" style={{ color: 'var(--sand-500)' }}>
                  <p className="text-4xl mb-4">😕</p>
                  <p>Aucun résultat pour "<strong>{query}</strong>"</p>
                  <p className="text-sm mt-2">Essayez avec d'autres termes</p>
                </div>
              )}

              {/* Liste des résultats groupés */}
              {hasResults && (
                <div className="p-2">
                  {Object.entries(groupedResults).map(([type, results]) => {
                    if (results.length === 0) return null;
                    const typeInfo = typeLabels[type as SearchResultType];

                    return (
                      <div key={type} className="mb-4">
                        <div className="px-3 py-2 flex items-center gap-2">
                          <span>{typeInfo.icon}</span>
                          <span className="text-sm font-bold" style={{ color: typeInfo.color }}>
                            {typeInfo.label}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ 
                            backgroundColor: 'var(--sand-100)',
                            color: 'var(--sand-600)'
                          }}>
                            {results.length}
                          </span>
                        </div>

                        <div className="space-y-1">
                          {results.slice(0, 5).map((result) => (
                            <button
                              key={result.id}
                              onClick={() => handleResultClick(result)}
                              className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-start gap-3"
                            >
                              <div 
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: typeInfo.color }}
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-medium truncate" style={{ color: 'var(--sand-800)' }}>
                                  {result.title}
                                </p>
                                {result.subtitle && (
                                  <p className="text-sm truncate" style={{ color: 'var(--sand-500)' }}>
                                    {result.subtitle}
                                  </p>
                                )}
                                {result.theme && (
                                  <span className="inline-block text-xs px-2 py-0.5 rounded-full mt-1" style={{
                                    backgroundColor: 'var(--sand-100)',
                                    color: 'var(--sand-600)'
                                  }}>
                                    {result.theme}
                                  </span>
                                )}
                              </div>
                              {result.level && (
                                <span className="text-xs px-2 py-1 rounded-lg font-medium" style={{
                                  backgroundColor: 'var(--turquoise-100)',
                                  color: 'var(--turquoise-700)'
                                }}>
                                  {result.level}
                                </span>
                              )}
                            </button>
                          ))}

                          {results.length > 5 && (
                            <p className="px-4 py-2 text-sm" style={{ color: 'var(--sand-400)' }}>
                              +{results.length - 5} autres résultats...
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {hasResults && (
              <div className="border-t px-4 py-2 flex items-center justify-between text-xs"
                style={{ borderColor: 'var(--sand-200)', color: 'var(--sand-500)' }}
              >
                <span>{totalResults} résultat{totalResults > 1 ? 's' : ''}</span>
                <div className="flex items-center gap-4">
                  <span>↑↓ naviguer</span>
                  <span>↵ sélectionner</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

