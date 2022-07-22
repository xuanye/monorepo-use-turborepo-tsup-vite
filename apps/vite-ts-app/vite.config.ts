import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: './',
    plugins: [eslint(), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 4005,
      open: true,
    },
    build: {
      assetsDir: './',
      sourcemap: command === 'serve',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-venders': ['react', 'react-dom'],
          },
        },
      },
    },
  };
});
