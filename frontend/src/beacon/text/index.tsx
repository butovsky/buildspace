import { TextProps } from "./types";

import styles from './index.module.scss'

export const Text: React.FC<TextProps> = (props) => {
    return (
        <span className={`${styles.container} ${props.className}`}>
            {props.children}
        </span>
    )
}