import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WordCard } from './WordCard';
import { NOMEN_VERBEN_LIST } from '../data/nomenVerbenData';
import { GermanWord } from '../types';
import { useExerciseProgress } from '../hooks/useExerciseProgress';
import { useExerciseFavorites } from '../hooks/useExerciseFavorites';

type PracticeStatus = 'idle' | 'correct' | 'incorrect' | 'revealed';

const SUPPORT_VERBS = [
    'leisten',
    'tun',
    'schaffen',
    'nehmen',
    'einreichen',
    'bringen',
    'kommen',
    'finden',
    'genie\u00dfen',
    'haben',
    'machen',
    'erheben',
    'geben',
    'stellen',
    'stehen',
    'ziehen',
    'schenken',
    '\u00fcben',
    'sein',
    'wissen',
    'gewinnen',
    'erteilen',
    'f\u00fchren',
    'tragen',
    'halten',
    'f\u00e4llen',
    '\u00fcbernehmen',
    'legen'
];

const normalizeAnswer = (value: string) =>
    value
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\u00df/g, 'ss');

const SUPPORT_VERB_SET = new Set(SUPPORT_VERBS.map(normalizeAnswer));

const stripTrailingPunctuation = (value: string) => value.replace(/[.,!?;:]+$/g, '');

const getSupportVerbIndex = (tokens: string[]) => {
    for (let index = tokens.length - 1; index >= 0; index -= 1) {
        const token = normalizeAnswer(stripTrailingPunctuation(tokens[index]));
        if (SUPPORT_VERB_SET.has(token)) {
            return index;
        }
    }

    return Math.max(tokens.length - 1, 0);
};

