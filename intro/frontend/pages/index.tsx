import type { NextPage } from 'next'
import Link from 'next/link';
import { useMetaMask } from 'metamask-react';
import { Text } from '../src/beacon/text'
import { Button } from '../src/beacon/button';

const Home: NextPage = () => {
  const { account } = useMetaMask();

  return (
    <div className='h-full'>
      <main className="flex flex-col justify-center items-center h-full gap-y-5">
        <Text className="font-bold text-5xl">Welcome to Wave Portal!</Text>
        { account
          ? <div className='flex flex-row gap-x-3'>
              <Link href='/my'>
                <Button>{'See my Waves'}</Button>
              </Link>
              <Link href='/send'>
                <Button>{'Send a Wave'}</Button>
              </Link>
            </div>
          : <Text className="text-3xl">Please connect you account with MetaMask!</Text>
        }
      </main>
    </div>
  )
}

export default Home
