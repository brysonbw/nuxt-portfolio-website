import React from 'react'
import utilStyles from '../styles/utils.module.css'
import { BsGithub} from 'react-icons/bs'




export default function Github() {
  return (
      <>
    <header className='header text-center mt-20'>
     <h1 className={utilStyles.heading2Xl}>Latest Code</h1>
         </header>
         {/** Github */}
         <div className="flex flex-col sm:flex-row  justify-center">

            <div className="flex items-center justify-center sm:justify-start">
           
           <a href="https://github.com/brysonbw" className='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
            <BsGithub 
              className='text-white text-[2.7rem]' 
            />
            </a>
    </div>
         
    </div>

    
         </>
  )
}
