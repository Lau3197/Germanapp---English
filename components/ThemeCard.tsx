
import React from 'react';
import { Theme } from '../types';

interface ThemeCardProps {
  theme: Theme;
  onClick: (theme: Theme) => void;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({ theme, onClick }) => {
  return (
    <button
      onClick={() => onClick(theme)}
      className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 text-left flex flex-col items-center sm:items-start"
    >
      <span className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{theme.icon}</span>
      <h3 className="text-lg font-bold text-slate-800 mb-1">{theme.name}</h3>
      <p className="text-sm text-slate-500 line-clamp-2">{theme.description}</p>
    </button>
  );
};
