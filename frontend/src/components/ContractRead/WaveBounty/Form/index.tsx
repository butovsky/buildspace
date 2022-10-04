import { ChangeEvent, useState } from "react";
import { BasicProps } from "../../../../beacon/types";
import { WaveBountyWithdraw } from "./Withdraw";
import { WaveBountyFormFund } from "./Fund";

import styles from './index.module.scss';
import { WaveBountyFormReward } from "./Reward";

export const WaveBountyForm: React.FC<BasicProps> = (props) => {

    return (
        <div className={styles.container}>
            <WaveBountyFormReward/>
            <WaveBountyFormFund/>
            <WaveBountyWithdraw/>
        </div>
    )
}

export const setInputValue = (
    e: ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void,
    disabler: (val: boolean) => void
) => {
    setter(e.target.value)

    if (!e.target.checkValidity()) {
        disabler(true)
    } else {
        disabler(false)
    }
}