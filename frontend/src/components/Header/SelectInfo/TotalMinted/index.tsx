import { useMetaMask } from 'metamask-react'
import { useState, useEffect } from 'react';
import { ButovskyNFT } from '../../../../../contracts/types';
import { abi } from '../../../../../contracts/abi/ButovskyNFT.json'
import { BasicProps } from '../../../../beacon/types';
import { getContract } from '../../../../utils/getContract';

export const TotalMinted: React.FC<BasicProps> = (props) => {
  const { ethereum } = useMetaMask() 
  const [ count, setCount ] = useState(0)
  const [ limit, setLimit ] = useState(0)

  const fetchMinted = async() => {
    if (ethereum) {
      const NFTContract = getContract<ButovskyNFT>({ ethereum, abi, address: '0x4412D5db5703e84693A3004115C0C41eAE8c92fb'})
      /*
      const fetchedCount = await NFTContract.totalWaves()
      setCount(fetchedCount.toNumber())
      */
    }
  }

  useEffect(() => {
    fetchMinted()
  }, [])
  
  const value = `Total minted: ${count} / ${limit}`
  return ethereum && (<option value={value}>{value}</option>)
}
