import { BasicProps } from "../types";
import Countdown, { CountdownProps } from 'react-countdown';

export const PrettyCooldown: React.FC<CountdownProps> = (props) => {
    props.date
    return (
        <Countdown/>
    )
}