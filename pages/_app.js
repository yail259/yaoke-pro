import Navbar from '../components/navbar'
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>yao's digital playground</title>
        <meta property="og:title" content="yao's digital playground" />
        <meta property="og:description" 
        content = "Yao and he's online space where he plays around with Javascript"/>
        <link rel="icon" href="/bird.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} className="relative"/>
    </>
  );
}

export default MyApp
