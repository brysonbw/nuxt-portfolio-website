import Link from "next/link"

export default function Custom404() {
    return <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
               <div className="max-w-md">
                  <div className="text-5xl font-dark font-bold text-white">404</div>
                <p
                  className="text-2xl text-white md:text-3xl font-light leading-normal"
                >Page not found</p>
              <p className="mt-3 mb-8 text-white">But don't worry, you can find plenty of other things on the homepage :)</p>
              
                 <Link href='/'>
              <a className="noUnderline px-4 inline py-2 text-sm font-medium leading-5 shadow text-black transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-white hover:bg-black active:bg-black hover:text-white">back to home</a>
              </Link>
              
        </div>
      </div>
    
  }