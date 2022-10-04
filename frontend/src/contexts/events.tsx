import { abi } from '../../contracts/abi/ButovskyNFT.json'
import { useMetaMask } from "metamask-react";
import React, { useContext, useEffect, useState } from "react";
import { ButovskyNFT } from "../../contracts/types";
import { getContract } from "../utils/getContract";
import networks from "../utils/networks";
import { CustomProviderProps } from "./types";
import { BigNumber } from 'ethers';

type Event = {
    title: string;
    message: string;
}

type EventValues = {
    events: Event[]
}

const EventsContext = React.createContext<EventValues>({ events: [] });

export const EventsProvider = ({ children }: CustomProviderProps ): JSX.Element => {
    const { ethereum, account, chainId } = useMetaMask();
    //todo: make popups out of events, for now just logging the info as all the NFT info is already in the modal
    const [events, setEvents] = useState<Event[]>([]);

    if (account && chainId == networks.mumbai) {
        // todo: move to separate handler hub for multiple contracts and events
        const BNFTContract = getContract<ButovskyNFT>({ ethereum, abi, address: "0x4412D5db5703e84693A3004115C0C41eAE8c92fb" })
        BNFTContract.once("Minted", (to: string, tokenId: BigNumber) => {
            console.log(`Your NFT was minted!\nYour link on OpenSea: https://testnets.opensea.io/assets/mumbai/0x4412D5db5703e84693A3004115C0C41eAE8c92fb/${tokenId.toNumber()}`);
        })
    }

    return (
        <EventsContext.Provider value={{ events }}>
            {children}
        </EventsContext.Provider>
    )
}

export const useEvents = () => useContext(EventsContext);