// Fisher-Yates shuffle of the index range [0, count) so the trainer never
// presents items in the same fixed order twice in a row.
const shuffledOrder = (count: number): number[] => {
    const order = Array.from({ length: count }, (_, i) => i);
    for (let i = order.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
};

const createNomenVerbExercise = (item: GermanWord) => {
    const tokens = item.german.split(' ');
    const answerIndex = getSupportVerbIndex(tokens);
    const answer = stripTrailingPunctuation(tokens[answerIndex] || item.german);
    const prompt = tokens
        .map((token, index) => (index === answerIndex ? '___' : token))
        .join(' ');

    return {
        item,
        prompt,
        answer
    };
};

export const NomenVerbenView: React.FC = () => {
    const { completedIds, recordAnswer, resetProgress } = useExerciseProgress('trainerProgress_nomenVerben_en');
    const { favoriteIds, toggleFavorite } = useExerciseFavorites('trainerFavorites_nomenVerben_en');
    const [searchParams, setSearchParams] = useSearchParams();
    const [nvSearch, setNvSearch] = useState(() => searchParams.get('q') || '');
    const [practiceIndex, setPracticeIndex] = useState(0);
    const [practiceAnswer, setPracticeAnswer] = useState('');
    const [practiceStatus, setPracticeStatus] = useState<PracticeStatus>('idle');
    const [favoritesOnly, setFavoritesOnly] = useState(false);

    const exercises = useMemo(
        () => NOMEN_VERBEN_LIST.map(createNomenVerbExercise),
        []
    );

    const [order, setOrder] = useState<number[]>(() => shuffledOrder(exercises.length));

    const getExerciseId = (index: number) => exercises[index]?.item.german.toLowerCase() || String(index);
    const favoriteOrder = useMemo(
        () => order.filter(index => !favoritesOnly || favoriteIds.has(getExerciseId(index))),
        [order, favoritesOnly, favoriteIds, exercises]
    );
    const remainingOrder = useMemo(
        () => favoriteOrder.filter(index => !completedIds.has(getExerciseId(index))),
        [favoriteOrder, completedIds, exercises]
    );
    const activeOrder = practiceStatus === 'idle' && remainingOrder.length ? remainingOrder : favoriteOrder;

    const currentExercise = exercises[activeOrder[practiceIndex % activeOrder.length]];

    // Deep-link from the global search: seed the filter and scroll to the list.
    useEffect(() => {
        const term = searchParams.get('q');
        if (!term) return;
        setNvSearch(term);
        const timer = setTimeout(() => {
            document.getElementById('nv-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setSearchParams(prev => {
                const next = new URLSearchParams(prev);
                next.delete('q');
                return next;
            }, { replace: true });
        }, 250);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const filteredNV = NOMEN_VERBEN_LIST.filter(item => {
        const matchesSearch = item.german.toLowerCase().includes(nvSearch.toLowerCase()) ||
            item.english.toLowerCase().includes(nvSearch.toLowerCase());
        return matchesSearch;
    });

    const resetPractice = (nextIndex: number) => {
        setPracticeIndex(nextIndex);
        setPracticeAnswer('');
        setPracticeStatus('idle');
    };

    const goToNextExercise = () => {
        const next = practiceIndex + 1;
        if (next >= activeOrder.length) {
            // Completed a full pass — reshuffle so the next cycle is a new order.
            setOrder(shuffledOrder(exercises.length));
            resetPractice(0);
        } else {
            resetPractice(next);
        }
    };

    const handlePracticeSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!practiceAnswer.trim()) {
            return;
        }

        const isCorrect = normalizeAnswer(practiceAnswer) === normalizeAnswer(currentExercise.answer);
        recordAnswer(getExerciseId(activeOrder[practiceIndex % activeOrder.length]), isCorrect);
        setPracticeStatus(isCorrect ? 'correct' : 'incorrect');
    };

    const showCorrection = practiceStatus !== 'idle';

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="flex-1">
                    <h2 className="text-4xl font-black text-slate-900 mb-2">Noun-Verb Combinations</h2>
                    <p className="text-lg text-slate-500">Structured idiomatic expressions with English meanings.</p>
                </div>
                <div className="w-full md:w-80 relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        value={nvSearch}
                        onChange={(e) => setNvSearch(e.target.value)}
                    />
                    <svg className="absolute left-3 top-3.5 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </div>
            </div>

            {favoritesOnly && !favoriteOrder.length && <p className="mb-6 rounded-xl bg-amber-50 p-4 text-center font-bold text-amber-800">No favorites yet. Add some with the ☆ button.</p>}
            {currentExercise && (
                <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta-600)' }}>
                                Practice
                            </p>
                            <h3 className="text-2xl font-black text-slate-900">Find the missing verb.</h3>
                            <p className="text-sm font-semibold text-slate-500 mt-2">
                                Item {practiceIndex + 1} of {activeOrder.length} · {completedIds.size} saved
                            </p>
                            <button type="button" onClick={() => toggleFavorite(getExerciseId(activeOrder[practiceIndex % activeOrder.length]))} className="mt-3 font-bold" style={{ color: favoriteIds.has(getExerciseId(activeOrder[practiceIndex % activeOrder.length])) ? '#d97706' : 'var(--sand-500)' }}>
                                {favoriteIds.has(getExerciseId(activeOrder[practiceIndex % activeOrder.length])) ? '★ Favorite' : '☆ Add to favorites'}
                            </button>
                        </div>

                        <form onSubmit={handlePracticeSubmit} className="lg:col-span-2">
                            <div className="rounded-2xl p-5 bg-slate-50 border border-slate-100">
                                <p className="text-xs font-black uppercase tracking-widest mb-2 text-slate-400">
                                    German expression
                                </p>
                                <p className="text-3xl font-black text-slate-900 break-words">
                                    {currentExercise.prompt}
                                </p>
                                <div className="mt-4 rounded-xl bg-white/70 p-4 border border-slate-100">
                                    <p className="text-xs font-black uppercase tracking-widest mb-1 text-slate-400">
                                        English cue
                                    </p>
                                    <p className="text-sm font-bold" style={{ color: 'var(--terracotta-700)' }}>
                                        {currentExercise.item.english}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                <input
                                    type="text"
                                    value={practiceAnswer}
                                    onChange={(event) => {
                                        setPracticeAnswer(event.target.value);
                                        if (practiceStatus !== 'idle') {
                                            setPracticeStatus('idle');
                                        }
                                    }}
                                    placeholder="Type the German verb..."
                                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                    aria-label="Missing German verb"
                                />
                                <button
                                    type="submit"
                                    className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-black shadow-indigo-200 shadow-lg"
                                >
                                    Check
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPracticeStatus('revealed')}
                                    className="px-5 py-3 rounded-xl bg-white font-black border border-slate-200"
                                    style={{ color: 'var(--sand-700)' }}
                                >
                                    Show answer
                                </button>
                                <button
                                    type="button"
                                    onClick={goToNextExercise}
                                    className="px-5 py-3 rounded-xl bg-white font-black border border-slate-200"
                                    style={{ color: 'var(--terracotta-700)' }}
                                >
                                    Next
                                </button>
                            </div>

                            {showCorrection && (
                                <div
                                    className={`mt-4 rounded-2xl p-5 border ${
                                        practiceStatus === 'correct'
                                            ? 'bg-emerald-50 border-emerald-100'
                                            : 'bg-rose-50 border-rose-100'
                                    }`}
                                    aria-live="polite"
                                >
                                    <p className="text-sm font-black mb-2">
                                        {practiceStatus === 'correct' ? 'Correct.' : practiceStatus === 'incorrect' ? 'Not yet.' : 'Answer shown.'}
                                    </p>
                                    <p className="text-lg font-black text-slate-900">
                                        {currentExercise.item.german}
                                    </p>
                                    <p className="text-sm font-bold mt-1" style={{ color: 'var(--terracotta-700)' }}>
                                        {currentExercise.item.english}
                                    </p>
                                    <p className="text-sm text-slate-500 mt-3 italic">
                                        {currentExercise.item.example}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </section>
            )}

            <div id="nv-results" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 scroll-mt-24">
                {filteredNV.map((word, idx) => (
                    <WordCard key={`nv-${idx}`} word={word} isFavorite={favoriteIds.has(word.german.toLowerCase())} onToggleFavorite={() => toggleFavorite(word.german.toLowerCase())} />
                ))}
            </div>
            <div className="mt-6 flex justify-center gap-3 text-sm">
                <button type="button" onClick={() => setFavoritesOnly(value => !value)} className={`rounded-xl px-4 py-2 font-bold ${favoritesOnly ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'}`}>★ {favoritesOnly ? 'All exercises' : `Favorites (${favoriteIds.size})`}</button>
            </div>
            <div className="mt-6 text-center text-sm text-slate-500">
                <button type="button" onClick={resetProgress} className="underline font-bold">Reset practice progress</button>
            </div>
        </div>
    );
};
