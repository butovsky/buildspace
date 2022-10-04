import { OwnedNft } from "alchemy-sdk";
import { useMetaMask } from "metamask-react";
import React, { useContext, useEffect, useState } from "react";
import { getAlchemySDK } from "../utils/getAlchemySDK";
import networks from "../utils/networks";
import { CustomProviderProps } from "./types";

type ButovskyNFTValues = {
    hasNFT: boolean;
    checkForNFT: () => Promise<void>
    NFT: OwnedNft | undefined
}

const ButovskyNFTContext = React.createContext<ButovskyNFTValues>({ hasNFT: false, checkForNFT: async () => {}, NFT: undefined });

export const ButovskyNFTProvider = ({ children }: CustomProviderProps ): JSX.Element => {
    const alchemy = getAlchemySDK();
    const { account, chainId } = useMetaMask();

    const [hasNFT, setHasNFT] = useState(false);
    const [NFT, setNFT] = useState<OwnedNft>()

    const checkForNFT = async() => {
        if (account && chainId == networks.mumbai) {
            const ownersResponse = await alchemy.nft.getNftsForOwner(account, {
                contractAddresses: [process.env.NEXT_PUBLIC_BUTOVSKY_NFT_CONTRACT as string]
            });

            setHasNFT(Boolean(ownersResponse.totalCount))
            const uniqueNFT = ownersResponse.ownedNfts[0]
            if (uniqueNFT) {
                setNFT(uniqueNFT)
            }
        }
    }

    useEffect(() => {
        checkForNFT()
    }, [account, chainId])

    return (
        <ButovskyNFTContext.Provider value={{ hasNFT, checkForNFT, NFT }}>
            {children}
        </ButovskyNFTContext.Provider>
    )
}

export const useButovskyNFT = () => useContext(ButovskyNFTContext);