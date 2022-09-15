import { ReactNode } from "react";
import { BasicProps } from "../types";

export type CardProps = BasicProps & {
    children: ReactNode
};