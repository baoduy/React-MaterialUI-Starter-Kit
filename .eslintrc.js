module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    indent: "warn",
    "linebreak-style": ["warn", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
