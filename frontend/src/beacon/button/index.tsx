import { ButtonProps } from "./types";
import styles from './index.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className={`${styles.container} ${props.className}`}
            style={{ height: props.height || 30, width: props.width || 'auto' }}
            onClick={props.onClick}
            disabled={props.isLoading}
        >
            { props.isLoading && <div className={styles.spinner}/> }
            { props.isLoading ? props.loadingText ?? props.children : props.children }
        </button>
    )
}