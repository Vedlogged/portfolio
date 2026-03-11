import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#0F172A" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="bg-background antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
