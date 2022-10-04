import { abi } from "../../../../../../contracts/abi/WavePortal.json"
import { useMetaMask } from 'metamask-react'
import { useState } from 'react'
import { WavePortal } from '../../../../../../contracts/types'
import { Button } from '../../../../../beacon/button'
import { BasicProps } from '../../../../../beacon/types'
import { getContract } from '../../../../../utils/getContract'
import styles from './index.module.scss'

export const WaveBountyWithdraw: React.FC<BasicProps> = (props) => {
    const { ethereum } = useMetaMask();
    const [isWithdrawing, setWithdrawing] = useState(false)
    const [loadingText, setLoadingText] = useState<string | null>(null);

    const withdraw = async () => {
        if (ethereum) {
            const waveContract = getContract<WavePortal>({ ethereum, abi, address: process.env.NEXT_PUBLIC_WAVES_CONTRACT as string})

            setLoadingText("Setting MM...")
            setWithdrawing(true)

            try {
                const sendTx = await waveContract.withdraw()
                setLoadingText("Withdrawing...")
                await sendTx.wait()
            } catch (e) {
                alert(e);
            }

            setWithdrawing(false)
            setLoadingText('')
        }
    }
    return (
        <Button
            className={styles.container}
            isLoading={isWithdrawing}
            loadingText={loadingText}
            onClick={withdraw}
        >Withdraw</Button>
    )
}