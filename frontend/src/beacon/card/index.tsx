import { CardProps } from "./types"
import styles from './index.module.scss'

export const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={`${styles.container} ${props.className}`}>
            {props.children}
        </div>
    )
}