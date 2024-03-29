module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'vue/no-v-model-argument': 0,
  },
}
