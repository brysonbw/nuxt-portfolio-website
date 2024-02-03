<template>
  <div>
    <NuxtLink to="/">
      <img
        src="~/assets/images/bryson-avatar.jpg"
        class="borderCircle mx-auto h-36 w-36"
        alt="bryson-avatar-img"
      />
    </NuxtLink>
    <!--Blog Posts Title-->
    <header class="header text-center">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">Blog Posts</h1>
    </header>

    <div style="margin: 3rem 0 0">
      <NuxtLink class="text-zinc-600 dark:text-primary" href="/"
        >← Back to home</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
