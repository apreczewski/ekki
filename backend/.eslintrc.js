module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    //Informar ao eslint os erros do prettier
    'prettier/prettier': 'error',
    //Desabilitar a obrigação de utilizar o 'this' em todos os methods
    'class-methods-use-this': 'off',
    //Desabilitar a obrigação de não conseguir alterar uma parametro recebido
    'no-param-reassign': 'off',
    //Desabilitar a obrigação de utilizar o camelcase nas variaveis
    camelcase: 'off',
    //Desabilitar a obrigação de não utilizar a variável com nome next
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }]
  }
};
