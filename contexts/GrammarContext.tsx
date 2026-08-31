
import React, { createContext, useContext, useState, useEffect } from 'react';
import { APP_DATA_SYNCED_EVENT } from '../utils/trainerStorage';

interface GrammarContextType {
    completedLessons: string[];
    markLessonCompleted: (topicId: string) => void;
    toggleLessonCompleted: (topicId: string) => void;
    isLessonCompleted: (topicId: string) => boolean;
}

const GrammarContext = createContext<GrammarContextType | undefined>(undefined);

export const GrammarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);

    // Charger depuis StatsView storage (pour compatibilité) ou un nouveau key
    // On va utiliser 'grammarStats' comme StatsView pour partager la même source de vérité

    useEffect(() => {
        const loadStats = () => {
            try {
                const savedStats = localStorage.getItem('grammarStats');
                if (savedStats) {
                    const parsed = JSON.parse(savedStats);
                    setCompletedLessons(Array.isArray(parsed.completedLessons) ? parsed.completedLessons : []);
                }
            } catch {
                setCompletedLessons([]);
            }
        };

        loadStats();

        // Écouter les changements de localStorage (si modifiés par StatsView dans un autre onglet/composant)
        window.addEventListener('storage', loadStats);
        window.addEventListener(APP_DATA_SYNCED_EVENT, loadStats);
        return () => {
            window.removeEventListener('storage', loadStats);
            window.removeEventListener(APP_DATA_SYNCED_EVENT, loadStats);
        };
    }, []);

    const updateLocalStorage = (newCompleted: string[]) => {
        const savedStats = localStorage.getItem('grammarStats');
        let stats = savedStats ? JSON.parse(savedStats) : {
            totalTimeSpent: 0,
            completedLessons: [],
            dailyGoal: 15,
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: '',
            dailyHistory: [],
            quizResults: []
        };

        stats.completedLessons = newCompleted;

        // Update daily history logic if needed (simplified here, assuming StatsView handles time mostly)
        // But we should ensuring we track "lessons done today"
        const today = new Date().toISOString().split('T')[0];
        const todayIndex = stats.dailyHistory?.findIndex((d: any) => d.date === today);

        if (todayIndex >= 0) {
            // Add new lessons to today's history if not already there
            newCompleted.forEach(id => {
                if (!stats.dailyHistory[todayIndex].lessonsCompleted.includes(id)) {
                    // Optimization: This logic is tricky if we don't know which one was JUST added.
                    // For now, simpler: just sync the main list. 
                    // If we want perfect sync with StatsView logic, we replicates it.
                }
            });
        }

        localStorage.setItem('grammarStats', JSON.stringify(stats));
    };

    const markLessonCompleted = (topicId: string) => {
        if (!completedLessons.includes(topicId)) {
            const newList = [...completedLessons, topicId];
            setCompletedLessons(newList);
            updateLocalStorage(newList);
        }
    };

    const toggleLessonCompleted = (topicId: string) => {
        let newList;
        if (completedLessons.includes(topicId)) {
            newList = completedLessons.filter(id => id !== topicId);
        } else {
            newList = [...completedLessons, topicId];
        }
        setCompletedLessons(newList);
        updateLocalStorage(newList);
    };

    const isLessonCompleted = (topicId: string) => {
        return completedLessons.includes(topicId);
    };

    return (
        <GrammarContext.Provider value={{ completedLessons, markLessonCompleted, toggleLessonCompleted, isLessonCompleted }}>
            {children}
        </GrammarContext.Provider>
    );
};

export const useGrammar = () => {
    const context = useContext(GrammarContext);
    if (context === undefined) {
        throw new Error('useGrammar must be used within a GrammarProvider');
    }
    return context;
};
