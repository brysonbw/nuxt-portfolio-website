import Image from 'next/image'
import React from 'react'
import utilStyles from '../styles/utils.module.css'



export default function Web3() {
  return (
      <>
    <header className='header text-center mt-20'>
     <h1 className={utilStyles.heading2Xl}>Web3/Blockchain</h1>
         </header>
         {/** Web3 */}
         <div className="flex flex-col sm:flex-row ml-[1rem] justify-center">

            <div className="flex items-center justify-center sm:justify-start">

            <div className='pr-[1em]'>
            <Image 
            width={50}
            height={50}
            alt="solana" 
            src="/images/solana-logo.jpg"
            />
    </div>

        <div className='pr-[1em]'>
            <Image 
           width={50}
           height={50}
            alt="anchor" 
            src="https://camo.githubusercontent.com/0542190d13e5a50f7d601abc4bfde84cf02af2ca786af519e78411f43f3ca9c0/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3831333434343531343934393130333635382f3839303237383532303535333630333039322f6578706f72742e706e673f77696474683d373436266865696768743d373436"
            />
     </div>
           
         
    </div>
    </div>

    
         </>
  )
}
