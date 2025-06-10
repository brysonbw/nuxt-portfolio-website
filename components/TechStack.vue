<template>
  <div>
    <header class="header mt-20">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">
        Tech Stack
      </h1>
    </header>
    <div class="flex flex-col items-center">
      <ul class="flex flex-wrap justify-center gap-2 text-center text-gray-500 dark:text-gray-400">
        <li
          v-for="item in items"
          :key="item.name"
          class="flex flex-col items-center space-y-2 w-14 m-1"
        >
          <i
            :class="`devicon devicon-${item.icon}`"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

// Stores
const appStore = useAppStore();

const filteredKeys = ['angular', 'react', 'vue', 'angularMaterial', 'vuetify', 'tailwindcss', 'next', 'nuxt', 'node', 'dotnetCore', 'firebase', 'mysql', 'postgresql', 'mssqlserver'];

const items = appStore.getDevIconItems(filteredKeys);
</script>

<style scoped>
.devicon {
  font-size: 2.7rem;
}
</style>
