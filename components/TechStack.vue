<template>
  <div>
    <header class="header mt-20">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">
        Tech Stack
      </h1>
    </header>
    <div class="flex justify-center">
      <ul class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 text-center text-gray-500 dark:text-gray-400">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-col items-center space-y-2"
        >
          <img
            :width="50"
            :alt="item.name"
            :src="item.src"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import DenoImage from '@/assets/images/deno.jpg';
import NextImage from '@/assets/images/nextjs-lg.jpg';

const items = [
  // FE JS Framworks
  { name: 'Angular', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  // CSS Frameworks
  { name: 'Angular Material', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg' },
  { name: 'Vuetify', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  // FE Meta Frameworks
  { name: 'Next', src: NextImage },
  { name: 'Nuxt', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg' },
  // Server Side Frameworks
  { name: 'Node', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Deno', src: DenoImage },
  { name: 'Dot Net Core', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  // Cloud Services
  { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  // Databases
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Postgres', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MS SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
];
</script>

<style scoped>
</style>
