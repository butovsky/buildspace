import React from "react";
import { InputProps } from "./types";

import styles from './index.module.scss'

export const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            className={`${styles.container} ${props.className}`}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            autoComplete='off'
        />
    )
}