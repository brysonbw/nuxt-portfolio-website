<template>
  <div>
    <header class="header text-center mt-20">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">Tech Stack</h1>
    </header>
    <!--Front End-->
    <div class="flex flex-col sm:flex-row justify-center">
      <div class="mb-2 flex items-center justify-center sm:justify-start">
        <div class="mr-3">
          <img
            width="50"
            alt="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </div>

        <img
          width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
          alt="svelte"
        />

        <div class="ml-3">
          <img
            width="50"
            alt="tailwind"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
        </div>
      </div>
    </div>

    <!-- Backend-->
    <div class="flex flex-col sm:flex-row justify-center mt-2">
      <div class="mb-1 flex items-center justify-center sm:justify-start">
        <div class="mr-3">
          <img
            width="50"
            alt="node"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
        </div>

        <div class="mr-3">
          <img width="50" alt="next" src="~/assets/images/nextjs-lg.jpg" />
        </div>

        <i
          class="devicon-express-original text-black dark:text-white text-4xl"
        ></i>
      </div>
    </div>

    <!-- Database-->
    <div class="flex flex-col sm:flex-row justify-center mt-3 ml-3">
      <div class="flex items-center justify-center sm:justify-start">
        <div class="mr-3">
          <img
            width="50"
            alt="mysql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          />
        </div>

        <div class="mr-3">
          <img
            width="50"
            alt="psql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
        </div>

        <div class="mr-3">
          <img
            width="50"
            alt="mongo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped>
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}
.fb {
  font-size: 2rem;
  color: #f3c72e;
}
</style>
