import { useMetaMask } from 'metamask-react';
import Link from 'next/link';
import { Text } from '../../beacon/text';
import { TotalCount } from '../ContractRead/TotalCount';
import { MetaMask } from "./MetaMask"
import { useButovskyNFT } from '../../contexts/butovskyNFT';
import { MintButovskyNFT } from '../ContractWrite/MintButovskyNFT';

export const Header: React.FC = () => {
    const { account } = useMetaMask();
    const { hasNFT } = useButovskyNFT();

    return (
        <div className='header'>
            <div className='content'>
                <Link href='/'>
                    <a><Text className="font-bold ml-3 text-2xl">Wave</Text></a>
                </Link>
                <div className='menu'>
                    {account && <MintButovskyNFT/>}
                    {account && hasNFT && <TotalCount/>}
                    <MetaMask/>
                </div>
            </div>
        </div>
    )
}