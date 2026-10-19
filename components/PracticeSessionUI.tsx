import React from 'react';
import { ExerciseResult, ProgressSummary } from '../hooks/useExerciseProgress';
import { SESSION_SIZES, SessionSize, isMastered } from '../hooks/usePracticeSession';
import { MASTERY_THRESHOLD } from '../utils/trainerStorage';

// Shared chrome for the typed-answer trainers (noun-verb, verb + preposition).
// Colours go through inline styles because the app themes every `.rounded-*`
// border globally, which would otherwise swallow Tailwind border classes.

/** "20 items" / "1 item" — how many cards the next session will actually hold. */
export const sessionCountLabel = (size: SessionSize, poolSize: number) => {
  const count = size === 'all' ? poolSize : Math.min(size as number, poolSize);
  return `${count} item${count === 1 ? '' : 's'}`;
};

interface SizePickerProps {
  value: SessionSize;
  onChange: (size: SessionSize) => void;
  poolSize: number;
}

export const SessionSizePicker: React.FC<SizePickerProps> = ({ value, onChange, poolSize }) => (
  <div>
    <label className="block text-sm font-bold text-slate-600 mb-2">
      Items in this session:{' '}
      <span className="font-black" style={{ color: 'var(--terracotta-600)' }}>
        {value === 'all' ? `All (${poolSize})` : Math.min(value as number, poolSize)}
      </span>
    </label>
    <div className="flex flex-wrap gap-2">
      {SESSION_SIZES.map((option) => {
        const active = value === option;
        const label = option === 'all' ? `All (${poolSize})` : String(option);
        const disabled = option !== 'all' && (option as number) > poolSize && poolSize > 0;

        return (
          <button
            key={String(option)}
            type="button"
            disabled={disabled}
            onClick={() => onChange(option)}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all disabled:opacity-40 ${
              active ? 'text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            style={active ? { backgroundColor: 'var(--terracotta-600)' } : {}}
          >
            {label}
          </button>
        );
      })}
    </div>
  </div>
);

interface StatBoxProps {
  label: string;
  value: React.ReactNode;
  color: string;
  background: string;
}

const StatBox: React.FC<StatBoxProps> = ({ label, value, color, background }) => (
  <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: background }}>
    <p className="text-3xl font-black" style={{ color }}>{value}</p>
    <p className="text-[11px] font-black uppercase tracking-wider mt-1 text-slate-500">{label}</p>
  </div>
);

interface MemoryStatsProps {
  total: number;
  mastered: number;
  weak: number;
  unseen: number;
  accuracy: number;
  attempts: number;
}

/** The "what the app remembers about you" panel shown on the trainer menu. */
export const MemoryStats: React.FC<MemoryStatsProps> = ({ total, mastered, weak, unseen, accuracy, attempts }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
    <StatBox label="Mastered" value={`${mastered}/${total}`} color="#047857" background="#ecfdf5" />
    <StatBox label="To review" value={weak} color="#be123c" background="#fff1f2" />
    <StatBox label="Never seen" value={unseen} color="#1d4ed8" background="#eff6ff" />
    <StatBox
      label={attempts ? `Accuracy (${attempts} answers)` : 'Accuracy'}
      value={attempts ? `${accuracy}%` : '—'}
      color="#b45309"
      background="#fffbeb"
    />
  </div>
);

interface MemoryBadgeProps {
  result?: ExerciseResult;
}

/** Per-item history, so the learner sees the app is tracking this exact card. */
export const MemoryBadge: React.FC<MemoryBadgeProps> = ({ result }) => {
  if (!result || result.attempts === 0) {
    return (
      <span className="inline-block px-3 py-1 rounded-lg text-xs font-black bg-slate-100 text-slate-500">
        New item
      </span>
    );
  }

  const accuracy = Math.round((result.correct / result.attempts) * 100);
  const mastered = isMastered(result);

  return (
    <span
      className="inline-block px-3 py-1 rounded-lg text-xs font-black"
      style={mastered
        ? { backgroundColor: '#ecfdf5', color: '#047857' }
        : { backgroundColor: '#fffbeb', color: '#b45309' }}
    >
      {mastered ? '★ Mastered · ' : ''}
      Seen {result.attempts}× · {accuracy}% correct · {result.consecutiveCorrect}/{MASTERY_THRESHOLD} in a row
    </span>
  );
};

interface SessionHeaderProps {
  index: number;
  total: number;
  correct: number;
  incorrect: number;
  streak: number;
  onExit: () => void;
  answered: boolean;
}

