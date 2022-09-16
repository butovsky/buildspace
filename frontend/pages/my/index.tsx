import type { NextPage } from 'next';
import { useMetaMask } from 'metamask-react'
import { Text } from '../../src/beacon/text';
import { MyWaves } from '../../src/components/ContractView/MyWaves';
import networks from '../../src/utils/networks';
import { MetaMasked } from '../../src/beacon/metamasked';

const My: NextPage = () => {
    const { account, chainId } = useMetaMask();
  
    return (
        <div className='h-full'>
          <main className="flex flex-col justify-center items-center h-full gap-y-10">
          <Text className="font-bold text-5xl">Your Waves</Text>
            <MetaMasked account={account} chainId={chainId}>
              <MyWaves/>
            </MetaMasked>
          </main>
        </div>
    )
  }
  
  export default My