<script lang="ts">
   import { siteMetadata } from "../utils/siteMetadata";
   import discord from '../components/images/Discord-Logo-Color.png'
  import Github from "../components/images/GitHub-Mark-Light-120px-plus.png";
</script>

<footer>
    <div class="mt-16 flex flex-col items-center">
      <div class="mb-3 flex space-x-4">
      <a class='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='https://discordapp.com/users/805262289119739924' > <img  width={20} height={20} src={discord} alt="discord-logo"/></a> 
      <a class='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='https://github.com/brysonbw' >
        <img  width={20} height={20} src={Github} alt="github-logo"/>
      </a> 
     <a class='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='https://www.linkedin.com/in/bryson-ward-b54085118/' >
        <img width={20} height={20} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin-logo" />
      </a> 
      </div>
      <div class="mb-2 flex space-x-2 text-sm text-white dark:text-gray-400">
        <div>{siteMetadata.message}
          <span class="ml-[.1em] "><a class="text-orange-500" href="https://kit.svelte.dev/">Sveltekit</a></span>
          <img class="inline-block ml-[.1em]" alt="svelte-logo" width={15} height={15} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" />
        </div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <a href="/">{siteMetadata.title}</a>
      </div>
     
    </div>
  </footer>