import React from "react";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            className={`transition ease-in-out p-2 text-white bg-transparent border border-slate-400 rounded-md hover:border-slate-300 focus:border-slate-200 duration-300 ${props.className}`}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            autoComplete='off'
        />
    )
}