<template>
  <div>
    <header class="header">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">
        Languages
      </h1>
    </header>
    <div class="flex flex-col items-center">
      <ul class="flex flex-wrap justify-center gap-2 text-center text-gray-500 dark:text-gray-400">
        <li
          v-for="item in items"
          :key="item.name"
          class="flex flex-col items-center space-y-2 w-14"
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

const items = appStore.getDevIconItems(['javascript', 'typescript', 'csharp', 'php']);
</script>

<style scoped>
.devicon {
  font-size: 2.7rem;
}
</style>
