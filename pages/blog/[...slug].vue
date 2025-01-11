<template>
  <article class="rounded-2xl">
    <ContentDoc
      v-slot="{ doc }"
      :path="`/posts/${slug}`"
    >
      <!-- Header  -->
      <header>
        <div class="text-center p-5">
          <h1 class="text-3xl md:text-4xl font-bold lg:w-2/3 mx-auto break-words">
            {{ doc.title }}
          </h1>
          <p class="text-gray-500 text-sm mt-2">
            {{ formatDate(doc.date) }}
          </p>
        </div>
      </header>
      <!-- Doc Content -->
      <div class="mt-4 content p-5">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>

    <!-- Back To Blog Posts -->
    <div style="margin: 3rem 0 0">
      <NuxtLink
        class="text-zinc-600 dark:text-primary"
        href="/blog"
      >← Back to blog posts</NuxtLink>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { formatDate } from '@/utils/formatDate';

const { slug } = useRoute().params;
// TODO: useContentHead for doc page SEO
</script>

<style>
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}

.content h1 {
  @apply text-3xl font-bold;
}
.content h2 {
  @apply text-2xl font-bold;
}
.content h3 {
  @apply text-xl font-bold;
}
.content h4 {
  @apply text-lg font-bold;
}
.content h5 {
  @apply text-base font-bold;
}
</style>
