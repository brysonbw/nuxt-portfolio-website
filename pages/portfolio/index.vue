<template>
  <div>
    <NuxtLink to="/">
      <img
        src="~/assets/images/bryson-avatar.jpg"
        class="borderCircle mx-auto h-36 w-36"
        alt="bryson-avatar-img"
      />
    </NuxtLink>

    <div>
      <!-- Languages --->
      <Languages />
      <!-- Tech Stack --->
      <TechStack />
      <!-- Projects --->
      <Projects />
      <!-- Github --->
      <Github />
      <!-- Contact --->
      <Contact />
    </div>
    <div style="margin: 3rem 0 0">
      <NuxtLink class="text-zinc-600 dark:text-primary" href="/"
        >← Back to home</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Github from '@/components/Github.vue';
import Languages from '@/components/Languages.vue';
import Projects from '@/components/Projects.vue';
import TechStack from '@/components/TechStack.vue';
useHead({
  title: 'Bryson Ward | Portfolio',
  meta: [{ name: 'description', content: 'Bryson Ward: Full Stack Engineer.' }],
});
</script>

<style scoped>
.borderCircle {
  border-radius: 9999px;
}
</style>
