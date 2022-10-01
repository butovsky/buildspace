import type { NextPage } from 'next'
import Link from 'next/link';
import { useMetaMask } from 'metamask-react';
import { Text } from '../src/beacon/text'
import { Button } from '../src/beacon/button';
import { MetaMasked } from '../src/beacon/metamasked';

const Home: NextPage = () => {
  const { account, chainId } = useMetaMask();

  return (
    <main className="home">
      <Text className="font-bold text-5xl">Welcome to Wave Portal!</Text>
      <MetaMasked account={account} chainId={chainId}>
        <div className='menu'>
          <Link href='/my'>
            <Button>See my Waves</Button>
          </Link>
          <Link href='/send'>
            <Button>Send a Wave</Button>
          </Link>
        </div>
      </MetaMasked>
    </main>
  )
}

export default Home
