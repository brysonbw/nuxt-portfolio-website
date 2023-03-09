<template>
  <div>
    <header class="header text-center mt-20">
      <h1 class="heading2XlPortfolio text-[#18181B] dark:text-white">
        Projects
      </h1>
      <!-- <h1 class="headingMdProject">
        These are some of my projects, apps, & games
      </h1> -->
    </header>
    <!--Projects-->
    <div class="container mx-auto px-5">
      <div
        class="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-2"
      >
        <!-- Card -->
        <div
          class="max-w-sm transition ease-in-out hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]"
        >
          <div class="mx-auto md:mx-0">
            <img
              src="~/assets/images/prettier-json.png"
              class="rounded-t-lg"
              alt="library-prettier-json-preview-img"
            />
          </div>
          <div class="p-3">
            <a
              rel="noopener noreferrer"
              class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
              href="https://www.npmjs.com/package/prettierrc.json"
            >
              prettier.json
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
              A cli npm library for creating a standard .prettierrc.json file.
            </p>
            <div class="flex flex-wrap gap-2">
              <!-- devIcons -->
              <img alt="npm" class="w-8 h-8" :src="devIcons.npm" />
              <img alt="node" class="w-8 h-8" :src="devIcons.node" />
              <img
                alt="javascript"
                class="w-8 h-8"
                :src="devIcons.javascript"
              />
            </div>
          </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="max-w-sm transition ease-in-out hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]"
        >
          <div class="mx-auto md:mx-0">
            <img
              src="~/assets/images/svelte-comp-snippets.png"
              class="rounded-t-lg"
              alt="vscode-svelte-comp-snippets-preview-img"
            />
          </div>
          <div class="p-3">
            <a
              rel="noopener noreferrer"
              class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
              href="https://www.npmjs.com/package/prettierrc.json"
            >
              Svelte Component Snippets
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
              Visual Studio Code Extension for adding Svelte component snippets.
            </p>
            <div class="flex flex-wrap gap-2">
              <!-- devIcons -->
              <img alt="vscode" class="w-8 h-8" :src="devIcons.vscode" />
              <img alt="svelte" class="w-8 h-8" :src="devIcons.svelte" />
            </div>
          </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          class="max-w-sm transition ease-in-out hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]"
        >
          <div class="mx-auto bg-black rounded-t-lg md:mx-0">
            <img
              src="~/assets/images/gogo-pikachu.png"
              class="rounded-t-lg w-full h-[7.2rem] object-scale-down"
              alt="gogo-pikachu-preview-img"
            />
          </div>
          <div class="p-3">
            <a
              rel="noopener noreferrer"
              class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
              href="https://gogo-pikachu.vercel.app/"
            >
              GoGo Pikachu
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
              A 2D Phaser HTML5 Platform Game. Collect Thunder Stones to level
              up Pikachu!
            </p>
            <div class="flex flex-wrap gap-2">
              <!-- devIcons -->
              <img
                alt="phaser-js"
                class="w-8 h-8"
                src="https://raw.githubusercontent.com/photonstorm/phaser/v2.6.2/resources/Phaser%20Logo/PNG/Phaser%20Logo%20Web%20Quality.png"
              />
              <img alt="html" class="w-8 h-8" :src="devIcons.html" />
              <img alt="css" class="w-8 h-8" :src="devIcons.css" />
              <img
                alt="javascript"
                class="w-8 h-8"
                :src="devIcons.javascript"
              />
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
  </div>

  <div class="text-center pt-8 text-lg">
    <a
      class="text-zinc-600 dark:text-primary"
      rel="noopener noreferrer"
      href="https://github.com/search?l=&o=desc&q=user%3Abrysonbw&s=updated&type=Repositories"
      >View more projects</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { devIcons } from '@/utils/devicons';
export default defineComponent({
  data() {
    return {
      devIcons,
    };
  },
});
</script>

<style scoped>
.heading2XlPortfolio {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem, 0;
}
.headingMdProject {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 1em;
}
.fb {
  font-size: 2rem;
  color: #f3c72e;
}
</style>
