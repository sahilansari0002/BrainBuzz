import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ IMPORTANT: Fixes white screen on Netlify
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
