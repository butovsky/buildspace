enum ENVType { NEXT_PUBLIC_ALCHEMY_TESTNET_API_KEY, NEXT_PUBLIC_BUTOVSKY_NFT_CONTRACT, NEXT_PUBLIC_WAVES_CONTRACT }

export const ENV = (variable: keyof typeof ENVType) => {
    return process.env[variable] as string;
}