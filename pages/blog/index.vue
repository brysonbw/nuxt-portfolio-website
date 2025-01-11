<template>
  <div>
    <!-- Blog Page Title -->
    <header class="header text-center">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">
        Blog Posts
      </h1>
    </header>

    <section class="container mx-auto px-5">
      <div
        class="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-2"
      >
        <!-- Blog List  -->
        <ContentList
          v-slot="{ list }"
          path="/posts"
          fields="title,date"
          :query="{
            draft: false,
            sort: [
              {
                date: -1,
              },
            ],
          }"
        >
          <!-- Blog Card  -->
          <div
            v-for="blog in list"
            :key="blog._path"
            class="max-w-sm transition ease-in-out hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]"
          >
            <!-- Blog Thumbnail -->
            <div class="h-[300px] relative">
              <img
                v-if="blog.thumbnail"
                :src="blog.thumbnail"
                :alt="blog.title"
                class="absolute rounded-t-lg w-full h-full object-cover"
              >
            </div>
            <!-- Blog Title/Slug Content -->
            <div class="my-4 text-center">
              <h3 class="text-1xl font-bold break-words">
                <NuxtLink :to="`/blog/${blog.slug}`">
                  {{ blog.title }}
                </NuxtLink>
              </h3>
              <div class="text-sm text-gray-500 mt-px block">
                {{ formatDate(blog.date) }}
              </div>
              <!-- Blog Tags -->
              <div
                v-if="blog.tags"
                class="mt-2 text-xs"
              >
                <span
                  v-for="(tag, index) in blog.tags"
                  :key="tag + index"
                  class="p-1 rounded bg-gray-100 mr-2"
                >
                  {{ tag }}</span>
              </div>
            </div>
          </div>
        </ContentList>
      </div>
    </section>
    <!-- Back To Home Link -->
    <div style="margin: 3rem 0 0">
      <NuxtLink
        class="text-zinc-600 dark:text-primary"
        href="/"
      >← Back to home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/formatDate';
import { useAppStore } from '@/stores/app';

// Stores
const appStore = useAppStore();

const { title, meta } = appStore.getSeoMetadata('Bryson Ward | Blog', 'Bryson Ward: Blog Posts', 'blog');

useHead({
  title,
  meta,
});
</script>

  <style scoped></style>
