<template>
  <div class="flex items-center gap-5 max-w-2xl podcast-rec-card">
    <slot>
      <!-- Image -->
      <img
        :src="imageSrc"
        :alt="title + ' Thumbnail'"
        class="w-24 rounded-lg border-[1px] border-gray-300 dark:border-0 dark:border-transparent"
      >
      <!-- Title -->
      <div>
        <h3 class="m-0">
          <a
            :href="link"
            target="_blank"
          >
            {{ title }}
          </a>
        </h3>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style lang="css" scoped>
.podcast-rec-card:not(:first-child) {
    margin-top: 1.5em;
}

@media screen and (max-width : 320px) {
    .podcast-rec-card {
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
     }
    }
</style>
