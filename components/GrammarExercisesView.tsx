import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GRAMMAR_EXERCISES } from '../data/grammarExercises';
import { GRAMMAR_DATA } from '../data/grammarData';
import { GrammarExercise, LanguageLevel } from '../types';
import { GrammarExerciseSequence } from './GrammarExerciseSequence';
import { MASTERY_THRESHOLD, useExerciseProgress } from '../hooks/useExerciseProgress';

const SESSION_SIZE = 10;

interface PracticeGoal {
  id: string;
  level: LanguageLevel;
  title: string;
  description: string;
  icon: React.ReactNode;
  topicIds: string[];
}

const PRACTICE_GOALS: PracticeGoal[] = [
  {
    id: 'sentences',
    level: LanguageLevel.A1,
    title: 'Build a sentence',
    description: 'Word order, questions, and making ideas clear.',
    icon: <path d="M4 6h16v10H9l-5 4V6Z" />,
    topicIds: ['a1-2', 'a1-w-fragen', 'a1-negation'],
  },
  {
    id: 'verbs',
    level: LanguageLevel.A1,
    title: 'Use verbs',
    description: 'Conjugate verbs and place them correctly.',
    icon: <path d="m13 2-8 11h6l-1 9 9-12h-6V2Z" />,
    topicIds: ['a1-3', 'a1-3-sein-haben', 'a1-3-stammwechsel', 'a1-modalverben', 'a1-trennbare-verben', 'a1-imperativ'],
  },
  {
    id: 'nouns',
    level: LanguageLevel.A1,
    title: 'Nouns & articles',
    description: 'Gender, articles, cases, and plurals.',
    icon: <><path d="M5 3h14v18H5z" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
    topicIds: ['a1-4', 'a1-unbestimmter-artikel', 'a1-plural', 'a1-5-1', 'a1-5-2', 'a1-5-3'],
  },
  {
    id: 'everyday',
    level: LanguageLevel.A1,
    title: 'Everyday German',
    description: 'Sounds, numbers, time, and useful structures.',
    icon: <><path d="M4 5h13v10H4z" /><path d="M17 8h2a2 2 0 0 1 0 4h-2M3 19h16" /></>,
    topicIds: ['a1-1', 'a1-zahlen', 'a1-uhrzeit-datum', 'a1-alltagsstrukturen'],
  },
  {
    id: 'a2-past',
    level: LanguageLevel.A2,
    title: 'Talk about the past',
    description: 'Perfekt, Präteritum, participles, and modal verbs.',
    icon: <><path d="M12 8v5l3 2" /><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></>,
    topicIds: ['a2-1-1', 'a2-1-2', 'a2-1-3', 'a2-1-4', 'a2-1-5', 'a2-1-6'],
  },
  {
    id: 'a2-adjectives',
    level: LanguageLevel.A2,
    title: 'Decline adjectives',
    description: 'Weak, mixed, strong, and strategic adjective endings.',
    icon: <><path d="M4 5h16M4 12h10M4 19h7" /></>,
    topicIds: ['a2-2-1', 'a2-2-2', 'a2-2-3', 'a2-2-4', 'a2-2-5'],
  },
  {
    id: 'a2-cases',
    level: LanguageLevel.A2,
    title: 'Master cases',
    description: 'Dative, case-governing verbs, and prepositions.',
    icon: <><circle cx="7" cy="7" r="3" /><circle cx="17" cy="17" r="3" /><path d="m9 9 6 6M15 7h4v4M9 17H5v-4" /></>,
    topicIds: ['a2-3-1', 'a2-3-2', 'a2-3-3', 'a2-3-4', 'a2-3-5'],
  },
  {
    id: 'a2-clauses',
    level: LanguageLevel.A2,
    title: 'Connect clauses',
    description: 'Conjunctions, subordinate clauses, and inversion.',
    icon: <><path d="M4 7h7v6H4zM13 11h7v6h-7z" /><path d="m11 10 2 1" /></>,
    topicIds: ['a2-4-1', 'a2-4-2', 'a2-4-3', 'a2-4-4', 'a2-7-1'],
  },
  {
    id: 'a2-forms',
    level: LanguageLevel.A2,
    title: 'Use richer forms',
    description: 'Possessives, comparisons, reflexives, and the future.',
    icon: <><path d="M12 3v18M5 8h14M7 16h10" /></>,
    topicIds: ['a2-5-1', 'a2-5-2', 'a2-5-3', 'a2-5-4'],
  },
  {
    id: 'a2-pronouns-order',
    level: LanguageLevel.A2,
    title: 'Pronouns & word order',
    description: 'Pronouns, quantifiers, demonstratives, and TeKaMoLo.',
    icon: <><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
    topicIds: ['a2-6-1', 'a2-6-2', 'a2-6-3', 'a2-8-1'],
  },
  {
    id: 'b1-complex-sentences',
    level: LanguageLevel.B1,
    title: 'Build complex sentences',
    description: 'Relative clauses, paired connectors, and infinitive clauses.',
    icon: <><path d="M4 6h7v6H4zM13 12h7v6h-7z" /><path d="m11 9 3 4" /></>,
    topicIds: ['b1-1-1', 'b1-1-2', 'b1-1-3'],
  },
  {
    id: 'b1-tenses-moods',
    level: LanguageLevel.B1,
    title: 'Master tenses & moods',
    description: 'Pluperfect, future, and every form of Konjunktiv II.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></>,
    topicIds: ['b1-2-1', 'b1-2-2', 'b1-2-3-1', 'b1-2-3-2', 'b1-2-3-3', 'b1-2-3-4', 'b1-2-3-5'],
  },
  {
    id: 'b1-passive',
    level: LanguageLevel.B1,
    title: 'Use the passive',
    description: 'Present, past, perfect, and passive with modal verbs.',
    icon: <><path d="M6 8h12M6 16h12" /><path d="m15 5 3 3-3 3M9 13l-3 3 3 3" /></>,
    topicIds: ['b1-2-4-1', 'b1-2-5-1', 'b1-2-5-2', 'b1-2-5-3', 'b1-2-6-1', 'b1-2-6-2', 'b1-2-6-3'],
  },
  {
    id: 'b1-cases-verbs',
    level: LanguageLevel.B1,
    title: 'Genitive & verb patterns',
    description: 'Genitive forms, fixed prepositions, and wo-/da- compounds.',
    icon: <><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
    topicIds: ['b1-3-1', 'b1-3-2', 'b1-4-1', 'b1-4-2'],
  },
  {
    id: 'b1-place-prepositions',
    level: LanguageLevel.B1,
    title: 'Choose precise place words',
    description: 'School, university, destinations, people, and surfaces.',
    icon: <><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
    topicIds: ['b1-prep-in-zu-an', 'b1-prep-universite', 'b1-prep-nach-in-zu', 'b1-prep-bei-zu', 'b1-prep-an-auf-position', 'b1-prep-pieges'],
  },
  {
    id: 'b2-indirect-speech',
    level: LanguageLevel.B2,
    title: 'Report speech precisely',
    description: 'Konjunktiv I forms, substitutions, tenses, and common traps.',
    icon: <><path d="M5 5h14v10H9l-4 4V5Z" /><path d="M9 9h6M9 12h4" /></>,
    topicIds: ['b2-1-1', 'b2-1-2', 'b2-1-3', 'b2-1-4', 'b2-1-5'],
  },
  {
    id: 'b2-passive-style',
    level: LanguageLevel.B2,
    title: 'Refine the passive',
    description: 'Process, state, and elegant alternatives to passive clauses.',
    icon: <><path d="M6 7h12M6 17h12" /><path d="m15 4 3 3-3 3M9 14l-3 3 3 3" /></>,
    topicIds: ['b2-2-1', 'b2-2-2', 'b2-2-3', 'b2-2-4', 'b2-3-1', 'b2-3-2', 'b2-3-3', 'b2-3-4', 'b2-3-5', 'b2-3-6'],
  },
  {
    id: 'b2-formal-style',
    level: LanguageLevel.B2,
    title: 'Write in a formal style',
    description: 'Nominalization and dense participial constructions.',
    icon: <><path d="M5 3h14v18H5z" /><path d="M8 8h8M8 12h8M8 16h6" /></>,
    topicIds: ['b2-4-1', 'b2-4-2', 'b2-4-3', 'b2-4-4', 'b2-4-5', 'b2-5-1', 'b2-5-2', 'b2-5-3', 'b2-5-4', 'b2-5-5', 'b2-5-6'],
  },
  {
    id: 'b2-argumentation',
    level: LanguageLevel.B2,
    title: 'Argue with nuance',
    description: 'Complex connectors and subjective meanings of modal verbs.',
    icon: <><path d="M4 6h6v6H4zM14 12h6v6h-6z" /><path d="m10 9 4 5M12 4v4M12 16v4" /></>,
    topicIds: ['b2-6-1', 'b2-6-2', 'b2-6-3', 'b2-6-4', 'b2-6-5', 'b2-7-1', 'b2-7-2', 'b2-7-3', 'b2-7-4', 'b2-7-5', 'b2-7-6'],
  },
  {
    id: 'b2-complex-nouns',
    level: LanguageLevel.B2,
    title: 'Master complex noun forms',
    description: 'N-declension and substantivized adjectives in every case.',
    icon: <><path d="M4 5h16v14H4z" /><path d="M8 9h8M8 13h5" /></>,
    topicIds: ['b2-8-1', 'b2-8-1-1', 'b2-8-1-2', 'b2-8-1-3', 'b2-8-1-4', 'b2-8-2', 'b2-8-2-1', 'b2-8-2-2', 'b2-8-2-3', 'b2-8-2-4', 'b2-8-2-5', 'b2-8-2-6'],
  },
  {
    id: 'b2-determiners-precision',
    level: LanguageLevel.B2,
    title: 'Choose exact endings & links',
    description: 'Determiners, adjective endings, and nominal versus verbal links.',
    icon: <><path d="M5 4h14v16H5z" /><path d="m8 9 2 2 5-5M8 15h8" /></>,
    topicIds: ['b2-8-3', 'b2-8-3-1', 'b2-8-3-2', 'b2-8-3-3', 'b2-8-3-4', 'b2-8-3-5', 'b2-8-3-6', 'b2-8-3-7', 'b2-9-1'],
  },
];

