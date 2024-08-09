// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/eslint',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Bryson Ward | Home',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        // Global Main
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Bryson Ward: Full Stack Engineer' },
        // Open Graph / Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://brysonward.com/',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Bryson Ward | Home',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Bryson Ward: Full Stack Engineer',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1655851213/portfolio-site-img_bkoiaj.png',
        },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://brysonward.com/',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Bryson Ward | Home',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Bryson Ward: Full Stack Engineer',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1655851213/portfolio-site-img_bkoiaj.png',
        },
      ],
    },
  },
  compatibilityDate: '2024-08-09',
});
