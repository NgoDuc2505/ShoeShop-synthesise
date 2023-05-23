module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-undef':'off',
    'react/jsx-no-target-blank':'off',
    'no-unused-vars':'off',
    'react/jsx-no-undef':'off',
    'no-unreachable':'off',
    'no-const-assign':'off',
    'react-hooks/exhaustive-deps': 'off'
  },
}
