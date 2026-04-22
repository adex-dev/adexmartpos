import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    hmr: true,
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    tailwindcss(), // ✅ DI SINI, bukan di postcss
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        login: 'login.html',
      },
    },
  },
});
