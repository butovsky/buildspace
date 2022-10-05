import { ethers } from "ethers";
import { abi } from "../../../../../../contracts/abi/WavePortal.json"
import { useMetaMask } from "metamask-react";
import { useState } from "react";
import { setInputValue } from "..";
import { WavePortal } from "../../../../../../contracts/types";
import { Button } from "../../../../../beacon/button";
import { NumberInput } from "../../../../../beacon/input";
import { BasicProps } from "../../../../../beacon/types";
import { getContract } from "../../../../../utils/getContract";

import styles from '../form.module.scss';

export const WaveBountyFormChance: React.FC<BasicProps> = (props) => {
    const { ethereum } = useMetaMask();
    
    const [chance, setChance] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const [isUpdating, setUpdating] = useState(false)
    const [loadingText, setLoadingText] = useState<string | null>(null);

    const updateChances = async () => {
        if (ethereum) {
            const waveContract = getContract<WavePortal>({ ethereum, abi, address: process.env.NEXT_PUBLIC_WAVES_CONTRACT as string})

            setLoadingText("Setting MM...")
            setUpdating(true)

            try {
                const sendTx = await waveContract.setChance(ethers.BigNumber.from(chance || '0'))
                setLoadingText("Updating...")
                await sendTx.wait()
            } catch (e) {
                alert(e);
            }

            setUpdating(false)
            setLoadingText('')
        }
    }

    return (
        <div className={styles.container}>
            <Button
                className={styles.button}
                disabled={isDisabled || isUpdating}
                isLoading={isUpdating}
                loadingText={loadingText}
                onClick={updateChances}
            >Update a chance</Button>
            <NumberInput
                className={styles.input}
                value={chance}
                name='chance'
                onChange={(e) => setInputValue(e, setChance, setDisabled)}
                placeholder='Value in % (1 to 100)'
                pattern="^([1-9][0-9]?|100)$"
            />
        </div>
    )
}