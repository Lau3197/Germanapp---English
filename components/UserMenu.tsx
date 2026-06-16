import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { syncAPI } from '../services/api';

interface UserMenuProps {
  onOpenAuth: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ onOpenAuth }) => {
  const { user, isAuthenticated, logout, syncData } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');

  const handleSync = async () => {
    setIsSyncing(true);
    setSyncMessage('');
    try {
      await syncData();
      setSyncMessage('✓ Synced');
      setTimeout(() => setSyncMessage(''), 2000);
    } catch (error) {
      setSyncMessage('Sync error');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    window.location.reload();
  };

  if (!isAuthenticated) {
    return (
      <button
        onClick={onOpenAuth}
        className="flex items-center gap-2 px-4 py-2 text-white rounded-xl font-bold text-sm transition-all shadow-terracotta"
        style={{ backgroundColor: 'var(--terracotta-600)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Sign in
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all"
        style={{ backgroundColor: 'var(--sand-100)' }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: 'var(--terracotta-600)' }}>
          {user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || '?'}
        </div>
        <span className="text-sm font-medium hidden sm:inline" style={{ color: 'var(--terracotta-700)' }}>
          {user?.name || user?.email?.split('@')[0]}
        </span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: 'var(--sand-500)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              {/* Sync Button */}
              <button
                onClick={handleSync}
                disabled={isSyncing}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 rounded-xl transition-all"
              >
                <div className={`w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center ${isSyncing ? 'animate-spin' : ''}`}>
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700">Sync</p>
                  {syncMessage && (
                    <p className={`text-xs ${syncMessage.toLowerCase().includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                      {syncMessage}
                    </p>
                  )}
                </div>
              </button>

              {/* Profile Settings */}
              <button
                onClick={() => {/* TODO: Open profile modal */}}
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
