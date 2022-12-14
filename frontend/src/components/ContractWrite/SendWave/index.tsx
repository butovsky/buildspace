import { useMetaMask } from "metamask-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../../../beacon/button";
import { Input } from "../../../beacon/input";
import { BasicProps } from "../../../beacon/types";
import { getContract } from "../../../utils/getContract";
import { Wave } from "../../ContractRead/MyWaves/Wave";
import { abi } from '../../../../contracts/abi/WavePortal.json'
import { WavePortal } from "../../../../contracts/types";
import Countdown from 'react-countdown';

import styles from './index.module.scss';


type SendProps = BasicProps & {
    user: string;
}

export const SendWave: React.FC<SendProps> = (props) => {
    const { ethereum } = useMetaMask()
    const router = useRouter();

    const [cooldown, setCooldown] = useState(0);

    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const [isSending, setSending] = useState(false);
    const [loadingText, setLoadingText] = useState('');

    useEffect(() => {
        router.query && router.query.to && typeof router.query.to === 'string' && setAddress(router.query.to)
        fetchCooldown()
    }, [])

    const fetchCooldown = async() => {
        // todo: move contract to the context maybe?
        const waveContract = getContract<WavePortal>({ ethereum, abi, address: process.env.NEXT_PUBLIC_WAVES_CONTRACT as string})
        const fetchedCooldown = (await waveContract.userCooldown()).toNumber() * 1000;
        if (fetchedCooldown > Date.now()) {
            setCooldown(fetchedCooldown)
        }
    }

    const sendWaveToContract = async() => {
        if (ethereum) {
            const waveContract = getContract<WavePortal>({ ethereum, abi, address: process.env.NEXT_PUBLIC_WAVES_CONTRACT as string})

            setLoadingText("Setting MM...")
            setSending(true)

            try {
                const sendTx = await waveContract.wave(message, address);
                setLoadingText("Sending...")
                await sendTx.wait()
            } catch(e) {
                alert(e)
            }

            setSending(false)
            setLoadingText('')
        }
    }

    return (
        <div className={`${styles.container} ${props.className}`}>
            <div className={styles.content}>
                <div className={styles.form}>
                    <Input className={styles.input} name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address of a Wave receiver' />
                    <Input className={styles.input} name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message you want to send' />
                    <Button
                        className={styles.button}
                        onClick={sendWaveToContract}
                        disabled={isSending || !!cooldown}
                        isLoading={isSending}
                        loadingText={loadingText}
                    >
                        { cooldown
                            ? <Countdown
                            date={cooldown}
                            daysInHours={true}
                            onComplete={() => setCooldown(0)}/>
                            : "Send"
                        }
                    </Button>
                </div>
                <div className={styles.demo}>
                    <Wave from={props.user} message={message} />
                </div>
            </div>
        </div>
    )
}