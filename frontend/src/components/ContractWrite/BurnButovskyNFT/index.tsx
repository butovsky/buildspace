import { useMetaMask } from "metamask-react";
import { Button } from "../../../beacon/button";
import { useButovskyNFT } from "../../../contexts/butovskyNFT"
import { getContract } from "../../../utils/getContract";
import { abi } from '../../../../contracts/abi/ButovskyNFT.json'
import { ButovskyNFT } from "../../../../contracts/types";
import { ethers } from 'ethers';

import styles from './index.module.scss'
import { useState } from "react";

export const BurnButovskyNFT: React.FC = () => {
    const { ethereum } = useMetaMask();
    const { checkForNFT, NFT } = useButovskyNFT();
    const [isBurning, setBurning] = useState(false)
    const [loadingText, setLoadingText] = useState<string | null>(null)

    const burn = async() => {
        if (ethereum) {
            const BNFTContract = getContract<ButovskyNFT>({ ethereum, abi, address: process.env.NEXT_PUBLIC_BUTOVSKY_NFT_CONTRACT as string })

            setLoadingText("Setting MM...")
            setBurning(true)

            try {
                const burnTx = await BNFTContract.burn(ethers.BigNumber.from(NFT?.tokenId));
                setLoadingText("Burning...")
                await burnTx.wait();
                await checkForNFT();
            } catch (e) {
                alert(e);
            }

            setBurning(false)
            setLoadingText('')
        }
    }

    return (
        <Button disabled={isBurning} isLoading={isBurning} loadingText={loadingText} className={styles.container} onClick={burn}>Burn this NFT!</Button>
    )
}