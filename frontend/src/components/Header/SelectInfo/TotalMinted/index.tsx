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
      const NFTContract = getContract<ButovskyNFT>({ ethereum, abi, address: process.env.NEXT_PUBLIC_BUTOVSKY_NFT_CONTRACT as string})

      const fetchedCount = await NFTContract.getTokenCount();
      setCount(fetchedCount.toNumber());

      const fetchedLimit = await NFTContract.getTokenLimit();
      setLimit(fetchedLimit.toNumber());
    }
  }

  useEffect(() => {
    fetchMinted()
  }, [])
  
  const value = `Total minted: ${count} / ${limit}`
  return ethereum && (<option value={value}>{value}</option>)
}
