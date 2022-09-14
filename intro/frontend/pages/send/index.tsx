import type { NextPage } from 'next';
import { useMetaMask } from 'metamask-react'
import { Text } from '../../src/beacon/text';
import { SendWave } from '../../src/components/SendWave';
import { Wave } from '../../src/components/ContractView/MyWaves/Wave';

const Send: NextPage = () => {
    const { account } = useMetaMask();
  
    return (
        <div className='h-full'>
          <main className="flex flex-row justify-center items-center h-full gap-y-5">
            { account ? 
                <div className='flex flex-col gap-y-5 items-center'>
                    <Text className="font-bold text-5xl">Send a Wave</Text>
                    <SendWave user={account}/>
                </div>
            : 
                <Text className="text-3xl">Please connect you account with MetaMask!</Text>
            }
          </main>
        </div>
    )
  }
  
  export default Send