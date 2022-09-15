import { ReactNode } from "react";
import { BasicProps } from "../types";

export type MetaMaskedProps = BasicProps & {
    children: ReactNode
    account?: string | null;
    chainId?: string | null;
};