<template>
  <div class="error">
    <div class="w-9/12 m-auto py-16 my-44 flex items-center justify-center">
      <div class="max-w-md">
        <div class="text-5xl font-dark font-bold text-black dark:text-white">
          {{ props.error?.statusCode }}
        </div>
        <p
          class="text-2xl my-6 text-black dark:text-white md:text-3xl font-light leading-normal"
        >
          {{ props.error?.message }}
        </p>
        <button
          class="hover:underline no-underline text-black dark:text-white"
          @click="handleError"
        >
          Back to homepage
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const props = defineProps({
  error: Object as () => NuxtError,
});
const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped>
.error {
  text-align: center;
  margin-bottom: 60px;
}
</style>
