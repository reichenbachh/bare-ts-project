module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'], // Use the TypeScript-specific no-unused-vars rule
    '@typescript-eslint/no-explicit-any': 'warn', // Warn on the use of the 'any' type
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable the need for function return types
    '@typescript-eslint/no-var-requires': 'off', // Allow the use of require() statements
  },
  env: {
    node: true, // Define the environment as Node.js
    es6: true, // Enable ES6 globals
  },
};
