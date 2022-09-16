import type { NextPage } from 'next'
import Link from 'next/link';
import { useMetaMask } from 'metamask-react';
import { Text } from '../src/beacon/text'
import { Button } from '../src/beacon/button';
import { MetaMasked } from '../src/beacon/metamasked';
import { useState } from 'react';
import { NFTModal } from '../src/components/Modal/NFT';

const Home: NextPage = () => {
  const { account, chainId } = useMetaMask();

  return (
    <div className='h-full'>
      <main className="flex flex-col justify-center items-center h-full gap-y-5">
        <Text className="font-bold text-5xl">Welcome to Wave Portal!</Text>
        <MetaMasked account={account} chainId={chainId}>
          <div className='flex flex-row gap-x-3'>
            <Link href='/my'>
              <Button>See my Waves</Button>
            </Link>
            <Link href='/send'>
              <Button>Send a Wave</Button>
            </Link>
          </div>
        </MetaMasked>
      </main>
    </div>
  )
}

export default Home
