
import React, { useState, useMemo } from 'react';
import { Theme, ThemeContent, ViewMode, LanguageLevel, MainTab, GermanWord, Phrase } from './types.ts';
import { THEMES } from './constants.ts';
import { VOCABULARY_DATA } from './data/vocabularyData.ts';
import { ThemeCard } from './components/ThemeCard.tsx';
import { WordCard } from './components/WordCard.tsx';
import { Quiz } from './components/Quiz.tsx';
import { VocabularyTrainer } from './components/VocabularyTrainer.tsx';
import { GrammarView } from './components/GrammarView.tsx';
import { StatsView } from './components/StatsView.tsx';
import { SyncModal } from './components/SyncModal.tsx';
import { TablesView } from './components/TablesView.tsx';
import { ExpressionsView } from './components/ExpressionsView.tsx';
import { TranslationView } from './components/TranslationView.tsx';
import { RevisionView } from './components/RevisionView.tsx';
import { GlobalSearch } from './components/GlobalSearch.tsx';
import { AuthModal } from './components/AuthModal.tsx';
import { UserMenu } from './components/UserMenu.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { NOMEN_VERBEN_LIST } from './data/nomenVerbenData.ts';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MainTab>('vocabulary');
  const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);
  const [content, setContent] = useState<ThemeContent | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('themes');
  const [selectedLevel, setSelectedLevel] = useState<LanguageLevel | 'All'>('All');
  const [selectedSubTheme, setSelectedSubTheme] = useState<string | 'All'>('All');
  const [nvSearch, setNvSearch] = useState('');
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleThemeSelect = (theme: Theme) => {
    setCurrentTheme(theme);
    setSelectedSubTheme('All');
    const themeData = VOCABULARY_DATA[theme.id];
    
    if (themeData) {
      setContent(themeData);
    } else {
      setContent({ words: [], phrases: [] });
    }
    setViewMode('learn');
  };

  const filteredWords = useMemo(() => {
    if (!content) return [];
    return content.words.filter(w => {
      const matchesLevel = selectedLevel === 'All' || w.level === selectedLevel;
      const matchesSubTheme = selectedSubTheme === 'All' || w.subTheme === selectedSubTheme;
      return matchesLevel && matchesSubTheme;
    });
  }, [content, selectedLevel, selectedSubTheme]);

  const filteredNV = NOMEN_VERBEN_LIST.filter(item => {
    const matchesSearch = item.german.toLowerCase().includes(nvSearch.toLowerCase()) || 
                          item.french.toLowerCase().includes(nvSearch.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || item.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--sand-50)' }}>
      {/* Modal de synchronisation */}
      <SyncModal isOpen={showSyncModal} onClose={() => setShowSyncModal(false)} />
      
      {/* Modal d'authentification */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b" style={{ borderColor: 'var(--terracotta-100)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setViewMode('themes'); setCurrentTheme(null); setContent(null); }}>
            <div className="p-2.5 rounded-2xl text-white font-bold text-xl shadow-terracotta" style={{ backgroundColor: 'var(--terracotta-600)' }}>🇩🇪</div>
            <h1 className="text-xl font-black" style={{ color: 'var(--terracotta-800)' }}>DeutschMeister</h1>
          </div>
          <div className="flex items-center gap-3">
            <nav className="flex p-1.5 rounded-2xl overflow-x-auto" style={{ backgroundColor: 'var(--sand-100)' }}>
              {[
                { id: 'vocabulary', label: 'Vocabulaire', icon: '📚' },
                { id: 'grammar', label: 'Grammatik', icon: '📖' },
                { id: 'tables', label: 'Tableaux', icon: '📋' },
                { id: 'expressions', label: 'Expressions', icon: '💬' },
                { id: 'nomen-verben', label: 'Nomen-Verb', icon: '🔗' },
                { id: 'translation', label: 'Traduction', icon: '📰' },
                { id: 'revision', label: 'Révision', icon: '🔄' },
                { id: 'stats', label: 'Stats', icon: '📊' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id as MainTab); setViewMode('themes'); setCurrentTheme(null); }}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-white shadow-md' 
                      : 'hover:bg-white/50'
                  }`}
                  style={{ 
                    color: activeTab === tab.id ? 'var(--terracotta-600)' : 'var(--sand-700)'
                  }}
                >
                  <span className="hidden sm:inline">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
            
            {/* Recherche globale */}
            <GlobalSearch onNavigate={(tab, data) => {
              setActiveTab(tab);
              if (data?.themeId) {
                const theme = THEMES.find(t => t.id === data.themeId);
                if (theme) {
                  handleThemeSelect(theme);
                }
              }
              setViewMode('themes');
            }} />
            
            {/* Bouton Sync */}
            <button
              onClick={() => setShowSyncModal(true)}
              className="p-2.5 rounded-xl transition-all group hover:shadow-md"
              style={{ backgroundColor: 'var(--sand-100)' }}
              title="Synchroniser mes données"
            >
              <svg className="w-5 h-5 transition-colors" style={{ color: 'var(--sand-600)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            
            {/* Menu Utilisateur */}
            <UserMenu onOpenAuth={() => setShowAuthModal(true)} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
          <>
            {activeTab === 'grammar' && <GrammarView />}
            
            {activeTab === 'stats' && <StatsView />}
            
            {activeTab === 'tables' && <TablesView />}
            
            {activeTab === 'expressions' && <ExpressionsView />}
            
            {activeTab === 'translation' && <TranslationView />}
            
            {activeTab === 'revision' && <RevisionView />}
            
            {activeTab === 'vocabulary' && (
              <>
                {viewMode === 'themes' && (
                  <>
                    <div className="mb-10 text-center sm:text-left animate-in fade-in slide-in-from-top-4 duration-500">
                      <h2 className="text-4xl font-black text-slate-900 mb-2">Entraîneur de Vocabulaire</h2>
                      <p className="text-lg text-slate-500">Choisissez un thème pour commencer votre apprentissage immédiat.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-700">
                      {THEMES.map(theme => (
                        <ThemeCard key={theme.id} theme={theme} onClick={handleThemeSelect} />
                      ))}
                    </div>
                  </>
                )}

                {viewMode !== 'themes' && content && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => { setViewMode('themes'); setCurrentTheme(null); setContent(null); }}
                          className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-slate-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </button>
                        <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                          <span>{currentTheme?.icon}</span> {currentTheme?.name}
                        </h2>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <div className="flex gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                          {['All', 'A1', 'A2', 'B1', 'B2'].map(lvl => (
                            <button
                              key={lvl}
                              onClick={() => setSelectedLevel(lvl as any)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedLevel === lvl ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sous-thèmes Selector */}
                    {currentTheme?.subThemes && (
                      <div className="flex flex-wrap gap-2 mb-8 animate-in fade-in slide-in-from-left-4 duration-500 delay-150">
                        <button
                          onClick={() => setSelectedSubTheme('All')}
                          className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${selectedSubTheme === 'All' ? 'bg-slate-800 text-white border-slate-800 shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
                        >
                          Tout ({content.words.length})
                        </button>
                        {currentTheme.subThemes.map(st => {
                          const count = content.words.filter(w => w.subTheme === st).length;
                          return (
                            <button
                              key={st}
                              onClick={() => setSelectedSubTheme(st)}
                              className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${selectedSubTheme === st ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-200'}`}
                            >
                              {st} ({count})
                            </button>
                          );
                        })}
                      </div>
                    )}
                    
                    <nav className="flex gap-4 mb-8">
                       <button onClick={() => setViewMode('learn')} className={`pb-2 border-b-2 font-bold text-sm transition-all ${viewMode === 'learn' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>📚 Liste ({filteredWords.length})</button>
                       <button onClick={() => setViewMode('phrases')} className={`pb-2 border-b-2 font-bold text-sm transition-all ${viewMode === 'phrases' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>💬 Phrases ({content.phrases.length})</button>
                       <button onClick={() => setViewMode('trainer')} className={`pb-2 border-b-2 font-bold text-sm transition-all ${viewMode === 'trainer' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>🎯 S'entraîner</button>
                       <button onClick={() => setViewMode('quiz')} className={`pb-2 border-b-2 font-bold text-sm transition-all ${viewMode === 'quiz' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>❓ Quiz rapide</button>
                    </nav>

                    {viewMode === 'learn' && (
                      filteredWords.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          {filteredWords.map((word, idx) => (
                            <WordCard key={`${currentTheme?.id}-${idx}-${word.german}`} word={word} />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                          <p className="text-slate-400 font-bold text-lg">Aucun mot disponible pour cette sélection.</p>
                          <p className="text-slate-400 text-sm mt-2">Essayez de changer de niveau ou de sous-thème.</p>
                        </div>
                      )
                    )}

                    {viewMode === 'phrases' && (
                      <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
                        {content.phrases.length > 0 ? (
                          content.phrases.map((phrase, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
                              <div className="flex items-start gap-4">
                                <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                                <div>
                                  <p className="text-slate-900 font-bold text-xl mb-1">{phrase.german}</p>
                                  <p className="text-indigo-600 font-medium mb-3">{phrase.french}</p>
                                  <p className="text-slate-400 text-xs italic">Contexte: {phrase.context}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                            <p className="text-slate-400 font-bold">Aucune phrase enregistrée pour ce thème.</p>
                          </div>
                        )}
                      </div>
                    )}

                    {viewMode === 'quiz' && (
                      filteredWords.length >= 4 ? (
                        <Quiz 
                          words={filteredWords.sort(() => 0.5 - Math.random()).slice(0, 10)} 
                          onComplete={() => setViewMode('learn')} 
                        />
                      ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                          <p className="text-slate-400 font-bold text-lg">Besoin d'au moins 4 mots pour un quiz.</p>
                          <p className="text-slate-400 text-sm mt-2">Réduisez les filtres pour obtenir plus de mots.</p>
                        </div>
                      )
                    )}

                    {viewMode === 'trainer' && (
                      filteredWords.length >= 5 ? (
                        <VocabularyTrainer 
                          words={filteredWords} 
                          onComplete={() => setViewMode('learn')}
                          themeName={currentTheme?.name}
                        />
                      ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                          <p className="text-slate-400 font-bold text-lg">Besoin d'au moins 5 mots pour l'entraînement.</p>
                          <p className="text-slate-400 text-sm mt-2">Réduisez les filtres pour obtenir plus de mots.</p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </>
            )}

            {activeTab === 'nomen-verben' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
                  <div className="flex-1">
                    <h2 className="text-4xl font-black text-slate-900 mb-2">Nomen-Verb Verbindungen</h2>
                    <p className="text-lg text-slate-500">Expressions idiomatiques structurées.</p>
                  </div>
                  <div className="w-full md:w-80 relative">
                    <input 
                      type="text" 
                      placeholder="Rechercher..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      value={nvSearch}
                      onChange={(e) => setNvSearch(e.target.value)}
                    />
                    <svg className="absolute left-3 top-3.5 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredNV.map((word, idx) => (
                    <WordCard key={`nv-${idx}`} word={word} />
                  ))}
                </div>
              </div>
            )}
          </>
      </main>
    </div>
  );
};

// App principal avec AuthProvider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
