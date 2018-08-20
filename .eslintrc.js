module.exports = {
  plugins: ['node'],
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  rules: {
    'no-console': 0,
  },
};
