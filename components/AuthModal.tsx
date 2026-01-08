import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      let result;
      if (mode === 'login') {
        result = await login(email, password);
      } else {
        result = await register(email, password, name);
      }

      if (result.success) {
        setSuccess(mode === 'login' ? 'Connexion réussie !' : 'Compte créé avec succès !');
        setTimeout(() => {
          onClose();
          // Recharger pour appliquer les données synchronisées
          window.location.reload();
        }, 1500);
      } else {
        setError(result.message || 'Une erreur est survenue');
      }
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError('');
    setSuccess('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="p-8 text-white text-center" style={{ background: 'linear-gradient(135deg, var(--terracotta-600), var(--terracotta-700))' }}>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔐</span>
          </div>
          <h2 className="text-2xl font-black">
            {mode === 'login' ? 'Connexion' : 'Créer un compte'}
          </h2>
          <p className="text-white/80 text-sm mt-2">
            {mode === 'login' 
              ? 'Connectez-vous pour synchroniser vos données' 
              : 'Créez un compte pour sauvegarder votre progression'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-600 rounded-xl text-sm font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {success}
            </div>
          )}

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">Nom (optionnel)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{ border: '1px solid var(--terracotta-200)', '--tw-ring-color': 'var(--terracotta-400)' } as React.CSSProperties}
                placeholder="Votre nom"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: 'var(--terracotta-700)' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all"
              style={{ border: '1px solid var(--terracotta-200)', '--tw-ring-color': 'var(--terracotta-400)' } as React.CSSProperties}
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: 'var(--terracotta-700)' }}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all"
              style={{ border: '1px solid var(--terracotta-200)', '--tw-ring-color': 'var(--terracotta-400)' } as React.CSSProperties}
              placeholder={mode === 'register' ? 'Min. 6 caractères' : '••••••••'}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg"
            style={{ 
              backgroundColor: isLoading ? 'var(--sand-400)' : 'var(--terracotta-600)',
              boxShadow: isLoading ? 'none' : '0 10px 30px -10px rgba(184, 93, 62, 0.4)',
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Chargement...
              </span>
            ) : mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
          </button>

          <div className="text-center pt-4" style={{ borderTop: '1px solid var(--sand-200)' }}>
            <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
              {mode === 'login' ? 'Pas encore de compte ?' : 'Déjà un compte ?'}
              <button
                type="button"
                onClick={switchMode}
                className="ml-2 font-bold hover:underline"
                style={{ color: 'var(--terracotta-600)' }}
              >
                {mode === 'login' ? 'S\'inscrire' : 'Se connecter'}
              </button>
            </p>
          </div>
        </form>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

