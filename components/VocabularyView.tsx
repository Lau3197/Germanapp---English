import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Theme, ThemeContent, ViewMode, LanguageLevel } from '../types';
import { THEMES, getSubThemeLabel } from '../constants';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { ThemeCard } from './ThemeCard';
import { WordCard } from './WordCard';
import { Quiz } from './Quiz';
import { VocabularyTrainer } from './VocabularyTrainer';
import { getTranslation } from '../utils/translations';

export const VocabularyView: React.FC = () => {
    const params = useParams<{ themeId?: string }>();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [viewMode, setViewMode] = useState<ViewMode>('learn');
    const [selectedLevel, setSelectedLevel] = useState<LanguageLevel | 'All'>('All');
    const [selectedSubTheme, setSelectedSubTheme] = useState<string | 'All'>('All');

    const currentTheme = params.themeId ? THEMES.find(t => t.id === params.themeId) : null;
    const content: ThemeContent | null = currentTheme ? (VOCABULARY_DATA[currentTheme.id] || { words: [], phrases: [] }) : null;

    useEffect(() => {
        // Reset subtheme when theme changes
        setSelectedSubTheme('All');
        setViewMode('learn');
    }, [currentTheme]);

    // Deep-link from the global search: switch to the right tab, drop any filter
    // that could hide the target, then scroll to and highlight the matching entry.
    // Declared after the theme-reset effect so its viewMode wins on navigation.
    useEffect(() => {
        const term = searchParams.get('q');
        if (!term || !content) return;

        const kind = searchParams.get('kind');
        const isPhrase = kind === 'phrase';
        const list = isPhrase ? content.phrases : content.words;
        const matchIndex = list.findIndex(entry => entry.german === term);
        if (matchIndex < 0) return;

        // Make sure nothing filters the target out of view.
        setSelectedLevel('All');
        setSelectedSubTheme('All');
        setViewMode(isPhrase ? 'phrases' : 'learn');

        const timer = setTimeout(() => {
            const element = document.getElementById(
                `${isPhrase ? 'vocab-phrase' : 'vocab-word'}-${matchIndex}`
            );
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.classList.add('ring-4', 'ring-indigo-300', 'rounded-2xl', 'transition-all');
                setTimeout(() => element.classList.remove('ring-4', 'ring-indigo-300'), 2000);
            }
            // Clear the params so re-filtering later doesn't re-scroll.
            setSearchParams(prev => {
                const next = new URLSearchParams(prev);
                next.delete('q');
                next.delete('kind');
                return next;
            }, { replace: true });
        }, 250);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams, content]);

    const handleThemeSelect = (theme: Theme) => {
        navigate(`/vocabulary/${theme.id}`);
    };

    const handleBackToThemes = () => {
        navigate('/vocabulary');
    };

    const filteredWords = useMemo(() => {
        if (!content) return [];
        return content.words.filter(w => {
            const matchesLevel = selectedLevel === 'All' || w.level === selectedLevel;
            const matchesSubTheme = selectedSubTheme === 'All' || w.subTheme === selectedSubTheme;
            return matchesLevel && matchesSubTheme;
        });
    }, [content, selectedLevel, selectedSubTheme]);

    if (!currentTheme) {
        return (
            <>
                <div className="mb-10 text-center sm:text-left animate-in fade-in slide-in-from-top-4 duration-500">
                    <h2 className="text-4xl font-black text-slate-900 mb-2">Vocabulary Trainer</h2>
                    <p className="text-lg text-slate-500">Choose a theme to start learning immediately.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-700">
                    {THEMES.map(theme => (
                        <ThemeCard key={theme.id} theme={theme} onClick={handleThemeSelect} />
                    ))}
                </div>
            </>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleBackToThemes}
                        className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-slate-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                        <span>{currentTheme.icon}</span> {currentTheme.name}
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

            {/* Subtheme selector */}
            {currentTheme.subThemes && (
                <div className="flex flex-wrap gap-2 mb-8 animate-in fade-in slide-in-from-left-4 duration-500 delay-150">
                    <button
                        onClick={() => setSelectedSubTheme('All')}
                        className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${selectedSubTheme === 'All' ? 'bg-slate-800 text-white border-slate-800 shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
                    >
                        All ({content?.words.length})
                    </button>
                    {currentTheme.subThemes.map(st => {
                        const count = content?.words.filter(w => w.subTheme === st).length;
                        return (
                            <button
                                key={st}
                                onClick={() => setSelectedSubTheme(st)}
                                className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${selectedSubTheme === st ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-200'}`}
                            >
                                {getSubThemeLabel(st)} ({count})
                            </button>
                        );
                    })}
                </div>
            )}

            <nav className="flex gap-4 mb-8">
                <button onClick={() => setViewMode('learn')} className={`pb-2 border-b-2 font-bold text-sm transition-all ${viewMode === 'learn' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>📚 Word list ({filteredWords.length})</button>
                <button onClick={() => setViewMode('phrases')} className={`pb-2 border-b-2 font-bold text-sm transition-all ${viewMode === 'phrases' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>💬 Phrases ({content?.phrases.length})</button>
                <button onClick={() => setViewMode('trainer')} className={`pb-2 border-b-2 font-bold text-sm transition-all ${viewMode === 'trainer' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>🎯 Practice</button>
                <button onClick={() => setViewMode('quiz')} className={`pb-2 border-b-2 font-bold text-sm transition-all ${viewMode === 'quiz' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>❓ Quick quiz</button>
            </nav>

            {viewMode === 'learn' && (
                filteredWords.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredWords.map((word, idx) => (
                            <div key={`${currentTheme.id}-${idx}-${word.german}`} id={`vocab-word-${idx}`} className="scroll-mt-24">
                                <WordCard word={word} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-400 font-bold text-lg">No words available for this selection.</p>
                        <p className="text-slate-400 text-sm mt-2">Try changing the level or subtheme.</p>
                    </div>
                )
            )}

            {viewMode === 'phrases' && content && (
                <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
                    {content.phrases.length > 0 ? (
                        content.phrases.map((phrase, idx) => (
                            <div key={idx} id={`vocab-phrase-${idx}`} className="scroll-mt-24 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
                                <div className="flex items-start gap-4">
                                    <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                                    <div>
                                        <p className="text-slate-900 font-bold text-xl mb-1">{phrase.german}</p>
                                        <p className="text-indigo-600 font-medium mb-3">{getTranslation(phrase)}</p>
                                        <p className="text-slate-400 text-xs italic">Context: {phrase.context}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                            <p className="text-slate-400 font-bold">No phrases saved for this theme.</p>
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
                        <p className="text-slate-400 font-bold text-lg">You need at least 4 words for a quiz.</p>
                        <p className="text-slate-400 text-sm mt-2">Loosen the filters to get more words.</p>
                    </div>
                )
            )}

            {viewMode === 'trainer' && (
                filteredWords.length >= 5 ? (
                    <VocabularyTrainer
                        words={filteredWords}
                        onComplete={() => setViewMode('learn')}
                        themeName={currentTheme.name}
                    />
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-400 font-bold text-lg">You need at least 5 words for practice.</p>
                        <p className="text-slate-400 text-sm mt-2">Loosen the filters to get more words.</p>
                    </div>
                )
            )}
        </div>
    );
};
