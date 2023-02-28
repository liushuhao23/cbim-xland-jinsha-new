/*
 * @Description: descriptio
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2023-02-13 09:04:22
 * @LastEditors: liushuhao
 * @LastEditTime: 2023-02-28 10:28:18
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "max-len": ["error", {"code": 200}  ]
  },
};
