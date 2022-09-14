import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MetaMaskProvider } from "metamask-react";
import '../styles/globals.css'
import { Header } from '../src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen flex flex-col bg-gradient-to-br from-blue-900 to-cyan-600'>
      <MetaMaskProvider>
        <Head>
          <title>Buildspace Intro</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <Component {...pageProps} />
      </MetaMaskProvider>
    </div>
  )
}

export default MyApp
