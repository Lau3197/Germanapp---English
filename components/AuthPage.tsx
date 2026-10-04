import React from 'react';
import { AuthForm } from './AuthForm';

export const AuthPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10" style={{ backgroundColor: 'var(--sand-50)' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white font-black text-xl mb-4" style={{ backgroundColor: 'var(--terracotta-600)' }}>
            DE
          </div>
          <h1 className="text-3xl font-black" style={{ color: 'var(--terracotta-800)' }}>DeutschMeister</h1>
          <p className="text-sm mt-2" style={{ color: 'var(--sand-600)' }}>Sign in to continue.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};
