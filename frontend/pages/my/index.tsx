import type { NextPage } from 'next';
import { useMetaMask } from 'metamask-react'
import { Text } from '../../src/beacon/text';
import { MyWaves } from '../../src/components/ContractRead/MyWaves';
import { MetaMasked } from '../../src/beacon/metamasked';

const My: NextPage = () => {
    const { account, chainId } = useMetaMask();
  
    return (
      <main className="my">
      <Text className="font-bold text-5xl">Your Waves</Text>
        <MetaMasked account={account} chainId={chainId}>
          <MyWaves/>
        </MetaMasked>
      </main>
    )
  }
  
  export default My