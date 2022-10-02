import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MetaMaskProvider } from "metamask-react";

import './app.scss'

import { Header } from '../src/components/Header';
import { AlchemyProvider } from '../src/contexts/alchemy';
import { ButovskyNFTProvider } from '../src/contexts/butovskyNFT';
import { Footer } from '../src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlchemyProvider>
      <MetaMaskProvider>
        <ButovskyNFTProvider>
          <Head>
            <title>Buildspace Intro</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className='app'>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
          </div>
        </ButovskyNFTProvider>
      </MetaMaskProvider>
    </AlchemyProvider>
  )
}

export default MyApp
