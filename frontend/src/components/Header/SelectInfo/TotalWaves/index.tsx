import { useMetaMask } from 'metamask-react'
import { useState, useEffect } from 'react';
import { abi } from '../../../../../contracts/abi/WavePortal.json'
import { WavePortal } from '../../../../../contracts/types';
import { BasicProps } from '../../../../beacon/types';
import { getContract } from '../../../../utils/getContract';

export const TotalWaves: React.FC<BasicProps> = (props) => {
  const { ethereum } = useMetaMask() 
  const [count, setCount] = useState(0)

  const fetchCount = async() => {
    if (ethereum) {
      const waveContract = getContract<WavePortal>({ ethereum, abi, address: process.env.NEXT_PUBLIC_WAVES_CONTRACT as string})
      const fetchedCount = await waveContract.totalWaves()
      setCount(fetchedCount.toNumber())
    }
  }

  useEffect(() => {
    fetchCount()
  }, [])
  
  const value = `Total waves: ${count}`
  return ethereum && (<option value={value}>{value}</option>)
}
