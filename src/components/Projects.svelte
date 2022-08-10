<script lang="ts">
    import devLink from '../components/images/dev-link-home.jpg'
    import solanaBalanceChecker from '../components/images/solana-balance-checker.jpg'
    import itunesSongSearch from '../components/images/itunes-artist-song-search .jpg'
    import animeSocialChat from '../components/images/anime-social-chat.jpg'
    import supabase from '../components/images/supabase-logo.jpg'
    import chatboard from '../components/images/chatboard.jpg'
    import etrack from '../components/images/e-track.png'
import solana from '../components/images/solana-logo.jpg'
import nextLg from '../components/images/nextjs-lg.jpg'
import socketio from '../components/images/socketio.jpg'
import { devIcons } from '../utils/devIcons';
import expressLg from '../components/images/express-lg.jpg'
import jotDownVscode from '../components/images/vscode-jot-down.jpg'
</script>

<div>
    <header class='header text-center mt-20'>
        <h1 class="heading2XlPortfolio">Projects</h1>
        <h1 class='headingMdProject'>  These are some of my projects, apps, & dapps</h1>
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
      <img src={etrack}
           width={1240}
           height={620}
           class="rounded-t-lg"
         
           alt="etrack-preview-img" />
          </div>
  <div class="p-3">
  <a  class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white" href="https://etrack-io.herokuapp.com/">
   E-Track
  </a>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">An employee management system. Features: user login/signup (authentication and authorization), password reset, CRUD employee records, pagination, export/download CSV file of employee records/lists.</p>
  <div class="flex flex-wrap gap-2">
  <!-- devIcons -->
  <i alt="django" class="dj w-8 h-8 devicon-django-plain" ></i>
  <img alt="postgreSQL" class="w-8 h-8" src={devIcons.postgres} />
  <img alt="html" class="w-8 h-8" src={devIcons.html} />
  <img alt="css" class="w-8 h-8" src={devIcons.css} />
  <img alt="python" class="w-8 h-8" src={devIcons.python} />
  </div>
  </div>
  </div>
  <!-- End Card -->

                    
   
          <!-- Card -->
<div class="max-w-sm transition  ease-in-out  hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]">
  <div
   class="mx-auto md:mx-0">
    <img src={animeSocialChat}
         width={1240}
         height={620}
         class="rounded-t-lg"
       
         alt="anime-social-chat-preview-img" />
        </div>
<div class="p-3">
<a  class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white" href="https://anime-social-chat.herokuapp.com/">
  Anime Real-Time Public Social Chat Room
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-300">Chat with other anime enthusiasts. Anonymous users can create and read real-time messages.</p>
<div class="flex flex-wrap gap-2">
<!-- devIcons -->
<img alt="react-js" class="w-8 h-8" src={devIcons.react} />
<img alt="tailwind" class="w-8 h-8" src={devIcons.tailwindCss} />
<img alt="node" class="w-8 h-8" src={devIcons.node} />
<img alt="express" class="w-8 h-8" src={expressLg} />
<img alt="socketio" class="w-8 h-8" src={socketio} />
<img alt="mongoDB" class="w-8 h-8" src={devIcons.mongoDB} />
<img alt="html" class="w-8 h-8" src={devIcons.html} />
<img alt="css" class="w-8 h-8" src={devIcons.css} />
<img alt="javascript" class="w-8 h-8" src={devIcons.javascript} />
<img alt="typescript" class="w-8 h-8" src={devIcons.typescript} />
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
<p class="mb-3 font-normal text-gray-700 dark:text-gray-300">A Visual Studio Code Extension for quick and simple note taking. API/server for extension written in node/express using 'passport-github' for authenticating with GitHub, and postgreSQL database.</p>
<div class="flex flex-wrap gap-2">
<!-- devIcons -->
<img alt="vscode" class="w-8 h-8" src={devIcons.vscode} />
<img alt="svelte" class="w-8 h-8" src={devIcons.svelte} />
<img alt="node" class="w-8 h-8" src={devIcons.node} />
<img alt="express" class="w-8 h-8" src={expressLg} />
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
<div class="max-w-sm transition  ease-in-out  hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]">
  <div
   class="mx-auto md:mx-0">
    <img src={itunesSongSearch}
         width={1240}
         height={620}
         class="rounded-t-lg"
       
         alt="itunes-song-search-app-preview-img" />
        </div>
<div class="p-3">
<a  class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white" href="https://itunes-artist-song-search.vercel.app/">
  iTunes Artist Song Search
</a>
<p class="mb-1 font-normal text-gray-700 dark:text-gray-300">Anonymous users can read/search 50 artist's songs, read detailed song, and play song preview.</p>
<div class="mb-3"><a href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1" class="mb-3 font-normal text-gray-700 dark:text-gray-300">API: iTunes Search API</a></div>
<div class="flex flex-wrap gap-2">
<!-- devIcons -->
<img alt="svelte" class="w-8 h-8" src={devIcons.svelte} />
<img alt="tailwind" class="w-8 h-8" src={devIcons.tailwindCss} />
<img alt="html" class="w-8 h-8" src={devIcons.html} />
<img alt="css" class="w-8 h-8" src={devIcons.css} />
<img alt="javascript" class="w-8 h-8" src={devIcons.javascript} />
<img alt="typescript" class="w-8 h-8" src={devIcons.typescript} />
</div>
</div>
</div>
<!-- End Card -->


          
              <!-- Card -->
              <div class="max-w-sm transition  ease-in-out  hover:scale-105 duration-300 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#171717] dark:border-[#2b2b2bc5]">
                <div
                 class="mx-auto md:mx-0">
                  <img src={solanaBalanceChecker}
                       width={1240}
                       height={620}
                       class="rounded-t-lg"
                     
                       alt="solana-balance-checker-preview-img" />
                      </div>
              <div class="p-3">
              <a  class="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white" href="https://solana-balance-checker.vercel.app/">
                Solana Balance Checker
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">Anonymous users can input pubKey and read their SOL balance.</p>
              <div class="flex flex-wrap gap-2">
              <!-- devIcons -->
              <img alt="next-js" class="w-8 h-8" src={nextLg} />
              <img alt="react-js" class="w-8 h-8" src={devIcons.react} />
              <img alt="tailwind" class="w-8 h-8" src={devIcons.tailwindCss} />
              <img alt="html" class="w-8 h-8" src={devIcons.html} />
              <img alt="css" class="w-8 h-8" src={devIcons.css} />
              <img alt="javascript" class="w-8 h-8" src={devIcons.javascript} />
              <img alt="typescript" class="w-8 h-8" src={devIcons.typescript} />
              <img alt="solana" class="w-8 h-8" src={solana} />
              </div>
              </div>
              </div>
              <!-- End Card -->
                    

              </div>
          </div>
          
</div>

<div class="text-center pt-8 text-lg"><a href="https://github.com/search?q=user%3Abrysonbw&type=Repositories&ref=advsearch&l=&l=">View more projects</a></div> 

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


  .dj {
    font-size: 2rem;
    color: #44B78B;
  }

</style>