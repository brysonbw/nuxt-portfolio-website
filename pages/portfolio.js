import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Contact from '../components/Contact'
import Github from '../components/Github'
import Languages from '../components/Languages'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Web3 from '../components/Web3'
import utilStyles from '../styles/utils.module.css'


export default function portfolio() {
  return (
    <Layout portfolio>
      <Head>
        <title>DevBryson | Portfolio</title>
      </Head>
     {/** Languages */}
     <Languages />
      {/** Tech Stack */}
      <TechStack />
       {/** Web3 */}
       <Web3 />
        {/** Projects */}
        <Projects />
        {/** Github */}
        <Github />
         {/** Contact */}
         <Contact />
      </Layout>
  )
}
