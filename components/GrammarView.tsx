import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const { level } = useParams<{ level?: string }>();
  const navigate = useNavigate();
  // Validate level or default to A1
  const validLevel = Object.values(LanguageLevel).includes(level as LanguageLevel) ? (level as LanguageLevel) : LanguageLevel.A1;
  const [selectedLevel, setSelectedLevel] = useState<LanguageLevel>(validLevel);

  useEffect(() => {
    if (level && Object.values(LanguageLevel).includes(level as LanguageLevel)) {
      setSelectedLevel(level as LanguageLevel);
    } else if (!level) {
      // If no level in URL, navigate to default
      navigate(`/grammar/${LanguageLevel.A1}`, { replace: true });
    }
  }, [level, navigate]);

  const handleLevelSelect = (lvl: LanguageLevel) => {
    navigate(`/grammar/${lvl}`);
  };

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
    handleLevelSelect(result.level); // Use navigation instead of state
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
      handleLevelSelect(favorite.level); // Use navigation
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
      { cas: 'Nominative Singular', article: 'der', form: 'Herr' },
      { cas: 'Accusative Singular', article: 'den', form: 'Herrn' },
      { cas: 'Dative Singular', article: 'dem', form: 'Herrn' },
      { cas: 'Genitive Singular', article: 'des', form: 'Herrn' },
      { cas: 'Nominative Plural', article: 'die', form: 'Herren' },
      { cas: 'Accusative Plural', article: 'die', form: 'Herren' },
      { cas: 'Dative Plural', article: 'den', form: 'Herren' },
      { cas: 'Genitive Plural', article: 'der', form: 'Herren' }
    ],
    'das Herz': [
      { cas: 'Nominative', article: 'das', form: 'Herz' },
      { cas: 'Accusative', article: 'das', form: 'Herz' },
      { cas: 'Dative', article: 'dem', form: 'Herzen' },
      { cas: 'Genitive', article: 'des', form: 'Herzens' }
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
        <h3 className="text-4xl font-black text-slate-900 mb-4">B2 Program</h3>
        <p className="text-slate-500 text-lg">Select a lesson to deepen your understanding.</p>
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
            <p className="text-slate-400 text-sm font-medium line-clamp-3">Click to open the full lesson on this topic.</p>
            <div className="mt-auto pt-6 flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Open lesson
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
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Full Declension</p>
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
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-600">Case</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-600">Article</th>
                      <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-indigo-600">Form</th>
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
                  placeholder="Search for a word, a rule, or a concept..."
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
                  <p className="text-slate-400 font-medium">Type at least 2 characters to search</p>
                  <p className="text-slate-300 text-sm mt-1">Use <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-xs font-bold">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-xs font-bold">K</kbd> to open search quickly</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </div>
                  <p className="text-slate-400 font-medium">No results for "{searchQuery}"</p>
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-3">{searchResults.length} result{searchResults.length > 1 ? 's' : ''}</p>
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
                  {annotationModal.existingNote ? 'Edit note' : 'Add note'}
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
                placeholder="Write your personal note here... (important points, reminders, extra examples...)"
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
                    Delete note
                  </button>
                )}
                <div className={`flex gap-3 ${!annotationModal.existingNote ? 'ml-auto' : ''}`}>
                  <button
                    onClick={() => setAnnotationModal(null)}
                    className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-bold text-sm transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveAnnotation}
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold text-sm hover:bg-emerald-700 transition-all"
                  >
                    Save
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
            <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Grammar</h2>
            <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>Master German language structures with clarity and precision.</p>
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
            <span className="font-medium" style={{ color: 'var(--sand-500)' }}>Search...</span>
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
              onClick={() => handleLevelSelect(lvl)}
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
                  <p className="font-black" style={{ color: 'var(--terracotta-800)' }}>{selectedLevel} Progress</p>
                  <p className="text-sm" style={{ color: 'var(--sand-500)' }}>{completedTopics} of {totalTopics} lessons completed</p>
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
                  backgroundColor: progress === 100 ? 'var(--sage-600)' : 'var(--terracotta-600)'
                }}
              ></div>
            </div>
          </div>
        );
      })()}

      <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
        {selectedLevel === 'B2' && activeSectionIndex === 'all' ? (
          renderB2TOC()
        ) : (
          <div className="space-y-16">
            {currentLevelData.sections.map((section, sectionIdx) => {
              if (activeSectionIndex !== 'all' && activeSectionIndex !== sectionIdx) return null;

              return (
                <div key={sectionIdx} id={`section-${sectionIdx}`} className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 scroll-mt-24">
                  <div className="bg-slate-900 px-10 py-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white font-black text-2xl shadow-inner border border-white/10">
                        {sectionIdx + 1}
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white tracking-tight">{section.title}</h3>
                        <p className="text-slate-400 font-medium mt-1">{section.topics.length} lessons in this module</p>
                      </div>
                      {selectedLevel === 'B2' && (
                        <button
                          onClick={() => setActiveSectionIndex('all')}
                          className="ml-auto px-4 py-2 rounded-xl bg-white/10 text-white text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                          Back to summary
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-8 sm:p-12 space-y-12">
                    {section.topics.map((topic, topicIdx) => {
                      const isCompleted = isLessonCompleted(topic.id);
                      const isAnnotated = !!getAnnotation(topic.id);
                      const isFavorited = isFavorite(topic.id);

                      return (
                        <div key={topic.id} id={`topic-${topic.id}`} className="scroll-mt-32 group">
                          <div className="flex items-start gap-6 mb-8">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-black uppercase tracking-widest">
                                  Lesson {topicIdx + 1}
                                </span>
                                {isCompleted && (
                                  <span className="flex items-center gap-1 px-3 py-1 rounded-lg bg-green-50 text-green-600 text-xs font-black uppercase tracking-widest">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    Completed
                                  </span>
                                )}
                              </div>
                              <h4 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                                {topic.title}
                              </h4>
                              {/* Barre d'outils de la leçon */}
                              <div className="flex flex-wrap gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                  onClick={() => toggleLessonCompleted(topic.id)}
                                  className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${isCompleted
                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                    : 'bg-slate-100 text-slate-600 hover:bg-green-50 hover:text-green-600'
                                    }`}
                                >
                                  {isCompleted ? 'Mark as to do' : 'Mark as done'}
                                </button>

                                <button
                                  onClick={() => openAnnotationModal(topic.id, topic.title)}
                                  className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${isAnnotated
                                    ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                    : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
                                    }`}
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                  {isAnnotated ? 'View note' : 'Annotate'}
                                </button>

                                <button
                                  onClick={() => toggleFavorite(topic.id, topic.title, section.title, selectedLevel)}
                                  className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${isFavorited
                                    ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                    : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-600'
                                    }`}
                                >
                                  <svg className="w-4 h-4" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                  {isFavorited ? 'Favorite' : 'Add to favorites'}
                                </button>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                const element = document.getElementById(`topic-${topic.id}`);
                                element?.classList.toggle('is-collapsed');
                              }}
                              className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                            >
                              <svg className="w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                          </div>

                          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed bg-white/50 rounded-2xl p-2 transition-all">
                            {renderFormattedContent(topic.content)}

                            {topic.examples && topic.examples.length > 0 && (
                              <div className="mt-10 bg-indigo-50/50 rounded-3xl p-8 border border-indigo-100/50">
                                <h5 className="font-black text-indigo-900 mb-6 flex items-center gap-2 text-lg">
                                  <span className="text-2xl">💡</span> Concrete examples
                                </h5>
                                <div className="space-y-6">
                                  {topic.examples.map((ex, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-50 hover:border-indigo-200 transition-all flex gap-4">
                                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0">
                                        {i + 1}
                                      </div>
                                      <div>
                                        <p className="text-slate-900 font-bold text-lg mb-1">{ex.de}</p>
                                        <p className="text-slate-500 font-medium">{ex.fr}</p>
                                        {ex.note && <p className="text-xs text-indigo-500 font-bold mt-2 uppercase tracking-wide">{ex.note}</p>}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {topicIdx < section.topics.length - 1 && (
                            <div className="h-px bg-slate-100 my-12"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
