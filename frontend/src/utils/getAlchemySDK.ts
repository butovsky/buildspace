import { Network, Alchemy } from 'alchemy-sdk';

export const getAlchemySDK = () => {
    return new Alchemy({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_TESTNET_API_KEY,
        network: Network.MATIC_MUMBAI
    })
}