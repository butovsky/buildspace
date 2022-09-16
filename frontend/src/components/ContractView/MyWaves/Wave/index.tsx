import Link from "next/link";
import React from "react";
import { Card } from "../../../../beacon/card";
import { Text, TextBlock } from "../../../../beacon/text";
import { BasicProps } from "../../../../beacon/types";

type WaveProps = BasicProps & {
    from: string;
    message: string;
};

export const Wave: React.FC<WaveProps> = ({ from, message, className }) => {
    return (
        <div className={className}>
            <Card className="max-w-xs h-32 overflow-y-scroll">
                <TextBlock className="mb-2 overflow-x-hidden text-ellipsis whitespace-nowrap font-bold tracking-tight text-2xl">
                    <a href={`https://mumbai.polygonscan.com/address/${from}`}>
                        <Text className="mr-2">📄</Text>
                    </a>
                    <Text>{from}</Text>
                </TextBlock>
                <TextBlock>
                    <Link href={{ pathname: '/send', query: { to: from }}}>
                        <a><Text className="mr-2">👋</Text></a>
                    </Link>
                    <Text className="font-normal break-all">{message}</Text>   
                </TextBlock>
            </Card>
        </div>
    )
}