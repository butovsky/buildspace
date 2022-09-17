import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MetaMaskProvider } from "metamask-react";
import '../styles/globals.css'
import { Header } from '../src/components/Header';
import { AlchemyProvider } from '../src/contexts/alchemy';
import { ButovskyNFTProvider } from '../src/contexts/butovskyNFT';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen flex flex-col bg-gradient-to-br from-blue-900 to-cyan-600'>
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
