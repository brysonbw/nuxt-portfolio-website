<script lang="ts">
import devLink from '$lib/images/dev-link-home.jpg'
import supabase from '$lib/images/supabase-logo.jpg'
import gogoPikachu from '$lib/images/gogo-pikachu.png'
import techNoise from '$lib/images/tn-landing.png'
import nextLg from '$lib/images/nextjs-lg.jpg'
import { devIcons } from '../utils/devIcons';
import jotDownVscode from '$lib/images/vscode-jot-down.jpg'
</script>

<div>
    <header class='header text-center mt-20'>
        <h1 class="heading2XlPortfolio text-[#18181B] dark:text-white">Projects</h1>
        <h1 class='headingMdProject'>  These are some of my projects, apps, & games</h1>
            </header>
           <!--Projects-->
            <div class="container mx-auto px-5">
            <div
               class="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-2">

               <!-- Card -->
               <div class="max-w-sm transition  ease-in-out  hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]">
                <div
                 class="mx-auto md:mx-0">
                  <img src={devLink}
                       width={1240}
                       height={620}
                       class="rounded-t-lg"
                     
                       alt="dev-link-app-preview-img" />
                      </div>
          <div class="p-3">
            <a  class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white" href="https://devlink-sbs.vercel.app/">
                DevLink
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">A tool to help developers share their skills, social profile links, website portfolio, and more with just one link.</p>
            <div class="flex flex-wrap gap-2">
              <!-- devIcons -->
              <img alt="next-js" class="w-8 h-8" src={nextLg} />
              <img alt="react-js" class="w-8 h-8" src={devIcons.react} />
              <img alt="tailwind" class="w-8 h-8" src={devIcons.tailwindCss} />
              <img alt="supabase" class="w-8 h-8 " src={supabase} />
              <img alt="postgres" class="w-8 h-8" src={devIcons.postgres} />
              <img alt="html" class="w-8 h-8" src={devIcons.html} />
              <img alt="css" class="w-8 h-8" src={devIcons.css} />
              <img alt="javascript" class="w-8 h-8" src={devIcons.javascript} />
          </div>
        </div>
          </div>
          <!-- End Card -->


          <!-- Card -->
<div class="max-w-sm transition  ease-in-out  hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]">
  <div
   class="mx-auto md:mx-0">
    <img src={techNoise}
         width={1240}
         height={620}
         class="rounded-t-lg"
       
         alt="tech-noise-app-preview-img" />
        </div>
<div class="p-3">
<a  class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white" href="https://tech-noise-io.vercel.app/">
  Tech Noise
</a>
<p class="mb-1 font-normal text-gray-700 dark:text-gray-300">A social news/network mobile app focusing on computer science and entrepreneurship.
<br />
  <a class="font-normal text-gray-700 dark:text-gray-300 underline hover:no-underline" href="https://play.google.com/store/apps/details?id=com.technoiseio.technoise">Download on Google Play Store</a>
</p>
<div class="flex flex-wrap gap-2">
<!-- devIcons -->
<img alt="react-js" class="w-8 h-8" src={devIcons.react} />
<img alt="expo" class="w-8 h-8" src='https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s' />
<img alt="html" class="w-8 h-8" src={devIcons.html} />
<img alt="css" class="w-8 h-8" src={devIcons.css} />
<img alt="typescript" class="w-8 h-8" src={devIcons.typescript} />
<i 
class="fb devicon-firebase-plain colored"
></i>
</div>
</div>
</div>
<!-- End Card -->
   
    

<!-- Card -->
<div class="max-w-sm transition  ease-in-out  hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]">
  <div
   class="mx-auto md:mx-0">
    <img src={jotDownVscode}
         width={1240}
         height={620}
         class="rounded-t-lg"
       
         alt="vscode-jot-down-preview-img" />
        </div>
<div class="p-3">
<a  class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white" href="https://marketplace.visualstudio.com/items?itemName=brysonbw.jot-down">
  Jot Down
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-300">A Visual Studio Code Extension for quick and simple note taking.</p>
<div class="flex flex-wrap gap-2">
<!-- devIcons -->
<img alt="vscode" class="w-8 h-8" src={devIcons.vscode} />
<img alt="svelte" class="w-8 h-8" src={devIcons.svelte} />
<img alt="node" class="w-8 h-8" src={devIcons.node} />
<i class="devicon-express-original md:text-3xl text-[1.95rem] ml-[.01rem] text-black dark:text-white"></i>
<img alt="postgresql" class="w-8 h-8" src={devIcons.postgres} />
<img alt="html" class="w-8 h-8" src={devIcons.html} />
<img alt="css" class="w-8 h-8" src={devIcons.css} />
<img alt="javascript" class="w-8 h-8" src={devIcons.javascript} />
<img alt="typescript" class="w-8 h-8" src={devIcons.typescript} />
</div>
</div>
</div>
<!-- End Card -->
   

<!-- Card -->
<div class="max-w-sm transition  ease-in-out  hover:scale-105 duration-300 bg-white  rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]">
  <div
   class="mx-auto bg-black rounded-t-lg  md:mx-0">
    <img src={gogoPikachu}
         class="rounded-t-lg w-full h-[7.2rem] object-scale-down"
         alt="gogo-pikachu-preview-img" />
        </div>
<div class="p-3">
<a  class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white" href="https://gogo-pikachu.vercel.app/">
  GoGo Pikachu
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-300">A 2D Phaser HTML5 Platform Game. Collect Thunder Stones to level up Pikachu!</p>
<div class="flex flex-wrap gap-2">
<!-- devIcons -->
<img alt="vscode" class="w-8 h-8" src='https://raw.githubusercontent.com/photonstorm/phaser/v2.6.2/resources/Phaser%20Logo/PNG/Phaser%20Logo%20Web%20Quality.png' />
<img alt="html" class="w-8 h-8" src={devIcons.html} />
<img alt="css" class="w-8 h-8" src={devIcons.css} />
<img alt="javascript" class="w-8 h-8" src={devIcons.javascript} />
</div>
</div>
</div>
<!-- End Card -->
                    

              </div>
          </div>
          
</div>

<!-- text-[#18181B] -->

<div class="text-center pt-8 text-lg"><a class="text-zinc-600 dark:text-primary" href="https://github.com/search?l=&o=desc&q=user%3Abrysonbw&s=updated&type=Repositories">View more projects</a></div> 

<style>
   .heading2XlPortfolio {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem, 0;
  }

  .headingMdProject {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 1rem;
    margin-bottom: 1em;
  }


  .fb {
    font-size: 2rem;
    color: #F3C72E; 
  }

</style>