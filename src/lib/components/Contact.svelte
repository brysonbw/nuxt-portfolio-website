<script lang="ts">
  import gmailLogo from '$lib/images/Gmail_Logo_128px.png'
</script>

<div>
    <header class='header text-center mt-20'>
        <h1 class='heading2Xl text-[#18181B] dark:text-white'>Email</h1>
            </header>
            <!-- Contact-->
            <div class="flex flex-col sm:flex-row  justify-center">
   
               <div class="flex items-center justify-center sm:justify-start">
              
              <a href="mailto:brysonward77@gmail.com" class='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
                <img 
                src={gmailLogo}
                width={55}
                height={55}
                
                alt="gmail-logo"/>
               
               </a>
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
</style>