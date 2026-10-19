import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../contexts/AuthContext';

interface AccountSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountSettingsModal: React.FC<AccountSettingsModalProps> = ({ isOpen, onClose }) => {
  const { user, updateProfile, updatePassword, deleteAccount } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [profileMessage, setProfileMessage] = useState('');
  const [profileError, setProfileError] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isOpen || !user) return;

    setName(user.name || '');
    setEmail(user.email || '');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setDeleteConfirmation('');
    setProfileMessage('');
    setProfileError('');
    setPasswordMessage('');
    setPasswordError('');
    setDeleteError('');
  }, [isOpen, user]);

  if (!isOpen || !user) return null;

  const handleProfileSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProfileMessage('');
    setProfileError('');
    setIsSavingProfile(true);

    const result = await updateProfile({
      name: name.trim(),
      email: email.trim(),
    });

    if (result.success) {
      setProfileMessage('Profile updated.');
    } else {
      setProfileError(result.message || 'Unable to update your profile.');
    }

    setIsSavingProfile(false);
  };

  const handlePasswordSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setPasswordMessage('');
    setPasswordError('');

    if (newPassword.length < 6) {
      setPasswordError('Your new password must be at least 6 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('The new passwords do not match.');
      return;
    }

    setIsSavingPassword(true);
    const result = await updatePassword(currentPassword, newPassword);

    if (result.success) {
      setPasswordMessage('Password updated.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setPasswordError(result.message || 'Unable to update your password.');
    }

    setIsSavingPassword(false);
  };

  const handleDeleteAccount = async () => {
    setDeleteError('');

    if (deleteConfirmation !== 'DELETE') {
      setDeleteError('Type DELETE to confirm account deletion.');
      return;
    }

    setIsDeleting(true);
    const result = await deleteAccount();

    if (result.success) {
      onClose();
      return;
    }

    setDeleteError(result.message || 'Unable to delete your account.');
    setIsDeleting(false);
  };

  // Rendered through a portal on <body>: this modal lives inside <UserMenu>,
  // which sits in `.app-header`. That header carries `backdrop-filter`, which
  // makes it the containing block for fixed-position descendants — so without
  // the portal, `fixed inset-0` snaps to the header instead of the viewport.
  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={event => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--sand-500)' }}>
              Account
            </p>
            <h2 className="text-2xl font-black" style={{ color: 'var(--terracotta-800)' }}>
              Settings
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Close settings"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <section className="rounded-2xl border border-slate-100 p-5">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black" style={{ backgroundColor: 'var(--terracotta-600)' }}>
                {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || '?'}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800">Profile</h3>
                <p className="text-sm text-slate-500">Update the name and email used for this account.</p>
              </div>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-bold text-slate-600 mb-2">Display name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    maxLength={50}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-bold text-slate-600 mb-2">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              {profileError && (
                <p className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm font-bold text-red-600">
                  {profileError}
                </p>
              )}
              {profileMessage && (
                <p className="rounded-xl bg-green-50 border border-green-100 px-4 py-3 text-sm font-bold text-green-700">
                  {profileMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSavingProfile}
                className="px-5 py-3 rounded-xl text-white font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--terracotta-600)' }}
              >
                {isSavingProfile ? 'Saving...' : 'Save profile'}
              </button>
            </form>
          </section>

          <section className="rounded-2xl border border-slate-100 p-5">
            <h3 className="text-lg font-black text-slate-800 mb-1">Password</h3>
            <p className="text-sm text-slate-500 mb-5">Change your password without losing your saved progress.</p>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <label className="block">
                <span className="block text-sm font-bold text-slate-600 mb-2">Current password</span>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={event => setCurrentPassword(event.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm font-bold text-slate-600 mb-2">New password</span>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={event => setNewPassword(event.target.value)}
                    required
                    minLength={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-bold text-slate-600 mb-2">Confirm new password</span>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                    required
                    minLength={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  />
                </label>
              </div>

              {passwordError && (
                <p className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm font-bold text-red-600">
                  {passwordError}
                </p>
              )}
              {passwordMessage && (
                <p className="rounded-xl bg-green-50 border border-green-100 px-4 py-3 text-sm font-bold text-green-700">
                  {passwordMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSavingPassword}
                className="px-5 py-3 rounded-xl text-white font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--terracotta-600)' }}
              >
                {isSavingPassword ? 'Updating...' : 'Update password'}
              </button>
            </form>
          </section>

          <section className="rounded-2xl border border-red-100 bg-red-50 p-5">
            <h3 className="text-lg font-black text-red-700 mb-1">Delete account</h3>
            <p className="text-sm text-red-700/80 mb-4">
              This permanently removes your account and server-synced data. Local browser data may remain on this device.
            </p>
            <label className="block mb-4">
              <span className="block text-sm font-bold text-red-700 mb-2">Type DELETE to confirm</span>
              <input
                type="text"
                value={deleteConfirmation}
                onChange={event => setDeleteConfirmation(event.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-red-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-200"
                placeholder="DELETE"
              />
            </label>
            {deleteError && (
              <p className="rounded-xl bg-white border border-red-100 px-4 py-3 text-sm font-bold text-red-600 mb-4">
                {deleteError}
              </p>
            )}
            <button
              type="button"
              onClick={handleDeleteAccount}
              disabled={isDeleting}
              className="px-5 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isDeleting ? 'Deleting...' : 'Delete account'}
            </button>
          </section>
        </div>
      </div>
    </div>,
    document.body
  );
};
