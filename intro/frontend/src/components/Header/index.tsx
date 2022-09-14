import { useMetaMask } from 'metamask-react';
import Link from 'next/link';
import { Text } from '../../beacon/text';
import { TotalCount } from '../ContractView/TotalCount';
import { MetaMask } from "./MetaMask"

export const Header: React.FC = () => {
    const { account } = useMetaMask();
    
    return (
        <div className='fixed w-full shadow-md bg-gradient-to-r from-blue-900 to-cyan-800'>
            <div className={`flex justify-between items-center`}>
                <Link href='/'>
                    <a><Text className="font-bold ml-3 text-2xl">Wave</Text></a>
                </Link>
                <div className='flex flex-row'>
                    {account && <TotalCount/>}
                    <MetaMask/>
                </div>
            </div>
        </div>
    )
}