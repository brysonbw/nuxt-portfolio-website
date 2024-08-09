<template>
  <div>
    <!-- Navbar -->
    <TheNavbar />
    <div class="container">
      <slot />
    </div>
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default defineComponent({
  components: { TheNavbar, TheFooter },
  data() {
    return {};
  },
});
</script>

<style scoped>
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 6rem auto 6rem;
}
</style>
