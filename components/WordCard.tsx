
import React, { useState } from 'react';
import { GermanWord, LanguageLevel } from '../types';

interface WordCardProps {
  word: GermanWord;
}

const getLevelColor = (level: LanguageLevel) => {
  switch (level) {
    case LanguageLevel.A1: return 'bg-emerald-100 text-emerald-700';
    case LanguageLevel.A2: return 'bg-blue-100 text-blue-700';
    case LanguageLevel.B1: return 'bg-orange-100 text-orange-700';
    case LanguageLevel.B2: return 'bg-rose-100 text-rose-700';
    default: return 'bg-slate-100 text-slate-700';
  }
};

export const WordCard: React.FC<WordCardProps> = ({ word }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="card-flip h-96 w-full" 
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      aria-label={`Traduire ${word.german}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div className={`card-flip-inner shadow-lg rounded-2xl cursor-pointer ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front - Côté Allemand avec Exemple */}
        <div className="card-front bg-white rounded-2xl flex flex-col p-6 border-2 border-slate-50">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{word.subTheme}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${getLevelColor(word.level)}`}>
              {word.level}
            </span>
          </div>
          
          <div className="flex-1 flex flex-col justify-center text-center">
            <span className="text-slate-400 text-sm font-medium mb-1 block uppercase tracking-wider">{word.article || ''}</span>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{word.german}</h2>
            <p className="text-slate-500 text-sm italic mb-6">Pl: {word.plural}</p>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-auto">
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Beispiel (Exemple)</p>
              <p className="text-slate-700 text-sm leading-relaxed italic">"{word.example}"</p>
            </div>
          </div>

          <div className="text-center mt-4 text-[10px] text-slate-300 font-bold uppercase tracking-widest">
            Cliquez pour voir la traduction
          </div>
        </div>
        
        {/* Back - Traduction Française */}
        <div className="card-back bg-indigo-600 text-white rounded-2xl flex flex-col items-center justify-center p-6">
          <p className="text-indigo-200 text-[10px] uppercase font-bold tracking-widest mb-2">Traduction</p>
          <h3 className="text-3xl font-bold text-center mb-8">{word.french}</h3>
          
          <div className="absolute bottom-6 text-[10px] text-indigo-300 font-bold uppercase tracking-widest">
            Cliquez pour revenir au mot
          </div>
        </div>
      </div>
    </div>
  );
};
