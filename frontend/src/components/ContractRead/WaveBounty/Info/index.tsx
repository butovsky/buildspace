import { ethers } from "ethers";
import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import { abi } from "../../../../../contracts/abi/WavePortal.json"
import { WavePortal } from "../../../../../contracts/types";
import { Card } from "../../../../beacon/card";
import { Text } from "../../../../beacon/text";
import { BasicProps } from "../../../../beacon/types";
import { getContract } from "../../../../utils/getContract";

import styles from './index.module.scss'

export const WaveBountyInfo: React.FC<BasicProps> = (props) => {
    const { ethereum } = useMetaMask()
    const [reward, setReward] = useState('0');
    const [fund, setFund] = useState('0');

    const fetchRewardAndFund = async () => {
        if (ethereum) {
            const waveContract = getContract<WavePortal>({ ethereum, abi, address: process.env.NEXT_PUBLIC_WAVES_CONTRACT as string})

            try {
                const fetchedReward = await waveContract.getReward();
                setReward(ethers.utils.formatEther(fetchedReward))

                const fetchedFunds = await waveContract.getFunds();
                setFund(ethers.utils.formatEther(fetchedFunds));
            } catch (e) {
                alert(e);
            }
        }
    }

    useEffect(() => {
        fetchRewardAndFund();
    }, [])

    return (
        <Card className={styles.container}>
            <div className={styles.section}>
                <Text className={styles.title}>
                    Your reward
                </Text>
                <Text className={styles.data}>{`${reward} ETH`}</Text>
            </div>
            <div className={styles.section}>
                <Text className={styles.title}>
                    Your funds
                </Text>
                <Text className={styles.data}>{`${fund} ETH`}</Text>
            </div>
        </Card>
    )
}