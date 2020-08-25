// const path = require('path');

module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:css-modules/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'css-modules', 'graphql'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/test.tsx', '**/test.ts'] },
    ],
    '@typescript-eslint/indent': [2, 2],
    'import/extensions': [
      0,
    ],
    'react/no-unescaped-entities': [0],
    'react/prop-types': [0],
    'css-modules/no-unused-class': [1, { camelCase: true }],
    'css-modules/no-undef-class': [1, { camelCase: true }],
    camelcase: [1],
    // 'graphql/template-strings': ['error', {
    //   env: 'relay',
    //   tagName: 'graphql',
    //   schemaJsonFilepath: path.resolve(__dirname, 'src/__generated__gatsby-introspection.json'),
    // }],
  },
};
