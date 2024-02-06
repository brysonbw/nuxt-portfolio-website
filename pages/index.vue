<template>
  <div>
    <!-- Header/Image-->
    <header class="header">
      <img
        src="~/assets/images/bryson-avatar.jpg"
        class="borderCircle mx-auto h-36 w-36"
        alt="bryson-avatar-img"
      />

      <!-- Social Links -->
      <SocialLinks />

      <h1 class="heading2Xl text-[#18181B] dark:text-white">Hey, I'm Bryson</h1>
      <h1 class="heading2XlTitle text-[#18181B] dark:text-white">
        a full stack engineer
      </h1>
    </header>

    <!-- Intro-->
    <section class="headingMd">
      <p>
        I enjoy all things tech and software, and primarily create, design, and
        build full stack web and mobile applications. I love learning and
        discovering new technologies, and challenging myself to solve real-world
        problems. And most importantly creating the change I want to see in the
        world!
      </p>
      <!--Portfolio-->
      <p class="mt-4">
        <NuxtLink
          to="/portfolio"
          class="text-zinc-600 font-medium dark:text-primary"
        >
          Portfolio: Skills & Projects</NuxtLink
        >
      </p>
      <!--Blog-->
      <p class="mt-4">
        <NuxtLink
          to="/blog"
          class="text-zinc-600 font-medium dark:text-primary"
        >
          Blog</NuxtLink
        >
      </p>
      <!--Certificates-->
      <p class="mt-4 text-zinc-600 font-medium dark:text-primary">
        Certificates
      </p>
      <ul
        class="list-disc marker:dark:text-primary marker:text-zinc-600 ml-[1rem]"
      >
        <li>
          <a href="/pdf/sec-cert.pdf" target="_blank">Security+ (SY0-601)</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialLinks from '@/components/SocialLinks.vue';
export default defineComponent({
  components: { SocialLinks },
  data() {
    return {};
  },
});
</script>
