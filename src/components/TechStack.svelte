<script lang="ts">
   import nextLg from '../components/images/nextjs-lg.jpg'
   import express from '../components/images/express.jpg'
</script>

<div>
    <header class='header text-center mt-20'>
        <h1 class='heading2Xl'>Tech Stack</h1>
            </header>
            <!--Front End-->
            <div class=" flex flex-col sm:flex-row justify-center">
   
               <div class="mb-2 flex items-center justify-center sm:justify-start">
   
               <div class='mr-3'>
               <img 
               width={50}
               height={50}
               alt="react" 
               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
               />
               </div>
   
               <img
               width={50}
               height={50}
               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
               alt="svelte"
           
           />
   
               <div class='ml-3'>
               <img 
           width={50}
           height={50}
   
           alt="tailwind" 
           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
           />
               </div>
   
   
   
               </div>
               </div>
   
   <!-- Backend-->
               <div class="flex flex-col sm:flex-row justify-center mt-2">
               <div class="mb-1  flex items-center justify-center sm:justify-start">
               <div class='mr-3'>
               <img 
           width={50}
           height={50}
   
           alt="node" 
           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
           />
               </div>
   
               <div class='mr-3'>
               <img 
           width={50}
           height={50}
   
           alt="next" 
           src={nextLg}
           />
        </div>  
            
               <img
               src={express}
               alt="express"
           width={50}
           height={50}
           
           />
           </div>
           </div>
              
             <!-- Database-->
           <div class="flex flex-col sm:flex-row justify-center mt-3 ml-3">
           <div class="flex items-center justify-center sm:justify-start">
              <div class='mr-3'>
               <img 
           width={50}
           height={50}
   
           alt="mysql" 
           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
           />
               </div>
   
               <div class='mr-3'>
               <img 
           width={50}
           height={50}
   
           alt="psql" 
           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
           />
               </div>
   
               <div class='mr-3'>
               <img 
           width={50}
           height={50}
   
           alt="mongo" 
           src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" 
           />
               </div>
               </div>
                
               </div>

               <div class="flex flex-col sm:flex-row justify-center mt-4 ml-3">
                <div class="flex items-center justify-center sm:justify-start">
                      <!-- django -->
               <div class="mr-3">
                <i 
               class="dj devicon-django-plain"
               ></i>
               </div>

               <!-- Firebase -->
               <div class=" ">
                <i 
               class="fb devicon-firebase-plain colored"
               ></i>
               </div>

                    </div>
                    </div>

             
   
               
</div>

<style>
   .heading2Xl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }

  .dj {
    font-size: 2rem;
    color: #44B78B;
  }

  .fb {
    font-size: 2rem;
    color: #F3C72E; 
  }
</style>