import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'

const name = "Hey, I'm Bryson"
const position = "a full stack engineer"
export const siteTitle = "DevBryson"

export default function Layout({ children, home, portfolio }) {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/bryson-avatar.ico" />
        <meta
          name="description"
          content="DevBryson"
        />
         
        <meta
          property="og:image"
          content={'/images/bryson-avatar-square.jpg'}
        />
  
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/bryson-avatar.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h1 className={utilStyles.heading2XlTitle}>{position}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/bryson-avatar.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
          
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
    <Footer />
    </>
  )
}