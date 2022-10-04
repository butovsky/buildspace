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

export const WaveBountyFormFund: React.FC<BasicProps> = (props) => {
    const { ethereum } = useMetaMask();
    
    const [fund, setFund] = useState('');
    const [isDisabled, setDisabled] = useState(false);
    const [isSending, setSending] = useState(false)
    const [loadingText, setLoadingText] = useState<string | null>(null);

    const sendFunds = async () => {
        if (ethereum) {
            const waveContract = getContract<WavePortal>({ ethereum, abi, address: process.env.NEXT_PUBLIC_WAVES_CONTRACT as string})

            setLoadingText("Setting MM...")
            setSending(true)

            try {
                const sendTx = await waveContract.fund({ value: ethers.utils.parseEther(fund || '0')})
                setLoadingText("Sending...")
                await sendTx.wait()
            } catch (e) {
                alert(e);
            }

            setSending(false)
            setLoadingText('')
        }
    }

    return (
        <div className={styles.container}>
            <Button
                className={styles.button}
                disabled={(isDisabled || isSending)}
                isLoading={isSending}
                loadingText={loadingText}
                onClick={sendFunds}
            >Add funds</Button>
            <NumberInput
                className={styles.input}
                value={fund}
                name='fund'
                onChange={(e) => setInputValue(e, setFund, setDisabled)}
                placeholder='Fund value in ETH'
                step="0,000000000000000001"
                numType="float"
            />
        </div>
    )
}