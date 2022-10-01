import type { NextPage } from 'next';
import { useMetaMask } from 'metamask-react'
import { Text } from '../../src/beacon/text';
import { MyWaves } from '../../src/components/ContractRead/MyWaves';
import { MetaMasked } from '../../src/beacon/metamasked';

import styles from './index.module.scss'

const My: NextPage = () => {
    const { account, chainId } = useMetaMask();
  
    return (
      <main className={styles.container}>
      <Text className={styles.title}>Your Waves</Text>
        <MetaMasked account={account} chainId={chainId}>
          <MyWaves/>
        </MetaMasked>
      </main>
    )
  }
  
  export default My