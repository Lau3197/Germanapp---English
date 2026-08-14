import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AppTheme, MainTab } from './types';
import { DashboardView } from './components/DashboardView';
import { VocabularyView } from './components/VocabularyView';
import { GenderTrainerView } from './components/GenderTrainerView';
import { NomenVerbenView } from './components/NomenVerbenView';
import { GrammarView } from './components/GrammarView';
import { SyncModal } from './components/SyncModal';
import { TablesView } from './components/TablesView';
import { ExpressionsView } from './components/ExpressionsView';
import { RevisionView } from './components/RevisionView';
import { ExamView } from './components/ExamView';
import { ItalianView } from './components/ItalianView';
import { StructureComparisonView } from './components/StructureComparisonView';
import { VerbenMitPraepositionenView } from './components/VerbenMitPraepositionenView';
import { GlobalSearch } from './components/GlobalSearch';
import { AuthModal } from './components/AuthModal';
import { AuthPage } from './components/AuthPage';
import { UserMenu } from './components/UserMenu';
import { AppThemeSwitcher } from './components/AppThemeSwitcher';
import { PandaThemeLayer } from './components/PandaThemeLayer';
import { CaneThemeLayer } from './components/CaneThemeLayer';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { GrammarProvider } from './contexts/GrammarContext';
import { PandaMascotProvider } from './contexts/PandaMascotContext';
import { StudyTimeProvider } from './contexts/StudyTimeContext';

const APP_THEME_STORAGE_KEY = 'deutschmeister-app-theme';

type PrimarySection = 'dashboard' | 'vocabulary' | 'grammar' | 'exam' | 'italian';

const PRIMARY_NAV: { id: PrimarySection; label: string; path: string }[] = [
  { id: 'dashboard', label: 'Home', path: '/dashboard' },
  { id: 'vocabulary', label: 'Vocabulary', path: '/vocabulary' },
  { id: 'grammar', label: 'Grammar', path: '/grammar' },
  { id: 'exam', label: 'Exam B2', path: '/exam' },
  { id: 'italian', label: 'Italian', path: '/italian' },
];

const VOCABULARY_NAV: { id: MainTab; label: string; path: string }[] = [
  { id: 'vocabulary', label: 'Themes', path: '/vocabulary' },
  { id: 'revision', label: 'Review', path: '/revision' },
  { id: 'gender', label: 'Der/Die/Das', path: '/gender' },
  { id: 'expressions', label: 'Expressions', path: '/expressions' },
];

const GRAMMAR_NAV: { id: MainTab; label: string; path: string }[] = [
  { id: 'grammar', label: 'Lessons', path: '/grammar' },
  { id: 'tables', label: 'Tables', path: '/tables' },
  { id: 'structures', label: 'Structures', path: '/structures' },
  { id: 'nomen-verben', label: 'Noun-Verb', path: '/nomen-verben' },
  { id: 'verben-mit-praepositionen', label: 'Prepositional Verbs', path: '/verben-mit-praepositionen' },
];

const getPrimarySection = (tab: MainTab): PrimarySection => {
  if (tab === 'exam') return 'exam';
  if (tab === 'italian') return 'italian';
  if (VOCABULARY_NAV.some(item => item.id === tab)) return 'vocabulary';
  if (GRAMMAR_NAV.some(item => item.id === tab)) return 'grammar';
  return 'dashboard';
};

