import { useMetaMask } from "metamask-react";
import { NextPage } from "next";
import { Text } from '../../src/beacon/text';
import { MetaMasked } from "../../src/beacon/metamasked";

import styles from './index.module.scss'

import { WaveBounty } from "../../src/components/ContractRead/WaveBounty";

const Bounty: NextPage = () => {
    const { account, chainId } = useMetaMask();
  
    return (
      <main className={styles.container}>
        <Text className={styles.title}>Bounty settings</Text>
        <MetaMasked account={account} chainId={chainId}>
          <WaveBounty/>
        </MetaMasked>
      </main>
    )
  }
  
  export default Bounty