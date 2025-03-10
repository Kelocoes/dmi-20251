/* eslint-disable */
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['src/**/*.{js,mjs,cjs,ts}'],
        languageOptions: { globals: globals.browser },
        ...pluginJs.configs.recommended,
        ...tseslint.configs.recommended,
        ...importPlugin.flatConfigs.recommended,
        rules: {
            'max-len': ['error', { 'code': 250 }],
            'no-unused-vars': ['error', {
                'vars': 'all',
                'args': 'all',
                'argsIgnorePattern': '^_'
            }],
            'indent': ['error', 4],
            'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
            'block-spacing': 'error',
            'semi': ['error', 'always'],
            'import/order': [
                'error',
                {
                    'groups': [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index'
                    ],
                    'newlines-between': 'always'
                }
            ],
            'import/no-unresolved': 'off',
            'camelcase': 'off',
            'quotes': ['error', 'single'],
            'no-console': ['error', { 'allow': ['info', 'warn', 'error'] }]
        }
    }
];
