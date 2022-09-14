import type { NextPage } from 'next';
import { useMetaMask } from 'metamask-react'
import { Text } from '../../src/beacon/text';
import { MyWaves } from '../../src/components/ContractView/MyWaves';

const My: NextPage = () => {
    const { account } = useMetaMask();
  
    return (
        <div className='h-full'>
          <main className="flex flex-col justify-center items-center h-full gap-y-10">
          <Text className="font-bold text-5xl">Your Waves</Text>
            { account ? <MyWaves/>
            : <Text className="text-3xl">Please connect you account with MetaMask!</Text>}
          </main>
        </div>
    )
  }
  
  export default My