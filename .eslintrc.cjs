const { rules } = require('eslint-config-prettier');

module.exports = {
  env: {
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // any 타입 사용을 허용(타입스크립트의 유연성을 위해)
    '@typescript-eslint/no-unused-vars': 'on', // 사용하지 않는 변수에 대한 경고를 끔
    'prettier/prettier': 'error',
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error', 'test']
      }
    ]
  }
};
