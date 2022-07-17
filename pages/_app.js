import Navbar from '../components/navbar'
import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css'

import React from "react";
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='App'>
        <AnimatedCursor 
        innerSize={14}
        outerSize={8}
        color='207, 159, 255'
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'Link',
          'NavbarIcon'
        ]}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}/>
        <Head>
          <title>yao's digital playground</title>
          <meta property="og:title" content="yao's digital playground" />
          <meta property="og:description" 
          content = "Yao and he's online space where he plays around with Javascript"/>
          <link rel="icon" href="/bird.png" />
        </Head>
        <Navbar />
        <Component {...pageProps} className="relative"/>
      </div>
      
    </>
  );
}

export default MyApp
