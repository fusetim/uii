import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 5432,
  },
  base: '/uii/',
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});
