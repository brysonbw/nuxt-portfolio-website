import { defineCollection, defineContentConfig } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: {
        include: '**',
        exclude: ['**/.*'],
      },
      type: 'page',
    }),
  },
});
