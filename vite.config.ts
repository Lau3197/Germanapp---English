import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
    server: {
      port: process.env.PORT ? Number(process.env.PORT) : 8001,
      host: '0.0.0.0',
      strictPort: true,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
}));
