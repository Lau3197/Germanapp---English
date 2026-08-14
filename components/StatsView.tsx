import React, { useState, useEffect, useMemo } from 'react';
import { GRAMMAR_DATA } from '../data/grammarData';
import { LanguageLevel } from '../types';
import { useGrammar } from '../contexts/GrammarContext';
import { useStudyTime } from '../contexts/StudyTimeContext';
import { defaultStats, getLocalDateKey, normalizeStats } from '../utils/studyStats';

interface StatsViewProps {
  embedded?: boolean;
}

export const StatsView: React.FC<StatsViewProps> = ({ embedded = false }) => {
  const { completedLessons } = useGrammar(); // Utiliser le contexte pour la vérité terrain
  // The clock itself lives in StudyTimeProvider (app-wide), this view only reads it.
  const { stats: trackedStats, todayTimeSpent, totalTimeSpent, updateStats } = useStudyTime();
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

  const getTotalTime = () => totalTimeSpent;

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowGoalModal(false)}>
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <div className="bg-violet-600 p-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Daily goal</p>
              <h5 className="text-2xl font-black">Set my goal</h5>
            </div>
            <div className="p-6">
              <p className="text-slate-500 text-sm mb-4">How many minutes do you want to study each day?</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setNewGoal(Math.max(5, newGoal - 5))}
                  className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-xl transition-all"
                >
                  -
                </button>
                <div className="text-center">
                  <span className="text-5xl font-black text-violet-600">{newGoal}</span>
                  <p className="text-slate-400 text-sm font-medium">minutes/day</p>
                </div>
                <button
                  onClick={() => setNewGoal(Math.min(120, newGoal + 5))}
                  className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-xl transition-all"
                >
                  +
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowGoalModal(false)}
                  className="flex-1 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl font-bold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={saveGoal}
                  className="flex-1 px-4 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-all"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!embedded && (
        <div className="mb-12 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
          <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Stats</h2>
          <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>Track your progress and reach your learning goals.</p>
        </div>
      )}

      {/* Main cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Streak */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ea580c, #9a3412)' }}>
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
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d9488, #115e59)' }}>
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
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #5f7343, #3d4a2d)' }}>
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
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #c2410c, #7c2d12)' }}>
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
      <div className="bg-white p-8 rounded-[2rem] shadow-sm mb-8" style={{ border: '1px solid var(--terracotta-100)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--terracotta-100)' }}>
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Daily goal</h3>
              <p className="text-slate-400">{stats.dailyGoal} minutes per day</p>
            </div>
          </div>
          <button
            onClick={() => setShowGoalModal(true)}
            className="px-4 py-2 bg-violet-100 text-violet-600 rounded-xl font-bold text-sm hover:bg-violet-200 transition-all"
          >
            Edit
          </button>
        </div>

        {/* Weekly progress */}
        <div className="grid grid-cols-7 gap-3">
          {last7Days.map((day, idx) => {
            const height = Math.min(100, (day.timeSpent / 60 / stats.dailyGoal) * 100);
            const isToday = idx === 6;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full h-24 bg-slate-100 rounded-xl relative overflow-hidden mb-2">
                  <div
                    className={`absolute bottom-0 w-full rounded-xl transition-all duration-500 ${day.goalReached || (isToday && todayStats.goalProgress >= 100)
                      ? 'bg-gradient-to-t from-emerald-500 to-emerald-400'
                      : isToday
                        ? 'bg-gradient-to-t from-violet-500 to-violet-400'
                        : 'bg-gradient-to-t from-slate-300 to-slate-200'
                      }`}
                    style={{ height: `${height}%` }}
                  ></div>
                  {(day.goalReached || (isToday && todayStats.goalProgress >= 100)) && (
                    <div className="absolute top-1 right-1">
                      <span className="text-xs">✓</span>
                    </div>
                  )}
                </div>
                <span className={`text-xs font-bold ${isToday ? 'text-violet-600' : 'text-slate-400'}`}>
                  {day.dayName}
                </span>
                <span className="text-[10px] text-slate-300">
                  {Math.round(day.timeSpent / 60)}m
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress by level */}
      <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm mb-8">
        <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">📊</span>
          Progress by level
        </h3>
        <div className="space-y-4">
          {levelCompletion.map((level, idx) => {
            const percentage = level.total > 0 ? Math.round((level.completed / level.total) * 100) : 0;
            const colors = [
              'from-emerald-500 to-emerald-400',
              'from-blue-500 to-blue-400',
              'from-violet-500 to-violet-400',
              'from-orange-500 to-orange-400',
              'from-red-500 to-red-400'
            ];
            return (
              <div key={idx} className="flex items-center gap-4">
                <span className="w-12 text-lg font-black text-slate-400">{level.level}</span>
                <div className="flex-1 h-8 bg-slate-100 rounded-xl overflow-hidden relative">
                  <div
                    className={`h-full bg-gradient-to-r ${colors[idx]} transition-all duration-700 rounded-xl`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-600">
                    {level.completed}/{level.total} lessons ({percentage}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips and motivation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tip of the day */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-8 rounded-[2rem]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💡</span>
            <h3 className="text-xl font-black text-amber-800">Tip of the day</h3>
          </div>
          <p className="text-amber-700 leading-relaxed">
            {stats.currentStreak >= 7
              ? "Amazing! You are on a " + stats.currentStreak + "-day streak. Keep it up: consistency is the key to learning."
              : stats.currentStreak >= 3
                ? "Good work! " + stats.currentStreak + " consecutive learning days. Try to reach 7 days for a full week."
                : "Consistency matters more than duration. Try to study a little every day to build your streak."}
          </p>
        </div>

        {/* Next step */}
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-8 rounded-[2rem]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚀</span>
            <h3 className="text-xl font-black text-indigo-800">Next step</h3>
          </div>
          <p className="text-indigo-700 leading-relaxed">
            {completionPercentage < 25
              ? "You are starting your learning journey. Begin with level A1 to build a solid foundation."
              : completionPercentage < 50
                ? "You have completed " + completionPercentage + "% of the program. Keep moving level by level."
                : completionPercentage < 75
                  ? "You are more than halfway through. You are on the right path toward German mastery."
                  : "You are almost there. Finish the last lessons to complete the full program."}
          </p>
        </div>
      </div>

      {/* Sync section */}
      <div className="mt-8 bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Synchronization</h3>
              <p className="text-slate-400">Progress follows your account across devices</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 mb-1">Saved locally and in the cloud</p>
            <p className="text-sm text-slate-500">
              {stats.completedLessons.length} lessons · {formatTime(getTotalTime())} studied
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-slate-50 rounded-xl">
          <p className="text-sm text-slate-600 mb-4">
            <strong>Cloud sync:</strong> when you are signed in, lessons, notes, statistics, review cards, and custom lists are synced automatically. Use Sync now from the account menu if you want to force an immediate save.
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Favorites, notes, progress
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Statistics and streaks
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Daily goals
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Review cards and custom lists
            </span>
          </div>
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
