import React from "react";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            className={`${props.className} inp`}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            autoComplete='off'
        />
    )
}