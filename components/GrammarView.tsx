
import React, { useState, useEffect, useRef } from 'react';
import { GRAMMAR_DATA, KII_CONJUGATIONS } from '../data/grammarData';
import { LanguageLevel } from '../types';
import { useGrammar } from '../contexts/GrammarContext';

// Type pour les favoris
interface Favorite {
  id: string;
  title: string;
  level: LanguageLevel;
  sectionTitle: string;
}

// Type pour les résultats de recherche
interface SearchResult {
  id: string;
  title: string;
  level: LanguageLevel;
  sectionTitle: string;
  context: string;
  matchType: 'title' | 'content';
}

// Type pour les annotations
interface Annotation {
  id: string;
  topicId: string;
  text: string;
  createdAt: string;
}

export const GrammarView: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<LanguageLevel>(LanguageLevel.A1);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number | 'all'>('all');
  const [conjugationModal, setConjugationModal] = useState<{ verb: string; forms: string[] } | null>(null);
  const [declensionModal, setDeclensionModal] = useState<{ word: string; declension: { cas: string; article: string; form: string }[] } | null>(null);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const { markLessonCompleted, isLessonCompleted, toggleLessonCompleted } = useGrammar();

  // États pour la recherche
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // États pour les annotations
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [annotationModal, setAnnotationModal] = useState<{ topicId: string; topicTitle: string; existingNote?: string } | null>(null);
  const [annotationText, setAnnotationText] = useState('');

  const currentLevelData = GRAMMAR_DATA.find(l => l.level === selectedLevel) || GRAMMAR_DATA[0];

  // Charger les favoris et annotations depuis localStorage au démarrage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('grammarFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    const savedAnnotations = localStorage.getItem('grammarAnnotations');
    if (savedAnnotations) {
      setAnnotations(JSON.parse(savedAnnotations));
    }
  }, []);

  // Sauvegarder les favoris dans localStorage
  useEffect(() => {
    localStorage.setItem('grammarFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Sauvegarder les annotations dans localStorage
  useEffect(() => {
    localStorage.setItem('grammarAnnotations', JSON.stringify(annotations));
  }, [annotations]);

  useEffect(() => {
    setActiveSectionIndex('all');
  }, [selectedLevel]);

  // Focus sur le champ de recherche quand on ouvre
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Raccourci clavier Ctrl+K pour ouvrir la recherche
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === 'Escape') {
        setShowSearch(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fonction de recherche globale
  const performSearch = (query: string) => {
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    GRAMMAR_DATA.forEach(level => {
      level.sections.forEach(section => {
        section.topics.forEach(topic => {
          // Recherche dans le titre
          if (topic.title.toLowerCase().includes(lowerQuery)) {
            results.push({
              id: topic.id,
              title: topic.title,
              level: level.level,
              sectionTitle: section.title,
              context: topic.content.substring(0, 150) + '...',
              matchType: 'title'
            });
          }
          // Recherche dans le contenu
          else if (topic.content.toLowerCase().includes(lowerQuery)) {
            const idx = topic.content.toLowerCase().indexOf(lowerQuery);
            const start = Math.max(0, idx - 50);
            const end = Math.min(topic.content.length, idx + query.length + 50);
            const context = (start > 0 ? '...' : '') +
              topic.content.substring(start, end) +
              (end < topic.content.length ? '...' : '');
            results.push({
              id: topic.id,
              title: topic.title,
              level: level.level,
              sectionTitle: section.title,
              context: context,
              matchType: 'content'
            });
          }
        });
      });
    });

    setSearchResults(results.slice(0, 20)); // Limiter à 20 résultats
  };

  // Naviguer vers un résultat de recherche
  const goToSearchResult = (result: SearchResult) => {
    setSelectedLevel(result.level);
    setActiveSectionIndex('all');
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);

    setTimeout(() => {
      const element = document.getElementById(`topic-${result.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  // Obtenir l'annotation d'un topic
  const getAnnotation = (topicId: string) => {
    return annotations.find(a => a.topicId === topicId);
  };

  // Ouvrir le modal d'annotation
  const openAnnotationModal = (topicId: string, topicTitle: string) => {
    const existing = getAnnotation(topicId);
    setAnnotationText(existing?.text || '');
    setAnnotationModal({ topicId, topicTitle, existingNote: existing?.text });
  };

  // Sauvegarder une annotation
  const saveAnnotation = () => {
    if (!annotationModal) return;

    if (annotationText.trim()) {
      const existingIdx = annotations.findIndex(a => a.topicId === annotationModal.topicId);
      if (existingIdx >= 0) {
        // Mettre à jour l'annotation existante
        const updated = [...annotations];
        updated[existingIdx] = { ...updated[existingIdx], text: annotationText.trim() };
        setAnnotations(updated);
      } else {
        // Créer une nouvelle annotation
        setAnnotations([...annotations, {
          id: Date.now().toString(),
          topicId: annotationModal.topicId,
          text: annotationText.trim(),
          createdAt: new Date().toISOString()
        }]);
      }
    } else {
      // Supprimer l'annotation si le texte est vide
      setAnnotations(annotations.filter(a => a.topicId !== annotationModal.topicId));
    }

    setAnnotationModal(null);
    setAnnotationText('');
  };

  // Supprimer une annotation
  const deleteAnnotation = (topicId: string) => {
    setAnnotations(annotations.filter(a => a.topicId !== topicId));
  };

  // Vérifier si un topic est en favori
  const isFavorite = (topicId: string) => {
    return favorites.some(f => f.id === topicId);
  };

  // Ajouter/retirer un favori
  const toggleFavorite = (topicId: string, topicTitle: string, sectionTitle: string, level: LanguageLevel) => {
    if (isFavorite(topicId)) {
      setFavorites(favorites.filter(f => f.id !== topicId));
    } else {
      setFavorites([...favorites, { id: topicId, title: topicTitle, level, sectionTitle }]);
    }
  };

  // Naviguer vers un favori
  const goToFavorite = (favorite: Favorite) => {
    // Changer de niveau si nécessaire
    if (selectedLevel !== favorite.level) {
      setSelectedLevel(favorite.level);
    }
    setActiveSectionIndex('all');

    setTimeout(() => {
      const element = document.getElementById(`topic-${favorite.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Fonction pour scroller vers une section
  const scrollToSection = (sectionIdx: number) => {
    // S'assurer qu'on est en mode "all" pour voir toutes les sections
    if (activeSectionIndex !== 'all') {
      setActiveSectionIndex('all');
    }

    setTimeout(() => {
      const element = document.getElementById(`section-${sectionIdx}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Fonction pour scroller vers un topic spécifique
  const scrollToTopic = (topicId: string) => {
    // S'assurer qu'on est en mode "all" pour voir tous les topics
    if (activeSectionIndex !== 'all') {
      setActiveSectionIndex('all');
    }

    setTimeout(() => {
      const element = document.getElementById(`topic-${topicId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Fonction pour scroller vers un sous-titre (###) dans le contenu
  const scrollToHeading = (headingId: string) => {
    if (activeSectionIndex !== 'all') {
      setActiveSectionIndex('all');
    }

    setTimeout(() => {
      const element = document.getElementById(headingId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Extraire les sous-titres (###) d'un contenu
  const extractHeadings = (content: string): { title: string; id: string }[] => {
    const headings: { title: string; id: string }[] = [];
    const lines = content.split('\n');
    lines.forEach((line) => {
      if (line.trim().startsWith('###')) {
        const title = line.replace('###', '').trim();
        const id = title.toLowerCase().replace(/[^a-z0-9äöüß]/g, '-').replace(/-+/g, '-');
        headings.push({ title, id });
      }
    });
    return headings;
  };

  const handleVerbClick = (verb: string) => {
    const forms = KII_CONJUGATIONS[verb.toLowerCase()];
    if (forms) {
      setConjugationModal({ verb, forms });
    }
  };

  const DECLENSIONS: { [key: string]: { cas: string; article: string; form: string }[] } = {
    'der Herr': [
      { cas: 'Nominatif Singulier', article: 'der', form: 'Herr' },
      { cas: 'Accusatif Singulier', article: 'den', form: 'Herrn' },
      { cas: 'Datif Singulier', article: 'dem', form: 'Herrn' },
      { cas: 'Génitif Singulier', article: 'des', form: 'Herrn' },
      { cas: 'Nominatif Pluriel', article: 'die', form: 'Herren' },
      { cas: 'Accusatif Pluriel', article: 'die', form: 'Herren' },
      { cas: 'Datif Pluriel', article: 'den', form: 'Herren' },
      { cas: 'Génitif Pluriel', article: 'der', form: 'Herren' }
    ],
    'das Herz': [
      { cas: 'Nominatif', article: 'das', form: 'Herz' },
      { cas: 'Accusatif', article: 'das', form: 'Herz' },
      { cas: 'Datif', article: 'dem', form: 'Herzen' },
      { cas: 'Génitif', article: 'des', form: 'Herzens' }
    ]
  };

  const handleDeclensionClick = (word: string) => {
    const declension = DECLENSIONS[word];
    if (declension) {
      setDeclensionModal({ word, declension });
    }
  };

  const parseInlineMarkdown = (text: string | undefined) => {
    if (!text) return "";
    const parts = text.split(/(\*\*.*?\*\*|\[\[.*?\]\])/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-black text-slate-900 border-b-2 border-indigo-100">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const verb = part.slice(2, -2);
        return (
          <button
            key={index}
            onClick={() => handleVerbClick(verb)}
            className="px-2 py-0.5 bg-indigo-600 text-white rounded-md font-black text-xs hover:bg-indigo-700 hover:scale-105 transition-all inline-flex items-center gap-1 mx-1"
          >
            {verb}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
          </button>
        );
      }
      return part;
    });
  };

  const renderTable = (rows: string[]) => {
    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {rows[0].split('|').filter(cell => cell.trim() !== '').map((cell, i) => (
                <th key={i} className="px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-600">
                  {parseInlineMarkdown(cell.trim())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.slice(1).map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                {row.split('|').filter(cell => cell.trim() !== '').map((cell, j) => (
                  <td key={j} className="px-6 py-4 text-sm text-slate-600 font-medium">
                    {parseInlineMarkdown(cell.trim())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentTable: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|')) {
        currentTable.push(line);
        if (i === lines.length - 1 || !lines[i + 1].trim().startsWith('|')) {
          elements.push(renderTable(currentTable));
          currentTable = [];
        }
        continue;
      }

      if (line.startsWith('###')) {
        const titleText = line.replace('###', '').trim();
        const headingId = titleText.toLowerCase().replace(/[^a-z0-9äöüß]/g, '-').replace(/-+/g, '-');
        const isDeclensionClickable = titleText === 'der Herr' || titleText === 'das Herz';

        elements.push(
          <h6 key={i} id={headingId} className="text-xl font-black text-slate-900 mt-12 mb-6 flex items-center gap-3 scroll-mt-8">
            <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
            {isDeclensionClickable ? (
              <button
                onClick={() => handleDeclensionClick(titleText)}
                className="group hover:text-indigo-600 transition-colors flex items-center gap-2"
              >
                {titleText}
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            ) : (
              parseInlineMarkdown(titleText)
            )}
          </h6>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={i} className="font-black text-indigo-600 mt-10 mb-4 uppercase text-[11px] tracking-[0.25em] flex items-center gap-2">
            <span className="w-4 h-px bg-indigo-200"></span>
            {line.replace(/\*\*/g, '').trim()}
            <span className="w-4 h-px bg-indigo-200"></span>
          </p>
        );
      } else if (line.startsWith('•')) {
        elements.push(
          <div key={i} className="flex gap-4 mb-4 ml-2 group">
            <span className="text-indigo-500 font-black group-hover:scale-125 transition-transform">•</span>
            <span className="text-slate-600 font-medium leading-relaxed">
              {parseInlineMarkdown(line.replace('•', '').trim())}
            </span>
          </div>
        );
      } else if (line) {
        elements.push(
          <p key={i} className="text-slate-600 leading-relaxed font-medium mb-5 text-lg">
            {parseInlineMarkdown(line)}
          </p>
        );
      } else {
        elements.push(<div key={i} className="h-4"></div>);
      }
    }
    return elements;
  };

  const renderB2TOC = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="mb-12">
        <h3 className="text-4xl font-black text-slate-900 mb-4">Programme B2</h3>
        <p className="text-slate-500 text-lg">Sélectionnez une leçon pour approfondir vos connaissances.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentLevelData.sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveSectionIndex(idx);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all text-left flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              {idx + 1}
            </div>
            <h4 className="text-xl font-black text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{section.title}</h4>
            <p className="text-slate-400 text-sm font-medium line-clamp-3">Cliquez pour ouvrir la leçon complète sur ce sujet.</p>
            <div className="mt-auto pt-6 flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Ouvrir la leçon
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7"></path></svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      {conjugationModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-indigo-600 p-8 text-white flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Konjunktiv II</p>
                <h5 className="text-3xl font-black tracking-tight">{conjugationModal.verb}</h5>
              </div>
              <button onClick={() => setConjugationModal(null)} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-8 space-y-4">
              {conjugationModal.forms.map((form, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{form.split(' ')[0]}</span>
                  <span className="text-slate-900 font-black text-lg">{form.split(' ')[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {declensionModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm" onClick={() => setDeclensionModal(null)}>
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="bg-indigo-600 p-8 text-white flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Déclinaison Complète</p>
                <h5 className="text-3xl font-black tracking-tight">{declensionModal.word}</h5>
              </div>
              <button onClick={() => setDeclensionModal(null)} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-8">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-600">Cas</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-600">Article</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-600">Forme</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {declensionModal.declension.map((dec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-slate-600 font-medium">{dec.cas}</td>
                        <td className="px-6 py-4 text-sm text-slate-600 font-medium">{dec.article}</td>
                        <td className="px-6 py-4 text-sm text-slate-900 font-black">{dec.form}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de recherche */}
      {showSearch && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] p-6 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowSearch(false)}>
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-top-4 duration-300" onClick={(e) => e.stopPropagation()}>
            {/* Barre de recherche */}
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    performSearch(e.target.value);
                  }}
                  placeholder="Rechercher un mot, une règle, un concept..."
                  className="flex-1 text-lg font-medium text-slate-900 outline-none placeholder:text-slate-300"
                />
                <kbd className="px-2 py-1 bg-slate-100 text-slate-400 text-xs font-bold rounded">ESC</kbd>
              </div>
            </div>

            {/* Résultats */}
            <div className="max-h-[60vh] overflow-y-auto">
              {searchQuery.length < 2 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-slate-400 font-medium">Tapez au moins 2 caractères pour rechercher</p>
                  <p className="text-slate-300 text-sm mt-1">Utilisez <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-xs font-bold">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-xs font-bold">K</kbd> pour ouvrir rapidement</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </div>
                  <p className="text-slate-400 font-medium">Aucun résultat pour "{searchQuery}"</p>
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-3">{searchResults.length} résultat{searchResults.length > 1 ? 's' : ''}</p>
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSearchResult(result)}
                      className="w-full text-left p-4 rounded-xl hover:bg-indigo-50 transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${result.matchType === 'title' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'
                          }`}>
                          {result.matchType === 'title' ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded">{result.level}</span>
                            <span className="text-slate-300 text-xs">·</span>
                            <span className="text-slate-400 text-xs truncate">{result.sectionTitle}</span>
                          </div>
                          <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{result.title}</p>
                          <p className="text-sm text-slate-400 line-clamp-2 mt-1">{result.context.replace(/\*\*/g, '').replace(/###/g, '')}</p>
                        </div>
                        <svg className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal d'annotation */}
      {annotationModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm" onClick={() => setAnnotationModal(null)}>
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">
                  {annotationModal.existingNote ? 'Modifier la note' : 'Ajouter une note'}
                </p>
                <h5 className="text-xl font-black tracking-tight line-clamp-1">{annotationModal.topicTitle}</h5>
              </div>
              <button onClick={() => setAnnotationModal(null)} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6">
              <textarea
                value={annotationText}
                onChange={(e) => setAnnotationText(e.target.value)}
                placeholder="Écrivez votre note personnelle ici... (points importants, rappels, exemples supplémentaires...)"
                className="w-full h-40 p-4 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-700 placeholder:text-slate-300"
              />
              <div className="flex justify-between items-center mt-4">
                {annotationModal.existingNote && (
                  <button
                    onClick={() => {
                      deleteAnnotation(annotationModal.topicId);
                      setAnnotationModal(null);
                    }}
                    className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg font-bold text-sm transition-all"
                  >
                    Supprimer la note
                  </button>
                )}
                <div className={`flex gap-3 ${!annotationModal.existingNote ? 'ml-auto' : ''}`}>
                  <button
                    onClick={() => setAnnotationModal(null)}
                    className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-bold text-sm transition-all"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={saveAnnotation}
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold text-sm hover:bg-emerald-700 transition-all"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-12 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Grammatik</h2>
            <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>Maîtrisez les structures de la langue allemande avec clarté et précision.</p>
          </div>
          {/* Bouton de recherche */}
          <button
            onClick={() => setShowSearch(true)}
            className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl hover:shadow-lg transition-all group"
            style={{ border: '1px solid var(--terracotta-200)' }}
          >
            <svg className="w-5 h-5 transition-colors" style={{ color: 'var(--sand-500)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="font-medium" style={{ color: 'var(--sand-500)' }}>Rechercher...</span>
            <kbd className="px-2 py-1 text-[10px] font-bold rounded ml-2" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-600)' }}>Ctrl+K</kbd>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6 bg-white p-2.5 rounded-2xl shadow-sm w-fit mx-auto sm:mx-0" style={{ border: '1px solid var(--terracotta-100)' }}>
        {[LanguageLevel.A1, LanguageLevel.A2, LanguageLevel.B1, LanguageLevel.B2, LanguageLevel.C1, LanguageLevel.C2].map(lvl => {
          const levelData = GRAMMAR_DATA.find(l => l.level === lvl);
          let totalTopics = 0;
          let completedTopics = 0;
          levelData?.sections.forEach(section => {
            section.topics.forEach(topic => {
              totalTopics++;
              if (isLessonCompleted(topic.id)) completedTopics++;
            });
          });
          const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

          return (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`relative px-8 py-4 rounded-xl font-black transition-all overflow-hidden ${selectedLevel === lvl
                ? 'text-white shadow-xl scale-105'
                : 'hover:bg-white/80'
                }`}
              style={{
                backgroundColor: selectedLevel === lvl ? 'var(--terracotta-600)' : 'transparent',
                color: selectedLevel === lvl ? 'white' : 'var(--sand-600)',
                boxShadow: selectedLevel === lvl ? '0 10px 30px -10px rgba(184, 93, 62, 0.4)' : 'none'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {lvl}
                {progress === 100 && (
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
              {/* Mini barre de progression */}
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: selectedLevel === lvl ? 'var(--terracotta-400)' : 'var(--sand-200)' }}>
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: selectedLevel === lvl ? 'white' : 'var(--sage-500)'
                  }}
                ></div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Barre de progression détaillée du niveau actuel */}
      {(() => {
        let totalTopics = 0;
        let completedTopics = 0;
        currentLevelData.sections.forEach(section => {
          section.topics.forEach(topic => {
            totalTopics++;
            if (isLessonCompleted(topic.id)) completedTopics++;
          });
        });
        const progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

        return (
          <div className="mb-12 bg-white p-6 rounded-2xl shadow-sm" style={{ border: '1px solid var(--terracotta-100)' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white"
                  style={{ backgroundColor: progress === 100 ? 'var(--sage-600)' : 'var(--terracotta-600)' }}
                >
                  {progress === 100 ? '✓' : selectedLevel}
                </div>
                <div>
                  <p className="font-black" style={{ color: 'var(--terracotta-800)' }}>Progression {selectedLevel}</p>
                  <p className="text-sm" style={{ color: 'var(--sand-500)' }}>{completedTopics} sur {totalTopics} leçons terminées</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black" style={{ color: progress === 100 ? 'var(--sage-600)' : 'var(--terracotta-600)' }}>{progress}%</span>
              </div>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--sand-100)' }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progress}%`,
                  background: progress === 100
                    ? 'linear-gradient(to right, var(--sage-600), var(--sage-500))'
                    : 'linear-gradient(to right, var(--terracotta-600), var(--terracotta-400))'
                }}
              ></div>
            </div>
            {progress === 100 && (
              <p className="mt-3 font-bold text-sm flex items-center gap-2" style={{ color: 'var(--sage-600)' }}>
                <span>🎉</span> Félicitations ! Vous avez terminé le niveau {selectedLevel} !
              </p>
            )}
          </div>
        );
      })()}

      {/* Spécifique B2 : Table des matières en mode Dashboard si rien n'est sélectionné */}
      {selectedLevel === LanguageLevel.B2 && activeSectionIndex === 'all' ? (
        renderB2TOC()
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-md mb-3">Module Actuel</span>
                <h3 className="text-3xl font-black text-slate-900 mb-2">{currentLevelData.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed italic">"{currentLevelData.description}"</p>
              </div>

              {/* Section Favoris */}
              {favorites.length > 0 && (
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <button
                    onClick={() => setShowFavorites(!showFavorites)}
                    className="w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold text-amber-600 hover:bg-amber-50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span>Mes Favoris ({favorites.length})</span>
                    </div>
                    <svg className={`w-4 h-4 transition-transform ${showFavorites ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showFavorites && (
                    <div className="mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                      {favorites.map((fav, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToFavorite(fav)}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-amber-50 transition-all group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-medium text-slate-400 truncate">{fav.level} · {fav.sectionTitle}</p>
                            <p className="text-[11px] font-semibold text-slate-600 truncate group-hover:text-amber-600">{fav.title}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(fav.id, fav.title, fav.sectionTitle, fav.level);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded transition-all"
                            title="Retirer des favoris"
                          >
                            <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                <button
                  onClick={() => setActiveSectionIndex('all')}
                  className={`w-full flex items-center gap-5 p-5 rounded-2xl text-sm font-black transition-all text-left ${activeSectionIndex === 'all'
                    ? 'bg-slate-900 text-white shadow-2xl scale-[1.02]'
                    : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                    }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${activeSectionIndex === 'all' ? 'bg-white/20' : 'bg-slate-100'}`}>
                    {selectedLevel === LanguageLevel.B2 ? '🏠' : '∞'}
                  </div>
                  {selectedLevel === LanguageLevel.B2 ? 'Table des matières' : 'Tout le programme'}
                </button>

                {currentLevelData.sections.map((section, idx) => {
                  // Calculer la progression de la section
                  const sectionTotal = section.topics.length;
                  const sectionCompleted = section.topics.filter(t => isLessonCompleted(t.id)).length;
                  const sectionProgress = sectionTotal > 0 ? Math.round((sectionCompleted / sectionTotal) * 100) : 0;

                  return (
                    <div key={idx} className="space-y-1">
                      {/* Niveau 1: Titre de la section */}
                      <button
                        onClick={() => scrollToSection(idx)}
                        className="w-full flex items-start gap-3 p-3 rounded-xl text-sm font-bold transition-all text-left group text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                      >
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] shrink-0 transition-all font-black ${sectionProgress === 100
                          ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white'
                          : 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                          }`}>
                          {sectionProgress === 100 ? '✓' : idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="leading-snug text-[11px] font-bold block">{section.title}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${sectionProgress === 100 ? 'bg-green-500' : 'bg-indigo-400'}`}
                                style={{ width: `${sectionProgress}%` }}
                              ></div>
                            </div>
                            <span className="text-[9px] text-slate-400 font-medium">{sectionCompleted}/{sectionTotal}</span>
                          </div>
                        </div>
                      </button>

                      {/* Niveau 2: Topics */}
                      <div className="ml-4 pl-3 border-l-2 border-slate-100 space-y-0.5">
                        {section.topics.map((topic, tIdx) => {
                          const headings = extractHeadings(topic.content);
                          const completed = isLessonCompleted(topic.id);
                          return (
                            <div key={tIdx}>
                              {/* Titre du topic */}
                              <button
                                onClick={() => scrollToTopic(topic.id)}
                                className={`w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-semibold transition-all flex items-center gap-2 group ${completed
                                  ? 'text-green-600 bg-green-50/50'
                                  : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
                                  }`}
                              >
                                {completed ? (
                                  <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 group-hover:bg-indigo-500 transition-colors shrink-0"></span>
                                )}
                                <span className="line-clamp-1">{topic.title}</span>
                              </button>

                              {/* Niveau 3: Sous-titres (###) */}
                              {headings.length > 0 && (
                                <div className="ml-4 pl-2 border-l border-slate-100 space-y-0">
                                  {headings.slice(0, 5).map((heading, hIdx) => (
                                    <button
                                      key={hIdx}
                                      onClick={() => scrollToHeading(heading.id)}
                                      className="w-full text-left px-2 py-1 rounded text-[9px] text-slate-400 hover:text-indigo-500 hover:bg-indigo-50/50 transition-all flex items-center gap-1.5 group"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-indigo-400 transition-colors shrink-0"></span>
                                      <span className="line-clamp-1">{heading.title}</span>
                                    </button>
                                  ))}
                                  {headings.length > 5 && (
                                    <span className="text-[8px] text-slate-300 pl-4">+{headings.length - 5} autres...</span>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-32">
            {activeSectionIndex !== 'all' && (
              <button
                onClick={() => setActiveSectionIndex('all')}
                className="inline-flex items-center gap-2 text-indigo-600 font-black text-sm hover:translate-x-[-4px] transition-transform mb-8"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Retour au programme {selectedLevel}
              </button>
            )}

            {(activeSectionIndex === 'all' ? currentLevelData.sections : [currentLevelData.sections[activeSectionIndex]]).map((section, sIdx) => {
              const actualIdx = activeSectionIndex === 'all' ? sIdx : activeSectionIndex;
              return (
                <div key={sIdx} id={`section-${actualIdx}`} className="animate-in fade-in slide-in-from-right-8 duration-700 scroll-mt-8">
                  <div className="mb-12 relative">
                    <div className="flex items-center gap-6 mb-6">
                      <span className="text-8xl font-black text-slate-100 leading-none select-none">
                        {actualIdx + 1}
                      </span>
                      <div className="h-0.5 bg-slate-100 flex-1"></div>
                    </div>
                    <h4 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
                      {section.title}
                    </h4>
                  </div>

                  <div className="space-y-20">
                    {section.topics.map((topic, tIdx) => (
                      <div key={tIdx} id={`topic-${topic.id}`} className="relative scroll-mt-8 transition-all duration-500">
                        <div className="bg-white border border-slate-100 p-12 rounded-[3rem] shadow-xl shadow-slate-200/30 mb-12 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[5rem] -mr-16 -mt-16 opacity-50"></div>
                          <div className="flex items-start justify-between gap-4 mb-8">
                            <h5 className="text-2xl font-black text-indigo-600 flex items-center gap-3">
                              <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                              {topic.title}
                            </h5>
                            <div className="flex items-center gap-2">
                              {/* Bouton Marquer comme terminé */}
                              <button
                                onClick={() => toggleLessonCompleted(topic.id)}
                                className={`p-2 rounded-xl transition-all ${isLessonCompleted(topic.id)
                                  ? 'bg-green-100 text-green-500'
                                  : 'bg-slate-100 text-slate-300 hover:bg-green-50 hover:text-green-400'
                                  }`}
                                title={isLessonCompleted(topic.id) ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
                              >
                                <svg className="w-5 h-5" fill={isLessonCompleted(topic.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </button>
                              {/* Bouton Annotation */}
                              <button
                                onClick={() => openAnnotationModal(topic.id, topic.title)}
                                className={`p-2 rounded-xl transition-all ${getAnnotation(topic.id)
                                  ? 'bg-emerald-100 text-emerald-500 hover:bg-emerald-200'
                                  : 'bg-slate-100 text-slate-300 hover:bg-emerald-50 hover:text-emerald-400'
                                  }`}
                                title={getAnnotation(topic.id) ? 'Modifier ma note' : 'Ajouter une note'}
                              >
                                <svg className="w-5 h-5" fill={getAnnotation(topic.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              {/* Bouton Favori */}
                              <button
                                onClick={() => toggleFavorite(topic.id, topic.title, section.title, selectedLevel)}
                                className={`p-2 rounded-xl transition-all ${isFavorite(topic.id)
                                  ? 'bg-amber-100 text-amber-500 hover:bg-amber-200'
                                  : 'bg-slate-100 text-slate-300 hover:bg-amber-50 hover:text-amber-400'
                                  }`}
                                title={isFavorite(topic.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                              >
                                <svg className="w-5 h-5" fill={isFavorite(topic.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          {renderFormattedContent(topic.content)}

                          {/* Affichage de l'annotation personnelle */}
                          {getAnnotation(topic.id) && (
                            <div className="mt-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl relative group">
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-2">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Ma note personnelle</p>
                                    <button
                                      onClick={() => openAnnotationModal(topic.id, topic.title)}
                                      className="opacity-0 group-hover:opacity-100 text-emerald-500 hover:text-emerald-700 transition-all p-1"
                                      title="Modifier"
                                    >
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                      </svg>
                                    </button>
                                  </div>
                                  <p className="text-emerald-800 font-medium whitespace-pre-wrap">{getAnnotation(topic.id)?.text}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {topic.examples && (
                          <div className="space-y-8 pl-4 lg:pl-8 border-l-4 border-indigo-50">
                            <div className="flex items-center gap-4">
                              <div className="flex -space-x-2">
                                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-ping"></div>
                                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                              </div>
                              <p className="text-[11.4px] font-black text-slate-400 uppercase tracking-[0.4em]">Exemples d'application</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                              {topic.examples.map((ex, exIdx) => (
                                <div key={exIdx} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:ring-2 hover:ring-indigo-100 hover:shadow-2xl transition-all duration-500 group">
                                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                                    <div className="space-y-3">
                                      <p className="text-slate-900 font-black text-[19.95px] group-hover:text-indigo-600 transition-colors">
                                        {parseInlineMarkdown(ex.de)}
                                      </p>
                                      <p className="text-slate-400 font-bold text-[13.3px]">
                                        {parseInlineMarkdown(ex.fr)}
                                      </p>
                                    </div>
                                    {ex.note && (
                                      <div className="bg-indigo-50/50 px-6 py-5 rounded-2xl border border-indigo-100 lg:max-w-[340px] shrink-0">
                                        <div className="flex items-center gap-2 mb-2">
                                          <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                          <p className="text-[10px] text-indigo-600 font-black uppercase tracking-widest">Le conseil du prof</p>
                                        </div>
                                        <p className="text-[13.3px] text-slate-600 font-semibold leading-relaxed">
                                          {parseInlineMarkdown(ex.note)}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
