module.exports = {
  plugins: [
    '@typescript-eslint',
    'functional',
    'fp-ts',
    'only-warn',
    'simple-import-sort',
    'unused-imports',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['**/tsconfig.**'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:functional/all',
    'plugin:fp-ts/all',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unbound-method': 'off',
    'fp-ts/no-module-imports': ['error', { allowTypes: true }],
    'functional/functional-parameters': 'off',
    'functional/no-mixed-type': 'off',
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 100 }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    curly: ['error', 'all'],
    eqeqeq: 'error',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignorePattern: '(^export|^\\s*readonly|^import)',
      },
    ],
    'no-else-return': 'error',
    'no-undef-init': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-destructuring': 'error',
    'prefer-template': 'error',

    // https://github.com/sweepline/eslint-plugin-unused-imports#usage
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
};
