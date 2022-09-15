import networks from "../../utils/networks"
import { Text } from "../text"
import { MetaMaskedProps } from "./types"

export const MetaMasked: React.FC<MetaMaskedProps> = (props) => {
    return (
        <div className={props.className}>
            {props.account
                ? (props.chainId == networks.mumbai) ? props.children
                : <Text className="text-3xl">Please change your network to Mumbai testnet!</Text>
                : <Text className="text-3xl">Please connect your account with MetaMask!</Text>
            }
        </div>
    )
}