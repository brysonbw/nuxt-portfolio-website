<template>
  <div>
    <header class="header text-center">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">
        Languages
      </h1>
    </header>
    <!-- Languages -->
    <div class="flex flex-col sm:flex-row justify-center">
      <div class="flex items-center justify-center">
        <img
          width="50"
          alt="javascript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        >

        <img
          width="50"
          class="ml-[.7rem]"
          alt="typescript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        >

        <img
          width="50"
          class="ml-2"
          alt="html"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        >
        <img
          width="50"
          class="ml-1"
          alt="css"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        >
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
</style>
