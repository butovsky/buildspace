export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export enum NumberType {
    float = "[0-9]+([\.][0-9]+)?",
    int = "[0-9]+"
}