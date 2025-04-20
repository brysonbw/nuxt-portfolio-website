import { defineStore } from 'pinia';
import type { ProjectStore } from './types';
import deno from '@/assets/images/deno.jpg';
import cesium from '@/assets/images/cesium-logo-only.png';
import hono from '@/assets/images/hono.jpg';
import next from '@/assets/images/nextjs-lg.jpg';

export const useProjectStore = defineStore('project', {
  state: (): ProjectStore => ({
    projects: [
      // {
      //   image: '/img/code-cause.png',
      //   image_alt: 'code-cause-non-profit-app-img',
      //   link: 'https://codecause.dev/',
      //   name: 'Code Cause',
      //   description: 'An online tech-driven community fueled by purpose and powered by innovation. Building a Better World Through Code – Inspiring Innovation, Enabling Progress, and Driving Impact.',
      //   image_icons: [],
      //   dev_icons: ['angular', 'javascript', 'typescript', 'tailwindCss', 'firebase'],
      // },
      {
        image: '/img/ip-address-tracker.png',
        image_alt: 'ip-address-tracker-app-img',
        link: 'https://github.com/brysonbw/vue-ip-address-tracker-client',
        name: 'IP Address Tracker',
        description: 'Track, visualize, and analyze IP address locations using Vue.js and Cesium.js, with data from the IPinfo API accessed through a REST API proxy.',
        image_icons: [{ name: 'cesium-js', src: cesium, classes: 'mr-2' }, { name: 'deno', src: deno }, { name: 'hono', src: hono, classes: 'ml-1' }],
        dev_icons: ['javascript', 'typescript', 'vuetify'],
      },
      {
        image: '/img/dictionary.png',
        image_alt: 'dictionary-img',
        link: 'https://next-dictionary-app.vercel.app/',
        name: 'Dictionary',
        description: 'Search for word definitions using Dictionary API . Find detailed meanings, synonyms, and antonyms.',
        image_icons: [{ name: 'next-js', src: next, classes: 'mr-2' }],
        dev_icons: ['javascript', 'typescript', 'tailwindCss', 'react', 'redux'],
      },
      {
        image: '/img/gogo-pikachu.png',
        image_alt: 'gogo-pikachu-preview-img',
        image_class: 'w-full h-[7.2rem] object-scale-down',
        link: 'https://gogo-pikachu.vercel.app/',
        name: 'GoGo Pikachu',
        description: 'A 2D Phaser HTML5 Platform Game. Collect Thunder Stones to level up Pikachu!',
        image_icons: [{ name: 'phaser-js', src: 'https://raw.githubusercontent.com/photonstorm/phaser/v2.6.2/resources/Phaser%20Logo/PNG/Phaser%20Logo%20Web%20Quality.png' }],
        dev_icons: ['html', 'css', 'javascript'],
      },
      {
        image: '/img/svelte-comp-snippets.png',
        image_alt: 'vscode-svelte-comp-snippets-preview-img',
        link: 'https://marketplace.visualstudio.com/items?itemName=brysonbw.svelte-component-snippets',
        name: 'Svelte Component Snippets',
        description: 'Visual Studio Code Extension for adding Svelte component snippets.',
        dev_icons: ['vscode', 'svelte'],
      },
      {
        image: '/img/prettier-json.png',
        image_alt: 'library-prettier-json-preview-img',
        link: 'https://www.npmjs.com/package/prettierrc.json',
        name: 'prettier.json',
        description: 'A cli npm library for creating a standard .prettierrc.json file.',
        dev_icons: ['npm', 'node', 'javascript'],
      },
    ],
  }),
  actions: {},
  getters: {},
});
