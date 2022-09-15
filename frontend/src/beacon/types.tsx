import { ReactNode } from "react";

export type BasicProps = {
    className?: string;
}

export type TextContainedProps = BasicProps & {
    children: ReactNode | string;
}