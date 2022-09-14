import { TextProps } from "./types";

export const Text: React.FC<TextProps> = (props) => {
    return (
        <p className={`${props.className} items-center text-white`}>
            {props.children || ''}
        </p>
    )
}