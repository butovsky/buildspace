import { useMetaMask } from 'metamask-react';
import Link from 'next/link';
import { Text } from '../../beacon/text';
import { TotalCount } from '../ContractRead/TotalCount';
import { MetaMask } from "./MetaMask"
import { useButovskyNFT } from '../../contexts/butovskyNFT';
import { MintButovskyNFT } from '../ContractWrite/MintButovskyNFT';

import styles from './index.module.scss';

export const Header: React.FC = () => {
    const { account } = useMetaMask();
    const { hasNFT } = useButovskyNFT();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link href='/'>
                    <a>
                        <Text className={styles.logo}>Wave</Text>
                    </a>
                </Link>
                <div className={styles.menu}>
                    {account && <MintButovskyNFT/>}
                    {account && hasNFT && <TotalCount/>}
                    <MetaMask/>
                </div>
            </div>
        </div>
    )
}