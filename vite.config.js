import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // use src as root
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});