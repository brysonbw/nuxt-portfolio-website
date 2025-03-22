<template>
  <div
    class="top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out"
  >
    <div
      class="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
    >
      <div class="flex flex-row items-center justify-between p-2">
        <NuxtLink to="/">
          <img
            src="~/assets/images/bryson-avatar.jpg"
            class="w-10 h-10"
            alt="bryson-avatar"
          >
        </NuxtLink>

        <NuxtLink
          class="no-underline hover:no-underline"
          to="/"
        ><p class="md:ml-2 text-zinc-600 dark:text-primary font-medium">
          Bryson Ward
        </p></NuxtLink>

        <div
          class="leading-none px-3 py-1 md:hidden outline-none focus:outline-none"
        >
          <ToggleTheme />
        </div>
      </div>

      <div
        class="md:flex flex-grow items-center"
        :class="[navbarOpen ? 'flex' : 'hidden']"
      >
        <nav class="flex-col flex-grow">
          <ul class="flex flex-grow justify-end flex-wrap items-center">
            <li
              class="px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              <ToggleTheme />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToggleTheme from '@/components/ToggleTheme.vue';

export default defineComponent({
  components: { ToggleTheme },
  data() {
    return {
      navbarOpen: false,
    };
  },
});
</script>

<style scoped>
.navOpenStyle {
  @apply flex md:flex flex-grow items-center;
}

.navClosedStyle {
  @apply hidden md:flex flex-grow items-center;
}
</style>
