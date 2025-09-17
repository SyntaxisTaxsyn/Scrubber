import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // JavaScript
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser,
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // show Prettier issues in ESLint
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },

  // JSON
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
  },

  // CSS
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
  },
]);
