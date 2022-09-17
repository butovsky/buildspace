import { useMetaMask } from 'metamask-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../../beacon/button';
import { Text } from '../../beacon/text';
import { NFTModal } from '../Modal/NFT';
import { TotalCount } from '../ContractRead/TotalCount';
import { MetaMask } from "./MetaMask"
import { useButovskyNFT } from '../../contexts/butovskyNFT';
import { MintButovskyNFT } from '../ContractWrite/MintButovskyNFT';

export const Header: React.FC = () => {
    const { account } = useMetaMask();
    const { hasNFT } = useButovskyNFT();

    return (
        <div className='fixed w-full shadow-md bg-gradient-to-r from-blue-900 to-cyan-800'>
            <div className={`flex justify-between items-center`}>
                <Link href='/'>
                    <a><Text className="font-bold ml-3 text-2xl">Wave</Text></a>
                </Link>
                <div className='flex flex-row items-center'>
                    {account && <MintButovskyNFT/>}
                    {account && hasNFT && <TotalCount/>}
                    <MetaMask/>
                </div>
            </div>
        </div>
    )
}