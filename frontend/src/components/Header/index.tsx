import { useMetaMask } from 'metamask-react';
import Link from 'next/link';
import { Text } from '../../beacon/text';
import { MetaMask } from "./MetaMask"
import { useButovskyNFT } from '../../contexts/butovskyNFT';
import { MintButovskyNFT } from '../ContractWrite/MintButovskyNFT';

import styles from './index.module.scss';
import { Select } from '../../beacon/select';
import { TotalWaves } from './SelectInfo/TotalWaves';
import { TotalMinted } from './SelectInfo/TotalMinted';

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
                    {account && hasNFT && 
                        <Select>
                            <TotalMinted/>
                            <TotalWaves/>
                        </Select>
                    }
                    {account && <MintButovskyNFT/>}
                    <MetaMask/>
                </div>
            </div>
        </div>
    )
}