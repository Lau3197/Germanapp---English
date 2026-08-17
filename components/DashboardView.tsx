import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { GRAMMAR_DATA } from '../data/grammarData';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { LanguageLevel } from '../types';
import { useGrammar } from '../contexts/GrammarContext';
import { useAuth } from '../contexts/AuthContext';
import { useSpacedRepetition } from '../hooks/useSpacedRepetition';
import { useStudyTime } from '../contexts/StudyTimeContext';

// ---------- Helpers ----------

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

interface EntryPoint {
  icon: string;
  title: string;
  detail: string;
  done: boolean;
  go: () => void;
}

// ---------- Component ----------

export const DashboardView: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { completedLessons } = useGrammar();
  const { isLoaded, addWords, getStats } = useSpacedRepetition();

  // Live stats from the app-wide study clock, so today's time keeps ticking here too.
  const { stats, todayTimeSpent } = useStudyTime();

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

    return { total, completed, nextLesson: nextLesson as NextLesson | null, byLevel };
  }, [completedLessons]);

  // ----- Today's time & goal -----
  const dailyGoal = Math.max(1, stats.dailyGoal || 15);
  const goalProgress = Math.min(100, Math.round((todayTimeSpent / 60 / dailyGoal) * 100));
  const streak = stats.currentStreak || 0;
  const completionPct = grammar.total > 0 ? Math.round((grammar.completed / grammar.total) * 100) : 0;

  // ----- Greeting -----
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const name = user?.name || (user?.email ? user.email.split('@')[0] : '');

  // ----- Entry points: current state of each area, not a generated study plan -----
  const wordsDue = srs.wordsToReview;
  const nextLesson = grammar.nextLesson;

  const entryPoints: EntryPoint[] = [
    wordsDue > 0
      ? {
          icon: '🧠',
          title: `Review ${Math.min(wordsDue, 20)} vocabulary card${wordsDue > 1 ? 's' : ''}`,
          detail: `${wordsDue} due · ${srs.masteredWords} mastered · ${srs.todayReviewed} done today`,
          done: false,
          go: () => navigate('/revision'),
        }
      : {
          icon: '🧠',
          title: 'Vocabulary reviews all caught up',
          detail: `${srs.masteredWords} words mastered`,
          done: true,
          go: () => navigate('/revision'),
        },
    nextLesson
      ? {
          icon: '📖',
          title: nextLesson.topicTitle,
          detail: `Next lesson · ${nextLesson.level} · ${nextLesson.sectionTitle}`,
          done: false,
          go: () => navigate(`/grammar/${nextLesson.level}`),
        }
      : {
          icon: '📖',
          title: 'All grammar lessons completed',
          detail: `${grammar.total} lessons done`,
          done: true,
          go: () => navigate('/grammar'),
        },
  ];

  // Level bars follow the active theme: each token is redefined per palette in index.css.
  const levelGradients = [
    'var(--level-1)',
    'var(--level-2)',
    'var(--level-3)',
    'var(--level-4)',
    'var(--level-5)',
    'var(--level-6)',
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
          <div className="px-5 py-3 rounded-2xl text-white flex items-center gap-3" style={{ background: 'var(--app-card-1)' }}>
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-3xl font-black leading-none">{streak}</p>
              <p className="text-[11px] font-bold uppercase tracking-wider opacity-90">day streak</p>
            </div>
          </div>
          <div className="px-5 py-3 rounded-2xl flex items-center gap-3" style={{ backgroundColor: 'var(--app-surface)', border: '1px solid var(--terracotta-100)' }}>
            <div className="relative w-11 h-11 shrink-0">
              <svg viewBox="0 0 36 36" className="w-11 h-11 -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="var(--app-track)" strokeWidth="4" />
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
              <p className="text-sm font-black" style={{ color: 'var(--sand-800)' }}>{formatTime(todayTimeSpent)}</p>
              <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--sand-500)' }}>of {dailyGoal}m goal</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Where to pick up: real state, no invented plan ---------- */}
      <div className="rounded-[2rem] p-6 sm:p-8 mb-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--coral-600), var(--terracotta-800))' }}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-[6rem] -mr-12 -mt-12"></div>
        <div className="relative">
          <p className="text-[11px] font-black uppercase tracking-widest opacity-80 mb-4">Pick up where you left off</p>

          <div className="space-y-2">
            {entryPoints.map((entry, i) => (
              <button
                key={i}
                onClick={entry.go}
                className={`w-full flex items-center gap-4 text-left rounded-2xl px-4 py-3 transition-all hover:bg-white/15 ${entry.done ? 'opacity-60' : ''}`}
              >
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${entry.done ? 'bg-white/15' : 'bg-white/25'}`}>
                  {entry.done ? '✓' : entry.icon}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold truncate">{entry.title}</span>
                  <span className="block text-sm opacity-80 truncate">{entry.detail}</span>
                </span>
                <span className="opacity-70 shrink-0">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Program progress ---------- */}
      <div className="app-surface-card p-8 rounded-[2rem] shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-black" style={{ color: 'var(--sand-800)' }}>Program progress</h3>
            <p className="text-sm" style={{ color: 'var(--sand-500)' }}>{grammar.completed}/{grammar.total} lessons · {completionPct}% complete</p>
          </div>
          <button
            onClick={() => navigate('/stats')}
            className="app-soft-button px-4 py-2 rounded-xl font-bold text-sm shrink-0"
          >
            Full stats →
          </button>
        </div>
        <div className="space-y-3">
          {grammar.byLevel.map((lvl, idx) => {
            const pct = lvl.total > 0 ? Math.round((lvl.completed / lvl.total) * 100) : 0;
            return (
              <button key={lvl.level} onClick={() => navigate(`/grammar/${lvl.level}`)} className="w-full flex items-center gap-4 group">
                <span className="w-10 text-base font-black text-left" style={{ color: 'var(--sand-400)' }}>{lvl.level}</span>
                <div className="flex-1 h-7 rounded-xl overflow-hidden relative" style={{ backgroundColor: 'var(--app-track)' }}>
                  <div
                    className="h-full transition-all duration-700 rounded-xl"
                    style={{ width: `${pct}%`, background: levelGradients[idx % levelGradients.length] }}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color: 'var(--sand-600)' }}>
                    {lvl.completed}/{lvl.total} ({pct}%)
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
