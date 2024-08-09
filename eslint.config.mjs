import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: true,
      indent: 2,
      quotes: 'single',
      trailingComma: 'es5',
      tabWidth: 2,
    },
  },
  files: ['.js,.vue'],
});
