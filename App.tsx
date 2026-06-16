import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MainTab } from './types';
import { VocabularyView } from './components/VocabularyView';
import { NomenVerbenView } from './components/NomenVerbenView';
import { GrammarView } from './components/GrammarView';
import { StatsView } from './components/StatsView';
import { SyncModal } from './components/SyncModal';
import { TablesView } from './components/TablesView';
import { ExpressionsView } from './components/ExpressionsView';
import { RevisionView } from './components/RevisionView';
import { ExamView } from './components/ExamView';
import { VerbenMitPraepositionenView } from './components/VerbenMitPraepositionenView';
import { GlobalSearch } from './components/GlobalSearch';
import { AuthModal } from './components/AuthModal';
import { UserMenu } from './components/UserMenu';
import { AuthProvider } from './contexts/AuthContext';
import { GrammarProvider } from './contexts/GrammarContext';

const AppLayout: React.FC = () => {
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const activeTabRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab from URL
  const activeTab = (location.pathname.substring(1).split('/')[0] || 'vocabulary') as MainTab;

  useEffect(() => {
    activeTabRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeTab]);

  // Helper to handle search navigation
  const handleSearchNavigate = (tab: MainTab, context?: any) => {
    if (tab === 'vocabulary' && context?.search) {
      // Search logic might need further refinement if we want to deep link to a search result
      // For now, we go to vocabulary root
      navigate('/vocabulary');
    } else if (tab === 'grammar' && context?.topicId) {
      // We can't deep-link to topic easily without level info
      // Assuming default level or finding level logic happens elsewhere
      navigate('/grammar');
    } else {
      navigate(`/${tab}`);
    }
  };

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--sand-50)' }}>
      {/* Sync modal */}
      <SyncModal isOpen={showSyncModal} onClose={() => setShowSyncModal(false)} />

      {/* Auth modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b" style={{ borderColor: 'var(--terracotta-100)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/vocabulary')}>
            <div className="p-2.5 rounded-2xl text-white font-bold text-xl shadow-terracotta" style={{ backgroundColor: 'var(--terracotta-600)' }}>🇩🇪</div>
            <h1 className="text-xl font-black" style={{ color: 'var(--terracotta-800)' }}>DeutschMeister</h1>
          </div>
          <div className="flex items-center gap-2 w-full sm:flex-1 min-w-0 justify-end">
            <nav className="flex flex-1 min-w-0 p-1.5 rounded-2xl overflow-x-auto" style={{ backgroundColor: 'var(--sand-100)' }}>
              {[
                { id: 'vocabulary', label: 'Vocabulary', icon: '📚' },
                { id: 'revision', label: 'Review', icon: '🧠' },
                { id: 'grammar', label: 'Grammatik', icon: '📖' },
                { id: 'tables', label: 'Tables', icon: '📋' },
                { id: 'expressions', label: 'Expressions', icon: '💬' },
                { id: 'exam', label: 'Exam B2', icon: '📝' },
                { id: 'nomen-verben', label: 'Nomen-Verb', icon: '🔗' },
                { id: 'verben-mit-praepositionen', label: 'Verben mit Präpositionen', icon: '🔎' },
                { id: 'stats', label: 'Stats', icon: '📊' }
              ].map(tab => (
                <button
                  key={tab.id}
                  ref={activeTab === tab.id ? activeTabRef : undefined}
                  onClick={() => navigate(`/${tab.id}`)}
                  className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 whitespace-nowrap ${activeTab === tab.id
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

            {/* Global search */}
            <GlobalSearch onNavigate={handleSearchNavigate} />

            {/* Sync button */}
            <button
              onClick={() => setShowSyncModal(true)}
              className="p-2.5 rounded-xl transition-all group hover:shadow-md"
              style={{ backgroundColor: 'var(--sand-100)' }}
              title="Synchronize my data"
            >
              <svg className="w-5 h-5 transition-colors" style={{ color: 'var(--sand-600)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>

            {/* User menu */}
            <UserMenu onOpenAuth={() => setShowAuthModal(true)} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Navigate to="/vocabulary" replace />} />

          {/* Updated Vocabulary Routes */}
          <Route path="/vocabulary" element={<VocabularyView />} />
          <Route path="/vocabulary/:themeId" element={<VocabularyView />} />

          <Route path="/revision" element={<RevisionView />} />

          {/* Updated Grammar Routes */}
          <Route path="/grammar" element={<GrammarView />} />
          <Route path="/grammar/:level" element={<GrammarView />} />

          <Route path="/tables" element={<TablesView />} />
          <Route path="/expressions" element={<ExpressionsView />} />
          <Route path="/exam" element={<ExamView />} />
          <Route path="/nomen-verben" element={<NomenVerbenView />} />
          <Route path="/verben-mit-praepositionen" element={<VerbenMitPraepositionenView />} />
          <Route path="/stats" element={<StatsView />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/vocabulary" replace />} />
        </Routes>
      </main>
    </div>
  );
};

// Main app with AuthProvider and GrammarProvider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <GrammarProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </GrammarProvider>
    </AuthProvider>
  );
};

export default App;
