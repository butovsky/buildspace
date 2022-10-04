import { ButtonProps } from "./types";
import styles from './index.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            {...props}
            className={`${styles.container} ${props.className}`}
        >
            { props.isLoading && <div className={styles.spinner}/> }
            { props.isLoading ? props.loadingText ?? props.children : props.children }
        </button>
    )
}