import { useEffect, useState } from "react"
import { ModalProps } from "./types"

import styles from './index.module.scss'

// my own implementation of react-modal
// could've been based on <dialog/>, but maybe in the future

export const Modal: React.FC<ModalProps> = (props) => {
    const [isOpening, setOpening] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [isClosing, setClosing] = useState(false)

    useEffect(() => {
        if (props.isOpen) {
            setOpening(true)
            setOpen(true);
            setTimeout(() => {
                setOpening(false)
            }, 50)
        } else if (isOpen) {
            setOpen(false)
            setClosing(true)
            setTimeout(() => {
                setClosing(false)
            }, 200)
        }
    }, [props.isOpen])

    const transitionClassAddition = isOpening ? '__opening' : isClosing ? '__closing' : ''

    return (
        (isOpen || isClosing) ?
            <div className={`${styles[`container${transitionClassAddition}`]} ${props.className}`} onClick={props.close}>
                <div className={`${styles[`content${transitionClassAddition}`]}`} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.close_btn} onClick={props.close}>
                        <svg className={styles.cross} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5L19 19M5 19L19 5L5 19Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {props.children}
                </div>
            </div>
        : null
    )
}