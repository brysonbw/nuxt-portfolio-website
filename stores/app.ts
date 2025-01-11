// Utilities
import { defineStore } from 'pinia';
import type { AppStore } from './types';

export const useAppStore = defineStore('app', {
  state: (): AppStore => ({
    // TODO: add links in 'languages' and 'tech stack' that aren't here
    devIcons: {
      angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      react:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
      node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      tailwindCss:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      javascript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      typescript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      mongoDB:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      postgres:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
      svelte:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
      vscode:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
      django:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      python:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      nuxt: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-plain.svg',
      npm: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
      vuetify: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg',
    },
    metadata: {
      title: 'Bryson Ward',
      message: 'Powered by',
      language: 'en-us',
      locale: 'en-US',
    },
    siteImageUrl: 'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1655851213/portfolio-site-img_bkoiaj.png',
  }),
  actions: {
    getSeoMetadata(title: string, description: string, page: string, image: string | null = null) {
      const appStore = useAppStore();
      const imageUrl = image || appStore.siteImageUrl;
      return {
        title,
        meta: [
          // Global Main
          { charset: 'utf-8' },
          { title },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: description },
          // Open Graph / Facebook
          { hid: 'og:type', property: 'og:type', content: 'website' },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `https://brysonward.com/${page}`,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: title,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: description,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: imageUrl,
          },
          // Twitter Card
          { name: 'twitter:card', content: 'summary_large_image' },
          {
            hid: 'twitter:url',
            name: 'twitter:url',
            content: `https://brysonward.com/${page}`,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: title,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: description,
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: imageUrl,
          },
        ],
      };
    },
  },
});
