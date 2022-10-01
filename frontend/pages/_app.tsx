import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MetaMaskProvider } from "metamask-react";
import './app.scss';

import { Header } from '../src/components/Header';
import { AlchemyProvider } from '../src/contexts/alchemy';
import { ButovskyNFTProvider } from '../src/contexts/butovskyNFT';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='app'>
      <AlchemyProvider>
        <MetaMaskProvider>
          <ButovskyNFTProvider>
            <Head>
              <title>Buildspace Intro</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Component {...pageProps} />
          </ButovskyNFTProvider>
        </MetaMaskProvider>
      </AlchemyProvider>
    </div>
  )
}

export default MyApp
