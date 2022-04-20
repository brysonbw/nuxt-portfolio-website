import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

// importing the post data -> static props
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
    
  }
}


// data can be passed in and used in Home
// mapping the data out

/** fetched external data (from the file system) 
and pre-rendered the index page with this data. */

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} | Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a full stack engineer who enjoys all things tech and software. I primarily create, design, and build full stack web and mobile applications. I love learning and discovering new technologies, and challenging myself to solve real-world problems. And most importantly creating the change I want to see in the world :)</p>
        <p className='mt-4'>
          <Link href='/portfolio'>
            <a>Portfolio: Skills & Projects</a>
          </Link>
        </p>
        <p className='mt-4'>
            Follow me online
        </p>
        <p>
            <a href='https://discordapp.com/users/805262289119739924'>Discord</a>
        </p>
        <p>
            <a href='https://github.com/brysonbw'>Github</a>
        </p>
        <p>
            <a href='https://www.linkedin.com/in/bryson-ward-b54085118/'>LinkedIn</a>
        </p>
      </section>
      {/** Blog Posts */}
      {allPostsData.length > 0 ?
        (<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>)
      : (
       null

      )}
      
    </Layout>
  )
}