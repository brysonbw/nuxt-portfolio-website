<template>
  <div>
    <header class="header text-center mt-20">
      <h1 class="heading2Xl text-[#18181B] dark:text-white">
        Latest Code
      </h1>
    </header>
    <!-- Github -->
    <div class="flex flex-col sm:flex-row justify-center">
      <div class="flex items-center justify-center sm:justify-start">
        <a
          target="_blank"
          class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:no-underline"
          href="https://github.com/brysonbw"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="w-16 h-16 transition fill-black group-hover:fill-zinc-600 dark:fill-white dark:group-hover:fill-zinc-300"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
