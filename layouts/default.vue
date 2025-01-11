<template>
  <div>
    <!-- Navbar -->
    <TheNavbar />
    <!-- Content -->
    <div class="container">
      <slot />
    </div>
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped>
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 6rem auto 6rem;
}
</style>
