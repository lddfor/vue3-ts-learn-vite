module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  // parser: '@typescript-eslint/parser',
  // 'parserOptions': {
  //   'parser': 'babel-eslint',
  // },
  parserOptions: {
    "parser": "@typescript-eslint/parser"
  },

  parser: "vue-eslint-parser",
  rules: {
    semi: [2, "never"],
    'no-var': 'error',
    indent: ['error', 2],
    'no-mixed-spaces-and-tabs': 'error',
    quotes: [2, 'single'],// 使用单引号
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    'vue/singleline-html-element-content-newline': 'off', // 不强制换行
    'vue/max-attributes-per-line': ['error', {
      singleline: {max: 5},
      multiline: {max: 5}
    }] // vue template模板元素第一行最多5个属性
    // 其它的规则可以去eslint查看，根据自己需要进行添加
  }
}


