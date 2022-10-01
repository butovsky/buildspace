import { ReactNode } from "react";

export type BasicProps = {
    /* 
    ONLY Tailwind classes, should not be used often (mostly for positioning).
    Much better to change beacon scss files.
    Adding flexibility to the beacon component itself 
    and creating subcomponents like HugeButton for a Button is recommended.
    */

    className?: string;
}

export type TextContainedProps = BasicProps & {
    children: ReactNode | string;
}