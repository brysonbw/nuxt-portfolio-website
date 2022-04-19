import React from 'react'
import utilStyles from '../styles/utils.module.css'
import { MdEmail} from 'react-icons/md'




export default function Contact() {
  return (
      <>
    <header className='header text-center mt-20'>
     <h1 className={utilStyles.heading2Xl}>Email</h1>
         </header>
         {/** Contact */}
         <div className="flex flex-col sm:flex-row  justify-center">

            <div className="flex items-center justify-center sm:justify-start">
           
           <a href="mailto:brysonward77@gmail.com" className='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>
            <MdEmail
              className='text-white text-[2.7rem]' 
            />
            </a>
    </div>
         
    </div>

    
         </>
  )
}
