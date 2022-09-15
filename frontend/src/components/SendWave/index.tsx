import { useMetaMask } from "metamask-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../../beacon/button";
import { Input } from "../../beacon/input";
import { BasicProps } from "../../beacon/types";
import { getContract } from "../../utils/getContract";
import { Wave } from "../ContractView/MyWaves/Wave";
import { abi } from '../../../contracts/abi/WavePortal.json'
import { WavePortal } from "../../../contracts/types";

type SendProps = BasicProps & {
    user: string;
}

export const SendWave: React.FC<SendProps> = (props) => {
    const { ethereum } = useMetaMask()
    const router = useRouter();

    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        router.query && router.query.to && typeof router.query.to === 'string' && setAddress(router.query.to)
    }, [])

    const sendWaveToContract = async() => {
        if (ethereum) {
            const waveContract = getContract<WavePortal>({ ethereum, abi, address: '0xbAB57b132CB35E2292A5ea7926314FC647EEc539'})
            const sendTx = await waveContract.wave(message, address);
            const result = await sendTx.wait()
            console.log(result)
        }
    }

    return (
        <div className={`flex flex-col gap-y-3 items-center ${props.className}`}>
            <div className="flex flex-row gap-x-5 items-center">
                <div className="flex flex-col gap-y-2 items-end">
                    <Input className='w-108 text-center' name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address of a Wave receiver' />
                    <Input className='w-108 text-center' name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message you want to send' />
                    <Button onClick={sendWaveToContract}>{'Submit'}</Button>
                </div>
                <div className="flex flex-col items-center gap-y-3">
                    <Wave from={props.user} message={message} />
                </div>
            </div>
        </div>
    )
}