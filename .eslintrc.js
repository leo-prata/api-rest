module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb-base'],

  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
