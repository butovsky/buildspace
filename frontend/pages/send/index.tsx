import type { NextPage } from 'next';
import { useMetaMask } from 'metamask-react'
import { Text } from '../../src/beacon/text';
import { SendWave } from '../../src/components/SendWave';
import { MetaMasked } from '../../src/beacon/metamasked';

const Send: NextPage = () => {
    const { account, chainId } = useMetaMask();
  
    return (
        <div className='h-full'>
          <main className="flex flex-row justify-center items-center h-full gap-y-5">
            <MetaMasked account={account} chainId={chainId}>
                <div className='flex flex-col gap-y-5 items-center'>
                    <Text className="font-bold text-5xl">Send a Wave</Text>
                    <SendWave user={account as string}/>
                </div>
            </MetaMasked>
          </main>
        </div>
    )
  }
  
  export default Send