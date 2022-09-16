import { TextProps } from "./types";

export const TextBlock: React.FC<TextProps> = (props) => {
    return (
        <p className={`${props.className} items-center text-white`}>
            {props.children}
        </p>
    )
}

export const Text: React.FC<TextProps> = (props) => {
    return (
        <span className={`${props.className} items-center text-white`}>
            {props.children}
        </span>
    )
}