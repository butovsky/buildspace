import { useMetaMask } from 'metamask-react'
import { useState, useEffect } from 'react';
import { WavePortal } from '../../../../contracts/types';
import WavePortalJson from '../../../../contracts/abi/WavePortal.json'
import { BasicProps } from '../../../beacon/types';
import { Button } from '../../../beacon/button';
import { getContract } from '../../../utils/getContract';

export const TotalCount: React.FC<BasicProps> = (props) => {
  const { ethereum } = useMetaMask() 
  const [count, setCount] = useState(0)

  const fetchCount = async() => {
    if (ethereum) {
      const waveContract = getContract<WavePortal>({ ethereum, abi: WavePortalJson.abi, address: '0xbAB57b132CB35E2292A5ea7926314FC647EEc539'})
      const fetchedCount = await waveContract.totalWaves()
      setCount(fetchedCount.toNumber())
    }
  }

  useEffect(() => {
    fetchCount()
  }, [])

  if (ethereum) {

  }
  return ethereum && (<Button className={props.className}>{`Total waves: ${count}`}</Button>)
}
