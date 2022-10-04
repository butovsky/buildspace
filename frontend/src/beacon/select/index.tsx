import { SelectProps } from "./types";
import styles from './index.module.scss';

// todo: rework select into the component where options can be stylized

export const Select: React.FC<SelectProps> = (props) => {
    return (
        <select
            className={`${styles.container} ${props.className}`}
            style={{ height: props.height || 30, width: props.width || 'auto' }}
        >
            { props.children }
        </select>
    )
}