<template>
  <div class="container mx-auto">
    <!-- Title -->
    <h3 class="heading2Xl text-[#18181B] dark:text-white">
      Certifications
    </h3>

    <div
      class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-[#171717] dark:border-[#2b2b2bc5]"
    >
      <!-- Tabs -->
      <ul
        class="flex text-sm font-medium text-center text-gray-500 divide-x-2 dark:divide-none divide-gray-200 rounded-lg sm:flex dark:divide-[#2b2b2bc5] dark:text-gray-400"
        role="tablist"
      >
        <li class="w-full">
          <button
            type="button"
            :class="[
              'inline-block w-full p-4 focus:outline-none rounded-tl-lg',
              activeTab === 'comptia'
                ? 'bg-white dark:bg-[#171717] font-semibold'
                : 'bg-gray-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700',
            ]"
            @click="setTab('comptia')"
          >
            CompTIA
          </button>
        </li>
        <li class="w-full">
          <button
            type="button"
            :class="[
              'inline-block w-full p-4 focus:outline-none rounded-tr-lg',
              activeTab === 'microsoft'
                ? 'bg-white dark:bg-[#171717] font-semibold'
                : 'bg-gray-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700',
            ]"
            @click="setTab('microsoft')"
          >
            Microsoft
          </button>
        </li>
      </ul>

      <!-- Tab Contents -->
      <div class="border-t border-gray-200 dark:border-[#2b2b2bc5]">
        <div
          v-show="activeTab === 'comptia'"
          class="p-4 bg-white rounded-lg md:p-8 dark:bg-[#171717]"
        >
          <ul
            class="list-disc marker:dark:text-primary marker:text-zinc-600 ml-[1.1rem]"
          >
            <li>
              <a
                class="underline hover:no-underline"
                href="/pdf/security-plus.pdf"
                target="_blank"
              >Security+ (SY0-601)</a>
            </li>
          </ul>
        </div>

        <div
          v-show="activeTab === 'microsoft'"
          class="p-4 bg-white rounded-lg md:p-8 dark:bg-[#171717]"
        >
          <ul
            class="list-disc marker:dark:text-primary marker:text-zinc-600 ml-[1.1rem]"
          >
            <li>
              <a
                class="underline hover:no-underline"
                href="https://learn.microsoft.com/api/credentials/share/en-us/BrysonWard-1141/3AA46964BDA8C2FA?sharingId=5D04418F718FCAA5"
                target="_blank"
              >AZ-900: Microsoft Azure Fundamentals</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
import { ref } from 'vue';

type Tabs = 'comptia' | 'microsoft';

const activeTab = ref<Tabs>('comptia');

const setTab = (tab: Tabs) => {
  activeTab.value = tab;
};

useHead({
  title: 'Bryson Ward | Certifications',
  meta: [{ name: 'description', content: 'Bryson Ward: Full Stack Engineer.' }],
});
</script>

<style scoped>
</style>
