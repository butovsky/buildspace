import { CardProps } from "./types"

// todo: add multiple types of cards: card with input etc...

export const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={`transition ease-in-out block p-4 bg-transparent rounded-lg border border-slate-400 shadow-md hover:border-slate-200 hover:scale-105 duration-300 ${props.className}`}>
            {props.children}
        </div>
    )
}