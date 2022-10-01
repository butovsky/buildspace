import Link from "next/link";
import React from "react";
import { Card } from "../../../../beacon/card";
import { Text } from "../../../../beacon/text";
import { BasicProps } from "../../../../beacon/types";

type WaveProps = BasicProps & {
    from: string;
    message: string;
};

export const Wave: React.FC<WaveProps> = ({ from, message, className }) => {
    return (
        <Card className={`${className} wave`}>
            <div className="content">
                <a href={`https://mumbai.polygonscan.com/address/${from}`}>
                    <Text className="mr-2">📄</Text>
                </a>
                <Text>{from}</Text>
            </div>
            <div>
                <Link href={{ pathname: '/send', query: { to: from }}}>
                    <a><Text className="mr-2">👋</Text></a>
                </Link>
                <Text className="font-normal break-all">{message}</Text>   
            </div>
        </Card>
    )
}