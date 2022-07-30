import Navbar from '../components/navbar'
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css'

import React from "react";
import Layout from '../components/Layout';
import Cursor from '../lib/Cursor';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Cursor>
          <Head>
            <title>yao's digital playground</title>
            <meta property="og:title" content="yao's digital playground" />
            <meta property="og:description" 
            content = "Yao and he's online space where he plays around with Javascript"/>
            <link rel="icon" href="/bird.png" />
          </Head>
          <Navbar />
          <Component {...pageProps} className="relative"/>
        </Cursor>
      </Layout>
      
      
    </>
  );
}

export default MyApp
