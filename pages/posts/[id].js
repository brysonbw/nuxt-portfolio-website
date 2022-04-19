import Head from 'next/head'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

/**  
- paths contains the array of known paths returned by getAllPostIds(), 
which include the params defined by pages/posts/[id].js.
- Ignore fallback: false for now — we’ll explain that later.
*/

// export the postById function
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// get post data by id
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

  export default function Post({ postData }) {
    return (
      <Layout>
      <Head>
        <title>{postData.title} | DevBryson Blog</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </Layout>
    )
  }