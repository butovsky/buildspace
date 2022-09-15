import { BasicProps } from "../types";

export type InputProps = BasicProps & {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
    value: string;
    name: string;
    placeholder?: string;
}