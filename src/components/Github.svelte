<script lang="ts">
   import githubLogo from '../components/images/GitHub-Mark-Light-120px-plus.png'
</script>

<div>
    <header class='header text-center mt-20'>
        <h1 class='heading2Xl'>Latest Code</h1>
            </header>
            <!--Github-->
            <div class="flex flex-col sm:flex-row  justify-center">
   
               <div class="flex items-center justify-center sm:justify-start">
              
              <a href="https://github.com/brysonbw" class='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
                <img 
                src={githubLogo}
                width={55}
                height={55}
                
                alt="github-logo"/>
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