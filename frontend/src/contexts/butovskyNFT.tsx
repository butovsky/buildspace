import { NftMetadata, OwnedNft } from "alchemy-sdk";
import { useMetaMask } from "metamask-react";
import React, { useContext, useEffect, useState } from "react";
import networks from "../utils/networks";
import { useAlchemy } from "./alchemy";
import { CustomProviderProps } from "./types";

type ButovskyNFTValues = {
    hasNFT: boolean;
    checkForNFT: () => Promise<void>
    NFT: OwnedNft | undefined
}

const ButovskyNFTContext = React.createContext<ButovskyNFTValues>({ hasNFT: false, checkForNFT: async () => {}, NFT: undefined });

export const ButovskyNFTProvider = ({ children }: CustomProviderProps ): JSX.Element => {
    const { alchemy } = useAlchemy();
    const { account, chainId } = useMetaMask();

    const [hasNFT, setHasNFT] = useState(false);
    const [NFT, setNFT] = useState<OwnedNft>()

    const checkForNFT = async() => {
        if (account && chainId == networks.mumbai) {
            const ownersResponse = await alchemy.nft.getNftsForOwner(account, {
                contractAddresses: ["0x4412D5db5703e84693A3004115C0C41eAE8c92fb"]
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