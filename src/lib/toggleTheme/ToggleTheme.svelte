<script lang="ts">
    import { browser } from '$app/environment'
    import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
  import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte'

let darkMode = true;

function handleSwitchDarkMode() {
    darkMode = !darkMode;

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    darkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
}

</script>

    <button
    type="checkbox" id="theme-toggle" 
    checked={darkMode}
    class="w-7 h-7 sm:h-8"
    on:click={handleSwitchDarkMode}
  >
    <MoonIcon for="theme-toggle" class="hidden text-zinc-500 dark:block" />
    <SunIcon for="theme-toggle" class="block text-zinc-400 dark:hidden" />
    </button>


<style lang="postcss">
	#theme-toggle:not(:checked) {

	}

	#theme-toggle:checked {
		@apply block
	}
</style>