const AppLayout: React.FC = () => {
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPandaReward, setShowPandaReward] = useState(false);
  const [appTheme, setAppTheme] = useState<AppTheme>(() => {
    if (typeof window === 'undefined') {
      return 'classic';
    }

    const storedTheme = window.localStorage.getItem(APP_THEME_STORAGE_KEY);
    return storedTheme === 'panda' || storedTheme === 'cane' ? storedTheme : 'classic';
  });
  const activeTabRef = useRef<HTMLButtonElement | null>(null);
  const previousThemeRef = useRef<AppTheme>(appTheme);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab from URL
  const activeTab = (location.pathname.substring(1).split('/')[0] || 'dashboard') as MainTab;
  const primarySection = getPrimarySection(activeTab);
  const secondaryNav =
    primarySection === 'vocabulary'
      ? VOCABULARY_NAV
      : primarySection === 'grammar'
        ? GRAMMAR_NAV
        : [];

  useEffect(() => {
    activeTabRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeTab]);

  useEffect(() => {
    document.documentElement.setAttribute('data-app-theme', appTheme);
    window.localStorage.setItem(APP_THEME_STORAGE_KEY, appTheme);

    if (previousThemeRef.current !== appTheme && appTheme === 'panda') {
      setShowPandaReward(true);
      window.setTimeout(() => setShowPandaReward(false), 4200);
    }

    previousThemeRef.current = appTheme;
  }, [appTheme]);

  // Helper to handle search navigation.
  // Each result carries enough context to deep-link straight to the matching
  // topic/word rather than dumping the user on the section root.
  const handleSearchNavigate = (tab: MainTab, context?: any) => {
    const withQuery = (path: string, params: Record<string, string | undefined>) => {
      const search = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value) search.set(key, value);
      });
      const qs = search.toString();
      return qs ? `${path}?${qs}` : path;
    };

    switch (tab) {
      case 'vocabulary':
        if (context?.themeId) {
          navigate(withQuery(`/vocabulary/${context.themeId}`, { q: context.term, kind: context.kind }));
          return;
        }
        break;
      case 'grammar':
        if (context?.topicId) {
          const level = context.level || 'A1';
          navigate(withQuery(`/grammar/${level}`, { topic: context.topicId }));
          return;
        }
        break;
      case 'structures':
        if (context?.patternId) {
          navigate(`/structures/${context.patternId}`);
          return;
        }
        break;
      case 'nomen-verben':
      case 'verben-mit-praepositionen':
      case 'expressions':
        if (context?.term) {
          navigate(withQuery(`/${tab}`, { q: context.term }));
          return;
        }
        break;
    }

    navigate(`/${tab}`);
  };

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--sand-50)' }}>
      {/* Sync modal */}
      <SyncModal isOpen={showSyncModal} onClose={() => setShowSyncModal(false)} />

      {/* Auth modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {/* Panda theme atmosphere */}
      {appTheme === 'panda' && (
        <PandaThemeLayer
          showReward={showPandaReward}
          onDismissReward={() => setShowPandaReward(false)}
        />
      )}
      {appTheme === 'cane' && <CaneThemeLayer />}

      <header className="app-header">
        <div className="app-header-shell">
          <button type="button" className="app-brand" onClick={() => navigate('/dashboard')}>
            <div className="app-brand-mark">
              {appTheme === 'panda' ? '🐼' : appTheme === 'cane' ? '🐕' : '🇩🇪'}
            </div>
            <h1 className="app-brand-title">DeutschMeister</h1>
          </button>

          <div className="app-actions">
            {/* Global search */}
            <GlobalSearch onNavigate={handleSearchNavigate} />

            {/* App theme */}
            <AppThemeSwitcher theme={appTheme} onThemeChange={setAppTheme} />

            {/* Sync button */}
            <button
              onClick={() => setShowSyncModal(true)}
              className="w-11 h-11 rounded-xl transition-all group hover:shadow-md shrink-0 flex items-center justify-center"
              style={{ backgroundColor: 'var(--sand-100)' }}
              title="Export or import a backup"
            >
              <svg className="w-5 h-5 transition-colors" style={{ color: 'var(--sand-600)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>

            {/* User menu */}
            <UserMenu onOpenAuth={() => setShowAuthModal(true)} />
          </div>

          <nav className="app-nav" aria-label="Primary navigation">
            {PRIMARY_NAV.map(tab => {
              const isActive = primarySection === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  ref={isActive ? activeTabRef : undefined}
                  onClick={() => navigate(tab.path)}
                  className={`app-nav-tab ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {secondaryNav.length > 0 && (
            <nav className="app-subnav" aria-label={`${primarySection} navigation`}>
              {secondaryNav.map(tab => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => navigate(tab.path)}
                    className={`app-subnav-tab ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="/dashboard" element={<DashboardView />} />

          {/* Updated Vocabulary Routes */}
          <Route path="/vocabulary" element={<VocabularyView />} />
          <Route path="/vocabulary/:themeId" element={<VocabularyView />} />

          <Route path="/gender" element={<GenderTrainerView />} />

          <Route path="/revision" element={<RevisionView />} />
          <Route path="/structures" element={<StructureComparisonView />} />
          <Route path="/structures/:patternId" element={<StructureComparisonView />} />

          {/* Updated Grammar Routes */}
          <Route path="/grammar" element={<GrammarView />} />
          <Route path="/grammar/:level" element={<GrammarView />} />

          <Route path="/tables" element={<TablesView />} />
          <Route path="/expressions" element={<ExpressionsView />} />
          <Route path="/exam" element={<ExamView />} />
          <Route path="/italian" element={<ItalianView />} />
          <Route path="/nomen-verben" element={<NomenVerbenView />} />
          <Route path="/verben-mit-praepositionen" element={<VerbenMitPraepositionenView />} />
          <Route path="/stats" element={<Navigate to="/dashboard#stats" replace />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
};

const AuthLoadingScreen: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: 'var(--sand-50)' }}>
    <div className="text-center">
      <div className="w-12 h-12 rounded-2xl mx-auto mb-4 animate-pulse" style={{ backgroundColor: 'var(--terracotta-600)' }} />
      <p className="font-bold" style={{ color: 'var(--terracotta-700)' }}>Loading...</p>
    </div>
  </div>
);

const AuthGate: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <AuthLoadingScreen />;
  }

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  // Mounted above the router so the study clock keeps running on every page,
  // not just the dashboard.
  return (
    <StudyTimeProvider>
      <AppLayout />
    </StudyTimeProvider>
  );
};

// Main app with AuthProvider and GrammarProvider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <GrammarProvider>
        <PandaMascotProvider>
          <BrowserRouter>
            <AuthGate />
          </BrowserRouter>
        </PandaMascotProvider>
      </GrammarProvider>
    </AuthProvider>
  );
};

export default App;
