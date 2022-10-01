import { useMetaMask } from 'metamask-react'
import { useState, useEffect } from 'react';
import { WavePortal } from '../../../../contracts/types';
import WavePortalJson from '../../../../contracts/abi/WavePortal.json'
import { BasicProps } from '../../../beacon/types';
import { Button } from '../../../beacon/button';
import { getContract } from '../../../utils/getContract';
import { Wave } from './Wave';
import { Text } from '../../../beacon/text';
import Link from 'next/link';

// there can be a room for a flexible component for not only my waves, but for any users

export const MyWaves: React.FC<BasicProps> = (props) => {
  const { ethereum, account } = useMetaMask();
  const [waves, setWaves] = useState<WavePortal.WaveStructOutput[]>([])

  const fetchWaves = async() => {
    if (ethereum) {
      const waveContract = getContract<WavePortal>({ ethereum, abi: WavePortalJson.abi, address: '0xbAB57b132CB35E2292A5ea7926314FC647EEc539'})
      const fetchedWaves = await waveContract.myWaves()
      setWaves(fetchedWaves)
    }
  }

  useEffect(() => {
    fetchWaves()
  }, [account])

  return ethereum && (
    <div className={`${props.className} my-waves`}>
      { waves.length ? waves.map(wave => (
        <Wave key={waves.indexOf(wave)} from={wave.from} message={wave.message}/>
      )) : <div className='content'>
        <Text className='text-3xl'>You don&apos;t have any Waves yet!</Text>
        <Link href='/send'>
              <Button>{'Send some!'}</Button>
        </Link>
      </div>}
    </div>
  );
}