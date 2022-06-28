import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'


import { GiSandsOfTime } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'
import { BsFillPenFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>yao's digital playground</title>
        <meta name="description" content="yao's awesome content" />
        <link rel="icon" href="/bird.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          yao's 
          <span className={styles.cool}> cool </span>
          website
        </h1>

        <pre className={styles.description}>
          some things im working on
        </pre>

        <div className={styles.grid}>
          <Link href="programming">
            <a className={styles.card}>
              <h2> <MdComputer/> programming; </h2>
              <p>good programming resources </p>
            </a>
          </Link>
          
          <Link href="time">
            <a className={styles.card}>
              <h2> <GiSandsOfTime/> what time is it??? </h2>
              
            </a>
          </Link>
          
          <Link href="blog">
            <a className={styles.card}>

              <h2><BsFillPenFill/> fiction?!?!?!?!</h2>
              <p>why would you read fake stuff? </p>
            </a>
          </Link>
          
          <a
            href="https://crimanimal.com"
            className={styles.card}
          >
            <h2> 
            <Image src="/bird.png" alt="Jeff the bird" width={50} height={50}/>
              buy my merch
            </h2>
            <p>
              support crim_animals :)))))
            </p>
          </a>

          <a
            href="https://crimanimal.com"
            className={styles.card}
          >
            <h2> 
              big project: <br/>
              life-tracker(???) coming soon!
            </h2>
            <p>
              exciting, can't wait to be a trillionaire
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
