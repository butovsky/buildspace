import { Network, Alchemy } from 'alchemy-sdk';
import { ENV } from './config';

export const getAlchemySDK = () => {
    return new Alchemy({
        apiKey: ENV('NEXT_PUBLIC_ALCHEMY_TESTNET_API_KEY'),
        network: Network.MATIC_MUMBAI
    })
}