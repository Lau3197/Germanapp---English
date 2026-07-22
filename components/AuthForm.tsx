import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface AuthFormProps {
  onAuthenticated?: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onAuthenticated }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registrationCode, setRegistrationCode] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const { login, register } = useAuth();

  const inputStyle = {
    border: '1px solid var(--terracotta-200)',
    '--tw-ring-color': 'var(--terracotta-400)'
  } as React.CSSProperties;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const result = mode === 'login'
        ? await login(email, password)
        : await register(email, password, registrationCode, name);

      if (result.success) {
        setSuccess(mode === 'login' ? 'Login successful!' : 'Account created successfully!');
        onAuthenticated?.();
      } else {
        setError(result.message || 'An error occurred');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError('');
    setSuccess('');
    setShowPassword(false);
    setRegistrationCode('');
  };

  return (
    <>
      <div className="p-8 text-white text-center" style={{ background: 'linear-gradient(135deg, var(--terracotta-600), var(--terracotta-700))' }}>
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4" />
          </svg>
        </div>
        <h2 className="text-2xl font-black">
          {mode === 'login' ? 'Sign in' : 'Create an account'}
        </h2>
        <p className="text-white/80 text-sm mt-2">
          {mode === 'login'
            ? 'Sign in to access DeutschMeister'
            : 'Create an account with your access code'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-4">
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 bg-green-50 border border-green-200 text-green-600 rounded-xl text-sm font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {success}
          </div>
        )}

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: 'var(--terracotta-700)' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all"
            style={inputStyle}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: 'var(--terracotta-700)' }}>Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
              className="w-full px-4 py-3 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all"
              style={inputStyle}
              placeholder={mode === 'register' ? 'Min. 6 characters' : 'Password'}
            />
            <button
              type="button"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
              title={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword((current) => !current)}
              onMouseDown={(e) => e.preventDefault()}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all focus:outline-none focus:ring-2"
              style={{ color: 'var(--terracotta-600)', '--tw-ring-color': 'var(--terracotta-400)' } as React.CSSProperties}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18M10.6 10.6A2 2 0 0012 14a2 2 0 001.4-.6M9.9 4.2A10.7 10.7 0 0112 4c5 0 9 4 10 8a11.8 11.8 0 01-3.1 5.1M6.6 6.6A11.8 11.8 0 002 12c1 4 5 8 10 8 1.6 0 3.1-.4 4.4-1.1" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mode === 'register' && (
          <>
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: 'var(--terracotta-700)' }}>Access code</label>
              <input
                type="password"
                value={registrationCode}
                onChange={(e) => setRegistrationCode(e.target.value)}
                required
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={inputStyle}
                placeholder="Required to create an account"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">Name (optional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={inputStyle}
                placeholder="Your name"
              />
            </div>
          </>
        )}

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
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
          ) : mode === 'login' ? 'Sign in' : 'Create my account'}
        </button>

        <div className="text-center pt-4" style={{ borderTop: '1px solid var(--sand-200)' }}>
          <p className="text-sm" style={{ color: 'var(--sand-600)' }}>
            {mode === 'login' ? "Don't have an account yet?" : 'Already have an account?'}
            <button
              type="button"
              onClick={switchMode}
              className="ml-2 font-bold hover:underline"
              style={{ color: 'var(--terracotta-600)' }}
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </form>
    </>
  );
};
