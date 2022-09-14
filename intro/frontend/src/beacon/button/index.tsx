import { ButtonProps } from "./types";
import { Text } from "../text";

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className={`transition ease-in-out delay-50 border border-slate-400 rounded-md border hover:scale-105 duration-300 shadow-md ${props.className}`} style={{ height: 30, width: 150}} onClick={props.onClick}>
            <Text className="px-2 overflow-hidden font-medium text-sm text-ellipsis">{props.children}</Text>
        </button>
    )
}