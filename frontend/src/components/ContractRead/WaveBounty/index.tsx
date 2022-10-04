import { BasicProps } from "../../../beacon/types";
import { WaveBountyForm } from "./Form";

import styles from './index.module.scss';
import { WaveBountyInfo } from "./Info";

export const WaveBounty: React.FC<BasicProps> = (props) => {

    return (
        <div className={styles.container}>
            <WaveBountyInfo/>
            <WaveBountyForm/>
        </div>
    )
}