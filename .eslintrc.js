/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@rocketseat/eslint-config/node'],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.next/',
    '.turbo/',
    '*.config.js',
  ],
}
