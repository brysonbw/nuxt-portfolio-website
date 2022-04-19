import siteMetadata from '../utils/siteMetadata'
import Link from 'next/link'
import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs'


export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
        <a className='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='www.discordapp.com/users/805262289119739924' ><BsDiscord className='text-white' height={30} width={30} /></a> 
        <a className='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='https://www.linkedin.com/in/bryson-ward-b54085118/' ><BsGithub className='text-white' height={30} width={30} /></a> 
       <a className='transition  ease-in-out hover:-translate-y-1 hover:scale-110 duration-300' href='https://www.linkedin.com/in/bryson-ward-b54085118/' ><BsLinkedin className='text-white' height={30} width={30} /></a> 
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-white dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
       
      </div>
    </footer>
  )
}