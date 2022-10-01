import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className={`${props.className} btn`}
            style={{ height: props.height || 30, width: props.width || 150 }}
            onClick={props.onClick}
            disabled={props.isLoading}
        >
            { props.children }
        </button>
    )
}