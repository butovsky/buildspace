import { ReactNode } from "react";
import { BasicProps } from "../types";

export type BasicModalProps = BasicProps & {
    isOpen: boolean;
    close: () => void;
}

export type ModalProps = BasicModalProps & {
    children: ReactNode
}