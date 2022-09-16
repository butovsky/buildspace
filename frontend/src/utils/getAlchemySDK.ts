import { Network, Alchemy } from 'alchemy-sdk';

export const getAlchemySDK = () => {
    return new Alchemy({
        /*
            this is a testnet API key anyway, won't bother for now
            todo: make NEXT_PUBLIC env for this key (and for contract addresses), just for convenience
        */
        apiKey: "sTH9RLpHya2b-CvAQiYzFWoF_K3RXD2T",
        network: Network.MATIC_MUMBAI
    })
}