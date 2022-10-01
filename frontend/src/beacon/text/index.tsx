import { TextProps } from "./types";

export const Text: React.FC<TextProps> = (props) => {
    return (
        <span className={`${props.className} text`}>
            {props.children}
        </span>
    )
}