import type { Project } from 'types';

export const projects_list: Project[] = [
  {
    image: '/img/prettier-json.png',
    image_alt: 'library-prettier-json-preview-img',
    link: 'https://www.npmjs.com/package/prettierrc.json',
    name: 'prettier.json',
    description: 'A cli npm library for creating a standard .prettierrc.json file.',
    dev_icons: ['npm', 'node', 'javascript'],
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
    image: '/img/gogo-pikachu.png',
    image_alt: 'gogo-pikachu-preview-img',
    image_class: 'w-full h-[7.2rem] object-scale-down',
    link: 'https://gogo-pikachu.vercel.app/',
    name: 'GoGo Pikachu',
    description: 'A 2D Phaser HTML5 Platform Game. Collect Thunder Stones to level up Pikachu!',
    image_icons: [{ name: 'phaser-js', src: 'https://raw.githubusercontent.com/photonstorm/phaser/v2.6.2/resources/Phaser%20Logo/PNG/Phaser%20Logo%20Web%20Quality.png' }],
    dev_icons: ['html', 'css', 'javascript'],
  },
];
