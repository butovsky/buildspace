import { TextContainedProps } from "../types";

export type ButtonProps = TextContainedProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
    height?: number;
    width?: number;
    isLoading?: boolean;
} 