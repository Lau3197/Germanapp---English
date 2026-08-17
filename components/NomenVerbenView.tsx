import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WordCard } from './WordCard';
import { NOMEN_VERBEN_LIST } from '../data/nomenVerbenData';
import { GermanWord } from '../types';
import { usePracticeSession } from '../hooks/usePracticeSession';
import {
    MemoryBadge,
    MemoryStats,
    ProgressFooter,
    SessionHeader,
    SessionResult,
    SessionSizePicker,
    sessionCountLabel,
} from './PracticeSessionUI';

const SUPPORT_VERBS = [
    'leisten',
    'tun',
    'schaffen',
    'nehmen',
    'einreichen',
    'bringen',
    'kommen',
    'finden',
    'genießen',
    'haben',
    'machen',
    'erheben',
    'geben',
    'stellen',
    'stehen',
    'ziehen',
    'schenken',
    'üben',
    'sein',
    'wissen',
    'gewinnen',
    'erteilen',
    'führen',
    'tragen',
    'halten',
    'fällen',
    'übernehmen',
    'legen'
];

const normalizeAnswer = (value: string) =>
    value
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/ß/g, 'ss');

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

interface NomenVerbExercise {
    item: GermanWord;
    prompt: string;
    answer: string;
}

const createNomenVerbExercise = (item: GermanWord): NomenVerbExercise => {
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

const EXERCISES: NomenVerbExercise[] = NOMEN_VERBEN_LIST.map(createNomenVerbExercise);

// Module scope: the practice session keys progress off these, so they must stay
// referentially stable across renders.
const getExerciseId = (exercise: NomenVerbExercise) => exercise.item.german.toLowerCase();

const checkAnswer = (exercise: NomenVerbExercise, answer: string) =>
    normalizeAnswer(answer) === normalizeAnswer(exercise.answer);

export const NomenVerbenView: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [nvSearch, setNvSearch] = useState(() => searchParams.get('q') || '');

    const session = usePracticeSession({
        items: EXERCISES,
        getId: getExerciseId,
        isCorrect: checkAnswer,
        progressKey: 'trainerProgress_nomenVerben_en',
        favoritesKey: 'trainerFavorites_nomenVerben_en',
    });

    const currentExercise = session.currentItem;
    const answered = session.status !== 'idle';

    // Typing trainer: the caret has to be back in the field for the next item,
    // otherwise every card needs a click before it can be answered.
    const answerInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (session.phase === 'drill' && !answered) answerInputRef.current?.focus();
    }, [session.phase, session.index, answered]);

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

    // Enter checks the answer, then Enter again moves on.
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (answered) session.next();
        else session.submit();
    };

    const renderPractice = () => {
        if (session.phase === 'result') {
            return (
                <SessionResult
                    subtitle="Noun-verb session finished"
                    correct={session.sessionStats.correct}
                    incorrect={session.sessionStats.incorrect}
                    total={session.sessionItems.length}
                    bestStreak={session.bestStreak}
                    isReview={session.isReview}
                    missed={session.missed.map(exercise => ({
                        id: getExerciseId(exercise),
                        primary: exercise.item.german,
                        secondary: exercise.item.english,
                    }))}
                    onReviewMistakes={session.reviewMistakes}
                    onRestart={session.start}
                    onMenu={session.backToMenu}
                />
            );
        }

        if (session.phase === 'drill' && currentExercise) {
            return (
                <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100">
                    <SessionHeader
                        index={session.index}
                        total={session.sessionItems.length}
                        correct={session.sessionStats.correct}
                        incorrect={session.sessionStats.incorrect}
                        streak={session.streak}
                        onExit={session.backToMenu}
                        answered={answered}
                    />

                    <form onSubmit={handleSubmit}>
                        <div className="rounded-2xl p-5 bg-slate-50" style={{ border: '1px solid #e2e8f0' }}>
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                                    German expression
                                </p>
                                <MemoryBadge result={session.currentResult} />
                            </div>
                            <p className="text-3xl font-black text-slate-900 break-words">
                                {currentExercise.prompt}
                            </p>
                            <div className="mt-4 rounded-xl bg-white/70 p-4" style={{ border: '1px solid #e2e8f0' }}>
                                <p className="text-xs font-black uppercase tracking-widest mb-1 text-slate-400">
                                    English cue
                                </p>
                                <p className="text-sm font-bold" style={{ color: 'var(--terracotta-700)' }}>
                                    {currentExercise.item.english}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => session.toggleFavorite(session.currentId)}
                                className="mt-3 font-bold text-sm"
                                style={{ color: session.isFavorite ? '#d97706' : 'var(--sand-500)' }}
                            >
                                {session.isFavorite ? '★ Favorite' : '☆ Add to favorites'}
                            </button>
                        </div>

                        <div className="mt-4 flex flex-col sm:flex-row gap-3">
                            <input
                                ref={answerInputRef}
                                type="text"
                                value={session.answer}
                                onChange={(event) => session.setAnswer(event.target.value)}
                                placeholder="Type the German verb..."
                                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                aria-label="Missing German verb"
                                disabled={answered}
                            />
                            {answered ? (
                                <button
                                    type="submit"
                                    className="px-5 py-3 rounded-xl text-white font-black shadow-lg"
                                    style={{ backgroundColor: 'var(--terracotta-600)' }}
                                >
                                    {session.index < session.sessionItems.length - 1 ? 'Next →' : 'See results →'}
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="submit"
                                        className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-black shadow-indigo-200 shadow-lg"
                                    >
                                        Check
                                    </button>
                                    <button
                                        type="button"
                                        onClick={session.reveal}
                                        className="px-5 py-3 rounded-xl bg-white font-black border border-slate-200"
                                        style={{ color: 'var(--sand-700)' }}
                                    >
                                        Show answer
                                    </button>
                                </>
                            )}
                        </div>

                        {answered && (
                            <div
                                className="mt-4 rounded-2xl p-5"
                                style={session.status === 'correct'
                                    ? { backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }
                                    : { backgroundColor: '#fff1f2', border: '1px solid #fecdd3' }}
                                aria-live="polite"
                            >
                                <p className="text-sm font-black mb-2">
                                    {session.status === 'correct' ? 'Correct.' : session.status === 'incorrect' ? 'Not yet.' : 'Answer shown.'}
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
                                <p className="text-xs text-slate-400 mt-3">
                                    Press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded font-bold">Enter</kbd> to continue
                                </p>
                            </div>
                        )}
                    </form>
                </section>
            );
        }

        // MENU
        return (
            <section className="mb-10 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100">
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta-600)' }}>
                    Practice
                </p>
                <h3 className="text-2xl font-black text-slate-900 mb-1">Find the missing verb.</h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">
                    Your answers are remembered between sessions: mistakes come back first, mastered expressions step aside.
                </p>

                <div className="mb-6">
                    <MemoryStats
                        total={session.scopedCounts.total}
                        mastered={session.scopedCounts.mastered}
                        weak={session.scopedCounts.weak}
                        unseen={session.scopedCounts.unseen}
                        accuracy={session.summary.accuracy}
                        attempts={session.summary.attempts}
                    />
                </div>

                <div className="mb-6">
                    <SessionSizePicker value={session.size} onChange={session.setSize} poolSize={session.duePool.length} />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-6 text-sm font-semibold text-slate-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={session.skipMastered}
                            onChange={event => session.setSkipMastered(event.target.checked)}
                            className="h-4 w-4 accent-emerald-700"
                        />
                        Skip mastered expressions ({session.scopedCounts.mastered})
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={session.favoritesOnly}
                            onChange={event => session.setFavoritesOnly(event.target.checked)}
                            className="h-4 w-4 accent-amber-600"
                        />
                        ★ Favorites only ({session.favoriteIds.size})
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={session.weakOnly}
                            onChange={event => session.setWeakOnly(event.target.checked)}
                            className="h-4 w-4 accent-rose-600"
                        />
                        🎯 Only my mistakes ({session.scopedCounts.weak})
                    </label>
                </div>

                <button
                    type="button"
                    onClick={session.start}
                    disabled={!session.duePool.length}
                    className="w-full font-black text-lg py-5 rounded-2xl transition-all text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: 'var(--terracotta-600)' }}
                >
                    {session.duePool.length
                        ? `🚀 Start session (${sessionCountLabel(session.size, session.duePool.length)})`
                        : session.weakOnly ? 'No saved mistakes here yet'
                        : session.favoritesOnly ? 'No favorites in this selection'
                        : 'Everything here is mastered'}
                </button>

                <ProgressFooter summary={session.summary} onReset={session.resetProgress} />
            </section>
        );
    };

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

            {renderPractice()}

            <div id="nv-results" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 scroll-mt-24">
                {filteredNV.map((word, idx) => (
                    <WordCard
                        key={`nv-${idx}`}
                        word={word}
                        isFavorite={session.favoriteIds.has(word.german.toLowerCase())}
                        onToggleFavorite={() => session.toggleFavorite(word.german.toLowerCase())}
                    />
                ))}
            </div>
        </div>
    );
};
