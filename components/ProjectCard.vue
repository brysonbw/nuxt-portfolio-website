<template>
  <!-- Project Card -->
  <div
    class="max-w-sm transition ease-in-out hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]"
  >
    <!-- Image -->
    <div class="mx-auto md:mx-0">
      <img
        :src="project.image"
        :class="['rounded-t-lg', project.image_class]"
        :alt="`${project.image_alt}`"
      >
    </div>
    <div class="p-3">
      <!-- Title/Name -->
      <a
        rel="noopener noreferrer"
        class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
        :href="`${project.link}`"
      >
        {{ project.name }}
      </a>
      <!-- Description -->
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
        {{ project.description }}
      </p>
      <div

        class="flex flex-wrap gap-2"
      >
        <!-- Tech Stack Icons -->
        <!-- Image -->
        <div v-if="project?.image_icons && project?.image_icons?.length > 0">
          <img
            v-for="(img_icon, index) in project.image_icons"
            :key="img_icon + index"
            :class="['w-8 h-8 inline-flex', img_icon.classes]"
            :src="img_icon.src"
            :alt="img_icon.name"
          >
        </div>
        <img
          v-for="(dev_icon, index) in project.dev_icons"
          :key="dev_icon + index"
          class="w-8 h-8"
          :src="devIcons[dev_icon]"
          :alt="dev_icon"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { devIcons } from '@/utils/devicons';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>

</style>
