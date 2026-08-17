import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { AppTheme, Theme, ThemeContent, LanguageLevel } from '../types';
import { THEMES, getSubThemeLabel } from '../constants';
import { VOCABULARY_DATA } from '../data/vocabularyData';
import { ThemeCard } from './ThemeCard';
import { WordCard } from './WordCard';
import { getTranslation, getThemeLanguage } from '../utils/translations';

interface VocabularyViewProps {
    appTheme?: AppTheme;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({ appTheme = 'classic' }) => {
    const params = useParams<{ themeId?: string }>();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedLevel, setSelectedLevel] = useState<LanguageLevel | 'All'>('All');
    const [selectedSubTheme, setSelectedSubTheme] = useState<string | 'All'>('All');

    const currentTheme = params.themeId ? THEMES.find(t => t.id === params.themeId) : null;
    const content: ThemeContent | null = currentTheme ? (VOCABULARY_DATA[currentTheme.id] || { words: [], phrases: [] }) : null;
    const translationLanguage = getThemeLanguage(appTheme);

    useEffect(() => {
        // Reset subtheme when theme changes
        setSelectedSubTheme('All');
    }, [currentTheme]);

    // Deep-link from the global search: drop any filter that could hide the
    // target, then scroll to and highlight the matching entry. Words and
    // phrases live on the same page, so only the filters need clearing.
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

            <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-4">
                📚 Word list ({filteredWords.length})
            </h3>

            {filteredWords.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredWords.map((word, idx) => (
                        <div key={`${currentTheme.id}-${idx}-${word.german}`} id={`vocab-word-${idx}`} className="scroll-mt-24">
                            <WordCard word={word} translationLanguage={translationLanguage} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-bold text-lg">No words available for this selection.</p>
                    <p className="text-slate-400 text-sm mt-2">Try changing the level or subtheme.</p>
                </div>
            )}

            {/* Phrases belong to the same theme as the words above, so they read as
                the last part of the list rather than a separate destination. */}
            {content && content.phrases.length > 0 && (
                <section className="mt-14">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 mb-4">
                        💬 Phrases ({content.phrases.length})
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {content.phrases.map((phrase, idx) => (
                            <div key={idx} id={`vocab-phrase-${idx}`} className="scroll-mt-24 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
                                <div className="flex items-start gap-4">
                                    <span className="bg-indigo-50 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                                    <div>
                                        <p className="text-slate-900 font-bold text-xl mb-1">{phrase.german}</p>
                                        <p className="text-indigo-600 font-medium mb-1">{getTranslation(phrase, translationLanguage)}</p>
                                        {/* Only figurative phrases carry a literal gloss — it is what makes
                                            the German image stick once the idiomatic meaning is known. */}
                                        {phrase.literal && (
                                            <p className="text-slate-500 text-sm italic mb-1">
                                                <span className="not-italic font-bold text-slate-400 text-xs uppercase tracking-wider mr-2">Literally</span>
                                                "{phrase.literal}"
                                            </p>
                                        )}
                                        <p className="text-slate-400 text-xs italic mt-2">Context: {phrase.context}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};
