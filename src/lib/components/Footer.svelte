<script lang="ts">
   import { siteMetadata } from "$lib/utils/siteMetadata";
   /* import discord from '$lib/images/Discord-Logo-Color.png'
  import github from '$lib/images/GitHub-Mark-Light-120px-plus.png'; */
</script>

<footer>
    <div class="mt-16 flex flex-col items-center">
      <!-- <div class="mb-3 flex space-x-4">
      <a class='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='https://discordapp.com/users/805262289119739924' > <img  width={20} height={20} src={discord} alt="discord-logo"/></a> 
      <a class='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='https://github.com/brysonbw' >
        <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      class="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      />
    </svg>
      </a> 
     <a class='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='https://www.linkedin.com/in/bryson-ward-b54085118/' >
        <img width={20} height={20} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin-logo" />
      </a> 
      </div> -->
      <div class="mb-2 flex space-x-2 text-sm text-[#18181B] dark:text-gray-400">
        <div>{siteMetadata.message}
          <span class="ml-[.1em]"><a class="text-orange-500" href="https://kit.svelte.dev/">Sveltekit</a></span>
          <img class="inline-block ml-[.1em]" alt="svelte-logo" width={15} height={15} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" />
        </div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <a href="/">{siteMetadata.title}</a>
      </div>
     
    </div>
  </footer>