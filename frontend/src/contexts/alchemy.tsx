import { Alchemy } from "alchemy-sdk";
import React, { useContext, useState } from "react";
import { getAlchemySDK } from "../utils/getAlchemySDK";
import { CustomProviderProps } from "./types";

type AlchemyValues = {
    alchemy: Alchemy
}

const AlchemyContext = React.createContext<AlchemyValues>({ alchemy: getAlchemySDK() });

export const AlchemyProvider = ({ children }: CustomProviderProps ): JSX.Element => {
    const [alchemy] = useState(getAlchemySDK())

    return (
        <AlchemyContext.Provider value={{ alchemy }}>
            {children}
        </AlchemyContext.Provider>
    )
}

export const useAlchemy = () => useContext(AlchemyContext);