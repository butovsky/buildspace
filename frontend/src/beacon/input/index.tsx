import React from "react";
import { InputProps, NumberType } from "./types";

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

export const NumberInput: React.FC<InputProps & { numType: keyof typeof NumberType }> = (props) => {
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
            pattern={NumberType[props.numType]}
            onKeyDown={blockSpecialsKey}
            onPaste={blockSpecialsPaste}
        />
    )
}