import Image from "next/image";
import Link from "next/link";
import React from "react";
import utilStyles from '../styles/utils.module.css'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 bg-[#171717]">
        <div className="flex flex-row items-center justify-between p-2">
         
            <Image
              priority
              src="/images/bryson-avatar.jpg"
              className={utilStyles.borderCircle}
              height={40}
              width={40}
              alt={'bryson-avatar'}
            />
          
          <p className="md:ml-2">DevBryson</p>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                 
                >
                  <a  className="font-medium text-[#bca8ff] hover:underline px-5 py-3 flex items-center transition duration-150 ease-in-out">Home</a>
                </Link>
              </li>
              {/** 
              <li>
                <Link
                  href="/blogs"
                 
                >
                  <a  className="font-medium text-[#bca8ff] hover:underline px-5 py-3 flex items-center transition duration-150 ease-in-out">Blog</a>
                </Link>
              </li>
               */}
              <li>
                <Link
                  href="/portfolio"
                 
                >
                  <a  className="font-medium text-[#bca8ff] hover:underline px-5 py-3 flex items-center transition duration-150 ease-in-out">Portfolio</a>
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}