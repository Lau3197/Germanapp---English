import React, { useState, useEffect } from 'react';
import { GRAMMAR_DATA } from '../data/grammarData';
import { LanguageLevel } from '../types';

// Types pour les statistiques
interface DailyStats {
  date: string;
  timeSpent: number; // en secondes
  lessonsCompleted: string[];
  quizScore?: number;
}

interface UserStats {
  totalTimeSpent: number;
  completedLessons: string[];
  dailyGoal: number; // en minutes
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
  dailyHistory: DailyStats[];
  quizResults: { topicId: string; score: number; date: string }[];
}

const defaultStats: UserStats = {
  totalTimeSpent: 0,
  completedLessons: [],
  dailyGoal: 15,
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: '',
  dailyHistory: [],
  quizResults: []
};

export const StatsView: React.FC = () => {
  const [stats, setStats] = useState<UserStats>(defaultStats);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [newGoal, setNewGoal] = useState(15);
  const [sessionStart] = useState(Date.now());
  const [currentSessionTime, setCurrentSessionTime] = useState(0);

  // Charger les stats au démarrage
  useEffect(() => {
    const savedStats = localStorage.getItem('grammarStats');
    if (savedStats) {
      const parsed = JSON.parse(savedStats);
      setStats(parsed);
      setNewGoal(parsed.dailyGoal || 15);
    }
    
    // Mettre à jour le streak au chargement
    updateStreak();
  }, []);

  // Timer pour la session actuelle
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
      setCurrentSessionTime(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionStart]);

  // Sauvegarder le temps à la fermeture/changement de page
  useEffect(() => {
    const saveTime = () => {
      const today = new Date().toISOString().split('T')[0];
      const updatedStats = { ...stats };
      
      // Ajouter le temps de session
      updatedStats.totalTimeSpent += currentSessionTime;
      
      // Mettre à jour l'historique quotidien
      const todayIndex = updatedStats.dailyHistory.findIndex(d => d.date === today);
      if (todayIndex >= 0) {
        updatedStats.dailyHistory[todayIndex].timeSpent += currentSessionTime;
      } else {
        updatedStats.dailyHistory.push({
          date: today,
          timeSpent: currentSessionTime,
          lessonsCompleted: []
        });
      }
      
      updatedStats.lastActivityDate = today;
      localStorage.setItem('grammarStats', JSON.stringify(updatedStats));
    };

    window.addEventListener('beforeunload', saveTime);
    
    // Sauvegarder toutes les 30 secondes
    const saveInterval = setInterval(() => {
      saveTime();
    }, 30000);

    return () => {
      window.removeEventListener('beforeunload', saveTime);
      clearInterval(saveInterval);
      saveTime();
    };
  }, [stats, currentSessionTime]);

  // Mettre à jour le streak
  const updateStreak = () => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    setStats(prev => {
      const updated = { ...prev };
      
      if (prev.lastActivityDate === today) {
        // Déjà actif aujourd'hui, ne rien changer
        return prev;
      } else if (prev.lastActivityDate === yesterday) {
        // Continue le streak
        updated.currentStreak = prev.currentStreak + 1;
        updated.longestStreak = Math.max(updated.currentStreak, prev.longestStreak);
      } else if (prev.lastActivityDate !== today) {
        // Streak cassé (sauf si c'est le premier jour)
        if (prev.lastActivityDate) {
          updated.currentStreak = 1;
        } else {
          updated.currentStreak = 1;
        }
      }
      
      updated.lastActivityDate = today;
      localStorage.setItem('grammarStats', JSON.stringify(updated));
      return updated;
    });
  };

  // Calculer les statistiques
  const getTodayStats = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayData = stats.dailyHistory.find(d => d.date === today);
    const timeToday = (todayData?.timeSpent || 0) + currentSessionTime;
    return {
      timeSpent: timeToday,
      goalProgress: Math.min(100, (timeToday / 60 / stats.dailyGoal) * 100),
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
      const date = new Date(Date.now() - i * 86400000);
      const dateStr = date.toISOString().split('T')[0];
      const dayData = stats.dailyHistory.find(d => d.date === dateStr);
      days.push({
        date: dateStr,
        dayName: date.toLocaleDateString('fr-FR', { weekday: 'short' }),
        timeSpent: i === 0 ? (dayData?.timeSpent || 0) + currentSessionTime : (dayData?.timeSpent || 0),
        goalReached: (dayData?.timeSpent || 0) >= stats.dailyGoal * 60
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
    setStats(prev => {
      const updated = { ...prev, dailyGoal: newGoal };
      localStorage.setItem('grammarStats', JSON.stringify(updated));
      return updated;
    });
    setShowGoalModal(false);
  };

  const todayStats = getTodayStats();
  const levelCompletion = getCompletionByLevel();
  const last7Days = getLast7Days();
  const totalLessons = getTotalLessons();
  const completionPercentage = Math.round((stats.completedLessons.length / totalLessons) * 100);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Modal objectif quotidien */}
      {showGoalModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowGoalModal(false)}>
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <div className="bg-violet-600 p-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Objectif quotidien</p>
              <h5 className="text-2xl font-black">Définir mon objectif</h5>
            </div>
            <div className="p-6">
              <p className="text-slate-500 text-sm mb-4">Combien de minutes souhaitez-vous étudier chaque jour ?</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setNewGoal(Math.max(5, newGoal - 5))}
                  className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-xl transition-all"
                >
                  -
                </button>
                <div className="text-center">
                  <span className="text-5xl font-black text-violet-600">{newGoal}</span>
                  <p className="text-slate-400 text-sm font-medium">minutes/jour</p>
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
                  Annuler
                </button>
                <button
                  onClick={saveGoal}
                  className="flex-1 px-4 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-all"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* En-tête */}
      <div className="mb-12 text-center sm:text-left pb-10" style={{ borderBottom: '1px solid var(--terracotta-100)' }}>
        <h2 className="text-6xl font-black mb-4 tracking-tighter" style={{ color: 'var(--terracotta-800)' }}>Statistiken</h2>
        <p className="text-2xl font-medium max-w-2xl" style={{ color: 'var(--sand-600)' }}>Suivez votre progression et atteignez vos objectifs d'apprentissage.</p>
      </div>

      {/* Cartes principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Streak */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ea580c, #9a3412)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
            <div>
              <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Streak actuel</p>
              <p className="text-4xl font-black text-white">{stats.currentStreak}</p>
            </div>
          </div>
          <p className="text-white/80 text-sm">Record : {stats.longestStreak} jours</p>
        </div>

        {/* Temps aujourd'hui */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d9488, #115e59)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Aujourd'hui</p>
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

        {/* Leçons complétées */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #5f7343, #3d4a2d)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Leçons</p>
              <p className="text-4xl font-black text-white">{stats.completedLessons.length}/{totalLessons}</p>
            </div>
          </div>
          <p className="text-white/80 text-sm">{completionPercentage}% du programme</p>
        </div>

        {/* Temps total */}
        <div className="p-6 rounded-[2rem] text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #c2410c, #7c2d12)' }}>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-[4rem] -mr-8 -mt-8"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Temps total</p>
              <p className="text-4xl font-black text-white">{formatTime(stats.totalTimeSpent + currentSessionTime)}</p>
            </div>
          </div>
          <p className="text-white/80 text-sm">Session : {formatTime(currentSessionTime)}</p>
        </div>
      </div>

      {/* Objectif quotidien */}
      <div className="bg-white p-8 rounded-[2rem] shadow-sm mb-8" style={{ border: '1px solid var(--terracotta-100)' }}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--terracotta-100)' }}>
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Objectif quotidien</h3>
              <p className="text-slate-400">{stats.dailyGoal} minutes par jour</p>
            </div>
          </div>
          <button
            onClick={() => setShowGoalModal(true)}
            className="px-4 py-2 bg-violet-100 text-violet-600 rounded-xl font-bold text-sm hover:bg-violet-200 transition-all"
          >
            Modifier
          </button>
        </div>

        {/* Progression de la semaine */}
        <div className="grid grid-cols-7 gap-3">
          {last7Days.map((day, idx) => {
            const height = Math.min(100, (day.timeSpent / 60 / stats.dailyGoal) * 100);
            const isToday = idx === 6;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full h-24 bg-slate-100 rounded-xl relative overflow-hidden mb-2">
                  <div 
                    className={`absolute bottom-0 w-full rounded-xl transition-all duration-500 ${
                      day.goalReached || (isToday && todayStats.goalProgress >= 100)
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

      {/* Progression par niveau */}
      <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm mb-8">
        <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">📊</span>
          Progression par niveau
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
                    {level.completed}/{level.total} leçons ({percentage}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conseils et motivation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conseil du jour */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-8 rounded-[2rem]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💡</span>
            <h3 className="text-xl font-black text-amber-800">Conseil du jour</h3>
          </div>
          <p className="text-amber-700 leading-relaxed">
            {stats.currentStreak >= 7 
              ? "Incroyable ! Vous êtes sur une série de " + stats.currentStreak + " jours ! Continuez ainsi, la régularité est la clé de l'apprentissage."
              : stats.currentStreak >= 3
                ? "Beau travail ! " + stats.currentStreak + " jours consécutifs d'apprentissage. Essayez d'atteindre 7 jours pour une semaine complète !"
                : "La régularité est plus importante que la durée. Essayez d'étudier un peu chaque jour pour construire votre streak !"}
          </p>
        </div>

        {/* Prochaine étape */}
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-8 rounded-[2rem]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚀</span>
            <h3 className="text-xl font-black text-indigo-800">Prochaine étape</h3>
          </div>
          <p className="text-indigo-700 leading-relaxed">
            {completionPercentage < 25
              ? "Vous débutez votre apprentissage ! Commencez par le niveau A1 pour construire des bases solides."
              : completionPercentage < 50
                ? "Vous avez complété " + completionPercentage + "% du programme. Continuez à progresser niveau par niveau !"
                : completionPercentage < 75
                  ? "Plus de la moitié du chemin est fait ! Vous êtes sur la bonne voie vers la maîtrise de l'allemand."
                  : "Vous êtes presque au bout ! Finissez les dernières leçons pour compléter tout le programme."}
          </p>
        </div>
      </div>

      {/* Section Synchronisation */}
      <div className="mt-8 bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Synchronisation</h3>
              <p className="text-slate-400">Transférez vos données vers un autre appareil</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 mb-1">Données sauvegardées localement</p>
            <p className="text-sm text-slate-500">
              {stats.completedLessons.length} leçons · {formatTime(stats.totalTimeSpent)} d'étude
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-slate-50 rounded-xl">
          <p className="text-sm text-slate-600 mb-4">
            💡 <strong>Astuce :</strong> Utilisez le bouton de synchronisation (↔️) dans la barre de navigation pour exporter vos données et les importer sur un autre appareil.
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Favoris, notes, progression
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Statistiques et streaks
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Objectifs quotidiens
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook pour marquer une leçon comme complétée (à utiliser dans GrammarView)
export const useCompletedLessons = () => {
  const markLessonCompleted = (topicId: string) => {
    const savedStats = localStorage.getItem('grammarStats');
    const stats: UserStats = savedStats ? JSON.parse(savedStats) : defaultStats;
    
    if (!stats.completedLessons.includes(topicId)) {
      stats.completedLessons.push(topicId);
      
      // Mettre à jour l'historique quotidien
      const today = new Date().toISOString().split('T')[0];
      const todayIndex = stats.dailyHistory.findIndex(d => d.date === today);
      if (todayIndex >= 0) {
        if (!stats.dailyHistory[todayIndex].lessonsCompleted.includes(topicId)) {
          stats.dailyHistory[todayIndex].lessonsCompleted.push(topicId);
        }
      } else {
        stats.dailyHistory.push({
          date: today,
          timeSpent: 0,
          lessonsCompleted: [topicId]
        });
      }
      
      localStorage.setItem('grammarStats', JSON.stringify(stats));
    }
  };

  const isLessonCompleted = (topicId: string) => {
    const savedStats = localStorage.getItem('grammarStats');
    if (!savedStats) return false;
    const stats: UserStats = JSON.parse(savedStats);
    return stats.completedLessons.includes(topicId);
  };

  return { markLessonCompleted, isLessonCompleted };
};

