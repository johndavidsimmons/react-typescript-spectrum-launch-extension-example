import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: parserTypeScript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
      },
    },
  },
  pluginJs.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect', // Detect React version automatically
      },
    },
  },
  {
    plugins: {
      '@typescript-eslint': pluginTypeScript,
    },
    rules: {
      ...pluginTypeScript.configs.recommended.rules, // Include recommended TypeScript rules
      'react/prop-types': 'off', // Disable prop-types as TypeScript handles it
      '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional rule
    },
  },
];
