import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AccountSettingsModal } from './AccountSettingsModal';

interface UserMenuProps {
  onOpenAuth: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ onOpenAuth }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const handleLogout = () => {
    logout();
    setIsOpen(false);
    window.location.reload();
  };

  if (!isAuthenticated) {
    return (
      <button
        onClick={onOpenAuth}
        className="header-signin h-11 flex items-center gap-2 px-4 text-white rounded-xl font-bold text-sm transition-all shadow-terracotta shrink-0"
        style={{ backgroundColor: 'var(--terracotta-600)' }}
        aria-label="Sign in"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        {/* Collapses to the icon alone on narrow screens so the header row
            never has to overflow (see index.css `.header-signin-label`). */}
        <span className="header-signin-label">Sign in</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <AccountSettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="user-menu-trigger"
        aria-label="Open profile menu"
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: 'var(--terracotta-600)' }}>
          {user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || '?'}
        </div>
        <svg className={`user-menu-chevron transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--sand-500)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200" style={{ border: '1px solid var(--terracotta-100)' }}>
            {/* User Info */}
            <div className="p-4" style={{ backgroundColor: 'var(--sand-50)', borderBottom: '1px solid var(--terracotta-100)' }}>
              <p className="font-bold" style={{ color: 'var(--terracotta-800)' }}>{user?.name || 'User'}</p>
              <p className="text-sm" style={{ color: 'var(--sand-600)' }}>{user?.email}</p>
            </div>

            {/* Actions */}
            <div className="p-2">
              {/* Profile Settings */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowSettings(true);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 rounded-xl transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-700">Settings</p>
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-50 rounded-xl transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-red-600">Log out</p>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
