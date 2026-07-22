import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GRAMMAR_DATA } from '../data/grammarData';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { LanguageLevel } from '../types';
import { useGrammar } from '../contexts/GrammarContext';
import { useAuth } from '../contexts/AuthContext';
import { useSpacedRepetition } from '../hooks/useSpacedRepetition';
import { StatsView } from './StatsView';

// ---------- Helpers ----------

const getLocalDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

interface RawStats {
  dailyGoal?: number;
  currentStreak?: number;
  longestStreak?: number;
  dailyHistory?: { date: string; timeSpent: number }[];
  quizResults?: { topicId: string; score: number; date: string }[];
}

const readStats = (): RawStats => {
  try {
    const saved = localStorage.getItem('grammarStats');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m`;
  return `${seconds}s`;
};

interface NextLesson {
  level: LanguageLevel;
  sectionTitle: string;
  topicId: string;
  topicTitle: string;
}

const getTopicTitle = (topicId: string): { title: string; level: LanguageLevel } | null => {
  for (const lvl of GRAMMAR_DATA) {
    for (const section of lvl.sections) {
      const topic = section.topics.find(t => t.id === topicId);
      if (topic) return { title: topic.title, level: lvl.level };
    }
  }
  return null;
};

// ---------- Component ----------

export const DashboardView: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { completedLessons } = useGrammar();
  const { isLoaded, addWords, getStats } = useSpacedRepetition();
  const statsSectionRef = useRef<HTMLElement | null>(null);

  const [stats] = useState<RawStats>(() => readStats());

  // Seed the SRS store with the app vocabulary so the review queue is meaningful
  // even for a user who has never opened the Review tab yet.
  useEffect(() => {
    if (!isLoaded) return;
    const allWords: { theme: string; german: string; english: string; article?: string }[] = [];
    Object.entries(VOCABULARY_DATA).forEach(([themeId, data]) => {
      data.words.forEach(word => {
        allWords.push({
          theme: themeId,
          german: word.german,
          english: word.english,
          article: word.article || undefined,
        });
      });
    });
    if (allWords.length > 0) addWords(allWords);
  }, [isLoaded, addWords]);

  useEffect(() => {
    if (window.location.hash !== '#stats') return;

    const timer = window.setTimeout(() => {
      statsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const srs = getStats();

  // ----- Grammar program progress -----
  const grammar = useMemo(() => {
    let total = 0;
    let completed = 0;
    let nextLesson: NextLesson | null = null;
    const byLevel: { level: LanguageLevel; completed: number; total: number }[] = [];

    GRAMMAR_DATA.forEach(lvl => {
      let lTotal = 0;
      let lCompleted = 0;
      lvl.sections.forEach(section => {
        section.topics.forEach(topic => {
          total++;
          lTotal++;
          if (completedLessons.includes(topic.id)) {
            completed++;
            lCompleted++;
          } else if (!nextLesson) {
            nextLesson = {
              level: lvl.level,
              sectionTitle: section.title,
              topicId: topic.id,
              topicTitle: topic.title,
            };
          }
        });
      });
      byLevel.push({ level: lvl.level, completed: lCompleted, total: lTotal });
    });

    return { total, completed, nextLesson, byLevel };
  }, [completedLessons]);

  // ----- Weaknesses from quiz results -----
  const weaknesses = useMemo(() => {
    const results = stats.quizResults || [];
    if (results.length === 0) return [];

    const grouped: Record<string, { sum: number; count: number }> = {};
    results.forEach(r => {
      if (!grouped[r.topicId]) grouped[r.topicId] = { sum: 0, count: 0 };
      grouped[r.topicId].sum += r.score;
      grouped[r.topicId].count += 1;
    });

    return Object.entries(grouped)
      .map(([topicId, { sum, count }]) => {
        const avg = sum / count;
        const info = getTopicTitle(topicId);
        return info ? { topicId, avg, title: info.title, level: info.level } : null;
      })
      .filter((x): x is { topicId: string; avg: number; title: string; level: LanguageLevel } => x !== null)
      .filter(x => x.avg < 80)
      .sort((a, b) => a.avg - b.avg)
      .slice(0, 3);
  }, [stats.quizResults]);

  // ----- Today's time & goal -----
  const dailyGoal = Math.max(1, stats.dailyGoal || 15);
  const todayKey = getLocalDateKey();
  const todayTime = (stats.dailyHistory || []).find(d => d.date === todayKey)?.timeSpent || 0;
  const goalProgress = Math.min(100, Math.round((todayTime / 60 / dailyGoal) * 100));
  const streak = stats.currentStreak || 0;

  const completionPct = grammar.total > 0 ? Math.round((grammar.completed / grammar.total) * 100) : 0;

  // ----- Greeting -----
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const name = user?.name || (user?.email ? user.email.split('@')[0] : '');

  // ----- Session plan -----
  const wordsDue = srs.wordsToReview;
  const sessionSteps = [
    wordsDue > 0
      ? { icon: '🧠', label: `Review ${Math.min(wordsDue, 20)} vocabulary card${wordsDue > 1 ? 's' : ''}`, done: false }
      : { icon: '🧠', label: 'Vocabulary reviews all caught up', done: true },
    grammar.nextLesson
      ? { icon: '📖', label: `Grammar lesson · ${grammar.nextLesson.topicTitle}`, done: false }
      : { icon: '📖', label: 'All grammar lessons completed', done: true },
    weaknesses.length > 0
      ? { icon: '🎯', label: `Revisit a weak spot · ${weaknesses[0].title}`, done: false }
      : { icon: '🎯', label: 'No weak spots detected yet', done: true },
  ];

  const primaryAction = () => {
    if (wordsDue > 0) navigate('/revision');
    else if (grammar.nextLesson) navigate(`/grammar/${grammar.nextLesson.level}`);
    else navigate('/vocabulary');
  };

  const scrollToStats = () => {
    statsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const quickLinks = [
    { id: 'vocabulary', label: 'Vocabulary', icon: '📚', color: 'var(--coral-500)' },
    { id: 'gender', label: 'Der/Die/Das', icon: '🎨', color: 'var(--turquoise-500)' },
    { id: 'revision', label: 'Review', icon: '🧠', color: 'var(--turquoise-500)' },
    { id: 'grammar', label: 'Grammar', icon: '📖', color: 'var(--sage-600)' },
    { id: 'structures', label: 'Structures', icon: '⇄', color: 'var(--coral-500)' },
    { id: 'expressions', label: 'Expressions', icon: '💬', color: 'var(--turquoise-500)' },
    { id: 'exam', label: 'Exam B2', icon: '📝', color: 'var(--sage-600)' },
    { id: 'tables', label: 'Tables', icon: '📋', color: 'var(--coral-500)' },
  ];

  const levelColors = [
    'from-emerald-500 to-emerald-400',
    'from-blue-500 to-blue-400',
    'from-violet-500 to-violet-400',
    'from-orange-500 to-orange-400',
    'from-red-500 to-red-400',
    'from-fuchsia-500 to-fuchsia-400',
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* ---------- Hero ---------- */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-8" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <div>
          <p className="text-lg font-medium mb-1" style={{ color: 'var(--sand-600)' }}>
            {timeGreeting}{name ? `, ${name}` : ''} 👋
          </p>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>
            Let's learn German
          </h2>
        </div>

        <div className="flex gap-3">
          <div className="px-5 py-3 rounded-2xl text-white flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #ea580c, #9a3412)' }}>
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-3xl font-black leading-none">{streak}</p>
              <p className="text-[11px] font-bold uppercase tracking-wider opacity-90">day streak</p>
            </div>
          </div>
          <div className="px-5 py-3 rounded-2xl flex items-center gap-3" style={{ backgroundColor: 'white', border: '1px solid var(--terracotta-100)' }}>
            <div className="relative w-11 h-11 shrink-0">
              <svg viewBox="0 0 36 36" className="w-11 h-11 -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="var(--sand-100)" strokeWidth="4" />
                <circle
                  cx="18" cy="18" r="15" fill="none"
                  stroke="var(--turquoise-500)" strokeWidth="4" strokeLinecap="round"
                  strokeDasharray={`${(goalProgress / 100) * 94.2} 94.2`}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[11px] font-black" style={{ color: 'var(--turquoise-700)' }}>
                {goalProgress}%
              </span>
            </div>
            <div>
              <p className="text-sm font-black" style={{ color: 'var(--sand-800)' }}>{formatTime(todayTime)}</p>
              <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--sand-500)' }}>of {dailyGoal}m goal</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Today's session (primary CTA) ---------- */}
      <div className="rounded-[2rem] p-8 mb-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--coral-600), var(--terracotta-800))' }}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-[6rem] -mr-12 -mt-12"></div>
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <p className="text-[11px] font-black uppercase tracking-widest opacity-80 mb-2">Your session today</p>
            <h3 className="text-3xl font-black mb-5">A focused plan, built for you</h3>
            <div className="space-y-2.5">
              {sessionSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-lg shrink-0 ${step.done ? 'bg-white/15' : 'bg-white/25'}`}>
                    {step.done ? '✓' : step.icon}
                  </span>
                  <span className={`font-medium ${step.done ? 'opacity-60 line-through' : ''}`}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={primaryAction}
            className="px-8 py-5 rounded-2xl font-black text-lg bg-white transition-all hover:scale-105 shadow-xl shrink-0"
            style={{ color: 'var(--coral-700)' }}
          >
            {wordsDue > 0 || grammar.nextLesson ? 'Start now →' : 'Explore →'}
          </button>
        </div>
      </div>

      {/* ---------- Three action cards ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Resume / next lesson */}
        <button
          onClick={() => grammar.nextLesson ? navigate(`/grammar/${grammar.nextLesson.level}`) : navigate('/grammar')}
          className="bg-white p-6 rounded-[2rem] shadow-sm text-left transition-all hover:shadow-lg hover:-translate-y-1"
          style={{ border: '1px solid var(--terracotta-100)' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--sage-100)' }}>
            <span className="text-2xl">📖</span>
          </div>
          <p className="text-[11px] font-black uppercase tracking-wider mb-1" style={{ color: 'var(--sand-500)' }}>Continue learning</p>
          {grammar.nextLesson ? (
            <>
              <p className="text-lg font-black leading-tight mb-1" style={{ color: 'var(--sand-800)' }}>{grammar.nextLesson.topicTitle}</p>
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>{grammar.nextLesson.level} · {grammar.nextLesson.sectionTitle}</p>
            </>
          ) : (
            <p className="text-lg font-black" style={{ color: 'var(--sage-700)' }}>All lessons done 🎉</p>
          )}
        </button>

        {/* Review queue */}
        <button
          onClick={() => navigate('/revision')}
          className="bg-white p-6 rounded-[2rem] shadow-sm text-left transition-all hover:shadow-lg hover:-translate-y-1"
          style={{ border: '1px solid var(--terracotta-100)' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--turquoise-100)' }}>
            <span className="text-2xl">🧠</span>
          </div>
          <p className="text-[11px] font-black uppercase tracking-wider mb-1" style={{ color: 'var(--sand-500)' }}>Due for review</p>
          <p className="text-3xl font-black leading-tight" style={{ color: 'var(--turquoise-700)' }}>
            {wordsDue} <span className="text-lg">card{wordsDue !== 1 ? 's' : ''}</span>
          </p>
          <p className="text-sm" style={{ color: 'var(--sand-500)' }}>
            {srs.masteredWords} mastered · {srs.todayReviewed} reviewed today
          </p>
        </button>

        {/* Weakness / focus */}
        <button
          onClick={() => weaknesses.length > 0 ? navigate(`/grammar/${weaknesses[0].level}`) : navigate('/exam')}
          className="bg-white p-6 rounded-[2rem] shadow-sm text-left transition-all hover:shadow-lg hover:-translate-y-1"
          style={{ border: '1px solid var(--terracotta-100)' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--coral-100)' }}>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-[11px] font-black uppercase tracking-wider mb-1" style={{ color: 'var(--sand-500)' }}>Focus area</p>
          {weaknesses.length > 0 ? (
            <>
              <p className="text-lg font-black leading-tight mb-1" style={{ color: 'var(--sand-800)' }}>{weaknesses[0].title}</p>
              <p className="text-sm" style={{ color: 'var(--coral-600)' }}>{Math.round(weaknesses[0].avg)}% avg · needs practice</p>
            </>
          ) : (
            <p className="text-sm font-medium" style={{ color: 'var(--sand-500)' }}>Take a quiz to reveal your weak spots.</p>
          )}
        </button>
      </div>

      {/* ---------- Program progress ---------- */}
      <div className="bg-white p-8 rounded-[2rem] shadow-sm mb-8" style={{ border: '1px solid var(--terracotta-100)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📊</span>
            <div>
              <h3 className="text-2xl font-black" style={{ color: 'var(--sand-800)' }}>Program progress</h3>
              <p className="text-sm" style={{ color: 'var(--sand-500)' }}>{grammar.completed}/{grammar.total} lessons · {completionPct}% complete</p>
            </div>
          </div>
          <button onClick={scrollToStats} className="px-4 py-2 rounded-xl font-bold text-sm transition-all" style={{ backgroundColor: 'var(--sand-100)', color: 'var(--sand-700)' }}>
            Stats
          </button>
        </div>
        <div className="space-y-3">
          {grammar.byLevel.map((lvl, idx) => {
            const pct = lvl.total > 0 ? Math.round((lvl.completed / lvl.total) * 100) : 0;
            return (
              <button key={lvl.level} onClick={() => navigate(`/grammar/${lvl.level}`)} className="w-full flex items-center gap-4 group">
                <span className="w-10 text-base font-black text-left" style={{ color: 'var(--sand-400)' }}>{lvl.level}</span>
                <div className="flex-1 h-7 rounded-xl overflow-hidden relative" style={{ backgroundColor: 'var(--sand-100)' }}>
                  <div className={`h-full bg-gradient-to-r ${levelColors[idx]} transition-all duration-700 rounded-xl`} style={{ width: `${pct}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color: 'var(--sand-600)' }}>
                    {lvl.completed}/{lvl.total} ({pct}%)
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------- Quick access ---------- */}
      <div>
        <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: 'var(--sand-500)' }}>Jump back in</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickLinks.map(link => (
            <button
              key={link.id}
              onClick={() => navigate(`/${link.id}`)}
              className="bg-white p-5 rounded-2xl shadow-sm text-left transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-3"
              style={{ border: '1px solid var(--terracotta-100)' }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="font-bold" style={{ color: 'var(--sand-800)' }}>{link.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Statistics ---------- */}
      <section ref={statsSectionRef} id="stats" className="mt-12 scroll-mt-40">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-sm font-black uppercase tracking-wider mb-2" style={{ color: 'var(--sand-500)' }}>Stats</p>
            <h3 className="text-4xl font-black tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Your progress</h3>
          </div>
          <p className="text-base font-medium max-w-xl" style={{ color: 'var(--sand-600)' }}>
            Track your streak, daily goal, study time, and level completion from the Home page.
          </p>
        </div>
        <StatsView embedded />
      </section>
    </div>
  );
};
