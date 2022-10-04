import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MetaMaskProvider } from "metamask-react";

import './app.scss'

import { Header } from '../src/components/Header';
import { ButovskyNFTProvider } from '../src/contexts/butovskyNFT';
import { Footer } from '../src/components/Footer';
import { EventsProvider } from '../src/contexts/events';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
      <ButovskyNFTProvider>
        <EventsProvider>
          <Head>
            <title>Buildspace NFT</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className='app'>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
          </div>
        </EventsProvider>
      </ButovskyNFTProvider>
    </MetaMaskProvider>
  )
}

export default MyApp
