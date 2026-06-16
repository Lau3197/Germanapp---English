import React, { useState } from 'react';
import { TRANSLATION_DATA, TranslationSection, TranslationTip } from '../data/translationData';

type Level = 'all' | 'beginner' | 'intermediate' | 'advanced';

export const TranslationView: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('all');
  const [selectedSection, setSelectedSection] = useState<TranslationSection | null>(null);
  const [selectedTip, setSelectedTip] = useState<TranslationTip | null>(null);
  const [expandedExamples, setExpandedExamples] = useState<Set<string>>(new Set());

  const filteredSections = selectedLevel === 'all'
    ? TRANSLATION_DATA
    : TRANSLATION_DATA.filter(s => s.level === selectedLevel);

  const levelLabels: Record<Level, string> = {
    all: 'Tous les niveaux',
    beginner: '🌱 Débutant',
    intermediate: '🌿 Intermédiaire',
    advanced: '🌳 Avancé'
  };

  const levelColors: Record<string, { bg: string; text: string; border: string }> = {
    beginner: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    intermediate: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    advanced: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' }
  };

  const toggleExample = (id: string) => {
    setExpandedExamples(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Vue liste des sections
  if (!selectedSection) {
    return (
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-2" style={{ color: 'var(--coral-700)' }}>
            📰 Conseils de traduction
          </h2>
          <p className="text-lg" style={{ color: 'var(--sand-600)' }}>
            Guide pratique pour traduire des articles de presse allemand → français
          </p>
        </div>

        {/* Filtres par niveau */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(Object.keys(levelLabels) as Level[]).map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${selectedLevel === level
                ? 'text-white shadow-lg'
                : 'bg-white hover:bg-gray-50'
                }`}
              style={{
                backgroundColor: selectedLevel === level ? 'var(--coral-500)' : undefined,
                color: selectedLevel !== level ? 'var(--sand-700)' : undefined
              }}
            >
              {levelLabels[level]}
            </button>
          ))}
        </div>

        {/* Grille des sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSections.map(section => {
            const colors = levelColors[section.level];
            return (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section)}
                className={`p-6 rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-1 border-2 ${colors.bg} ${colors.border}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{section.icon}</span>
                  <div>
                    <h3 className={`font-bold text-lg ${colors.text}`}>
                      {section.title}
                    </h3>
                    <p className="text-sm mt-1 opacity-70">
                      {section.tips.length} conseil{section.tips.length > 1 ? 's' : ''}
                    </p>
                    <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} font-medium`}>
                      {section.level === 'beginner' && '🌱 Débutant'}
                      {section.level === 'intermediate' && '🌿 Intermédiaire'}
                      {section.level === 'advanced' && '🌳 Avancé'}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: 'var(--sand-100)' }}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-black" style={{ color: 'var(--coral-600)' }}>
                {TRANSLATION_DATA.length}
              </p>
              <p className="text-sm" style={{ color: 'var(--sand-600)' }}>sections</p>
            </div>
            <div>
              <p className="text-3xl font-black" style={{ color: 'var(--coral-600)' }}>
                {TRANSLATION_DATA.reduce((acc, s) => acc + s.tips.length, 0)}
              </p>
              <p className="text-sm" style={{ color: 'var(--sand-600)' }}>conseils</p>
            </div>
            <div>
              <p className="text-3xl font-black" style={{ color: 'var(--coral-600)' }}>
                {TRANSLATION_DATA.reduce((acc, s) => acc + s.tips.reduce((a, t) => a + t.examples.length, 0), 0)}
              </p>
              <p className="text-sm" style={{ color: 'var(--sand-600)' }}>exemples</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vue détail d'une section
  if (!selectedTip) {
    const colors = levelColors[selectedSection.level];
    return (
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <button
          onClick={() => setSelectedSection(null)}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
          style={{ color: 'var(--coral-600)' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">Retour aux sections</span>
        </button>

        {/* Header de la section */}
        <div className={`p-8 rounded-3xl mb-8 ${colors.bg} border-2 ${colors.border}`}>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{selectedSection.icon}</span>
            <div>
              <h2 className={`text-2xl font-black ${colors.text}`}>
                {selectedSection.title}
              </h2>
              <span className={`inline-block mt-2 text-sm px-3 py-1 rounded-full bg-white/50 ${colors.text} font-medium`}>
                {selectedSection.level === 'beginner' && '🌱 Niveau débutant'}
                {selectedSection.level === 'intermediate' && '🌿 Niveau intermédiaire'}
                {selectedSection.level === 'advanced' && '🌳 Niveau avancé'}
              </span>
            </div>
          </div>
        </div>

        {/* Liste des conseils */}
        <div className="space-y-4">
          {selectedSection.tips.map((tip, index) => (
            <button
              key={tip.id}
              onClick={() => setSelectedTip(tip)}
              className="w-full p-6 bg-white rounded-2xl text-left transition-all hover:shadow-lg hover:-translate-y-0.5 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: 'var(--coral-500)' }}>
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: 'var(--sand-800)' }}>
                    {tip.title}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--sand-500)' }}>
                    {tip.examples.length} exemple{tip.examples.length > 1 ? 's' : ''}
                  </p>
                </div>
                <svg className="w-5 h-5 ml-auto flex-shrink-0" style={{ color: 'var(--sand-400)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Vue détail d'un conseil
  const colors = levelColors[selectedSection.level];
  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <button
        onClick={() => setSelectedTip(null)}
        className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
        style={{ color: 'var(--coral-600)' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-semibold">Retour à {selectedSection.title}</span>
      </button>

      {/* Header du conseil */}
      <div className={`p-8 rounded-3xl mb-8 ${colors.bg} border-2 ${colors.border}`}>
        <span className="text-4xl mb-4 block">{selectedSection.icon}</span>
        <h2 className={`text-2xl font-black ${colors.text}`}>
          {selectedTip.title}
        </h2>
      </div>

      {/* Contenu */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
        <div
          className="prose prose-lg max-w-none"
          style={{ color: 'var(--sand-800)' }}
        >
          {selectedTip.content.split('\n').map((paragraph, idx) => {
            // Gestion des headers markdown
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-bold mt-6 mb-3" style={{ color: 'var(--coral-700)' }}>
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }

            // Gestion des tableaux markdown simples
            if (paragraph.startsWith('|')) {
              const rows = paragraph.split('\n').filter(r => r.startsWith('|'));
              if (rows.length > 0) {
                const headerCells = rows[0].split('|').filter(c => c.trim());
                const dataRows = rows.slice(2); // Skip header and separator
                return (
                  <div key={idx} className="overflow-x-auto my-4">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr>
                          {headerCells.map((cell, i) => (
                            <th key={i} className="border px-4 py-2 text-left font-bold" style={{ backgroundColor: 'var(--sand-100)', borderColor: 'var(--sand-200)' }}>
                              {cell.trim().replace(/\*\*/g, '')}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, rowIdx) => (
                          <tr key={rowIdx}>
                            {row.split('|').filter(c => c.trim()).map((cell, cellIdx) => (
                              <td key={cellIdx} className="border px-4 py-2" style={{ borderColor: 'var(--sand-200)' }}>
                                {cell.trim().replace(/\*\*/g, '')}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
            }
            // Gestion des listes
            if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
              return (
                <li key={idx} className="ml-4 my-1">
                  {formatText(paragraph.replace(/^[-•] /, ''))}
                </li>
              );
            }
            // Paragraphes normaux
            if (paragraph.trim()) {
              return (
                <p key={idx} className="my-3 leading-relaxed">
                  {formatText(paragraph)}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Exemples */}
      {selectedTip.examples.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold" style={{ color: 'var(--coral-700)' }}>
            📝 Exemples
          </h3>
          {selectedTip.examples.map((example, idx) => {
            const isExpanded = expandedExamples.has(`${selectedTip.id}-${idx}`);
            return (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleExample(`${selectedTip.id}-${idx}`)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-semibold" style={{ color: 'var(--sand-800)' }}>
                        🇩🇪 {example.de}
                      </p>
                    </div>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--sand-400)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 space-y-3" style={{ backgroundColor: 'var(--sand-50)' }}>
                    {example.frBad && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                        <p className="text-sm font-semibold text-red-600 mb-1">❌ À éviter :</p>
                        <p className="text-red-800">{example.frBad}</p>
                      </div>
                    )}
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                      <p className="text-sm font-semibold text-emerald-600 mb-1">✅ Bonne traduction :</p>
                      <p className="text-emerald-800">{example.frGood}</p>
                    </div>
                    {example.explanation && (
                      <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--sand-100)' }}>
                        <p className="text-sm" style={{ color: 'var(--sand-700)' }}>
                          💡 {example.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Navigation entre conseils */}
      <div className="flex justify-between mt-8 pt-6 border-t" style={{ borderColor: 'var(--sand-200)' }}>
        {(() => {
          const currentIndex = selectedSection.tips.findIndex(t => t.id === selectedTip.id);
          const prevTip = currentIndex > 0 ? selectedSection.tips[currentIndex - 1] : null;
          const nextTip = currentIndex < selectedSection.tips.length - 1 ? selectedSection.tips[currentIndex + 1] : null;

          return (
            <>
              {prevTip ? (
                <button
                  onClick={() => setSelectedTip(prevTip)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
                  style={{ color: 'var(--sand-600)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="font-medium">Précédent</span>
                </button>
              ) : <div />}

              {nextTip ? (
                <button
                  onClick={() => setSelectedTip(nextTip)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
                  style={{ color: 'var(--coral-600)' }}
                >
                  <span className="font-medium">Suivant</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : <div />}
            </>
          );
        })()}
      </div>
    </div>
  );
};

// Fonction pour formater le texte markdown simple
function formatText(text: string): React.ReactNode {
  // Gestion du gras **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ color: 'var(--coral-700)' }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

