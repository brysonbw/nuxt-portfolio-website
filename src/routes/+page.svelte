  <script lang="ts">
      import SocialLinks from '$lib/components/SocialLinks.svelte';
import avatarImage from '$lib/images/bryson-avatar.jpg'
   </script>
   
   
   <svelte:head>
       <title>Bryson Ward | Home</title>
   </svelte:head>
   
       <header class='header'>
               <img       
               src={avatarImage}
                 class='borderCircle mx-auto'
                 height={144}
                 width={144}
                 alt='bryson-avatar-img'
               />
               

               <!-- social links -->
              <SocialLinks />

               <h1 class='heading2Xl text-[#18181B] dark:text-white'>Hey, I'm Bryson</h1>
               <h1 class='heading2XlTitle text-[#18181B] dark:text-white'>a full stack engineer</h1>
             
             </header>
   
             
             <!-- Intro-->
   
   <section class='headingMd'>
       <p>I enjoy all things tech and software, and primarily create, design, and build full stack web and mobile applications. I love learning and discovering new technologies, and challenging myself to solve real-world problems. And most importantly creating the change I want to see in the world!</p>
       <p class='mt-4'>
        
           <a href='/portfolio' class="text-zinc-600 font-medium dark:text-primary" > Portfolio: Skills & Projects</a>
       </p>
      
      <!--  <p class='mt-4 text-[#18181B] dark:text-white'>
           Follow Me Online
       </p>
       <p>
           <a href='https://discordapp.com/users/805262289119739924'>Discord</a>
       </p>
       <p>
           <a href='https://github.com/brysonbw'>Github</a>
       </p>
       <p>
           <a href='https://www.linkedin.com/in/bryson-ward-b54085118/'>LinkedIn</a>
       </p> -->
       
     </section>
      
       
         
   
     <style>
    .headingMd {
       font-size: 1.2rem;
       line-height: 1.5;
     }
   
     .borderCircle {
       border-radius: 9999px;
     }
   
   
     .heading2XlTitle {
       font-size: 2.5rem;
       line-height: 1.2;
       font-weight: 800;
       letter-spacing: -0.05rem;
       margin: 0;
       margin-bottom: 1em;
       text-align: center;
     }
   
     .heading2Xl {
       font-size: 2.5rem;
       line-height: 1.2;
       font-weight: 800;
       letter-spacing: -0.05rem;
       margin: 1rem 0;
       text-align: center;
     }

     </style>