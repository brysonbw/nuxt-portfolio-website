<script lang="ts">
    import devLink from '../components/images/dev-link-home.jpg'
    import grubShare from '../components/images/grubshare-app.jpg'
    import truthy from '../components/images/truthy-app.jpg'
    import solanaCounter from '../components/images/solana-counter-dapp.jpg'
   
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
          <div class='transition  ease-in-out  hover:scale-105 duration-300 mt-7'>
          <a href="https://devlink-sbs.vercel.app/"
                 class="mx-auto md:mx-0">
                  <img src={devLink}
                       width={1240}
                       height={620}
                       
                     
                       alt="dev-link-app-preview-img" />
              </a>
          </div>
   
   
          <div class='transition  ease-in-out  hover:scale-105 duration-300 mt-7'>
              <a href="https://truthy-sbs.web.app/"
                 class="mx-auto md:mx-0 ">
                  <img src={truthy}
                      width={1240}
                      height={620}
                    
                       alt="truthy-app-preview-img" />
              </a>
              </div>
                    
   
          <div class='transition  ease-in-out  hover:scale-105 duration-300 mt-7'>
                   <a href="https://grubshare.netlify.app/"
                 class="mx-auto md:mx-0 ">
                  <img src={grubShare}
                       width={1240}
                       height={620}
                      
                       alt="grubshare-app-preview-img" />
              </a>
                   </div>
                   
   
   
              <div class='transition  ease-in-out  hover:scale-105 duration-300 mt-7'>
              <a href="https://web3-counter-dapp.netlify.app/"
                 class="mx-auto md:mx-0">
                  <img src={solanaCounter}
                        width={1240}
                        height={620}
                       
                       alt="solana-counter-dapp-preview-img" />
              </a>
              </div>
              </div>
          </div>
</div>

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
  }

</style>