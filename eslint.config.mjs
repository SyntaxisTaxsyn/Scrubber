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
      sourceType: 'module', // ES modules
      globals: globals.browser,
    },
    plugins: {
      prettier,
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // Possible errors
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],

      // Best practices
      eqeqeq: ['error', 'always'],
      curly: 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-console': 'warn',

      // Variables
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'no-redeclare': 'error',

      // Stylistic
      semi: ['error', 'always'],
      quotes: ['error', 'double', { avoidEscape: true }],
      'comma-dangle': ['error', 'never'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],

      // ES6
      'prefer-const': 'warn',
      'no-var': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
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
