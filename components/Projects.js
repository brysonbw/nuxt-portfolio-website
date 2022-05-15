import Image from 'next/image'
import React from 'react'
import utilStyles from '../styles/utils.module.css'



export default function Projects() {
  return (
      <>
    <header className='header text-center mt-20'>
     <h1 className={utilStyles.heading2XlPortfolio}>Projects</h1>
     <h1 className={utilStyles.headingMdProject }>  These are some of my projects, apps, & dapps</h1>
         </header>
         {/** Projects */}
         <div className="container mx-auto px-5">
         <div
            className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-2">
       <div className='transition  ease-in-out  hover:scale-105 duration-300 mt-7'>
       <a href="https://devlink-sbs.vercel.app/"
              className="mx-auto md:mx-0">
               <Image src='/images/dev-link-home.jpg'
                    width={1240}
                    height={620}
                    
                   layout="responsive"
                    alt="dev-link-app-preview-img" />
           </a>
       </div>
                 

       <div className='transition  ease-in-out  hover:scale-105 duration-300 mt-7'>
                <a href="https://grubshare.netlify.app/"
              className="mx-auto md:mx-0 ">
               <Image src='/images/grubshare-app.jpg'
                    width={1240}
                    height={620}
                   layout="responsive"
                    alt="grubshare-app-preview-img" />
           </a>
                </div>
                

                <div className='transition  ease-in-out  hover:scale-105 duration-300 mt-7'>
           <a href="https://my-running-log.netlify.app/"
              className="mx-auto md:mx-0 ">
               <img src='/images/my-running-log-app.jpg'
                   width={1240}
                   height={620}
                  layout="responsive"
                    alt="my-running-log-app-preview-img" />
           </a>
           </div>


           <div className='transition  ease-in-out  hover:scale-105 duration-300 mt-7'>
           <a href="https://web3-counter-dapp.netlify.app/"
              className="mx-auto md:mx-0">
               <img src='/images/solana-counter-dapp.jpg'
                     width={1240}
                     height={620}
                    layout="responsive"
                    alt="solana-counter-dapp-preview-img" />
           </a>
           </div>
           </div>
       </div>
       
         </>
  )
}
