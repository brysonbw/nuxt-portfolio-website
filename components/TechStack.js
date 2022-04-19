import Image from 'next/image'
import React from 'react'
import utilStyles from '../styles/utils.module.css'
import { SiExpress, SiNextdotjs} from 'react-icons/si'



export default function TechStack() {
  return (
      <>
    <header className='header text-center mt-20'>
     <h1 className={utilStyles.heading2Xl}>Tech Stack</h1>
         </header>
         {/** Front End */}
         <div className="flex flex-col sm:flex-row justify-center">

            <div className="flex items-center justify-center sm:justify-start">

            <div className='mr-3'>
            <Image 
            width={50}
            height={50}
            alt="react" 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
            />
            </div>

            <SiNextdotjs
        className="text-white text-[2.4rem]"
        />

            <div className='ml-3'>
            <Image 
        width={50}
        height={50}

        alt="tailwind" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
        />
            </div>



            </div>
            </div>

{/** Backend */}
            <div className="flex flex-col sm:flex-row justify-center mt-2">
            <div className="flex items-center justify-center sm:justify-start">
            <div className='mr-3'>
            <Image 
        width={50}
        height={50}

        alt="javascript" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
        />
            </div>

         
            <SiExpress 
        width={50}
        height={50}
        className="text-white text-5xl"
        />
        </div>
        </div>
           
           {/** Database */}
        <div className="flex flex-col sm:flex-row justify-center mt-3 ml-3">
        <div className="flex items-center justify-center sm:justify-start">
           <div className='mr-3'>
            <Image 
        width={50}
        height={50}

        alt="mysql" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
        />
            </div>

            <div className='mr-3'>
            <Image 
        width={50}
        height={50}

        alt="psql" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
        />
            </div>

            <div className='mr-3'>
            <Image 
        width={50}
        height={50}

        alt="mongo" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" 
        />
            </div>
            </div>
            </div>

            
           

    
         </>
  )
}