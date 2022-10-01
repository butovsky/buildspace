import type { NextPage } from 'next'
import Link from 'next/link';
import { useMetaMask } from 'metamask-react';
import { Text } from '../src/beacon/text'
import { Button } from '../src/beacon/button';
import { MetaMasked } from '../src/beacon/metamasked';

import styles from './index.module.scss';

const Home: NextPage = () => {
  const { account, chainId } = useMetaMask();

  return (
    <main className={styles.container}>
      <Text className={styles.title}>Welcome to Wave Portal!</Text>
      <MetaMasked account={account} chainId={chainId}>
        <div className={styles.menu}>
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
