<template>
  <div>
    <!-- Avatar Image -->
    <NuxtLink to="/">
      <img
        src="~/assets/images/bryson-avatar.jpg"
        class="borderCircle mx-auto h-36 w-36"
        alt="bryson-avatar-img"
      >
    </NuxtLink>
    <div>
      <!-- Languages --->
      <Languages />
      <!-- Tech Stack --->
      <TechStack />
      <!-- Projects --->
      <TheProjects />
      <!-- Github --->
      <GithubPartial />
      <!-- Contact --->
      <ContactPartial />
    </div>
    <!-- Back To Home Link -->
    <div style="margin: 3rem 0 0">
      <NuxtLink
        class="text-zinc-600 dark:text-primary"
        to="/"
      >← Back to home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import GithubPartial from '@/components/partials/GithubPartial.vue';
import Languages from '@/components/TheLanguages.vue';
import TheProjects from '@/components/TheProjects.vue';
import TechStack from '@/components/TechStack.vue';
import ContactPartial from '@/components/partials/ContactPartial.vue';

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
