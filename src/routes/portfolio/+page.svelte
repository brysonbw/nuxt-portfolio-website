<script lang="ts">
    import Contact from "$lib/components/Contact.svelte";
    import Github from "$lib/components/Github.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import TechStack from "$lib/components/TechStack.svelte";
    import Languages from "$lib/components/Languages.svelte";
    import avatarImage from '$lib/images/bryson-avatar.jpg'
    </script>
    
    <svelte:head>
        <title>Bryson Ward | Portfolio</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
              
    </svelte:head>
    
    
        <a href="/">
          <img
            src={avatarImage}
            class="borderCircle mx-auto"
            height={108}
            width={108}
            alt="bryson-avatar-img"
          />
        </a>
    
    
    
    <div>
        <!-- Languages --->
        <Languages />
         <!-- Tech Stack --->
         <TechStack />
           <!-- Projects --->
           <Projects />
           <!-- Github --->
           <Github />
            <!-- Contact --->
            <Contact />
    </div>
    <div style="margin: 3rem 0 0;">
             
      <a class="text-zinc-600 dark:text-primary" href="/">← Back to home</a>
    
    </div>
    
    
    <style>
         .borderCircle {
        border-radius: 9999px;
      }
    </style>