import { ButtonProps } from "./types";
import styles from './index.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className={`${styles.container} ${props.className}`}
            style={{ height: props.height || 30, width: props.width || 150 }}
            onClick={props.onClick}
            disabled={props.isLoading}
        >
            { props.children }
        </button>
    )
}