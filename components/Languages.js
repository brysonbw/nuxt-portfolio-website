import Image from 'next/image'
import React from 'react'
import utilStyles from '../styles/utils.module.css'
import { FaRust} from 'react-icons/fa'


export default function Languages() {
  return (
      <>
    <header className='header text-center'>
     <h1 className={utilStyles.heading2Xl}>Languages</h1>
         </header>
         {/** Languages */}
         <div className="flex flex-col sm:flex-row ml-[1rem] justify-center">

            <div className="flex items-center justify-center sm:justify-start">
            <div className='pr-[1em]'>
            <Image 
            width={50}
            height={50}
            alt="javascript" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            />
    </div>

        <div className='pr-[1em]'>
            <Image 
           width={50}
           height={50}
            alt="typescript" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
            />
     </div>
           
            <FaRust
            className='text-[#ff7214] text-[2.7rem]' 
            />
           
           

           <div className='pr-[.7em] pl-[1em]'>
            <Image 
           width={50}
           height={50}
          
            alt="html" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
            />
          </div>
            
          <div className='pr-[1em]'>
            <Image 
           width={50}
           height={50}
           style={{paddingRight: '.5em'}}
            alt="css" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
            />
             </div>
    </div>
    </div>

    
         </>
  )
}
