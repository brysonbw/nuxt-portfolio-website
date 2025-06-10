// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      title: 'Bryson Ward | Home',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css',
        },
      ],
      meta: [
        // Global Main
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Bryson Ward: Full Stack Engineer' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://brysonward.com/',
        },
        {
          property: 'og:title',
          content: 'Bryson Ward | Home',
        },
        {
          property: 'og:description',
          content: 'Bryson Ward: Full Stack Engineer',
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1655851213/portfolio-site-img_bkoiaj.png',
        },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:url',
          content: 'https://brysonward.com/',
        },
        {
          name: 'twitter:title',
          content: 'Bryson Ward | Home',
        },
        {
          name: 'twitter:description',
          content: 'Bryson Ward: Full Stack Engineer',
        },
        {
          name: 'twitter:image',
          content:
            'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1655851213/portfolio-site-img_bkoiaj.png',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  alias: {
    '@components': './components',
    '@utils': './utils',
    '@assets': './assets',
    '@stores': './stores',
  },
  compatibilityDate: '2024-08-09',
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
        indent: 2,
        blockSpacing: true,
      },
    },
  },
});
