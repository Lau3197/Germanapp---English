import React from 'react';
import { AppTheme } from '../types';

interface AppThemeSwitcherProps {
  theme: AppTheme;
  onThemeChange: (theme: AppTheme) => void;
}

const themeOptions: { id: AppTheme; label: string; icon: string; title: string }[] = [
  { id: 'classic', label: 'Classic', icon: '🇩🇪', title: 'Use the classic theme' },
  { id: 'panda', label: 'Panda', icon: '🐼', title: 'Use the panda theme' }
];

export const AppThemeSwitcher: React.FC<AppThemeSwitcherProps> = ({ theme, onThemeChange }) => {
  return (
    <div
      className="h-11 flex items-center gap-1 p-1 rounded-xl shrink-0"
      style={{
        backgroundColor: 'var(--sand-100)',
        border: '1px solid var(--terracotta-100)'
      }}
      aria-label="Theme selector"
    >
      {themeOptions.map(option => {
        const isActive = theme === option.id;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onThemeChange(option.id)}
            aria-pressed={isActive}
            title={option.title}
            className="h-9 px-2.5 sm:px-3 rounded-lg text-xs font-black flex items-center gap-1.5 transition-all"
            style={{
              backgroundColor: isActive ? 'var(--app-surface)' : 'transparent',
              color: isActive ? 'var(--terracotta-700)' : 'var(--sand-600)',
              boxShadow: isActive ? '0 8px 18px -12px var(--app-shadow-color)' : 'none'
            }}
          >
            <span aria-hidden="true" className="text-base leading-none">{option.icon}</span>
            <span className="hidden 2xl:inline">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};
