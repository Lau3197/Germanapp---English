
import React, { useState, useEffect, useMemo } from 'react';
import { GermanWord } from '../types';
import { usePandaMascot } from '../contexts/PandaMascotContext';
import { getTranslation } from '../utils/translations';

interface QuizProps {
  words: GermanWord[];
  onComplete: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ words, onComplete }) => {
  const { triggerMood } = usePandaMascot();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentWord = words[currentIndex];

  useEffect(() => {
    if (isFinished) {
      triggerMood('celebrating', 4200);
    }
  }, [isFinished, triggerMood]);

  const options = useMemo(() => {
    if (!currentWord) return [];
    // Generate options: correct answer (german) + 3 distractors (german)
    const others = words.filter(w => w.german !== currentWord.german);
    const shuffled = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    return [...shuffled, currentWord].sort(() => 0.5 - Math.random());
  }, [currentWord, words]);

  const handleSelect = (option: GermanWord) => {
    if (selectedOption) return;

    setSelectedOption(option.german);
    const correct = option.german === currentWord.german;
    setIsCorrect(correct);
    triggerMood(correct ? 'applauding' : 'encouraging');
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentIndex < words.length - 1) {
        setCurrentIndex(i => i + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  if (isFinished) {
    const percentage = Math.round((score / words.length) * 100);

    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md mx-auto">
        <div className="text-6xl mb-6">🏆</div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-500 mb-6">Your score</p>
        <div className="text-5xl font-black text-indigo-600 mb-8">{score} / {words.length}</div>
        <div className="panda-session-reward" aria-hidden="true">
          <div className="panda-session-reward-icon">🐼</div>
          <div>
            <p className="panda-session-reward-title">
              {percentage >= 80 ? 'Great quiz' : 'Good practice'}
            </p>
            <p className="panda-session-reward-text">
              {percentage >= 80 ? 'Pandachan is ready for the next round.' : 'Review the missed words and try again.'}
            </p>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Back to themes
        </button>
      </div>
    );
  }

  if (!currentWord) return null;
  const currentTranslation = getTranslation(currentWord);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex justify-between items-center px-4">
        <span className="text-slate-500 font-medium">Question {currentIndex + 1} of {words.length}</span>
        <div className="h-2 w-48 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 mb-8 text-center">
        <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2 block">How do you say it?</span>
        <h2 className="text-4xl font-bold text-slate-800 mb-4">{currentTranslation}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => (
          <button
            key={option.german}
            disabled={!!selectedOption}
            onClick={() => handleSelect(option)}
            className={`
              p-5 text-xl font-semibold rounded-2xl border-2 transition-all text-left
              ${selectedOption === option.german
                ? (isCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-rose-50 border-rose-500 text-rose-700')
                : (selectedOption && option.german === currentWord.german ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-100 hover:border-indigo-200 text-slate-700')
              }
            `}
          >
            <span className="text-slate-400 text-sm block mb-1 uppercase">{option.article}</span>
            {option.german}
          </button>
        ))}
      </div>
    </div>
  );
};
