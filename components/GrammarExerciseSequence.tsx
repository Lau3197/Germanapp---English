import React, { useState } from 'react';
import { GrammarExercise } from '../types';
import { GrammarExerciseCard } from './GrammarExerciseCard';

interface GrammarExerciseSequenceProps {
  exercises: GrammarExercise[];
  onExit?: () => void;
  onContinue?: () => void;
}

export const GrammarExerciseSequence: React.FC<GrammarExerciseSequenceProps> = ({ exercises, onExit, onContinue }) => {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const current = exercises[index];

  if (!current) return null;

  if (finished) {
    return (
      <div className="rounded-[2rem] border border-green-200 bg-green-50 p-8 text-center sm:p-12">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-600 text-2xl font-black text-white" aria-hidden="true">✓</div>
        <h3 className="mt-5 text-3xl font-black text-green-900">Session complete</h3>
        <p className="mt-2 font-medium text-green-800">You worked through {exercises.length} focused exercise{exercises.length > 1 ? 's' : ''}.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          {onContinue ? <button type="button" onClick={onContinue} className="rounded-xl bg-green-700 px-5 py-3 font-black text-white">Continue with the next exercises</button> : null}
          <button type="button" onClick={() => { setIndex(0); setFinished(false); }} className="rounded-xl border border-green-300 bg-white px-5 py-3 font-black text-green-800">Practise this session again</button>
          {onExit ? <button type="button" onClick={onExit} className="rounded-xl bg-green-700 px-5 py-3 font-black text-white">Choose another skill</button> : null}
        </div>
      </div>
    );
  }

  const advance = () => {
    if (index === exercises.length - 1) setFinished(true);
    else setIndex(value => value + 1);
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-3 text-sm font-black text-[var(--sand-500)]">
        <span>Exercise {index + 1} of {exercises.length}</span>
        <span>{Math.round(((index + 1) / exercises.length) * 100)}%</span>
      </div>
      <div className="mb-6 h-2 overflow-hidden rounded-full bg-[var(--sand-100)]">
        <div className="h-full rounded-full bg-[var(--terracotta-500)] transition-all" style={{ width: `${((index + 1) / exercises.length) * 100}%` }} />
      </div>
      <GrammarExerciseCard
        key={current.id}
        exercise={current}
        onNext={advance}
        nextLabel={index === exercises.length - 1 ? 'Finish session' : 'Next exercise'}
      />
    </div>
  );
};
