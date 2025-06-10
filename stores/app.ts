// Utilities
import { defineStore } from 'pinia';
import type { AppStore } from './types';

export const useAppStore = defineStore('app', {
  state: (): AppStore => ({
    devIcons: {
      angular:
        'angular-plain angular-colored',
      angularMaterial: 'angularmaterial-plain colored',
      vue: 'vuejs-plain colored',
      react:
        'react-original colored',
      redux:
        'redux-original colored',
      nuxt: 'nuxtjs-plain colored',
      next: 'nextjs-plain next-colored',
      node: 'nodejs-plain colored',
      deno: 'denojs-original deno-colored',
      dotnetCore: 'dotnetcore-plain colored',
      tailwindcss:
        'tailwindcss-original colored',
      html: 'html5-plain colored',
      css: 'css3-plain colored',
      php: 'php-plain colored',
      csharp: 'csharp-plain csharp-colored',
      javascript:
        'javascript-plain colored',
      typescript:
        'typescript-plain colored',
      mssqlserver: 'microsoftsqlserver-plain colored',
      postgresql:
        'postgresql-plain colored',
      mysql: 'mysql-original colored',
      svelte:
        'svelte-plain colored',
      vscode:
        'vscode-plain colored',
      firebase:
        'firebase-plain colored',
      npm: 'npm-original-wordmark colored',
      vuetify:
        'vuetify-plain colored',
    },
    metadata: {
      title: 'Bryson Ward',
      message: 'Powered by',
      language: 'en-us',
      locale: 'en-US',
    },
    siteImageUrl:
      'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1655851213/portfolio-site-img_bkoiaj.png',
  }),
  actions: {
    getSeoMetadata(
      title: string,
      description: string,
      page: string,
      image: string | null = null,
    ) {
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
          { property: 'og:type', content: 'website' },
          {
            property: 'og:url',
            content: `https://brysonward.com/${page}`,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: description,
          },
          {
            property: 'og:image',
            content: imageUrl,
          },
          // Twitter Card
          { name: 'twitter:card', content: 'summary_large_image' },
          {
            name: 'twitter:url',
            content: `https://brysonward.com/${page}`,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: description,
          },
          {
            name: 'twitter:image',
            content: imageUrl,
          },
        ],
      };
    },
    getDevIconItems(filterKeys: string[]) {
      const appStore = useAppStore();
      return Object.entries(appStore.devIcons)
        .filter(([key]) => filterKeys.includes(key))
        .map(([name, icon]) => ({ name, icon }));
    },
  },
});
