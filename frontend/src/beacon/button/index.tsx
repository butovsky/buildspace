import { ButtonProps } from "./types";
import { TextBlock } from "../text";

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className={`${props.className} transition ease-in-out delay-50 border border-slate-400 rounded-md border hover:scale-105 duration-300 shadow-md`} style={{ height: props.height || 30, width: props.width || 150 }} onClick={props.onClick}>
            <TextBlock className="px-2 overflow-hidden font-medium text-sm text-ellipsis">{props.children}</TextBlock>
        </button>
    )
}