interface TopicMeta {
  id: string;
  title: string;
  sectionTitle: string;
  sectionIndex: number;
  level: LanguageLevel;
  exercises: GrammarExercise[];
}

const TOPICS = GRAMMAR_DATA.flatMap(level =>
  level.sections.flatMap((section, sectionIndex) =>
    section.topics.map(topic => ({
      id: topic.id,
      title: topic.title.replace(/^\d+(?:\.\d+)*\s*/, ''),
      sectionTitle: section.title,
      sectionIndex,
      level: level.level,
      exercises: GRAMMAR_EXERCISES.filter(exercise => exercise.topicId === topic.id),
    }))
  )
).filter(topic => topic.exercises.length > 0);

const TOPIC_BY_ID = new Map(TOPICS.map(topic => [topic.id, topic]));

const getSessionExercises = (exercises: GrammarExercise[], practicedIds: Set<string>, masteredIds: Set<string>) => {
  const unseen = exercises.filter(exercise => !practicedIds.has(exercise.id));
  const learning = exercises.filter(exercise => practicedIds.has(exercise.id) && !masteredIds.has(exercise.id));
  const mastered = exercises.filter(exercise => masteredIds.has(exercise.id));
  return [...unseen, ...learning, ...mastered].slice(0, SESSION_SIZE);
};

const GoalIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--terracotta-50)] text-[var(--terracotta-600)]">
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  </span>
);

export const GrammarExercisesView: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedTopic = searchParams.get('topic');
  const requestedMode = searchParams.get('mode');
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);
  const [practiceLevel, setPracticeLevel] = useState<LanguageLevel>(LanguageLevel.A1);
  const [sessionRound, setSessionRound] = useState(0);
  const { results, completedIds, practicedIds, summary } = useExerciseProgress('grammarExerciseProgress');

  const latestTopic = useMemo(() => {
    let latestId: string | null = null;
    let latestTime = 0;
    Object.entries(results).forEach(([exerciseId, result]) => {
      if (result.lastAnsweredAt > latestTime) {
        latestTime = result.lastAnsweredAt;
        latestId = GRAMMAR_EXERCISES.find(exercise => exercise.id === exerciseId)?.topicId || null;
      }
    });
    return (latestId && TOPIC_BY_ID.get(latestId)) || TOPICS[0];
  }, [results]);

  const weakExercises = useMemo(
    () => GRAMMAR_EXERCISES.filter(exercise => {
      const result = results[exercise.id];
      return result && result.incorrect > 0 && result.consecutiveCorrect < MASTERY_THRESHOLD;
    }),
    [results]
  );

  const activeTopic = requestedTopic ? TOPIC_BY_ID.get(requestedTopic) : undefined;
  const sessionExercises = useMemo(() => requestedMode === 'mistakes'
    ? weakExercises.slice(0, SESSION_SIZE)
    : activeTopic
      ? getSessionExercises(activeTopic.exercises, practicedIds, completedIds)
      : [], [requestedMode, requestedTopic, sessionRound]);

  const openTopic = (topicId: string) => setSearchParams({ topic: topicId });
  const leaveSession = () => setSearchParams({});

  if ((activeTopic || requestedMode === 'mistakes') && sessionExercises.length > 0) {
    const sessionTitle = activeTopic?.title || 'Review your mistakes';
    const topicPractised = activeTopic
      ? activeTopic.exercises.filter(exercise => practicedIds.has(exercise.id)).length
      : 0;
    const topicRemaining = activeTopic ? activeTopic.exercises.length - topicPractised : 0;
    return (
      <div className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button type="button" onClick={leaveSession} className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[var(--sand-600)] hover:text-[var(--terracotta-700)]">
          <span aria-hidden="true">←</span> Back to practice
        </button>
        <div className="mb-8 flex flex-col gap-5 border-b border-[var(--terracotta-100)] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[var(--terracotta-800)] sm:text-5xl">{sessionTitle}</h2>
            <p className="mt-3 text-lg font-medium text-[var(--sand-600)]">
              {activeTopic
                ? <><strong>{sessionExercises.length} exercises now</strong> · {topicPractised}/{activeTopic.exercises.length} practised · {topicRemaining} remaining</>
                : <>A focused review of {sessionExercises.length} exercises.</>}
            </p>
            {activeTopic && topicRemaining > sessionExercises.length ? (
              <p className="mt-2 text-sm font-bold text-[var(--terracotta-600)]">The next exercises unlock as soon as you finish this session.</p>
            ) : null}
          </div>
          {activeTopic ? (
            <button type="button" onClick={() => navigate(`/grammar/${activeTopic.level}?section=${activeTopic.sectionIndex}&topic=${activeTopic.id}`)} className="shrink-0 rounded-xl border border-[var(--terracotta-200)] bg-white px-4 py-3 text-sm font-black text-[var(--terracotta-700)] hover:bg-[var(--terracotta-50)]">
              Review the lesson
            </button>
          ) : null}
        </div>
        <GrammarExerciseSequence
          key={`${requestedMode || 'topic'}-${activeTopic?.id || 'mistakes'}-${sessionExercises.map(exercise => exercise.id).join('-')}`}
          exercises={sessionExercises}
          onExit={leaveSession}
          onContinue={activeTopic && topicRemaining > 0 ? () => setSessionRound(round => round + 1) : undefined}
        />
      </div>
    );
  }

  const resumeExercises = getSessionExercises(latestTopic.exercises, practicedIds, completedIds);
  const resumeDone = latestTopic.exercises.filter(exercise => practicedIds.has(exercise.id)).length;

  return (
    <div className="mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-5xl font-black tracking-tighter text-[var(--terracotta-800)]">Practice</h2>
        <p className="mt-3 text-xl font-medium text-[var(--sand-600)]">Choose a skill, then complete a short session.</p>
      </div>

      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <main className="min-w-0">
          <section className="mb-10 rounded-[2rem] border border-[var(--terracotta-100)] bg-white p-6 shadow-sm sm:p-8" aria-labelledby="resume-practice-title">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <GoalIcon><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></GoalIcon>
              <div className="min-w-0 flex-1">
                <h3 id="resume-practice-title" className="text-lg font-black text-slate-900">{summary.practiced > 0 ? 'Continue where you left off' : 'Start your first session'}</h3>
                <p className="mt-1 truncate text-2xl font-black text-[var(--terracotta-800)]">{latestTopic.title}</p>
                <div className="mt-3 flex items-center gap-3 text-sm font-bold text-[var(--sand-500)]">
                  <span>{resumeDone} of {latestTopic.exercises.length} practised</span>
                  <span className="h-1.5 min-w-20 flex-1 overflow-hidden rounded-full bg-[var(--sand-100)]">
                    <span className="block h-full rounded-full bg-[var(--terracotta-500)]" style={{ width: `${Math.round((resumeDone / latestTopic.exercises.length) * 100)}%` }} />
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-stretch gap-3">
                <button type="button" onClick={() => openTopic(latestTopic.id)} className="rounded-xl bg-[var(--terracotta-600)] px-6 py-3 font-black text-white shadow-sm hover:bg-[var(--terracotta-700)]">
                  {summary.practiced > 0 ? 'Continue session' : `Start ${resumeExercises.length} exercises`}
                </button>
                {weakExercises.length > 0 ? (
                  <button type="button" onClick={() => setSearchParams({ mode: 'mistakes' })} className="text-sm font-black text-[var(--terracotta-600)] underline underline-offset-4">
                    Review {weakExercises.length} mistake{weakExercises.length > 1 ? 's' : ''}
                  </button>
                ) : null}
              </div>
            </div>
          </section>

          <section aria-labelledby="choose-skill-title">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 id="choose-skill-title" className="text-3xl font-black text-[var(--terracotta-800)]">Choose a skill</h3>
              <div className="flex rounded-xl bg-[var(--sand-100)] p-1" aria-label="Practice level">
                {[LanguageLevel.A1, LanguageLevel.A2, LanguageLevel.B1, LanguageLevel.B2].map(level => (
                  <button key={level} type="button" onClick={() => { setPracticeLevel(level); setSelectedGoalId(null); }} className={`rounded-lg px-5 py-2 text-sm font-black transition-colors ${practiceLevel === level ? 'bg-white text-[var(--terracotta-700)] shadow-sm' : 'text-[var(--sand-600)]'}`}>{level}</button>
                ))}
              </div>
            </div>
            <p className="mb-5 mt-2 font-medium text-[var(--sand-600)]">Sessions are short and focused. Each session has up to {SESSION_SIZE} exercises.</p>
            <div className="overflow-hidden rounded-[1.75rem] border border-[var(--terracotta-100)] bg-white shadow-sm">
              {PRACTICE_GOALS.filter(goal => goal.level === practiceLevel).map(goal => {
                const topics = goal.topicIds.map(id => TOPIC_BY_ID.get(id)).filter((topic): topic is TopicMeta => Boolean(topic));
                const exercises = topics.flatMap(topic => topic.exercises);
                const practised = exercises.filter(exercise => practicedIds.has(exercise.id)).length;
                const percentage = exercises.length > 0 ? Math.round((practised / exercises.length) * 100) : 0;
                const isSelected = selectedGoalId === goal.id;
                return (
                  <div key={goal.id} className="border-b border-[var(--terracotta-100)] last:border-b-0">
                    <button type="button" onClick={() => setSelectedGoalId(isSelected ? null : goal.id)} aria-expanded={isSelected} className={`flex w-full items-center gap-4 px-5 py-5 text-left transition-colors sm:px-7 ${isSelected ? 'bg-[var(--terracotta-50)]' : 'hover:bg-[var(--sand-50)]'}`}>
                      <GoalIcon>{goal.icon}</GoalIcon>
                      <span className="min-w-0 flex-1">
                        <span className="block text-lg font-black text-slate-900">{goal.title}</span>
                        <span className="mt-0.5 block text-sm font-medium text-[var(--sand-600)]">{goal.description}</span>
                      </span>
                      <span className="hidden w-36 items-center gap-3 text-sm font-bold text-[var(--sand-500)] sm:flex">
                        <span>{percentage}%</span>
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--sand-100)]"><span className="block h-full rounded-full bg-[var(--terracotta-500)]" style={{ width: `${percentage}%` }} /></span>
                      </span>
                      <span className={`text-2xl text-[var(--terracotta-600)] transition-transform ${isSelected ? 'rotate-90' : ''}`} aria-hidden="true">›</span>
                    </button>
                    {isSelected ? (
                      <div className="border-t border-[var(--terracotta-100)] bg-white px-5 py-2 sm:px-7">
                        {topics.map(topic => {
                          const topicPractised = topic.exercises.filter(exercise => practicedIds.has(exercise.id)).length;
                          return (
                            <button key={topic.id} type="button" onClick={() => openTopic(topic.id)} className="flex w-full items-center gap-4 border-b border-[var(--sand-100)] py-4 text-left last:border-b-0 hover:text-[var(--terracotta-700)]">
                              <span className="min-w-0 flex-1">
                                <span className="block font-black text-slate-900">{topic.title}</span>
                                <span className="mt-1 block text-xs font-bold text-[var(--sand-500)]">{topic.sectionTitle}</span>
                              </span>
                              <span className="text-sm font-bold text-[var(--sand-500)]">{topicPractised}/{topic.exercises.length}</span>
                              <span className="rounded-lg bg-[var(--terracotta-50)] px-3 py-2 text-sm font-black text-[var(--terracotta-700)]">Practice</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        </main>

        <aside className="h-fit rounded-[1.75rem] border border-[var(--terracotta-100)] bg-white p-6 shadow-sm lg:sticky lg:top-28" aria-label="Practice progress">
          <h3 className="text-xl font-black text-[var(--terracotta-800)]">Your practice</h3>
          <dl className="mt-6 space-y-5">
            <div><dt className="text-sm font-bold text-[var(--sand-500)]">Available exercises</dt><dd className="mt-1 text-2xl font-black text-slate-900">{GRAMMAR_EXERCISES.length}</dd></div>
            <div><dt className="text-sm font-bold text-[var(--sand-500)]">Exercises tried</dt><dd className="mt-1 text-2xl font-black text-slate-900">{summary.practiced}</dd></div>
            <div><dt className="text-sm font-bold text-[var(--sand-500)]">Mastered</dt><dd className="mt-1 text-2xl font-black text-slate-900">{summary.mastered}</dd></div>
            <div><dt className="text-sm font-bold text-[var(--sand-500)]">Accuracy</dt><dd className="mt-1 text-2xl font-black text-slate-900">{summary.accuracy}%</dd></div>
          </dl>
          <p className="mt-6 border-t border-[var(--terracotta-100)] pt-5 text-sm font-medium leading-6 text-[var(--sand-600)]">One short session at a time. Explanations stay in Lessons; Practice helps you apply them.</p>
        </aside>
      </div>
    </div>
  );
};
