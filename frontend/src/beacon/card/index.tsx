import { CardProps } from "./types"

export const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={`card ${props.className}`}>
            {props.children}
        </div>
    )
}