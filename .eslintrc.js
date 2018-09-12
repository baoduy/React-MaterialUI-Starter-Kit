module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    legacyDecotators: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  rules: {
    indent: 'off',
    'linebreak-style': ['warn', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    experimentalDecorators: true
  }
};
