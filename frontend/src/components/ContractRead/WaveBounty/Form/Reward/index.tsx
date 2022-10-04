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

export const WaveBountyFormReward: React.FC<BasicProps> = (props) => {
    const { ethereum } = useMetaMask();
    
    const [reward, setReward] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const [isPutting, setPutting] = useState(false)
    const [loadingText, setLoadingText] = useState<string | null>(null);

    const putRewards = async () => {
        if (ethereum) {
            const waveContract = getContract<WavePortal>({ ethereum, abi, address: process.env.NEXT_PUBLIC_WAVES_CONTRACT as string})

            setLoadingText("Setting MM...")
            setPutting(true)

            try {
                const sendTx = await waveContract.setReward(ethers.utils.parseEther(reward || '0'))
                setLoadingText("Putting...")
                await sendTx.wait()
            } catch (e) {
                alert(e);
            }

            setPutting(false)
            setLoadingText('')
        }
    }

    return (
        <div className={styles.container}>
            <Button
                className={styles.button}
                disabled={isDisabled || isPutting}
                isLoading={isPutting}
                loadingText={loadingText}
                onClick={putRewards}
            >Put a reward</Button>
            <NumberInput
                className={styles.input}
                value={reward}
                name='reward'
                onChange={(e) => setInputValue(e, setReward, setDisabled)}
                placeholder='Reward value in ETH'
                step="0,000000000000000001"
                numType="float"
            />
        </div>
    )
}