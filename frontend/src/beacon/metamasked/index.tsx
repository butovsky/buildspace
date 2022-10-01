import networks from "../../utils/networks"
import { Text } from "../text"
import { MetaMaskedProps } from "./types"

import styles from './index.module.scss'

export const MetaMasked: React.FC<MetaMaskedProps> = (props) => {
    return (
        <div className={`${styles.container} ${props.className}`}>
            {props.account
                ? (props.chainId == networks.mumbai) ? props.children
                : <Text className={styles.warning}>Please change your network to Mumbai testnet!</Text>
                : <Text className={styles.warning}>Please connect your account with MetaMask!</Text>
            }
        </div>
    )
}