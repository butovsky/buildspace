import Link from "next/link";
import React from "react";
import { Card } from "../../../../beacon/card";
import { Text } from "../../../../beacon/text";
import { BasicProps } from "../../../../beacon/types";

import styles from './index.module.scss';

type WaveProps = BasicProps & {
    from: string;
    message: string;
};

export const Wave: React.FC<WaveProps> = ({ from, message, className }) => {
    return (
        <Card className={`${styles.container} ${className}`}>
            <div className={styles.from}>
                <a href={`https://mumbai.polygonscan.com/address/${from}`}>
                    <Text className={styles.icon}>📄</Text>
                </a>
                <Text>{from}</Text>
            </div>
            <div>
                <Link href={{ pathname: '/send', query: { to: from }}}>
                    <a><Text className={styles.icon}>👋</Text></a>
                </Link>
                <Text className={styles.message}>{message}</Text>   
            </div>
        </Card>
    )
}