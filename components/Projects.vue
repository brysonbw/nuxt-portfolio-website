<template>
  <div>
    <!--Header-->
    <header class="header text-center mt-20 mb-2">
      <h1 class="heading2XlPortfolio text-[#18181B] dark:text-white">
        Projects
      </h1>
    </header>
    <!--Projects-->
    <div class="container mx-auto px-5">
      <div
        class="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-2"
      >
       <!--Project Card-->
       <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
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

<script lang="ts" setup>
import { ref } from 'vue'
import { projects_list } from '@/utils/projects';

const projects = ref(projects_list)

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
