import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default await createConfigForNuxt()
  .append(eslintPluginPrettierRecommended)
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/require-default-prop': 0,
      'vue/no-v-model-argument': 0,
    },
  })
  .toConfigs()