export const SessionHeader: React.FC<SessionHeaderProps> = ({
  index, total, correct, incorrect, streak, onExit, answered,
}) => {
  const progress = total > 0 ? ((index + (answered ? 1 : 0)) / total) * 100 : 0;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button type="button" onClick={onExit} className="text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-bold">Menu</span>
        </button>
        <div className="flex items-center gap-4">
          {streak >= 2 && <span className="text-orange-500 font-bold text-sm">🔥 {streak}</span>}
          <span className="text-slate-600 font-black">{index + 1} / {total}</span>
          <div className="flex gap-2 text-sm">
            <span className="text-emerald-600 font-bold">✓ {correct}</span>
            <span className="text-rose-500 font-bold">✗ {incorrect}</span>
          </div>
        </div>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-6">
        <div
          className="h-full transition-all duration-500 rounded-full"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--terracotta-500), var(--terracotta-600))' }}
        />
      </div>
    </>
  );
};

export interface MissedEntry {
  id: string;
  primary: string;
  secondary?: string;
}

interface SessionResultProps {
  subtitle: string;
  correct: number;
  incorrect: number;
  total: number;
  bestStreak: number;
  isReview: boolean;
  missed: MissedEntry[];
  onReviewMistakes: () => void;
  onRestart: () => void;
  onMenu: () => void;
}

export const SessionResult: React.FC<SessionResultProps> = ({
  subtitle, correct, incorrect, total, bestStreak, isReview, missed,
  onReviewMistakes, onRestart, onMenu,
}) => {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : percentage >= 40 ? '💪' : '📚';
  const message = percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good job!' : percentage >= 40 ? 'Keep going!' : 'A bit more practice!';
  const hasErrors = missed.length > 0;

  return (
    <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-500">
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center" style={{ border: '1px solid var(--terracotta-100)' }}>
        {isReview && (
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
              🔄 Review Mode
            </span>
          </div>
        )}

        <div className="text-7xl mb-6">{emoji}</div>
        <h2 className="text-3xl font-black text-slate-800 mb-2">{message}</h2>
        <p className="text-slate-500 mb-6">{subtitle}</p>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 mb-6">
          <div className="text-5xl font-black mb-2" style={{ color: 'var(--terracotta-600)' }}>
            {correct} / {total}
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <span className="text-emerald-600 font-bold">✓ {correct} correct</span>
            <span className="text-rose-500 font-bold">✗ {incorrect} mistake{incorrect === 1 ? '' : 's'}</span>
          </div>
          <p className="text-slate-500 text-sm mt-3">🔥 Best streak: <span className="font-bold">{bestStreak}</span></p>
        </div>

        <div className="h-4 bg-slate-200 rounded-full overflow-hidden mb-6">
          <div
            className="h-full transition-all duration-1000 rounded-full"
            style={{ width: `${percentage}%`, background: 'linear-gradient(90deg, var(--terracotta-500), var(--terracotta-600))' }}
          />
        </div>

        {hasErrors && (
          <div className="rounded-2xl p-4 mb-6 text-left" style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3' }}>
            <p className="text-rose-700 font-bold text-sm mb-3 flex items-center gap-2">
              <span>📝</span> To review ({missed.length})
            </p>
            <ul className="space-y-2">
              {missed.map(entry => (
                <li key={entry.id} className="bg-white rounded-lg px-3 py-2" style={{ border: '1px solid #fecdd3' }}>
                  <p className="font-black text-slate-800 text-sm">{entry.primary}</p>
                  {entry.secondary && <p className="text-xs text-slate-500 font-medium">{entry.secondary}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-3">
          {hasErrors && (
            <button
              type="button"
              onClick={onReviewMistakes}
              className="w-full font-bold py-4 rounded-xl transition-all text-white shadow-lg hover:shadow-xl bg-gradient-to-r from-amber-500 to-orange-500"
            >
              🔄 Review {missed.length} mistake{missed.length > 1 ? 's' : ''}
            </button>
          )}
          <button
            type="button"
            onClick={onRestart}
            className={`w-full font-bold py-4 rounded-xl transition-all ${hasErrors ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'text-white shadow-lg hover:shadow-xl'}`}
            style={!hasErrors ? { backgroundColor: 'var(--terracotta-600)' } : {}}
          >
            {hasErrors ? '🔁 New session' : '🔄 Next session'}
          </button>
          <button
            type="button"
            onClick={onMenu}
            className="w-full bg-slate-100 text-slate-700 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors"
          >
            ← Back to settings
          </button>
        </div>
      </div>
    </div>
  );
};

interface ProgressFooterProps {
  summary: ProgressSummary;
  onReset: () => void;
}

export const ProgressFooter: React.FC<ProgressFooterProps> = ({ summary, onReset }) => (
  <p className="text-center text-sm text-slate-500 mt-4">
    {summary.attempts > 0
      ? `${summary.attempts} answer${summary.attempts === 1 ? '' : 's'} saved to your account · ${summary.correct} correct, ${summary.incorrect} wrong.`
      : 'Your results are saved to your account automatically.'}
    {summary.attempts > 0 && (
      <button type="button" onClick={onReset} className="ml-2 underline font-bold">Reset progress</button>
    )}
  </p>
);
