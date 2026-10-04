import React, { useEffect, useRef, useState } from 'react';
import { GrammarExercise } from '../types';
import { useExerciseProgress } from '../hooks/useExerciseProgress';
import { isGrammarAnswerCorrect } from '../utils/grammarAnswer';

interface GrammarExerciseCardProps {
  exercise: GrammarExercise;
  compact?: boolean;
  onNext?: () => void;
  nextLabel?: string;
}

export const GrammarExerciseCard: React.FC<GrammarExerciseCardProps> = ({ exercise, compact = false, onNext, nextLabel = 'Next exercise' }) => {
  const { results, recordAnswer } = useExerciseProgress('grammarExerciseProgress');
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const result = results[exercise.id];
  const isCorrect = checked && result?.lastCorrect;

  useEffect(() => {
    if (!checked || !onNext) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (isCorrect) {
          onNext();
        } else {
          reset();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [checked, isCorrect, onNext]);

  const submit = () => {
    if (!value.trim() || checked) return;
    recordAnswer(exercise.id, isGrammarAnswerCorrect(exercise, value));
    setChecked(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (checked) {
      if (isCorrect) onNext?.();
      else reset();
      return;
    }
    submit();
  };

  const reset = () => { setValue(''); setChecked(false); };

  return (
    <div className={`${compact ? 'p-5' : 'p-6 sm:p-8'} rounded-3xl border ${checked ? (isCorrect ? 'border-green-200 bg-green-50/70' : 'border-amber-200 bg-amber-50/70') : 'border-indigo-100 bg-indigo-50/50'}`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <h5 className="font-black text-indigo-900 flex items-center gap-2"><span className="text-xl">✍️</span> Practice</h5>
        <span className="text-xs font-bold text-indigo-400">{checked ? 'Correction' : 'Press Enter to check'}</span>
      </div>
      <p className="text-slate-800 font-bold text-lg mb-4">{exercise.prompt}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input ref={inputRef} value={value} onChange={(event) => { setValue(event.target.value); if (checked) setChecked(false); }} disabled={checked} autoComplete="off" aria-label="Your answer" placeholder="Type your answer…" className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-indigo-100 bg-white text-slate-900 font-bold outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-white/70" />
        <button type="submit" disabled={checked && isCorrect && !onNext || (!value.trim() && !checked)} className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-black hover:bg-indigo-700 disabled:opacity-40 transition-colors">{checked ? (isCorrect ? (onNext ? nextLabel : 'Completed') : 'Try again') : 'Check'}</button>
      </form>
      {checked && (
        <div className="mt-5" role="status">
          <p className={`font-black text-lg ${isCorrect ? 'text-green-700' : 'text-amber-700'}`}>{isCorrect ? '✓ Correct!' : `✗ Not quite — answer: ${exercise.answer}`}</p>
          <p className="mt-2 text-slate-600 font-medium">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
};
