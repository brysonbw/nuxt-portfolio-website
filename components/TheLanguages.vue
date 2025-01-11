<template>
  <div>
    <header class="header">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">
        Languages
      </h1>
    </header>
    <div class="flex justify-center">
      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-gray-500 dark:text-gray-400">
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
const items = [
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
];
</script>

<style scoped>
</style>
