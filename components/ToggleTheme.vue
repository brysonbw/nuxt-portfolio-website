<template>
  <div>
    <button
      id="theme-toggle"
      type="checkbox"
      checked="$colorMode.value"
      class="w-7 h-7 sm:h-8"
      @click="toggleColorMode"
    >
      <MoonIcon
        for="theme-toggle"
        class="hidden text-zinc-500 dark:block"
      />
      <SunIcon
        for="theme-toggle"
        class="block text-zinc-400 dark:hidden"
      />
    </button>
  </div>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

const colorMode = useColorMode();
function toggleColorMode() {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light';
  }
  else {
    colorMode.preference = 'dark';
  }
}
</script>

<style lang="postcss">
#theme-toggle:checked {
  @apply block;
}
</style>
