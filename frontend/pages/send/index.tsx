import type { NextPage } from 'next';
import { useMetaMask } from 'metamask-react'
import { Text } from '../../src/beacon/text';
import { SendWave } from '../../src/components/ContractWrite/SendWave';
import { MetaMasked } from '../../src/beacon/metamasked';

import styles from './index.module.scss'

const Send: NextPage = () => {
    const { account, chainId } = useMetaMask();
  
    return (
      <main className={styles.container}>
        <MetaMasked account={account} chainId={chainId}>
            <div className={styles.content}>
                <Text className={styles.title}>Send a Wave</Text>
                <SendWave user={account as string}/>
            </div>
        </MetaMasked>
      </main>
    )
  }
  
  export default Send