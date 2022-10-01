import type { NextPage } from 'next';
import { useMetaMask } from 'metamask-react'
import { Text } from '../../src/beacon/text';
import { SendWave } from '../../src/components/ContractWrite/SendWave';
import { MetaMasked } from '../../src/beacon/metamasked';

const Send: NextPage = () => {
    const { account, chainId } = useMetaMask();
  
    return (
      <main className="send">
        <MetaMasked account={account} chainId={chainId}>
            <div className='block'>
                <Text className="font-bold text-5xl">Send a Wave</Text>
                <SendWave user={account as string}/>
            </div>
        </MetaMasked>
      </main>
    )
  }
  
  export default Send