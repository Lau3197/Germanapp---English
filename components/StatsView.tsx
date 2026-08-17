import React, { useState, useEffect, useMemo } from 'react';
import { GRAMMAR_DATA } from '../data/grammarData';
import { LanguageLevel } from '../types';
import { useGrammar } from '../contexts/GrammarContext';
import { useStudyTime } from '../contexts/StudyTimeContext';
import { defaultStats, getLocalDateKey, normalizeStats } from '../utils/studyStats';

export const StatsView: React.FC = () => {
  const { completedLessons } = useGrammar(); // Utiliser le contexte pour la vérité terrain
  // The clock itself lives in StudyTimeProvider (app-wide), this view only reads it.
  const { stats: trackedStats, todayTimeSpent, updateStats } = useStudyTime();
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [newGoal, setNewGoal] = useState(trackedStats.dailyGoal || 15);

  const stats = useMemo(
    () => normalizeStats({ ...trackedStats, completedLessons }),
    [trackedStats, completedLessons]
  );

  useEffect(() => {
    setNewGoal(trackedStats.dailyGoal || 15);
  }, [trackedStats.dailyGoal]);

  // Calculer les statistiques
  const getTodayStats = () => {
    const today = getLocalDateKey();
    const todayData = stats.dailyHistory.find(d => d.date === today);
    const dailyGoal = Math.max(1, stats.dailyGoal || defaultStats.dailyGoal);
    return {
      timeSpent: todayTimeSpent,
      goalProgress: Math.min(100, (todayTimeSpent / 60 / dailyGoal) * 100),
      lessonsCompleted: todayData?.lessonsCompleted.length || 0
    };
  };

  const getTotalLessons = () => {
    let total = 0;
    GRAMMAR_DATA.forEach(level => {
      level.sections.forEach(section => {
        total += section.topics.length;
      });
    });
    return total;
  };

  const getCompletionByLevel = () => {
    const result: { level: LanguageLevel; completed: number; total: number }[] = [];

    GRAMMAR_DATA.forEach(levelData => {
      let total = 0;
      let completed = 0;
      levelData.sections.forEach(section => {
        section.topics.forEach(topic => {
          total++;
          if (stats.completedLessons.includes(topic.id)) {
            completed++;
          }
        });
      });
      result.push({ level: levelData.level, completed, total });
    });

    return result;
  };

  const getLast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = getLocalDateKey(date);
      const dayData = stats.dailyHistory.find(d => d.date === dateStr);
      const dayTimeSpent = i === 0 ? todayTimeSpent : dayData?.timeSpent || 0;
      days.push({
        date: dateStr,
        dayName: date.toLocaleDateString('fr-FR', { weekday: 'short' }),
        timeSpent: dayTimeSpent,
        goalReached: dayTimeSpent >= stats.dailyGoal * 60
      });
    }
    return days;
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  };

  const saveGoal = () => {
    updateStats(current => ({ ...current, dailyGoal: newGoal }));
    setShowGoalModal(false);
  };

  const todayStats = getTodayStats();
  const levelCompletion = getCompletionByLevel();
  const last7Days = getLast7Days();
  const totalLessons = getTotalLessons();
  const dailyGoalSeconds = Math.max(1, stats.dailyGoal || defaultStats.dailyGoal) * 60;
  const remainingGoalTime = Math.max(0, dailyGoalSeconds - todayStats.timeSpent);
  const completionPercentage = Math.round((stats.completedLessons.length / totalLessons) * 100);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Daily goal modal */}
      {showGoalModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm"
          style={{ backgroundColor: 'var(--app-overlay)' }}
          onClick={() => setShowGoalModal(false)}
        >
          <div
            className="rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-300"
            style={{ backgroundColor: 'var(--app-surface)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 text-white" style={{ background: 'linear-gradient(135deg, var(--coral-600), var(--terracotta-800))' }}>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Daily goal</p>
              <h5 className="text-2xl font-black text-white">Set my goal</h5>
            </div>
            <div className="p-6">
              <p className="text-sm mb-4" style={{ color: 'var(--sand-600)' }}>How many minutes do you want to study each day?</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setNewGoal(Math.max(5, newGoal - 5))}
                  className="app-soft-button w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl"
                >
                  -
                </button>
                <div className="text-center">
                  <span className="text-5xl font-black" style={{ color: 'var(--terracotta-700)' }}>{newGoal}</span>
                  <p className="text-sm font-medium" style={{ color: 'var(--sand-500)' }}>minutes/day</p>
                </div>
                <button
                  onClick={() => setNewGoal(Math.min(120, newGoal + 5))}
                  className="app-soft-button w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl"
                >
                  +
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowGoalModal(false)}
                  className="app-ghost-button flex-1 px-4 py-3 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={saveGoal}
                  className="app-accent-button flex-1 px-4 py-3 rounded-xl font-bold"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-12 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Stats</h2>
        <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>Track your progress and reach your learning goals.</p>
      </div>

      {/* Main cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Streak */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'var(--app-card-1)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
            <div>
              <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Current streak</p>
              <p className="text-4xl font-black text-white">{stats.currentStreak}</p>
            </div>
          </div>
          <p className="text-white/80 text-sm">Record: {stats.longestStreak} days</p>
        </div>

        {/* Time today */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'var(--app-card-2)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Today</p>
              <p className="text-4xl font-black text-white">{formatTime(todayStats.timeSpent)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${todayStats.goalProgress}%` }}
              ></div>
            </div>
            <span className="text-white font-bold text-xs">{Math.round(todayStats.goalProgress)}%</span>
          </div>
        </div>

        {/* Completed lessons */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'var(--app-card-3)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Lessons</p>
              <p className="text-4xl font-black text-white">{stats.completedLessons.length}/{totalLessons}</p>
            </div>
          </div>
          <p className="text-white/80 text-sm">{completionPercentage}% of the program</p>
        </div>

        {/* Daily goal remaining */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'var(--app-card-4)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m0 12v3m9-9h-3M6 12H3" />
              </svg>
            </div>
            <div>
              <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Goal left</p>
              <p className="text-4xl font-black text-white">{remainingGoalTime === 0 ? 'Done' : formatTime(remainingGoalTime)}</p>
            </div>
          </div>
          <p className="text-white/80 text-sm">Goal: {stats.dailyGoal} min/day</p>
        </div>
      </div>

      {/* Daily goal */}
      <div className="app-surface-card p-8 rounded-[2rem] shadow-sm mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--terracotta-100)' }}>
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <h3 className="text-2xl font-black" style={{ color: 'var(--sand-800)' }}>Daily goal</h3>
              <p style={{ color: 'var(--sand-500)' }}>{stats.dailyGoal} minutes per day</p>
            </div>
          </div>
          <button
            onClick={() => setShowGoalModal(true)}
            className="app-accent-chip px-4 py-2 rounded-xl font-bold text-sm"
          >
            Edit
          </button>
        </div>

        {/* Weekly progress */}
        <div className="grid grid-cols-7 gap-3">
          {last7Days.map((day, idx) => {
            const height = Math.min(100, (day.timeSpent / 60 / stats.dailyGoal) * 100);
            const isToday = idx === 6;
            const goalReached = day.goalReached || (isToday && todayStats.goalProgress >= 100);
            const barGradient = goalReached
              ? 'linear-gradient(180deg, var(--app-success-soft), var(--app-success))'
              : isToday
                ? 'linear-gradient(180deg, var(--coral-400), var(--coral-600))'
                : 'linear-gradient(180deg, var(--sand-200), var(--sand-300))';
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full h-24 rounded-xl relative overflow-hidden mb-2" style={{ backgroundColor: 'var(--app-track)' }}>
                  <div
                    className="absolute bottom-0 w-full rounded-xl transition-all duration-500"
                    style={{ height: `${height}%`, background: barGradient }}
                  ></div>
                  {goalReached && (
                    <div className="absolute top-1 right-1">
                      <span className="text-xs">✓</span>
                    </div>
                  )}
                </div>
                <span className="text-xs font-bold" style={{ color: isToday ? 'var(--terracotta-700)' : 'var(--sand-500)' }}>
                  {day.dayName}
                </span>
                <span className="text-[10px]" style={{ color: 'var(--sand-400)' }}>
                  {Math.round(day.timeSpent / 60)}m
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress by level */}
      <div className="app-surface-card p-8 rounded-[2rem] shadow-sm">
        <h3 className="text-2xl font-black mb-6 flex items-center gap-3" style={{ color: 'var(--sand-800)' }}>
          <span className="text-3xl">📊</span>
          Progress by level
        </h3>
        <div className="space-y-4">
          {levelCompletion.map((level, idx) => {
            const percentage = level.total > 0 ? Math.round((level.completed / level.total) * 100) : 0;
            // Same theme-driven ladder as the Home progress bars.
            const gradients = ['var(--level-1)', 'var(--level-2)', 'var(--level-3)', 'var(--level-4)', 'var(--level-5)', 'var(--level-6)'];
            return (
              <div key={idx} className="flex items-center gap-4">
                <span className="w-12 text-lg font-black" style={{ color: 'var(--sand-400)' }}>{level.level}</span>
                <div className="flex-1 h-8 rounded-xl overflow-hidden relative" style={{ backgroundColor: 'var(--app-track)' }}>
                  <div
                    className="h-full transition-all duration-700 rounded-xl"
                    style={{ width: `${percentage}%`, background: gradients[idx % gradients.length] }}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color: 'var(--sand-600)' }}>
                    {level.completed}/{level.total} lessons ({percentage}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

// Hook pour marquer une leçon comme complétée (OBSOLÈTE : Utiliser useGrammar)
/*
export const useCompletedLessons = () => {
  // ... (Code déplacé dans GrammarContext)
};
*/
