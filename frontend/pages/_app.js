import '@/styles/globals.css'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Vedant Chaudhari | Computer Science Engineer</title>
        <meta name="description" content="Portfolio of Vedant Chaudhari - Computer Science Engineer specializing in Cybersecurity, Digital Forensics, and Full-Stack Development" />
        <meta name="keywords" content="Vedant Chaudhari, Computer Science, Cybersecurity, Digital Forensics, Full Stack Developer, Portfolio" />
        <meta name="author" content="Vedant Chaudhari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vedant Chaudhari | Computer Science Engineer" />
        <meta property="og:description" content="Computer Science Engineer specializing in Cybersecurity, Digital Forensics, and Full-Stack Development" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedant Chaudhari | Computer Science Engineer" />
        <meta name="twitter:description" content="Computer Science Engineer specializing in Cybersecurity, Digital Forensics, and Full-Stack Development" />
      </Head>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}
