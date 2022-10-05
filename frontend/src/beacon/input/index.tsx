import React from "react";
import { InputProps } from "./types";

import styles from './index.module.scss'

export const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            {...props}
            className={`${styles.container} ${props.className}`}
            autoComplete='off'
        />
    )
}

export const NumberInput: React.FC<InputProps> = (props) => {
    const specials = ["+", "-", ",", "e"]

    const blockSpecialsKey = (e: any) => {
        if (specials.includes(e.key)) {
            e.preventDefault();
        }
    }

    const blockSpecialsPaste = (e: any) => {
        const text = e.clipboardData.getData('Text')

        for (const special of specials) {
            if (text.includes(special)) {
                e.preventDefault();
            }
        }
    }

    return (
        <Input
            {...props}
            pattern={props.pattern || "[0-9]+([\.][0-9]+)?"}
            onKeyDown={blockSpecialsKey}
            onPaste={blockSpecialsPaste}
        />
    )
}